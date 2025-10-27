"use client";

import React from "react";
import Image from "next/image";

export default function PScoatInfoSection() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-[#eae9ea] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0180ae]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a4d6]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#0180ae]/5 to-[#00a4d6]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Hero Text */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            POWER
            <span className="text-[#0180ae] font-bold"> SMART </span>
            COAT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Špičkové moderní nátěry s využitím nanotechnologie pro dokonalou
            ochranu povrchů, výrazné energetické úspory a dlouhou životnost
          </p>
        </div>

        {/* Minimalist Feature Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ochrana proti
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                icon: "/home/tepelne-ztraty.png",
                title: "Tepelným ztrátám",
                desc: "Maximální izolace",
              },
              {
                icon: "/home/koroze.png",
                title: "Korozi",
                desc: "Dlouhá ochrana",
              },
              {
                icon: "/home/kondenzace.png",
                title: "Kondenzaci",
                desc: "Vlhkost mimo",
              },
              {
                icon: "/home/plisne.png",
                title: "Plísním",
                desc: "Zdravé prostředí",
              },
              {
                icon: "/home/pozary.png",
                title: "Požáru",
                desc: "Bezpečnost",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/40 backdrop-blur-sm p-8 rounded-t-3xl border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-md font-bold text-gray-900 mb-2 group-hover:text-[#0180ae] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits with Modern Cards */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Ekologie a udržitelnost
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                gradient: "from-[#0180ae] to-[#00a4d6]",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ),
                title: "Ekologie a udržitelnost",
                text: "PScoat je ekologický produkt s nízkou uhlíkovou stopou a šetrností k životnímu prostředí.",
              },
              {
                gradient: "from-[#00a4d6] to-[#0180ae]",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
                title: "Zdraví a bezpečí",
                text: "Jeho složení přispívá k ochraně zdraví a zvyšuje bezpečnost při používání.",
              },
              {
                gradient: "from-[#0180ae] to-[#00a4d6]",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
                title: "Výkon a úspora",
                text: "PScoat prodlužuje životnost zařízení a zajišťuje výraznou úsporu energií.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0180ae]/10"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 relative z-10 group-hover:text-[#0180ae] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features with Gradient */}
        <div className="relative rounded-[3rem] overflow-hidden bg-white border border-gray-200/50">
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-gray-900">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900">
                Klíčové vlastnosti{" "}
                <span className="font-bold text-[#0180ae]">PScoat</span>
              </h3>
              <p className="text-sm sm:text-md text-gray-600 max-w-2xl mx-auto">
                PScoat odráží{" "}
                <span className="font-bold text-lg text-[#0180ae]">
                  &gt;92%
                </span>{" "}
                světelného záření v celém svém spektru (TSR)
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Main Features Grid */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                  <svg
                    className="w-6 h-6 text-[#0180ae]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Benefity
                </h4>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Feature 1 - UV Protection */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    UV odolný
                  </h4>
                  <p className="text-sm text-gray-600">
                    Netoxický a ekologický pro bezpečné použití
                  </p>
                </div>

                {/* Feature 2 - Energy Savings */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Energetické úspory
                  </h4>
                  <p className="text-sm text-gray-600">
                    Významná úspora energií a nákladů
                  </p>
                </div>

                {/* Feature 3 - Certified */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Certifikovaný
                  </h4>
                  <p className="text-sm text-gray-600">
                    Plně certifikované produkty
                  </p>
                </div>
              </div>

              {/* Surface Types Grid */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                  <svg
                    className="w-6 h-6 text-[#0180ae]"
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
                  Typy povrchů
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
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
                      ),
                      label: "Na kov",
                    },
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      ),
                      label: "Na stěny",
                    },
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      ),
                      label: "Na dřevo",
                    },
                    {
                      icon: (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      ),
                      label: "Na PVC / střechy",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 group hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-[#0180ae]/30"
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200 text-[#0180ae]">
                        {item.icon}
                      </div>
                      <div className="font-medium text-sm text-center text-gray-900">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
