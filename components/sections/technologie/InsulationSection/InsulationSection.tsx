"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";

export default function InsulationSection() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {t("technology.insulation.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6">
            <p className="text-sm font-semibold text-gray-600 mb-4">
              {t("technology.insulation.withoutPsc")}
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/technology/izolace-vuci-vnejsim-teplotam-bez-psc.jpg"
                alt="Izolace bez PSC"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white p-6">
            <p className="text-sm font-semibold text-[#0180ae] mb-4">
              {t("technology.insulation.withPsc")}
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/technology/izolace-vuci-vnejsim-teplotam-s-psc.jpg"
                alt="Izolace s PSC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          {t("technology.insulation.coldTitle")}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6">
            <p className="text-sm font-semibold text-gray-600 mb-4">
              {t("technology.insulation.coldWithoutPsc")}
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/technology/izolace-vuci-chladu-bez-psc.jpg"
                alt="Izolace vůči chladu bez PSC"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white p-6">
            <p className="text-sm font-semibold text-[#0180ae] mb-4">
              {t("technology.insulation.coldWithPsc")}
            </p>
            <div className="relative w-full aspect-video">
              <Image
                src="/technology/izolace-vuci-chladu-s-psc.jpg"
                alt="Izolace vůči chladu s PSC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

