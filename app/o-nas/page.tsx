
export default function ONas() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O nás
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Inovativní řešení pro termoizolaci s využitím nejmodernějších
                nanotechnologií.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Naše poslání
                </h2>
                <p className="text-gray-700 mb-4">
                  Společnost PScoat se věnuje vývoji a dodávkám pokročilých
                  termoizolačních systémů pro široké spektrum aplikací.
                </p>
                <p className="text-gray-700">
                  Naším cílem je poskytovat ekologická a vysoce efektivní řešení
                  pro izolaci a ochranu povrchů s využitím nejnovějších poznatků
                  z oblasti nanotechnologií.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <a
                  href="/o-nas/cil"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Náš cíl
                  </h3>
                  <p className="text-sm text-gray-600">
                    Poslání a vize společnosti
                  </p>
                </a>
                <a
                  href="/o-nas/cerna-listina"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Černá listina
                  </h3>
                  <p className="text-sm text-gray-600">Nevhodné aplikace</p>
                </a>
                <a
                  href="/o-nas/oceneni"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ocenění
                  </h3>
                  <p className="text-sm text-gray-600">Certifikace a uznání</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
