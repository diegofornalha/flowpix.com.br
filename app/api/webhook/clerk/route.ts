import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function updateSupabaseUser(id: string, data: { email: string, username: string }) {
  const { error } = await supabase
    .from('profiles')
    .upsert({
      user_id: id,
      email: data.email,
      username: data.username,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || '');

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with ID ${id} and type ${eventType}`);

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, username } = evt.data;
    const email = email_addresses[0]?.email_address;

    if (email) {
      try {
        await updateSupabaseUser(id, {
          email,
          username: username || email.split('@')[0],
        });
        return new Response('User updated in Supabase', { status: 200 });
      } catch (err) {
        console.error('Error processing webhook:', err);
        return new Response('Error processing webhook', { status: 500 });
      }
    }
  }

  return new Response('Webhook processed', { status: 200 });
} 