"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <h1 className="text-white text-5xl font-bold">Welcome to My Mockup</h1>
      </section>

      {/* Scroll-driven Spline Section */}
      <section className="bg-[#252854] relative w-full h-[1200vh]">
        <div className="sticky top-0 w-full h-screen">
          <Spline
            scene="https://prod.spline.design/rzZ4WPhunmMFQ3aU/scene.splinecode"
            className="absolute inset-0"
          />
          {/* Vignette Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-radial from-transparent via-transparent to-black/30"></div>
          </div>
        </div>
      </section>

      {/* Normal content below */}
      <section className="w-full h-screen flex items-center justify-center bg-white">
        <p className="text-gray-800 text-2xl">
          Scrollable normal content continues here...
        </p>
      </section>

      <section className="w-full h-screen flex items-center justify-center bg-gray-200">
        <p className="text-gray-800 text-2xl">
          More content after Spline scroll animation...
        </p>
      </section>
    </main>
  );
}
