"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products, categories, Product } from "../../lib/constants/products";
import Link from "next/link";

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "stavebnictvi" | "prumysl" | "verejny-sektor"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header Section */}
        <section className="relative bg-gradient-to-br from-[#0180ae] to-[#00a4d6] text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Naše produkty
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Kompletní portfolio izolačních systémů PScoat pro různé oblasti
                použití
              </p>
            </div>
          </div>

          {/* Decorative SVG Waves */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="white"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,64C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </section>

        {/* Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {/* Search and Filters in one row */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar - 60% */}
              <div className="relative lg:w-[50%]">
                <input
                  type="text"
                  placeholder="Hledat produkty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/10 outline-none transition-all duration-300 bg-gray-50/50"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Filters - 40% */}
              <div className="lg:w-[50%] flex items-center gap-2">
                {/* All Products Button - Larger */}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === "all"
                      ? "bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white shadow-lg shadow-[#0180ae]/25"
                      : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#0180ae] hover:text-[#0180ae] hover:bg-white"
                  }`}
                >
                  Všechny
                </button>

                {/* Divider */}
                <div className="hidden lg:block w-px h-6 bg-gray-200 mx-1"></div>

                {/* Category filters - Smaller */}
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === key
                        ? "bg-[#0180ae] text-white shadow-sm"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {selectedCategory === "all" ? (
            // Show categories side by side in 3 columns
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
              {Object.entries(categories).map(([key, category], index) => {
                const categoryProducts = groupedProducts[key] || [];
                if (categoryProducts.length === 0) return null;

                const isLastColumn =
                  index === Object.entries(categories).length - 1;

                return (
                  <div key={key} className="flex flex-col">
                    {/* Category header */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-700 mb-3">
                        {category.name}
                      </h2>
                      <div className="h-px bg-gray-300"></div>
                    </div>

                    {/* Products list */}
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
            // Show filtered products in 3 columns
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Potřebujete pomoct s výběrem?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Kontaktujte nás a společně najdeme ideální řešení pro vaši
              aplikaci
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/kontakt"
                className="px-8 py-3 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Kontaktovat nás
              </Link>
              <Link
                href="/vypocitat-uspory"
                className="px-8 py-3 bg-white border-2 border-[#0180ae] text-[#0180ae] font-semibold rounded-full hover:bg-gray-50 transition-all duration-300"
              >
                Vypočítat úspory
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/produkty/${product.id}`}
      className="group mb-6 block bg-white rounded-3xl p-4 border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10"
    >
      <div className="flex gap-4">
        {/* Image Container */}
        <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="80px"
          />

          {/* Badge for colored variant */}
          {product.hasColorVariant && (
            <div className="absolute top-2 left-2">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4 text-[#0180ae]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#0180ae] transition-colors duration-300">
            {product.name}
          </h3>

          <span className="text-[#0180ae] text-sm font-medium inline-flex items-center gap-1 group-hover:translate-x-1 group-hover:text-[#00a4d6] transition-all duration-300">
            Detail produktu
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsPage;
