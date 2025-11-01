"use client";

import HeaderSection from "@/components/sections/shared/HeaderSection";
import MicrospheresSection from "@/components/sections/technologie/MicrospheresSection/MicrospheresSection";
import InsulationSection from "@/components/sections/technologie/InsulationSection/InsulationSection";
import SuitableAreasSection from "@/components/sections/technologie/SuitableAreasSection/SuitableAreasSection";
import ComparisonSection from "@/components/sections/technologie/ComparisonSection/ComparisonSection";
import SpecificPropertiesSection from "@/components/sections/technologie/SpecificPropertiesSection/SpecificPropertiesSection";

export default function TechnologyPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        <HeaderSection
          titleKey="technology.title"
          subtitleKey="technology.subtitle"
        />

        <MicrospheresSection />
        <InsulationSection />
        <SuitableAreasSection />
        <ComparisonSection />
        <SpecificPropertiesSection />
      </main>
    </>
  );
}
