"use client";

import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";

export default function TechnologyPage() {
  const { t } = useI18n();

  const comparisonRows = [
    "thermal",
    "waterResistance",
    "corrosion",
    "condensation",
    "uvStable",
    "weight",
    "application",
    "repairs",
    "lifespan",
    "resistance",
    "ecology",
  ] as const;

  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Header Section */}
        <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mt-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                {t("technology.title")}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                {t("technology.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Microspheres Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("technology.microspheres.title")}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                {t("technology.microspheres.subtitle")}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point4")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point5")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point6")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t("technology.microspheres.point7")}</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/technology/mikrosfery.png"
                alt="Mikrosféry"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Insulation Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t("technology.insulation.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6">
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  {t("technology.insulation.withoutPsc")}
                </p>
                <div className="relative w-full aspect-video">
                  <Image
                    src="/technology/izolace-vuci-vnejsim-teplotam-bez-psc.jpg"
                    alt="Izolace bez PSC"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm font-semibold text-[#0180ae] mb-4">
                  {t("technology.insulation.withPsc")}
                </p>
                <div className="relative w-full aspect-video">
                  <Image
                    src="/technology/izolace-vuci-vnejsim-teplotam-s-psc.jpg"
                    alt="Izolace s PSC"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("technology.insulation.coldTitle")}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6">
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  {t("technology.insulation.coldWithoutPsc")}
                </p>
                <div className="relative w-full aspect-video">
                  <Image
                    src="/technology/izolace-vuci-chladu-bez-psc.jpg"
                    alt="Izolace vůči chladu bez PSC"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm font-semibold text-[#0180ae] mb-4">
                  {t("technology.insulation.coldWithPsc")}
                </p>
                <div className="relative w-full aspect-video">
                  <Image
                    src="/technology/izolace-vuci-chladu-s-psc.jpg"
                    alt="Izolace vůči chladu s PSC"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suitable Areas Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("technology.suitableAreas.title")}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {t("technology.suitableAreas.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <Image
                src="/technology/plochy-vhodne-k-pokryti.png"
                alt="Plochy vhodné k pokrytí"
                width={600}
                height={400}
              />
            </div>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.roofs")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.ceilings")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.walls")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.basements")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.piping")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.metalParts")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.railings")}
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t("technology.suitableAreas.items.facades")}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] p-8 text-white text-center">
            <p className="text-lg md:text-xl font-medium">
              {t("technology.suitableAreas.uniqueProperties")}
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t("technology.comparison.title")}
            </h2>

            <div className="mb-8 flex justify-center">
              <div className="relative w-full max-w-4xl">
                <Image
                  src="/technology/porovnani-klasicke-izolace.svg"
                  alt="Porovnání"
                  width={1200}
                  height={600}
                />
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        {t("technology.comparison.table.property")}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        {t("technology.comparison.table.pscoat")}
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        {t("technology.comparison.table.traditional")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonRows.map((row, index) => (
                      <tr
                        key={row}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {t(
                            `technology.comparison.table.${row}.property` as any
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t(
                            `technology.comparison.table.${row}.pscoat` as any
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t(
                            `technology.comparison.table.${row}.traditional` as any
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Specific Properties Section */}
        <section className="bg-gradient-to-br from-[#0180ae] to-[#00a4d6] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              {t("technology.specificProperties.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="bg-white/10 backdrop-blur p-8">
                <ul className="space-y-4 text-white">
                  {Array.from({ length: 9 }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-white mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {t(
                          `technology.specificProperties.left.item${
                            i + 1
                          }` as any
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="bg-white/10 backdrop-blur p-8">
                <ul className="space-y-4 text-white">
                  {Array.from({ length: 9 }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-white mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {t(
                          `technology.specificProperties.right.item${
                            i + 1
                          }` as any
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
