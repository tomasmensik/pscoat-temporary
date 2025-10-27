
export default function Stavebnictvi() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Izolace pro stavební průmysl
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                PScoat nabízí komplexní řešení pro stavební izolaci s využitím
                nejmodernějších nanotechnologií.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Aplikace ve stavebnictví
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Izolace fasád budov</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Střechy a terasy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Technické místnosti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Sklepy a suterény</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Benefity pro stavby
                </h2>
                <p className="text-gray-700 mb-4">
                  PScoat přináší značné výhody pro stavební aplikace:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Výrazné energetické úspory</li>
                  <li>• Ochrana proti kondenzaci a vlhkosti</li>
                  <li>• Prevence plísní a bakterií</li>
                  <li>• Dlouhodobá životnost řešení</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
