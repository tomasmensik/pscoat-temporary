
export default function Oceneni() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ocenění
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Certifikace a uznání kvality našich produktů.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Certifikace
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Certifikáty kvality výroby</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Ekologické certifikace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Testy trvanlivosti a spolehlivosti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0180ae] text-xl">✓</span>
                    <span>Bezpečnostní standardy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Uznání
                </h2>
                <p className="text-gray-700">
                  Naše produkty jsou uznávané odbornou veřejností a získaly
                  pozitivní ohlas v průmyslové i akademické sféře.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Technické specifikace
                </h2>
                <p className="text-gray-700 mb-4">
                  Kompletní dokumentace včetně certifikátů a testovacích
                  protokolů je k dispozici na vyžádání.
                </p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
                >
                  Požádat o dokumentaci
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
