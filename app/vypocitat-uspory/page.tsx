
export default function VypocitatUspory() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vypočítat úspory
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Zjistěte, kolik můžete ušetřit s PScoat.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kalkulačka úspor
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Plocha pro izolaci (m²)
                    </label>
                    <input
                      type="number"
                      placeholder="100"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Spotřeba energie před (kWh/rok)
                    </label>
                    <input
                      type="number"
                      placeholder="10000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cena za kWh (Kč)
                    </label>
                    <input
                      type="number"
                      placeholder="5.50"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Před aplikací PScoat:</span>
                  <span className="text-red-600 font-bold text-xl">100%</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-600">Po aplikaci PScoat:</span>
                  <span className="text-green-600 font-bold text-xl">60%</span>
                </div>
                <div className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-lg p-6 text-white">
                  <div className="text-sm mb-2">Odhadovaná roční úspora:</div>
                  <div className="text-3xl font-bold">-40%</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Chcete přesný výpočet?
                </h2>
                <p className="text-gray-700 mb-6">
                  Pro individuální kalkulaci a nabídku nás prosím kontaktujte.
                </p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
                >
                  Kontaktovat nás
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
