"use client";

import React from "react";

export default function JakAplikovatSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Jak aplikovat{" "}
            <span className="text-[#0180ae] font-bold">PScoat</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Správná aplikace je klíčová pro dosažení nejlepších výsledků s
            PScoat
          </p>
          <a
            href="/co-je-pscoat/aplikace"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
          >
            Zjistit více o aplikaci
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Tónování */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center flex-shrink-0">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tónování a barvy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  PScoat je možné tónovat dle vzorníku RAL (vzorník zašleme na
                  vyžádání). Nedoporučují se tmavé odstíny.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Počet vrstev */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00a4d6] to-[#0180ae] flex items-center justify-center flex-shrink-0">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Počet vrstev
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Počet vrstev aplikací PScoat je individuální a posuzuje se
                  vždy pro konkrétní zadání zakázky s ohledem na konkrétní
                  požadovaný výsledek.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Kvalita povrchu */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center flex-shrink-0">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kvalita povrchu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dle typu zvoleného stroje (trysky a tlaku) lze dosáhnout
                  hladkého nebo mírně zrnitého povrchu.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Stroje */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00a4d6] to-[#0180ae] flex items-center justify-center flex-shrink-0">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Doporučené stroje
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pro aplikaci PScoat se doporučuje použít stroje{" "}
                  <span className="font-semibold text-[#0180ae]">
                    GRACO MARK V - VII - X, GRACO RTX 5500
                  </span>
                  , nebo ekvivalent podobných strojů typu AIR-LESS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
