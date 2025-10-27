
export default function Reference() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reference
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Podívejte se na naše úspěšné projekty a referenční realizace.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kategorie projektů
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Stavebnictví
                    </h3>
                    <p className="text-sm text-gray-600">
                      Reference z rezidenčních a komerčních projektů
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Průmysl</h3>
                    <p className="text-sm text-gray-600">
                      Průmyslové aplikace a technologie
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Veřejný sektor
                    </h3>
                    <p className="text-sm text-gray-600">
                      Školy, nemocnice, úřady
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Infrastruktura
                    </h3>
                    <p className="text-sm text-gray-600">
                      Mosty, tunely, veřejné stavby
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Chcete vidět naše projekty?
                </h2>
                <p className="text-gray-700 mb-6">
                  Kontaktujte nás pro kompletní portfolio referenčních projektů
                  a případových studií.
                </p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
                >
                  Kontaktovat
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
