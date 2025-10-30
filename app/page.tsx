"use client";

import HeroSection from "../components/sections/HeroSection";
import IndustrySection from "../components/sections/IndustrySection";
import FeaturesSection from "../components/sections/FeaturesSection";
import MicrosphereSection from "../components/sections/MicrosphereSection";
import SquareDynamicSection from "../components/sections/SquareDynamicSection";
import MaterialSection from "../components/sections/MaterialSection";
import CertificationSection from "../components/sections/CertificationSection";
import ReferencesSection from "../components/sections/ReferencesSection";
import FullScreenVideoSection from "../components/sections/FullScreenVideoSection";

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
