'use client';

import { useEffect, useRef, useState } from 'react';
import { useUser, SignInButton } from "@clerk/nextjs";

export default function TransakWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { isSignedIn, user } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMessage = (message: MessageEvent) => {
      if (message.source !== iframeRef.current?.contentWindow) return;
      console.log('Event ID:', message?.data?.event_id);
      console.log('Data:', message?.data?.data);

      if (message?.data?.event_id === 'TRANSAK_ORDER_SUCCESSFUL') {
        console.log('Ordem completada:', message?.data?.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Parâmetros da URL com customizações avançadas
  const params = new URLSearchParams({
    // Credenciais e ambiente
    apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY || '',
    environment: 'STAGING',
    
    // Configurações de rede e cripto
    network: 'flow',
    cryptoCurrencyCode: 'FLOW',
    cryptoCurrencyList: 'FLOW',
    
    // Configurações de pagamento
    fiatCurrency: 'BRL',
    countryCode: 'BR',
    defaultFiatAmount: '200',
    defaultPaymentMethod: 'credit_debit_card',
    
    // Customização visual
    themeColor: '12cf83',
    exchangeScreenTitle: '',
    hideMenu: 'true',
    disableWalletAddressForm: 'true',
    disablePoweredByTransak: 'true',
    hideExchangeScreen: 'true',
    isDisableCrypto: 'true',
    
    // Customização de layout
    hideActionHeader: 'true',
    hideExchangeRateChart: 'true',
    
    // Informações do parceiro
    partnerName: 'Flow Crypto',
    partnerCustomerId: `customer_${Date.now()}`,
    partnerOrderId: `order_${Date.now()}`,
    
    // Configurações de navegação
    walletAddress: '0xcee767cac4c076fb',
    redirectURL: 'https://flowpix.com.br/obrigado',
    hostURL: window.location.origin,
    
    // Tipo de operação
    exchangeType: 'BUY',
  });

  // URL de staging do Transak
  const transakUrl = `https://global-stg.transak.com/?${params.toString()}`;

  const buttonContent = (
    <button className="bg-[#12cf83] text-white text-2xl px-8 py-4 rounded-2xl font-medium hover:bg-opacity-90 transition-all flex items-center gap-3 shadow-lg">
      <span>Comprar FLOW</span>
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  );

  if (!isVisible) {
    return (
      <div>
        {!isSignedIn ? (
          <SignInButton mode="modal">
            {buttonContent}
          </SignInButton>
        ) : (
          <div onClick={() => setIsVisible(true)}>
            {buttonContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="relative">
        {/* Botão de fechar */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E1E1E] text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all z-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-[450px] h-[calc(100vh-4rem)] shadow-lg rounded-xl overflow-hidden bg-white">
          <iframe
            ref={iframeRef}
            id="transakIframe"
            src={transakUrl}
            allow="camera;microphone;payment"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
} 