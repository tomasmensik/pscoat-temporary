"use client";

import { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { ChevronDownIcon } from "@/components/icons";
import { logosTop, logosBottom } from "./data";

export default function ReferencesSection() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section className="w-full bg-white min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-center text-3xl md:text-4xl text-slate-900">
          {t("references.title")}
        </h2>

        {/* Logos grid */}
        <div className="mt-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
            {logosTop.map((src) => (
              <img
                key={src}
                src={src}
                alt="reference logo"
                className="h-30 md:h-36 object-contain opacity-70"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {logosBottom.map((src) => (
              <img
                key={src}
                src={src}
                alt="reference logo"
                className="h-30 md:h-36 object-contain opacity-70"
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-slate-300/60 w-full" />

        {/* Collapsible list of companies */}
        <div
          className={`mt-6 text-center text-[12px] md:text-sm text-slate-500 leading-6 space-y-1 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden mx-auto ${
            expanded ? "opacity-100 max-h-[1200px]" : "opacity-0 max-h-0"
          }`}
          style={{ maxWidth: 860 }}
        >
          <p>{t("references.companies.airLiquid")}</p>
          <p>{t("references.companies.airProducts")}</p>
          <p>{t("references.companies.uwc")}</p>
          <p>{t("references.companies.greenGas")}</p>
          <p>{t("references.companies.mavir")}</p>
          <p>{t("references.companies.weglokoks")}</p>
          <p>{t("references.companies.zem")}</p>
          <p>{t("references.companies.ecMikolaj")}</p>
          <p>{t("references.companies.azotyGroup")}</p>
          <p>{t("references.companies.synthos")}</p>
          <p>{t("references.companies.kghm")}</p>
          <p>{t("references.companies.kosownia")}</p>
          <p>{t("references.companies.plynex")}</p>
          <p>{t("references.companies.tempestHold")}</p>
          <p>{t("references.companies.vyvojMartin")}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
            aria-expanded={expanded}
          >
            <span className="text-sm font-medium">
              {expanded ? t("references.hide") : t("references.viewMore")}
            </span>
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

