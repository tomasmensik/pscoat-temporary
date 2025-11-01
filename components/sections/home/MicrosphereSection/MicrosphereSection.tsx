"use client";

import { useI18n } from "@/lib/contexts/I18nContext";
import Link from "next/link";
import BenefitsBox from "./BenefitsBox";
import EcologyBox from "./EcologyBox";

export default function MicrosphereSection() {
  const { t } = useI18n();

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundColor: "#223B54",
        backgroundImage: "url('/home/animation/nano.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile/Tablet Layout - Grid System */}
      <div className="lg:hidden h-full flex flex-col px-6 sm:px-8 md:px-10 py-8 sm:py-12 md:py-16 gap-6 sm:gap-8 md:gap-10 overflow-y-auto">
        {/* Main Title and Description */}
        <div className="z-10 py-16">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-7 md:mb-8 leading-tight"
            style={{
              textShadow:
                "3px 3px 6px rgba(0, 0, 0, 0.9), 0px 0px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {t("microsphere.title")}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-white font-light mb-4 sm:mb-5 md:mb-6 leading-relaxed"
            style={{
              textShadow:
                "1px 1px 3px rgba(0, 0, 0, 0.7), 0px 0px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            {t("microsphere.description")}
          </p>
          <Link
            href="/#realizace-section"
            className="inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-white border border-white hover:bg-white hover:text-[#223B54] transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base"
            style={{
              textShadow:
                "2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            {t("microsphere.viewCaseStudies")}
          </Link>
        </div>

        {/* Grid for Benefits and Ecology Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 flex-1 pb-16">
          <BenefitsBox />
          <EcologyBox />
        </div>
      </div>

      {/* Desktop Layout - Original */}
      <div className="hidden lg:block">
        {/* Main Content Block - Left Center */}
        <div className="absolute left-8 xl:left-10 top-1/2 -translate-y-1/2 max-w-lg z-10">
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
            {t("microsphere.title")}
          </h2>
          <p className="text-sm text-white font-light mb-8 leading-relaxed">
            {t("microsphere.description")}
          </p>
          <Link
            href="/#realizace-section"
            className="inline-block px-6 py-3 text-white border border-white hover:bg-white hover:text-[#223B54] transition-colors duration-300 font-medium"
          >
            {t("microsphere.viewCaseStudies")}
          </Link>
        </div>

        {/* Benefits Box */}
        <BenefitsBox />

        {/* Ecology Box */}
        <EcologyBox />
      </div>
    </section>
  );
}

