"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/sections/HeroSection";
import PScoatInfoSection from "../components/sections/PScoatInfoSection";
import SplineSection from "../components/sections/SplineSection";
import JakAplikovatSection from "../components/sections/JakAplikovatSection";

// Dynamically import CircularGallery without SSR for eager loading
const CircularGalleryDynamic = dynamic(
  () => import("../components/circular-gallery/CircularGallery"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection onVisibilityChange={() => {}} />

      {/* Circular Gallery Section */}
      <section className="w-full bg-gradient-to-b from-[#eae9ea] to-white py-2">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGalleryDynamic
            items={[
              { image: "/gallery/01.jpg", text: "Aplikace PScoat" },
              { image: "/gallery/02.jpg", text: "Termoizolační ochrana" },
              { image: "/gallery/03.jpg", text: "Industriální použití" },
              { image: "/gallery/04.jpg", text: "Stavební aplikace" },
              { image: "/gallery/05.jpg", text: "Profesionální řešení" },
              { image: "/gallery/05b.jpg", text: "Detail aplikace" },
              { image: "/gallery/06.jpg", text: "Dlouhodobá ochrana" },
              { image: "/gallery/07.jpg", text: "Výsledek aplikace" },
              { image: "/gallery/08.jpg", text: "Energetické úspory" },
              { image: "/gallery/09.jpg", text: "Certifikovaný produkt" },
            ]}
            bend={3}
            textColor="#171717"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>

      {/* PScoat Information Section */}
      <PScoatInfoSection />

      {/* Scroll-driven Spline Section */}
      <SplineSection splineSectionRef={undefined} />

      {/* Jak aplikovat PScoat Section */}
      <JakAplikovatSection />
    </>
  );
}
