"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { CheckIcon } from "@/components/icons";

export default function SpecificPropertiesSection() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-[#0180ae] to-[#00a4d6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          {t("technology.specificProperties.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur p-8">
            <ul className="space-y-4 text-white">
              {Array.from({ length: 9 }, (_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span>
                    {t(
                      `technology.specificProperties.left.item${i + 1}` as any
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur p-8">
            <ul className="space-y-4 text-white">
              {Array.from({ length: 9 }, (_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span>
                    {t(
                      `technology.specificProperties.right.item${i + 1}` as any
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

