"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";

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

export default function ComparisonSection() {
  const { t } = useI18n();

  return (
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
                      {t(`technology.comparison.table.${row}.property` as any)}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {t(`technology.comparison.table.${row}.pscoat` as any)}
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
  );
}

