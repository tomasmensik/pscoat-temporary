"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Spline with no SSR to improve performance
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Loading 3D scene...</div>
    </div>
  ),
});

interface HeroSectionProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export default function HeroSection({ onVisibilityChange }: HeroSectionProps) {
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);

  // Intersection Observer for hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange?.(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [onVisibilityChange]);

  // Performance optimization: Only load Spline when hero is visible
  const handleSplineLoad = useCallback(() => {
    setIsSplineLoaded(true);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen flex">
      {/* Spline Background - Full Viewport with optimizations */}
      <div className="absolute inset-0 w-full h-full">
        {true && (
          <Spline
            scene="https://prod.spline.design/QevFsvUiomSFUvkb/scene.splinecode"
            onLoad={handleSplineLoad}
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />
        )}
        {/* Fallback background when Spline is not loaded */}
        {!isSplineLoaded && <div className="w-full h-full bg-[#eae9ea]" />}
      </div>

      {/* Left Column - Content (col-8) */}
      <div className="relative z-10 w-full md:w-2/3 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2">
        <div className="max-w-3xl w-full">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Termoizolační ochrana
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed mb-8">
            PScoat využívá pokročilé mikrosféry na bázi nanotechnologií k
            dosažení špičkové tepelné izolace a ochrany povrchů.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#jak-funguje"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Jak <span className="font-bold">PSCoat</span> funguje?
            </a>
            <a
              href="/kontakt"
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-lg hover:border-[#0180ae] hover:bg-gray-100 transition-all duration-300 text-center"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Empty (col-4) */}
      <div className="hidden md:block w-1/3"></div>
    </section>
  );
}
