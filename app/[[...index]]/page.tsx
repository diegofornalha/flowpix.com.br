import TransakWidget from '../../components/TransakWidget';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Como Funciona */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#12cf83] mb-8">Como funciona</h1>
          
          <div className="space-y-8">
            {/* Passo 1 */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#12cf83" strokeWidth="2">
                  <path d="M8 7h12m-12 6h12m-12 6h12M4 7h0m0 6h0m0 6h0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ESCOLHA O MÉTODO DE PAGAMENTO</h3>
                <p className="text-gray-300">Selecione: google pay, apple pay e cartões.</p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#12cf83" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 10v1M3 12h1m16 0h1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ESCOLHA A QUANTIDADE DE TOKENS FLOW</h3>
                <p className="text-gray-300">Selecione o token a quantia desejada.</p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#12cf83" strokeWidth="2">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">FAÇA O LOGIN PARA RECEBER TOKENS $BR</h3>
                <p className="text-gray-300">Quanto mais tokens você comprar, mais tokens $BR vai receber.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOP TOKENS */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#12cf83] mb-4">TOP TOKENS</h1>
          <p className="text-white mb-8">Confira os tokens mais movimentados neste mês.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Token Cards */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-black rounded-full"></div>
                <span>GOR</span>
              </div>
              <div className="text-sm">Preço</div>
              <div className="text-green-500">$0.00199488</div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
                <span>USDT</span>
              </div>
              <div className="text-sm">Preço</div>
              <div className="text-green-500">$1.00</div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                <span>BNB</span>
              </div>
              <div className="text-sm">Preço</div>
              <div className="text-green-500">$719.5956</div>
            </div>
          </div>
        </section>

        {/* Seção de Referência */}
        <section className="bg-[#12cf83] rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Compartilhe seu link de referência e ganhe FLOW</h2>
              <button className="bg-[#1E1E1E] text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <span>Compartilhar</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
            <div className="w-32 h-32">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm1.467 0c0-2.443-2.241-3.464-4.316-2.555-1.955.854-2.398 4.176-1.267 5.528 1.214 1.454 3.027 1.28 4.105-.197.728-1.253 1.478-3.959 1.478-2.776zm3.285 3.923h-2.183v-2.183h-.625v2.183h-2.183v.625h2.183v2.183h.625V15.076h2.183z"/>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 