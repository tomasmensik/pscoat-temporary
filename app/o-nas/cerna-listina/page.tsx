
export default function CernaListina() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Černá listina
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Aplikace PScoat, které nejsou vhodné nebo nejsou doporučené.
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Nevhodné aplikace
                </h2>
                <p className="text-gray-700 mb-4">
                  PScoat je velmi univerzální produkt, ale existují některé
                  aplikace, pro které není vhodný:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span>
                      Podlahy s vysokým mechanickým zatížením (sklady,
                      parkoviště)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span>
                      Aplikace ve vodním prostředí bez ochrany před vlhkostí
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span>
                      Chemicky agresivní prostředí bez speciální ochrany
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span>
                      Povrchy s velmi vysokou teplotou nad výrobními limity
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Máte pochybnosti?
                </h2>
                <p className="text-gray-700 mb-4">
                  Pokud si nejste jistí, zda je PScoat vhodný pro vaši aplikaci,
                  kontaktujte nás. Poskytneme vám odborné poradenství.
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
