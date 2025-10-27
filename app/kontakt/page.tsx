
export default function Kontakt() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#eae9ea] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kontakt
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Jsme tu pro vás. Kontaktujte nás pro dotazy, objednávky nebo
                odborné poradenství.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">info@pscoat.cz</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Telefon
                  </h3>
                  <p className="text-gray-600">+420 123 456 789</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kontaktní formulář
                </h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Vaše jméno"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Váš email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Vaše zpráva"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0180ae] focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
                  >
                    Odeslat
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
          </>
  );
}
