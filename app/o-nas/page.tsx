"use client";

import Image from "next/image";

export default function ONas() {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Header Section */}
        <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mt-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                O společnosti
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Od roku 2007 vyvíjíme inovativní termoizolační technologie
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Timeline Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Důležité milníky
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#0180ae] to-[#00a4d6]"></div>

              <div className="space-y-8">
                {/* Event 1 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-5/12 flex justify-end">
                    <div className="group relative bg-white rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-[#0180ae] mb-1 relative z-10">
                        2007
                      </div>
                      <p className="text-sm text-gray-600 relative z-10">
                        Vznik Alpha Construction AG ve Švýcarsku
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="w-full md:w-5/12"></div>
                </div>

                {/* Event 2 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-5/12"></div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="w-full md:w-5/12 flex justify-start">
                    <div className="group relative bg-white rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-[#0180ae] mb-1 relative z-10">
                        2009
                      </div>
                      <p className="text-sm text-gray-600 relative z-10">
                        Expanze na trhy EU
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-5/12 flex justify-end">
                    <div className="group relative bg-white rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-[#0180ae] mb-1 relative z-10">
                        2011
                      </div>
                      <p className="text-sm text-gray-600 relative z-10">
                        Přesun do Zug a akvizice RIVER POWER
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="w-full md:w-5/12"></div>
                </div>

                {/* Event 4 */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-5/12"></div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="w-full md:w-5/12 flex justify-start">
                    <div className="group relative bg-white rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-[#0180ae] mb-1 relative z-10">
                        2013
                      </div>
                      <p className="text-sm text-gray-600 relative z-10">
                        Začátek vývoje produktu PScoat
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event 5 - Special */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-5/12 flex justify-end">
                    <div className="group relative bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/20 w-full max-w-md">
                      <div className="absolute inset-0 bg-white/10 backdrop-blur opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1 relative z-10">
                        2023
                      </div>
                      <p className="text-sm text-white/90 relative z-10">
                        Transformace na ALPHA Construction SE
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Info */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Výroba{" "}
                  <span className="font-bold text-[#0180ae]">v Polsku</span>
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Výrobní závod produktu PScoat je aktuálně v Polsku ve Woli
                  Batorske nedaleko Krakova
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Certifikované produkty
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ocenění
            </h2>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Pohár starosty města */}
              <div className="group relative bg-white rounded-xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div
                    className="w-32 h-32 relative rounded-lg overflow-hidden mx-auto mb-6 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open("/o-nas/pohar01.jpg", "_blank")}
                  >
                    <Image
                      src="/o-nas/pohar01.jpg"
                      alt="Pohár starosty města Bielska-Biała"
                      fill
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Pohár starosty města
                  </h3>
                  <p className="text-[#0180ae] font-semibold mb-2">
                    Bielska-Biała
                  </p>
                  <p className="text-sm text-gray-600">
                    Za nejlepší inovativní výrobek stavebního veletrhu roku 2020
                  </p>
                </div>
              </div>

              {/* Bronzový stavební pilíř */}
              <div className="group relative bg-white rounded-xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div
                    className="w-32 h-32 relative rounded-lg overflow-hidden mx-auto mb-6 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open("/o-nas/pohar02.jpg", "_blank")}
                  >
                    <Image
                      src="/o-nas/pohar02.jpg"
                      alt="Bronzový stavební pilíř"
                      fill
                      className="object-contain hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Bronzový stavební pilíř
                  </h3>
                  <p className="text-[#0180ae] font-semibold mb-2">
                    Polsko 2020
                  </p>
                  <p className="text-sm text-gray-600">
                    Za nejlepší inovativní produkt v Polsku za rok 2020
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/50">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Doporučení
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Petr Kouřil */}
                <div className="text-center">
                  <div
                    className="w-24 h-24 relative rounded-full overflow-hidden mb-6 mx-auto border-3 border-[#0180ae] cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() =>
                      window.open("/o-nas/petr-kouril.jpg", "_blank")
                    }
                  >
                    <Image
                      src="/o-nas/petr-kouril.jpg"
                      alt="Petr Kouřil"
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Petr Kouřil
                  </h4>
                  <p className="text-[#0180ae] font-semibold mb-3">
                    Mistr České Republiky v letecké akrobacii
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 italic">
                      doporučuje výrobky PScoat
                    </p>
                  </div>
                </div>

                {/* 4ECO - ŁOMŻA VIVE KIELCE */}
                <div className="text-center">
                  <div
                    className="w-32 h-32 relative rounded-full overflow-hidden mx-auto border-3 border-green-500 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => window.open("/o-nas/handball.png", "_blank")}
                  >
                    <Image
                      src="/o-nas/handball.png"
                      alt="ŁOMŻA VIVE KIELCE"
                      fill
                      className="object-contain p-3 hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    ŁOMŻA VIVE KIELCE
                  </h4>
                  <p className="text-[#0180ae] font-semibold mb-3">
                    (2× mistr UEFA a 18× mistr Polska v házené)
                  </p>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 italic">
                      doporučuje výrobky PScoat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
