'use client';

import TransakWidget from '../../components/TransakWidget';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Header com botão */}
      <header className="bg-gradient-to-r from-[#1E1E1E] to-[#12cf83]">
        <div className="container mx-auto px-4">
          {/* Barra superior */}
          <div className="pt-6 pb-4 flex items-center justify-center">
            <div className="text-white font-bold text-2xl">FLOW PIX</div>
          </div>

          {/* Botão de compra */}
          <div className="flex justify-center pb-8 pt-4">
            <TransakWidget />
          </div>
        </div>
      </header>

      <main className="pt-4">
        {children}
      </main>
    </div>
  );
} 