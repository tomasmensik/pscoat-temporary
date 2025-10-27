
export default function VerejnySektor() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Veřejný sektor a zdravotnictví
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                PScoat nabízí bezpečná a ekologická řešení pro veřejné budovy a
                zdravotnická zařízení.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Aplikace ve veřejném sektoru
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Školy a vzdělávací zařízení</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Nemocnice a kliniky</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Správní budovy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Kulturní a sportovní centra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Bezpečnost a zdraví
                </h2>
                <p className="text-gray-700 mb-4">
                  PScoat je vhodný pro použití v citlivém prostředí:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Netoxické složení</li>
                  <li>• Ochrana proti plísním a bakteriím</li>
                  <li>• Zlepšení mikroklimatu</li>
                  <li>• Certifikované pro veřejné použití</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
