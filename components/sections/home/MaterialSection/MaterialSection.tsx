"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { textures } from "./data";

export default function MaterialSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTextureClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full h-screen relative flex items-center justify-center"
      style={{
        backgroundColor: "#223B54",
        backgroundImage: "url('/home/animation/hexa.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Text - 1/3 x-axis, 1/3 y-axis */}
      <div className="absolute left-[33.33%] top-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-lg px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
          {t("material.mainText")}
        </h2>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white font-light leading-relaxed">
          {t("material.subText")}
        </p>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 max-w-full">
        {textures.map((texture, index) => (
          <div
            key={index}
            onClick={() => handleTextureClick(index)}
            className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm overflow-hidden shadow-lg border border-white/20 cursor-pointer transition-all duration-300 ${
              activeIndex !== null && activeIndex !== index
                ? "opacity-30 brightness-50"
                : "opacity-100 brightness-100"
            } ${
              activeIndex === index
                ? "ring-2 sm:ring-3 md:ring-4 ring-white/50 scale-105"
                : ""
            }`}
          >
            <Image
              src={`/home/animation/texture/${texture.id}.png`}
              alt={texture.id}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 z-10 max-w-[80%] sm:max-w-none">
          <div className="backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border border-white/30 shadow-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              {t(`material.${textures[activeIndex].id}`)}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}

