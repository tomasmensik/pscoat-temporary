
export default function Aplikace() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aplikace
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Správná aplikace je klíčová pro dosažení nejlepších výsledků s
                PScoat.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Způsoby aplikace
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Stříkání pomocí AIR-LESS strojů</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Nanášení válečkem nebo štětkou</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Profesionální strojní aplikace</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Doporučené stroje
                </h2>
                <p className="text-gray-700 mb-4">
                  Pro aplikaci PScoat se doporučuje použít stroje:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>GRACO MARK V - VII - X</li>
                  <li>GRACO RTX 5500</li>
                  <li>Ekvivalent AIR-LESS strojů</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Příprava povrchu
                </h2>
                <p className="text-gray-700">
                  Důležitá je správná příprava povrchu před aplikací.
                  Kontaktujte nás pro podrobné informace o přípravě specifických
                  povrchů.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
