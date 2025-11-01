"use client";

import HeaderSection from "@/components/sections/shared/HeaderSection";
import TimelineSection from "@/components/sections/o-nas/TimelineSection/TimelineSection";
import ProductionInfoSection from "@/components/sections/o-nas/ProductionInfoSection/ProductionInfoSection";
import AwardsSection from "@/components/sections/o-nas/AwardsSection/AwardsSection";

export default function ONas() {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
        <HeaderSection titleKey="about.title" subtitleKey="about.subtitle" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <TimelineSection />
          <ProductionInfoSection />
          <AwardsSection />
        </div>
      </main>
    </>
  );
}
