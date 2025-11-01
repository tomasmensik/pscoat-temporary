import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";

interface HeaderSectionProps {
  titleKey: string;
  subtitleKey?: string;
}

export default function HeaderSection({ titleKey, subtitleKey }: HeaderSectionProps) {
  const { t } = useI18n();

  return (
    <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mt-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
            {t(titleKey)}
          </h1>
          {subtitleKey && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {t(subtitleKey)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

