"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  productDetails,
  getProductDetail,
} from "../../../lib/constants/productDetails";
import { products } from "../../../lib/constants/products";
import { categories } from "../../../lib/constants/products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const product = products.find((p) => p.id === id);
  const detail = getProductDetail(id);

  // Get all images for the product (main image + detail images)
  const allImages =
    detail?.images ||
    (detail?.paperImage && product?.image
      ? [product.image, detail.paperImage]
      : product?.image
      ? [product.image]
      : []);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentImage = allImages[activeImageIndex] || allImages[0];

  const openLightbox = () => {
    setIsLightboxOpen(true);
    setZoomLevel(1); // Reset zoom when opening
  };
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1); // Reset zoom when closing
  };

  // Handle zoom with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (!isLightboxOpen) return;

    e.preventDefault();
    const delta = e.deltaY;
    const scaleFactor = 0.1;

    setZoomLevel((prev) => {
      const newZoom =
        delta < 0 ? prev + scaleFactor : Math.max(1, prev - scaleFactor);
      return Math.min(newZoom, 5); // Max zoom 5x
    });
  };

  // Reset zoom when switching images
  useEffect(() => {
    setZoomLevel(1);
  }, [activeImageIndex]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex(
          (prev) => (prev - 1 + allImages.length) % allImages.length
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % allImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, allImages.length]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  // If no product found, show 404
  if (!product || allImages.length === 0) {
    return (
      <main className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Produkt nenalezen
          </h1>
          <Link href="/produkty" className="text-[#0180ae] hover:underline">
            Zpět na produkty
          </Link>
        </div>
      </main>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setActiveImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const selectImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const category = categories[product.category];

  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
        {/* Header */}
        <section className="relative bg-white py-16 border-b border-gray-100">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/produkty"
              className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-[#0180ae] transition-colors group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Zpět na produkty</span>
            </Link>

            <div className="max-w-4xl">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0180ae]/10 rounded-full text-[#0180ae] text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-[#0180ae] rounded-full"></div>
                {category.name}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
                {product.name}
              </h1>

              {detail && (
                <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                  {detail.typ_produktu}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images Gallery */}
            <div className="space-y-4">
              {/* Main Product Image with Navigation */}
              <div
                className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden group cursor-pointer"
                onClick={openLightbox}
              >
                <Image
                  src={currentImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        previousImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Předchozí obrázek"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Další obrázek"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800"
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
                    </button>
                  </>
                )}

                {/* Color variant indicator */}
                {product.hasColorVariant && (
                  <div className="absolute top-6 right-6 group/color">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer">
                      <svg
                        className="w-5 h-5 text-[#0180ae]"
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
                      <p className="text-xs text-gray-700 font-medium whitespace-nowrap">
                        Barevné varianty
                      </p>
                    </div>

                    {/* Color variant popup */}
                    <div className="absolute top-14 right-0 bg-white rounded-xl shadow-2xl p-4 w-72 z-50 border border-gray-100 opacity-0 invisible group-hover/color:opacity-100 group-hover/color:visible transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#0180ae] flex-shrink-0 mt-0.5"
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
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">
                            Barevné varianty
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Tento produkt je možné objednat i ve verzi COLOR.
                            Možnost aplikace různých barevných odstínů ve škále
                            RAL.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Zoom indicator */}
                <div className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-4">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all ${
                        index === activeImageIndex
                          ? "ring-2 ring-[#0180ae] ring-offset-2"
                          : "opacity-60 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Description */}
              {detail && (
                <>
                  {/* Description */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Popis produktu
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.description}
                    </p>
                  </div>

                  {/* Usage */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Použití
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {detail.pouziti}
                    </p>
                  </div>

                  {/* Key Features - compact */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Hlavní vlastnosti
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {detail.vlastnosti.slice(0, 6).map((vlastnost, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg bg-gray-50"
                        >
                          <svg
                            className="w-5 h-5 text-[#0180ae] flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">
                            {vlastnost}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="/kontakt"
                  className="flex-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 text-center"
                >
                  Požádat o nabídku
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Podobné produkty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(
                (p) => p.category === product.category && p.id !== product.id
              )
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/produkty/${related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#0180ae] transition-colors">
                      {related.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Zavřít"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.05s ease-out",
              }}
            >
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all"
                aria-label="Předchozí obrázek"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all"
                aria-label="Další obrázek"
              >
                <svg
                  className="w-8 h-8"
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
              </button>
            </>
          )}

          {/* Image Counter & Zoom Info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center">
            {allImages.length > 1 && (
              <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {activeImageIndex + 1} / {allImages.length}
              </div>
            )}
            {zoomLevel !== 1 && (
              <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {Math.round(zoomLevel * 100)}%
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
