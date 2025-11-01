"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/contexts/I18nContext";
import { Product } from "@/lib/constants/products";
import { ArrowRightIcon, PaintbrushIcon } from "@/components/icons";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useI18n();

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
                <PaintbrushIcon className="w-4 h-4 text-[#0180ae]" />
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
            {t("products.detailProduct")}
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

