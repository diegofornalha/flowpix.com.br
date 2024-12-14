import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    // Obter o corpo da requisição como JSON
    const event = await request.json();

    // Extrair dados relevantes do evento
    const {
      eventID,
      webhookData: {
        id: orderId,
        status,
        fiatAmount,
        fiatCurrency,
        cryptoAmount,
        cryptoCurrency,
        walletAddress,
        transactionHash,
        userId
      }
    } = event;

    console.log('Received Transak webhook:', {
      eventID,
      eventName: event.eventName,
      status,
      userId
    });

    // Inserir o evento no banco de dados
    const { data, error } = await supabase
      .from('transak_events')
      .insert({
        event_id: eventID,
        event_type: event.eventName,
        order_id: orderId,
        status,
        fiat_amount: fiatAmount,
        fiat_currency: fiatCurrency,
        crypto_amount: cryptoAmount,
        crypto_currency: cryptoCurrency,
        wallet_address: walletAddress,
        transaction_hash: transactionHash,
        user_id: userId,
        raw_data: event
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting event:', error);
      throw error;
    }

    // Se for um evento de ORDER_COMPLETED, atualizar o wallet_address do usuário
    if (event.eventName === 'ORDER_COMPLETED' && userId && walletAddress) {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ 
          wallet_address: walletAddress,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId);

      if (updateError) {
        console.error('Error updating user wallet:', updateError);
      }
    }

    return NextResponse.json({ success: true, event: data });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { 
        error: 'Webhook processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 