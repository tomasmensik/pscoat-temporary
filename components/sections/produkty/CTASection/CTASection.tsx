"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/contexts/I18nContext";

export default function CTASection() {
  const { t } = useI18n();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t("products.helpTitle")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">{t("products.helpText")}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/kontakt"
            className="px-8 py-3 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {t("products.contactUs")}
          </Link>
        </div>
      </div>
    </section>
  );
}

