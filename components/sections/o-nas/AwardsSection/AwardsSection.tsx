"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";

export default function AwardsSection() {
  const { t } = useI18n();

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {t("about.awards")}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Pohár starosty města */}
        <div className="group relative bg-white rounded-xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <div className="text-center relative z-10">
            <div
              className="w-32 h-32 relative rounded-lg overflow-hidden mx-auto mb-6 cursor-pointer group-hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("/o-nas/pohar01.jpg", "_blank")}
            >
              <Image
                src="/o-nas/pohar01.jpg"
                alt="Pohár starosty města Bielska-Biała"
                fill
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("about.mayorCup")}
            </h3>
            <p className="text-[#0180ae] font-semibold mb-2">
              {t("about.mayorCupLocation")}
            </p>
            <p className="text-sm text-gray-600">{t("about.mayorCupDescription")}</p>
          </div>
        </div>

        {/* Bronzový stavební pilíř */}
        <div className="group relative bg-white rounded-xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <div className="text-center relative z-10">
            <div
              className="w-32 h-32 relative rounded-lg overflow-hidden mx-auto mb-6 cursor-pointer group-hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("/o-nas/pohar02.jpg", "_blank")}
            >
              <Image
                src="/o-nas/pohar02.jpg"
                alt="Bronzový stavební pilíř"
                fill
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t("about.bronzePillar")}
            </h3>
            <p className="text-[#0180ae] font-semibold mb-2">
              {t("about.bronzePillarLocation")}
            </p>
            <p className="text-sm text-gray-600">
              {t("about.bronzePillarDescription")}
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200/50">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          {t("about.testimonials")}
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Petr Kouřil */}
          <div className="text-center">
            <div
              className="w-24 h-24 relative rounded-full overflow-hidden mb-6 mx-auto border-3 border-[#0180ae] cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("/o-nas/petr-kouril.jpg", "_blank")}
            >
              <Image
                src="/o-nas/petr-kouril.jpg"
                alt="Petr Kouřil"
                fill
                className="object-cover hover:opacity-80 transition-opacity"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {t("about.petrKouril")}
            </h4>
            <p className="text-[#0180ae] font-semibold mb-3">
              {t("about.petrKourilTitle")}
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700 italic">{t("about.petrKourilText")}</p>
            </div>
          </div>

          {/* 4ECO - ŁOMŻA VIVE KIELCE */}
          <div className="text-center">
            <div
              className="w-32 h-32 relative rounded-full overflow-hidden mx-auto border-3 border-green-500 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("/o-nas/handball.png", "_blank")}
            >
              <Image
                src="/o-nas/handball.png"
                alt="ŁOMŻA VIVE KIELCE"
                fill
                className="object-contain p-3 hover:opacity-80 transition-opacity"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {t("about.lomzaVive")}
            </h4>
            <p className="text-[#0180ae] font-semibold mb-3">
              {t("about.lomzaViveTitle")}
            </p>

            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700 italic">{t("about.lomzaViveText")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

