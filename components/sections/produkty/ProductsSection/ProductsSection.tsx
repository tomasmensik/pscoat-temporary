"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { products, categories, Product } from "@/lib/constants/products";
import ProductCard from "../ProductCard/ProductCard";

interface ProductsSectionProps {
  selectedCategory: "all" | "stavebnictvi" | "prumysl" | "verejny-sektor";
  searchQuery: string;
}

export default function ProductsSection({
  selectedCategory,
  searchQuery,
}: ProductsSectionProps) {
  const { t } = useI18n();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      {selectedCategory === "all" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
          {Object.entries(categories).map(([key, category], index) => {
            const categoryProducts = groupedProducts[key] || [];
            if (categoryProducts.length === 0) return null;

            const translationKey =
              key === "verejny-sektor" ? "verejnySektor" : key;

            return (
              <div key={key} className="flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-700 mb-3">
                    {t(`products.categories.${translationKey}`)}
                  </h2>
                  <div className="h-px bg-gray-300"></div>
                </div>

                <div>
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

