"use client";

import dynamic from "next/dynamic";
import WaveDivider from "../shared/WaveDivider";
import { SPLINE_SCENES } from "../../lib/constants/design";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

interface SplineSectionProps {
  splineSectionRef?: React.RefObject<HTMLElement>;
}

export default function SplineSection({
  splineSectionRef,
}: SplineSectionProps) {
  return (
    <>
      <section
        ref={splineSectionRef}
        data-spline-section
        className="relative w-full h-[1200vh]"
      >
        {/* Wave Divider at start of Spline Section */}
        <WaveDivider variant="wave" />

        <div className="bg-[#252854] sticky top-0 w-full h-screen">
          <Spline
            scene={SPLINE_SCENES.interactive}
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />
        </div>
      </section>
      {/* Wave Divider at end of Spline Section */}
      <WaveDivider variant="wave2" />
    </>
  );
}
