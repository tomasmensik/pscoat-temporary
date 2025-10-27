"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

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
        <div className="bg-gradient-to-b from-[#eae9ea] to-white w-full relative -mt-1 mb-0">
          <Image
            src="/home/wave.svg"
            alt="wave divider"
            width={1920}
            height={200}
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="bg-[#252854] sticky top-0 w-full h-screen">
          <Spline
            scene="https://prod.spline.design/rzZ4WPhunmMFQ3aU/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />
        </div>
      </section>
      {/* Wave Divider at start of Spline Section */}
      <div className="bg-gradient-to-b from-[#eae9ea] to-white w-full relative -mt-1 mb-0">
        <Image
          src="/home/wave2.svg"
          alt="wave divider"
          width={1920}
          height={200}
          className="w-full h-auto block"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}
