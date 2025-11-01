"use client";

import { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { ChevronDownIcon, CzechFlag, UKFlag } from "@/components/icons";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: "cs" | "en") => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const languages = [
    { code: "cs" as const, name: "Čeština", FlagComponent: CzechFlag },
    { code: "en" as const, name: "English", FlagComponent: UKFlag },
  ];

  const currentLanguage =
    languages.find((l) => l.code === locale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-2xl md:text-sm font-semibold md:font-medium text-black hover:text-[#2B659C] transition-colors"
      >
        <currentLanguage.FlagComponent className="w-6 h-5 md:w-5 md:h-4" />
        <span className="md:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDownIcon className="w-5 h-5 md:w-4 md:h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 md:right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-50 transition-colors ${
                  locale === lang.code
                    ? "text-[#2B659C] font-semibold"
                    : "text-gray-700"
                }`}
              >
                <lang.FlagComponent className="w-6 h-4" />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
