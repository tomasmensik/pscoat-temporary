"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/lib/contexts/I18nContext";
import { CheckIcon } from "@/components/icons";

export default function MicrospheresSection() {
  const { t } = useI18n();

  const points = [
    "point1",
    "point2",
    "point3",
    "point4",
    "point5",
    "point6",
    "point7",
  ] as const;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("technology.microspheres.title")}
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            {t("technology.microspheres.subtitle")}
          </p>
          <ul className="space-y-3 text-gray-700">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-[#0180ae] mt-1 flex-shrink-0" />
                <span>{t(`technology.microspheres.${point}`)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <Image
            src="/technology/mikrosfery.png"
            alt="Mikrosféry"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

