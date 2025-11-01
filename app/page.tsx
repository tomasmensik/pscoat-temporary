"use client";

import HeroSection from "../components/sections/home/HeroSection/HeroSection";
import IndustrySection from "../components/sections/home/IndustrySection/IndustrySection";
import FeaturesSection from "../components/sections/home/FeaturesSection/FeaturesSection";
import MicrosphereSection from "../components/sections/home/MicrosphereSection/MicrosphereSection";
import SquareDynamicSection from "../components/sections/home/SquareDynamicSection/SquareDynamicSection";
import MaterialSection from "../components/sections/home/MaterialSection/MaterialSection";
import CertificationSection from "../components/sections/home/CertificationSection/CertificationSection";
import ReferencesSection from "../components/sections/home/ReferencesSection/ReferencesSection";
import FullScreenVideoSection from "../components/sections/home/FullScreenVideoSection/FullScreenVideoSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Industry Section */}
      <IndustrySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Full Height Background Section */}
      <MicrosphereSection />

      {/* Dynamic Squares Section */}
      <SquareDynamicSection />

      {/* Material Section */}
      <MaterialSection />

      {/* Certification Section */}
      <CertificationSection />

      {/* References logos Section */}
      <ReferencesSection />

      {/* Fullscreen Video Section */}
      <FullScreenVideoSection />
    </>
  );
}
