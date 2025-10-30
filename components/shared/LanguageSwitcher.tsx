"use client";

import { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";

// Czech Republic Flag SVG Component
const CzechFlag = ({ className = "w-6 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Czech Republic flag"
    style={{ borderRadius: "2px", overflow: "hidden" }}
    shapeRendering="geometricPrecision"
  >
    {/* White top stripe */}
    <rect y="0" width="60" height="20" fill="#ffffff" />
    {/* Red bottom stripe */}
    <rect y="20" width="60" height="20" fill="#d7141a" />
    {/* Blue triangle - starts at left edge, goes to center */}
    <polygon points="0,0 30,20 0,40" fill="#11457e" />
  </svg>
);

// United Kingdom Flag SVG Component
const UKFlag = ({ className = "w-6 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 900 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Kingdom flag"
  >
    <path fill="#012169" d="M0 0h900v600H0z" />
    <path
      fill="#fff"
      d="M0 0l900 600M900 0L0 600"
      stroke="#fff"
      strokeWidth="120"
      strokeLinecap="square"
    />
    <path
      fill="#c8102e"
      d="M0 0l900 600M900 0L0 600"
      stroke="#c8102e"
      strokeWidth="80"
      strokeLinecap="square"
    />
    <path
      fill="#fff"
      d="M450 0v600M0 300h900"
      stroke="#fff"
      strokeWidth="200"
    />
    <path
      fill="#c8102e"
      d="M450 0v600M0 300h900"
      stroke="#c8102e"
      strokeWidth="120"
    />
  </svg>
);

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
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-black hover:text-[#2B659C] transition-colors"
      >
        <currentLanguage.FlagComponent className="w-5 h-4" />
        <span className="hidden md:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
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
