
export default function Pouziti() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Použití
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Možnosti využití PScoat jsou široké a pokrývají různé průmyslové
                i stavební aplikace.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Oblasti použití
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Stavebnictví
                    </h3>
                    <p className="text-sm text-gray-600">
                      Izolace budov a fasád
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Průmysl</h3>
                    <p className="text-sm text-gray-600">
                      Ochrana technických zařízení
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Zdravotnictví
                    </h3>
                    <p className="text-sm text-gray-600">
                      Izolace veřejných budov
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Infrastruktura
                    </h3>
                    <p className="text-sm text-gray-600">
                      Ochrana mostů a konstrukcí
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Typy povrchů
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Kovové povrchy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Stěny a fasády</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Dřevěné konstrukce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>PVC a střechy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
