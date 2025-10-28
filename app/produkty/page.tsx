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
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        {/* Header Section */}
        <section className="relative bg-gradient-to-b from-gray-200 to-gray-100 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mt-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
                Naše produkty
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Kompletní portfolio izolačních systémů PScoat pro různé oblasti
                použití
              </p>
            </div>
          </div>
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m14.622 17.897-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                  />
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
