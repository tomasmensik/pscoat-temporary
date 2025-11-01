"use client";

import React, { useState } from "react";
import HeaderSection from "@/components/sections/shared/HeaderSection";
import FilterSection from "@/components/sections/produkty/FilterSection/FilterSection";
import ProductsSection from "@/components/sections/produkty/ProductsSection/ProductsSection";
import CTASection from "@/components/sections/produkty/CTASection/CTASection";

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "stavebnictvi" | "prumysl" | "verejny-sektor"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        <HeaderSection titleKey="products.title" subtitleKey="products.subtitle" />

        <FilterSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ProductsSection
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
        />

        <CTASection />
      </main>
    </>
  );
};

export default ProductsPage;
