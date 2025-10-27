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
              { image: "/gallery/01.jpg", text: "Bioplynové stanice" },
              { image: "/gallery/02.jpg", text: "Skladovací sila" },
              { image: "/gallery/03.jpg", text: "Strojní díly" },
              { image: "/gallery/04.jpg", text: "Průmyslové nádrže" },
              { image: "/gallery/05.jpg", text: "Potrubí" },
              { image: "/gallery/05b.jpg", text: "Potrubí" },
              { image: "/gallery/06.jpg", text: "Zásobníky" },
              { image: "/gallery/07.jpg", text: "Potrubní armatury" },
              { image: "/gallery/08.jpg", text: "Přírubové ventily" },
              { image: "/gallery/09.jpg", text: "Potrubní spoje" },
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
