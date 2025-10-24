"use client";

import React from "react";
import Link from "next/link";

interface NavbarExtraCardProps {
  type: "features" | "about" | "contact";
  onLinkClick?: () => void;
}

const NavbarExtraCard: React.FC<NavbarExtraCardProps> = ({
  type,
  onLinkClick,
}) => {
  if (type === "features") {
    return (
      <div
        className="h-full rounded-2xl border border-gray-200 bg-white/90 hover:bg-white backdrop-blur p-6 shadow-sm flex flex-col justify-between overflow-hidden transition-colors duration-200"
        aria-label="Features highlight"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Powerful Features
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Discover our cutting-edge design tools and innovative solutions that
          help you create stunning visuals.
        </p>

        {/* Feature preview */}
        <div className="relative mb-4">
          <div className="w-full h-32 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-xl flex items-center justify-center">
            <div className="text-white text-4xl font-bold">3D</div>
          </div>
        </div>

        <div className="mt-auto flex justify-center">
          <Link
            href="/features"
            onClick={onLinkClick}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/80 hover:to-[#00a4d6]/80 font-semibold py-2 px-4 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl text-sm"
          >
            Explore Features
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
      </div>
    );
  }

  if (type === "about") {
    return (
      <div
        className="h-full rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 p-6 shadow-sm flex flex-col transition-colors duration-200"
        aria-label="About highlight"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-3">About PScoat</h3>
        <ul className="space-y-3 text-sm text-gray-700 flex-1">
          <li className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-[#0180ae]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Innovative 3D design platform
          </li>
          <li className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-[#0180ae]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Advanced rendering technology
          </li>
          <li className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-[#0180ae]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Trusted by thousands of designers
          </li>
        </ul>
        <Link
          href="/about"
          onClick={onLinkClick}
          className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/80 hover:to-[#00a4d6]/80 font-semibold py-2 px-4 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl text-sm"
        >
          Learn More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

  if (type === "contact") {
    return (
      <div
        className="h-full rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:to-gray-100 p-6 shadow-sm flex flex-col transition-colors duration-200 relative overflow-hidden"
        aria-label="Contact help highlight"
      >
        {/* Decorative elements */}
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-[#0180ae]/10 blur-3xl opacity-70" />
        <div className="absolute -right-8 bottom-0 w-36 h-36 rounded-full bg-[#00a4d6]/10 blur-3xl opacity-60" />

        <div className="grid md:grid-cols-3 gap-6 items-center flex-1">
          {/* Illustration */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="w-56 h-40 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] rounded-xl flex items-center justify-center">
              <div className="text-white text-2xl font-bold">💬</div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Ready to start your design journey? Contact our team for
              personalized assistance.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@pscoat.com"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/80 hover:to-[#00a4d6]/80 font-semibold py-2 px-4 whitespace-nowrap transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl text-sm"
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@pscoat.com
              </a>
              <a
                href="tel:+1234567890"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:from-[#0180ae]/80 hover:to-[#00a4d6]/80 font-semibold py-2 px-4 whitespace-nowrap transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl text-sm"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default NavbarExtraCard;
