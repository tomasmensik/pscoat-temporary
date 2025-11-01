"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";
import { CheckIcon } from "@/components/icons";

export default function SuitableAreasSection() {
  const { t } = useI18n();

  const items = [
    "roofs",
    "ceilings",
    "walls",
    "basements",
    "piping",
    "metalParts",
    "railings",
    "facades",
  ] as const;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {t("technology.suitableAreas.title")}
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        {t("technology.suitableAreas.subtitle")}
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div className="relative">
          <Image
            src="/technology/plochy-vhodne-k-pokryti.png"
            alt="Plochy vhodné k pokrytí"
            width={600}
            height={400}
          />
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 text-[#0180ae] flex-shrink-0" />
                {t(`technology.suitableAreas.items.${item}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] p-8 text-white text-center">
        <p className="text-lg md:text-xl font-medium">
          {t("technology.suitableAreas.uniqueProperties")}
        </p>
      </div>
    </section>
  );
}

