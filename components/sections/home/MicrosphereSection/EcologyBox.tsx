"use client";

import { useI18n } from "@/lib/contexts/I18nContext";

export default function EcologyBox() {
  const { t } = useI18n();

  return (
    <>
      {/* Mobile/Tablet Version */}
      <div className="lg:hidden border border-white py-3 px-4 sm:py-4 sm:px-5 w-full">
        <h3
          className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4"
          style={{
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {t("microsphere.ecology.title")}
        </h3>
        <p
          className="text-xs sm:text-sm text-white font-light leading-relaxed"
          style={{
            textShadow:
              "1px 1px 3px rgba(0, 0, 0, 0.7), 0px 0px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          {t("microsphere.ecology.description")}
        </p>
      </div>

      {/* Desktop Version */}
      <div
        className="hidden lg:block absolute right-8 xl:right-20 2xl:right-80"
        style={{ top: "68%", transform: "translateY(-50%)", zIndex: 10 }}
      >
        <div className="border border-white py-4 px-6 sm:py-12 sm:px-16 max-w-md w-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {t("microsphere.ecology.title")}
          </h3>
          <p className="text-sm sm:text-base text-white font-light leading-relaxed">
            {t("microsphere.ecology.description")}
          </p>
        </div>
      </div>
    </>
  );
}

