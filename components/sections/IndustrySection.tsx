"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function IndustrySection() {
  const [iconIndex, setIconIndex] = useState(0);
  const totalIcons = 6;
  const visibleIcons = 4;
  const [sliderPosition, setSliderPosition] = useState(50); // 0-100
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<number>(0);

  const iconContent = [
    {
      title: "Doprava",
      bullets: [
        "Stabilnější povrch bez kondenzace a koroze",
        "Nižší náklady na udržení teploty",
        "Bezpečnější kontakt s horkými povrchy",
      ],
      images: [
        "/home/slider-odvetvi/vlak1.jpg",
        "/home/slider-odvetvi/vlak2.jpg",
      ],
    },
    {
      title: "Stavby",
      bullets: [
        "Omezení tepelných ztrát",
        "Ochrana proti plísním",
        "Zvládá členité / profilované fasády",
      ],
      images: [
        "/home/slider-odvetvi/kostel1.jpg",
        "/home/slider-odvetvi/kostel2.jpg",
      ],
    },
    {
      title: "Termální stopa",
      bullets: ["Snížená termální stopa"],
      images: [
        "/home/slider-odvetvi/thermovize1.jpg",
        "/home/slider-odvetvi/thermovize2.jpg",
      ],
    },
    {
      title: "Přeprava",
      bullets: ["Omezení kondenzace", "Zpomalení koroze"],
      images: [
        "/home/slider-odvetvi/lod1.jpg",
        "/home/slider-odvetvi/lod2.jpg",
      ],
    },
    {
      title: "Potrubní systémy",
      bullets: [
        "Nižší povrchová teplota potrubí",
        "Stabilnější teplota média uvnitř",
      ],
      images: [
        "/home/slider-odvetvi/trubky1.jpg",
        "/home/slider-odvetvi/trubky2.jpg",
      ],
    },
    {
      title: "Bioplyn",
      bullets: ["Udržení teploty fermentačního procesu"],
      images: [
        "/home/slider-odvetvi/biopklynka1.jpg",
        "/home/slider-odvetvi/bioplynka2.jpg",
      ],
    },
  ] as const;

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

  const updatePositionFromClientX = (clientX: number) => {
    const container = sliderContainerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const relativeX = clamp(clientX - rect.left, 0, rect.width);
    const percent = (relativeX / rect.width) * 100;
    setSliderPosition(percent);
  };

  // Animate slider on mount and icon change
  useEffect(() => {
    // Don't animate if user is dragging
    if (isDragging) return;

    // Reset and start animation
    setSliderPosition(0);

    let animationId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const animateSlider = () => {
      const steps = [
        { target: 75, duration: 1500 },
        { target: 25, duration: 1500 },
        { target: 50, duration: 1500 },
      ];

      let stepIndex = 0;
      let startTime = Date.now();
      let startPos = 0;

      const animate = () => {
        // Stop if user starts dragging
        if (isDragging) {
          if (animationId) cancelAnimationFrame(animationId);
          return;
        }

        if (stepIndex >= steps.length) return;

        const now = Date.now();
        const elapsed = now - startTime;
        const step = steps[stepIndex];
        const progress = Math.min(elapsed / step.duration, 1);

        // Ease in-out cubic function for smooth animation
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const easedProgress = easeInOutCubic(progress);
        const currentPos = startPos + (step.target - startPos) * easedProgress;

        setSliderPosition(currentPos);

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        } else {
          startPos = step.target;
          stepIndex++;
          startTime = Date.now();
          if (stepIndex < steps.length) {
            animationId = requestAnimationFrame(animate);
          }
        }
      };

      // Start animation after a short delay
      timeoutId = setTimeout(() => {
        startTime = Date.now();
        animationId = requestAnimationFrame(animate);
      }, 300);
    };

    animateSlider();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [selectedIcon, isDragging]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePositionFromClientX(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updatePositionFromClientX(e.touches[0].clientX);
      }
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove as any);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  const scrollDown = () => {
    if (iconIndex < totalIcons - visibleIcons) {
      setIconIndex(iconIndex + 1);
    }
  };

  const scrollUp = () => {
    if (iconIndex > 0) {
      setIconIndex(iconIndex - 1);
    }
  };

  // Mobile-specific horizontal strip scrolling (max 3 visible)
  const scrollRightMobile = () => {
    if (iconIndex < totalIcons - 3) {
      setIconIndex(iconIndex + 1);
    }
  };

  const scrollLeftMobile = () => {
    if (iconIndex > 0) {
      setIconIndex(iconIndex - 1);
    }
  };
  return (
    <section
      id="industry-section"
      className="relative w-full min-h-screen flex items-center overflow-hidden font-raleway"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E73B2] to-[#840000]"></div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* Left Column (text) */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-16 xl:pl-24 2xl:pl-32 w-full">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 text-white text-center lg:text-left pt-8 sm:pt-10 lg:pt-0">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight max-w-[14ch] sm:max-w-[16ch] lg:max-w-[22ch] mx-auto lg:mx-0">
                    Technologie, která funguje napříč segmenty
                  </h2>
                  <p className="text-sm sm:text-md mb-6 leading-relaxed max-w-[60ch] lg:max-w-[40ch] mx-auto lg:mx-0">
                    PS Coat se uplatňuje v dopravě, ve výrobních provozech, na
                    budovách i na strojních celcích. Používá se na kabiny,
                    konstrukce, střechy, potrubní systémy a povrchy vystavené
                    teplotní zátěži.
                  </p>
                  <p className="text-sm sm:text-md mb-6 leading-relaxed max-w-[60ch] lg:max-w-[40ch] mx-auto lg:mx-0">
                    V prostředí s vysokou teplotou umožňuje bezpečnější práci a
                    v některých aplikacích dokáže ovlivnit i to, jak se povrch
                    chová v obrazu termokamer.
                  </p>
                  <p className="text-sm sm:text-md mb-8 leading-relaxed max-w-[60ch] lg:max-w-[40ch] mx-auto lg:mx-0">
                    Stejný materiál, který se přirozeně začlení do různých
                    provozů, bez ohledu na obor a podmínky. Jedna vrstva, která
                    přináší řešení i tam, kde dřív žádné nebylo.
                  </p>
                  <div className="flex flex-col items-center gap-3 mb-8 justify-center sm:flex-col md:flex-col lg:flex-row lg:items-center lg:justify-start">
                    <img
                      src="/home/ikony-vlastnosti/thermo-barrier.png"
                      alt="Fire barrier"
                      className="h-6 w-auto object-contain"
                    />
                    <img
                      src="/home/ikony-vlastnosti/fire-barrier.png"
                      alt="Thermo barrier"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <button className="px-6 py-3 mb-8 md:mb-0 lg:mb-0 bg-gray-200 text-gray-800 rounded-sm hover:bg-gray-300 transition-colors font-medium">
                      Vlastnosti PS Coat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 lg:gap-8 items-start">
              {/* Icon Column - Desktop/Large only (vertical) */}
              <div className="hidden lg:block lg:col-span-2 pt-[15vh] pb-[15vh]">
                <div className="relative h-[70vh] w-full">
                  {/* Up Button - always visible, disabled when at top */}
                  <button
                    onClick={scrollUp}
                    disabled={iconIndex <= 0}
                    className={`absolute left-1/2 -translate-x-1/2 -top-14 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors ${
                      iconIndex <= 0
                        ? "bg-white/10 cursor-not-allowed opacity-50"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                    aria-label="Scroll up"
                  >
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                  {/* Scroll Container area locked to image height */}
                  <div className="absolute inset-0 overflow-hidden flex flex-col">
                    {/* Icons Container with Transform */}
                    <div
                      className="flex flex-col transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateY(calc(-${iconIndex} * ((70vh - 3 * 2vh) / 4 + 2vh)))`,
                        gap: "2vh",
                      }}
                    >
                      {/* Icon 1 */}
                      <button
                        onClick={() => {
                          setSelectedIcon(0);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 0 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/letadlo.svg"
                            alt="Doprava"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>

                      {/* Icon 2 */}
                      <button
                        onClick={() => {
                          setSelectedIcon(1);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 1 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/kostel.svg"
                            alt="Kostel"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>

                      {/* Icon 3 */}
                      <button
                        onClick={() => {
                          setSelectedIcon(2);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 2 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/thermovision.svg"
                            alt="Thermovize"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>

                      {/* Icon 4 */}
                      <button
                        onClick={() => {
                          setSelectedIcon(3);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 3 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/lod.svg"
                            alt="Lod"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>

                      {/* Icon 5 */}
                      <button
                        onClick={() => {
                          setSelectedIcon(4);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 4 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/trubky.svg"
                            alt="Trubky"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>

                      {/* Icon 6 - Bioplynka */}
                      <button
                        onClick={() => {
                          setSelectedIcon(5);
                          setSliderPosition(50);
                        }}
                        className="flex items-center justify-center relative flex-shrink-0 transition-colors"
                        style={{
                          width: "100%",
                          height: "calc((70vh - 3 * 2vh) / 4)",
                        }}
                      >
                        <div
                          className={`w-full h-full rounded-lg flex items-center justify-center ${
                            selectedIcon === 5 ? "bg-white/30" : ""
                          }`}
                        >
                          <img
                            src="/home/slider-odvetvi/silo.svg"
                            alt="Silo"
                            className="w-[70%] h-[70%] object-contain filter brightness-0 invert"
                            style={{
                              width: "70%",
                              height: "70%",
                            }}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* Down Button - always visible, disabled when at bottom */}
                  <button
                    onClick={scrollDown}
                    disabled={iconIndex >= totalIcons - visibleIcons}
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-14 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors ${
                      iconIndex >= totalIcons - visibleIcons
                        ? "bg-white/10 cursor-not-allowed opacity-50"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                    aria-label="Scroll down"
                  >
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Icon Row - Mobile only (horizontal) */}
              <div className="col-span-12 lg:hidden">
                <div className="relative w-full py-2 mb-2">
                  {/* Left Arrow */}
                  <button
                    onClick={scrollLeftMobile}
                    disabled={iconIndex <= 0}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      iconIndex <= 0
                        ? "bg-white/20 cursor-not-allowed opacity-50"
                        : "bg-white/30 hover:bg-white/40"
                    }`}
                    aria-label="Scroll left"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  {/* Icons strip */}
                  {/* Viewport width equals 3 items (3*64 + 2*12 = 216px) */}
                  <div className="mx-auto overflow-hidden w-[216px] lg:w-auto">
                    <div
                      className="flex items-center gap-3 transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(calc(-${iconIndex} * (64px + 12px)))`,
                      }}
                    >
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedIcon(idx);
                            setSliderPosition(50);
                          }}
                          className={`flex items-center justify-center w-16 h-16 rounded-lg flex-shrink-0 ${
                            selectedIcon === idx ? "bg-white/30" : "bg-white/10"
                          }`}
                        >
                          <img
                            src={
                              idx === 0
                                ? "/home/slider-odvetvi/letadlo.svg"
                                : idx === 1
                                ? "/home/slider-odvetvi/kostel.svg"
                                : idx === 2
                                ? "/home/slider-odvetvi/thermovision.svg"
                                : idx === 3
                                ? "/home/slider-odvetvi/lod.svg"
                                : idx === 4
                                ? "/home/slider-odvetvi/trubky.svg"
                                : "/home/slider-odvetvi/silo.svg"
                            }
                            alt="Ikona odvětví"
                            className="w-10 h-10 object-contain filter brightness-0 invert"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Right Arrow */}
                  <button
                    onClick={scrollRightMobile}
                    disabled={iconIndex >= totalIcons - 3}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      iconIndex >= totalIcons - 3
                        ? "bg-white/20 cursor-not-allowed opacity-50"
                        : "bg-white/30 hover:bg-white/40"
                    }`}
                    aria-label="Scroll right"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div className="col-span-12 lg:col-span-10 relative flex flex-col items-center justify-center w-full pt-2 pb-10 lg:py-[15vh]">
                <div
                  ref={sliderContainerRef}
                  className="relative overflow-hidden w-full h-[70vh]"
                >
                  {/* Background Image (dynamic before) */}
                  <img
                    src={iconContent[selectedIcon].images[0]}
                    loading="eager"
                    alt="Industry showcase before"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Foreground Image (placeholder-2) - clipped based on slider */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <img
                      src={iconContent[selectedIcon].images[1]}
                      loading="eager"
                      alt="Industry showcase after"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Vertical Slider (draggable anywhere along the line) */}
                  <div
                    className="absolute inset-0 cursor-ew-resize z-20"
                    onMouseDown={(e) => {
                      setIsDragging(true);
                      updatePositionFromClientX(e.clientX);
                    }}
                    onTouchStart={(e) => {
                      setIsDragging(true);
                      if (e.touches && e.touches[0]) {
                        updatePositionFromClientX(e.touches[0].clientX);
                      }
                    }}
                  >
                    {/* Vertical dividing line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                      style={{
                        left: `${sliderPosition}%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                    {/* Handle at the center of the line */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing"
                      style={{
                        left: `${sliderPosition}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 19l-7-7 7-7"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 19l7-7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 text-white">
                  <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
                    {/* Title */}
                    <h3 className="text-left text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug lg:flex lg:items-center">
                      {iconContent[selectedIcon].title}
                    </h3>
                    {/* Vertical divider */}
                    <div className="hidden lg:block self-stretch">
                      <div className="w-px h-full bg-white/30"></div>
                    </div>
                    {/* Bullets (dynamic count) */}
                    <div className="flex flex-col gap-1">
                      {iconContent[selectedIcon].bullets.map((bullet, idx) => (
                        <p
                          key={idx}
                          className="text-left text-sm lg:text-base flex items-center gap-2"
                        >
                          <svg
                            className="w-4 h-4 text-white opacity-80"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                          </svg>
                          <span>{bullet}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
