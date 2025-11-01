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
import { useI18n } from "@/lib/contexts/I18nContext";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PaintbrushIcon,
  ZoomIcon,
  CheckIcon,
  CloseIcon,
} from "@/components/icons";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { t } = useI18n();

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
            {t("productDetail.notFound")}
          </h1>
          <Link href="/produkty" className="text-[#0180ae] hover:underline">
            {t("productDetail.back")}
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
              <ArrowLeftIcon className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">{t("productDetail.back")}</span>
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
                  {t(`productDetails.${detail.id}.typ_produktu`) || detail.typ_produktu}
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
                      aria-label={t("productDetail.previousImage")}
                    >
                      <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={t("productDetail.nextImage")}
                    >
                      <ArrowRightIcon className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Color variant indicator */}
                {product.hasColorVariant && (
                  <div className="absolute top-6 right-6 group/color">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer">
                      <PaintbrushIcon className="w-5 h-5 text-[#0180ae]" />
                      <p className="text-xs text-gray-700 font-medium whitespace-nowrap">
                        {t("productDetail.colorVariants")}
                      </p>
                    </div>

                    {/* Color variant popup */}
                    <div className="absolute top-14 right-0 bg-white rounded-xl shadow-2xl p-4 w-72 z-50 border border-gray-100 opacity-0 invisible group-hover/color:opacity-100 group-hover/color:visible transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <PaintbrushIcon className="w-5 h-5 text-[#0180ae] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">
                            {t("productDetail.colorVariants")}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {t("productDetail.colorVariantsDescription")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Zoom indicator */}
                <div className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <ZoomIcon className="w-6 h-6" />
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
                      {t("productDetail.productDescription")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`productDetails.${detail.id}.description`) || detail.description}
                    </p>
                  </div>

                  {/* Usage */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("productDetail.usage")}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {t(`productDetails.${detail.id}.pouziti`) || detail.pouziti}
                    </p>
                  </div>

                  {/* Key Features - compact */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("productDetail.keyFeatures")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {detail.vlastnosti.slice(0, 6).map((vlastnost, index) => {
                        const translatedVlastnost = t(`productDetails.${detail.id}.vlastnosti.${index}`) || vlastnost;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-lg bg-gray-50"
                          >
                            <CheckIcon className="w-5 h-5 text-[#0180ae] flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                              {translatedVlastnost}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Link
                  href="/pozadat-o-nabidku"
                  className="flex-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 text-center"
                >
                  {t("productDetail.requestConsultation")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("productDetail.relatedProducts")}
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
            aria-label={t("productDetail.close")}
          >
            <CloseIcon className="w-10 h-10" />
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
                aria-label={t("productDetail.previousImage")}
              >
                <ArrowLeftIcon className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all"
                aria-label={t("productDetail.nextImage")}
              >
                <ArrowRightIcon className="w-8 h-8" />
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
