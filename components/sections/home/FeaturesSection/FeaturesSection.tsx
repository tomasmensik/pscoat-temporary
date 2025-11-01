"use client";

import { useI18n } from "@/lib/contexts/I18nContext";
import { useFeaturesData } from "./data";

export default function FeaturesSection() {
  const { t } = useI18n();
  const features = useFeaturesData();

  const renderFeature = (feature: { icon: string; label: string }) => {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <img
          src={feature.icon}
          alt={feature.label}
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
        />
        <p className="text-base sm:text-lg lg:text-xl text-black font-medium">
          {feature.label}
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-white py-16 sm:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-3 sm:mb-4 leading-tight">
            {t("features.title")}
          </h2>
          <p className="text-base sm:text-lg text-black/80">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Responsive features grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {renderFeature(features.tepelneZtraty)}
          {renderFeature(features.pozar)}
          {renderFeature(features.koroze)}
          {renderFeature(features.kondenzace)}
          {renderFeature(features.plisne)}
        </div>
      </div>
    </section>
  );
}

