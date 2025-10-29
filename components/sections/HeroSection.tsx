"use client";

import { useEffect, useRef } from "react";
import Navbar from "../shared/navbar/Navbar";

declare global {
  interface Window {
    Vimeo: any;
  }
}

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load Vimeo Player API script
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current && window.Vimeo) {
        const player = new window.Vimeo.Player(iframeRef.current);
        // Set loop to true for infinite repeat
        player.setLoop(true);
        // Autoplay
        player.play();
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Background Video - Vimeo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "177.78vh", // 16:9 aspect ratio based on height
            height: "100vh",
            minWidth: "100vw",
            minHeight: "56.25vw", // 16:9 aspect ratio based on width
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              width: "100%",
              height: "100%",
              transform: "scale(1.5)", // Scale up to ensure cover effect
              transformOrigin: "center center",
            }}
          >
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1131819800?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
              title="PSCoat-hero"
            />
          </div>
        </div>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Navbar - part of hero section */}
      <div className="relative z-20">
        <Navbar isNavbarVisible={true} />
      </div>

      {/* Subtle Play Icon in Background (very faint) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-5">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <path d="M40 30L40 90L90 60L40 30Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main Content - centered vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Vrstva,
            <br />
            která mění pravidla.
          </h1>

          {/* Tagline */}
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-black">
            Izoluje. Nehoří. Funguje v 1 mm.
          </p>
        </div>
      </div>

      {/* Scroll Indicator (V-shaped arrow) */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center z-20">
        <button
          type="button"
          aria-label="Scrollnout dolů"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            className="animate-subtle-bounce"
          >
            <defs>
              <linearGradient
                id="arrowGradientLeft"
                x1="2"
                y1="4"
                x2="12"
                y2="18"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#E01A00" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient
                id="arrowGradientRight"
                x1="12"
                y1="18"
                x2="22"
                y2="4"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#1F72B0" />
              </linearGradient>
            </defs>
            <path
              d="M2 4 L12 18"
              stroke="url(#arrowGradientLeft)"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M22 4 L12 18"
              stroke="url(#arrowGradientRight)"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
