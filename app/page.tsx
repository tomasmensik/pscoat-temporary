"use client";

import dynamic from "next/dynamic";
import { memo } from "react";
import HeroSection from "../components/sections/HeroSection";
import PScoatInfoSection from "../components/sections/PScoatInfoSection";
import SplineSection from "../components/sections/SplineSection";
import JakAplikovatSection from "../components/sections/JakAplikovatSection";
import { GRADIENTS } from "../lib/constants/design";
import { GALLERY_ITEMS, GALLERY_CONFIG } from "../lib/constants/gallery";

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

      {/* PScoat Information Section */}
      <PScoatInfoSection />

      {/* Scroll-driven Spline Section */}
      <SplineSection splineSectionRef={undefined} />

      {/* Jak aplikovat PScoat Section */}
      <JakAplikovatSection />
    </>
  );
}
