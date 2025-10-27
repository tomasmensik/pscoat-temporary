
export default function Vlastnosti() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specifické vlastnosti
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                PScoat nabízí unikátní vlastnosti díky pokročilým
                nanotechnologiím a mikrosférám.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Klíčové vlastnosti
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Tepelná ochrana s TSR &gt;92%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Dlouhodobá ochrana proti korozi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Vynikající adheze na různé povrchy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>UV odolnost a bezpečnost</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Technické parametry
                </h2>
                <p className="text-gray-700">
                  Detailní technické specifikace jsou k dispozici na vyžádání.
                  Kontaktujte nás pro více informací o technických vlastnostech
                  PScoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
