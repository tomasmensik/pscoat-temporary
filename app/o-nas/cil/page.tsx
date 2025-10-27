
export default function Cil() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Náš cíl
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Naše poslání a vize pro budoucnost termoizolace.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Poslání
                </h2>
                <p className="text-gray-700 mb-4">
                  Poskytovat nejkvalitnější termoizolační řešení využívající
                  pokročilé nanotechnologie pro dosažení maximální efektivity a
                  dlouhodobé ochrany.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vize</h2>
                <p className="text-gray-700 mb-4">
                  Stát se lídrem v oblasti inovativních izolačních systémů,
                  přispívat k energetické efektivitě a ochraně životního
                  prostředí prostřednictvím špičkových technologií.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hodnoty
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Inovace a technologie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Efektivita a úspora energií</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Ekologie a udržitelnost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Kvalita a spolehlivost</span>
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
