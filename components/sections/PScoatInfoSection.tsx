"use client";

import PScoatHero from "./PScoatHero";
import ProtectionFeatures from "./ProtectionFeatures";
import SustainabilityBenefits from "./SustainabilityBenefits";
import KeyFeatures from "./KeyFeatures";
import { SPACING, GRADIENTS } from "../../lib/constants/design";

export default function PScoatInfoSection() {
  return (
    <section
      className={`w-full ${SPACING.section.padding} bg-gradient-to-b ${GRADIENTS.backgroundReverse} relative overflow-hidden`}
    >
      <div className={SPACING.container.maxWidth}>
        <PScoatHero />

        <ProtectionFeatures />

        <SustainabilityBenefits />

        <KeyFeatures />
      </div>
    </section>
  );
}
