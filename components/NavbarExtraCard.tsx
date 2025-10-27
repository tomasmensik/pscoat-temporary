"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarExtraCardProps {
  type: "co-je-pscoat" | "produkty" | "o-nas";
  onLinkClick?: () => void;
}

interface ProtectionItemProps {
  img: string;
  label: string;
}

const ProtectionItem: React.FC<ProtectionItemProps> = ({ img, label }) => (
  <div className="group flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100/50 transition-colors duration-150">
    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
      <Image
        src={img}
        alt={`Ochrana proti ${label}`}
        width={24}
        height={24}
        className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-150"
      />
    </div>
    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
      {label}
    </span>
  </div>
);

const NavbarExtraCard: React.FC<NavbarExtraCardProps> = ({
  type,
  onLinkClick,
}) => {
  if (type === "co-je-pscoat") {
    return (
      <div
        className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm transition-colors duration-200"
        aria-label="Savings calculator"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-5m-6 5v-5m3 5h6M9 7h6m0 10v-5m-6 5v-5"
              />
            </svg>
          </div>
          <h3 className="text-sm font-bold text-gray-900">
            Zjistěte, kolik můžete ušetřit
          </h3>
        </div>

        <div className="bg-white rounded-lg p-3 mb-3 border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Před aplikací</span>
            <div>
              <span className="text-xs text-red-600 font-semibold">100%</span>
              <span className="text-xs text-gray-500"> ceny</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Po aplikaci PScoat</span>
            <div>
              <span className="text-xs text-green-600 font-semibold">60%</span>
              <span className="text-xs text-gray-500"> ceny</span>
            </div>
          </div>
        </div>

        <Link
          href="/vypocitat-uspory"
          onClick={onLinkClick}
          className="group inline-flex items-center justify-center gap-1 w-full rounded-lg bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/90 hover:to-[#00a4d6]/90 font-semibold py-2 px-3 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-md text-xs"
        >
          Spočítat moje úspory
          <svg
            className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
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
        </Link>
      </div>
    );
  }

  if (type === "produkty") {
    return (
      <div
        className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50/30 p-4 shadow-sm transition-colors duration-200 h-full"
        aria-label="Produkty highlight"
      >
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Left Side - Image Placeholder */}
          <div className="bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full text-gray-400 p-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Right Side - Content & CTAs */}
          <div className="col-span-2 flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Nejste si jistí, co vybrat?
              </h3>
              <p className="text-sm text-gray-600">
                Zavolejte nám nebo napište — společně vybereme ideální variantu
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/kontakt"
                onClick={onLinkClick}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/90 hover:to-[#00a4d6]/90 transition-all duration-300 group"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-semibold">Napište nám</span>
              </Link>

              <Link
                href="/vypocitat-uspory"
                onClick={onLinkClick}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/90 hover:to-[#00a4d6]/90 transition-all duration-300 group"
              >
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-xs font-semibold">Požádat o nabídku</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "o-nas") {
    return (
      <div
        className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50/30 p-4 shadow-sm transition-colors duration-200 h-full"
        aria-label="O nás highlight"
      >
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Left Side - Image Placeholder */}
          <div className="bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <svg
              className="w-full h-full text-gray-400 p-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Right Side - Content & CTAs */}
          <div className="col-span-2 flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Nejste si jistí, co vybrat?
              </h3>
              <p className="text-sm text-gray-600">
                Zavolejte nám nebo napište — společně vybereme ideální variantu
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/kontakt"
                onClick={onLinkClick}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/90 hover:to-[#00a4d6]/90 transition-all duration-300 group"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-semibold">Napište nám</span>
              </Link>

              <Link
                href="/vypocitat-uspory"
                onClick={onLinkClick}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/90 hover:to-[#00a4d6]/90 transition-all duration-300 group"
              >
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-xs font-semibold">Požádat o nabídku</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default NavbarExtraCard;
