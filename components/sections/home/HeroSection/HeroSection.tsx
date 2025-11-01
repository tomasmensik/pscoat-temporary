"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import { useI18n } from "@/lib/contexts/I18nContext";
import { PlayIcon, ScrollArrowIcon } from "@/components/icons";
import { loadVimeoPlayer } from "./utils";

export default function HeroSection() {
  const { t } = useI18n();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    return loadVimeoPlayer(iframeRef.current);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background Video - Vimeo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "max(100vw, 177.78vh)",
            height: "max(100vh, 56.25vw)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) scale(1.15)",
            transformOrigin: "center center",
          }}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1131819800?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            title="PSCoat-hero"
          />
        </div>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Navbar - part of hero section */}
      <div className="relative z-20">
        <Navbar isNavbarVisible={true} />
      </div>

      {/* Main Content - centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>

          {/* Tagline */}
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-black">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>

      {/* Scroll Indicator (V-shaped arrow) */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 hero-scroll-indicator">
        <button
          type="button"
          aria-label="Scrollnout dolů"
          onClick={() => {
            if (typeof window !== "undefined") {
              const targetElement = document.getElementById("industry-section");
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          <ScrollArrowIcon />
        </button>
      </div>
    </section>
  );
}
