"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { categories } from "@/lib/constants/products";
import { SearchIcon } from "@/components/icons";

interface FilterSectionProps {
  selectedCategory: "all" | "stavebnictvi" | "prumysl" | "verejny-sektor";
  onCategoryChange: (
    category: "all" | "stavebnictvi" | "prumysl" | "verejny-sektor"
  ) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterSection({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: FilterSectionProps) {
  const { t } = useI18n();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="relative lg:w-[50%]">
            <input
              type="text"
              placeholder={t("products.search")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/10 outline-none transition-all duration-300 bg-gray-50/50"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="lg:w-[50%] w-full flex items-center gap-2 overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap [-webkit-overflow-scrolling:touch]">
            <button
              onClick={() => onCategoryChange("all")}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white shadow-lg shadow-[#0180ae]/25"
                  : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#0180ae] hover:text-[#0180ae] hover:bg-white"
              }`}
            >
              {t("products.all")}
            </button>

            <div className="hidden lg:block w-px h-6 bg-gray-200 mx-1"></div>

            {Object.entries(categories).map(([key, category]) => {
              const translationKey =
                key === "verejny-sektor" ? "verejnySektor" : key;
              return (
                <button
                  key={key}
                  onClick={() => onCategoryChange(key as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                    selectedCategory === key
                      ? "bg-[#0180ae] text-white shadow-sm"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200"
                  }`}
                >
                  {t(`products.categories.${translationKey}`)}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

