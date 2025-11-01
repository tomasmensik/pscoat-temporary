"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { CheckIcon } from "@/components/icons";

export default function ProductionInfoSection() {
  const { t } = useI18n();

  return (
    <div className="mb-12">
      <div className="bg-white rounded-2xl p-8 border border-gray-200/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            {t("about.production")}{" "}
            <span className="font-bold text-[#0180ae]">
              {t("about.productionInPoland")}
            </span>
          </h2>
          <p className="text-base text-gray-600 mb-6">
            {t("about.productionText")}
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <CheckIcon className="w-4 h-4" />
            <span className="text-sm font-medium">
              {t("about.certifiedProducts")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

