"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import NavbarDropdownColumn from "../components/NavbarDropdownColumn";
import NavbarExtraCard from "../components/NavbarExtraCard";

// Dynamically import Spline with no SSR to improve performance
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Loading 3D scene...</div>
    </div>
  ),
});

export interface NavLink {
  label: string;
  href: string;
  anchorId?: string;
  icon?: any;
  desc?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavLink[];
}

interface TopItem {
  label: string;
  groups: NavGroup[];
  href?: string;
  dropdown?: boolean;
}

const topNav: TopItem[] = [
  {
    label: "Features",
    groups: [
      {
        title: "Design Tools",
        items: [
          {
            label: "3D Modeling",
            href: "/features/3d-modeling",
            desc: "Create stunning 3D models",
          },
          {
            label: "Rendering",
            href: "/features/rendering",
            desc: "High-quality visual output",
          },
          {
            label: "Animation",
            href: "/features/animation",
            desc: "Bring your designs to life",
          },
        ],
      },
      {
        title: "Collaboration",
        items: [
          {
            label: "Team Workspace",
            href: "/features/workspace",
            desc: "Collaborate with your team",
          },
          {
            label: "Version Control",
            href: "/features/version-control",
            desc: "Track design iterations",
          },
          {
            label: "Sharing",
            href: "/features/sharing",
            desc: "Share your creations",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "About",
    groups: [
      {
        title: "Company",
        items: [
          { label: "Our Story", href: "/about/story", desc: "How we started" },
          { label: "Team", href: "/about/team", desc: "Meet our experts" },
          { label: "Careers", href: "/about/careers", desc: "Join our team" },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Contact",
    groups: [
      {
        title: "Get Help",
        items: [
          {
            label: "Support",
            href: "/contact/support",
            desc: "Get technical help",
          },
          {
            label: "Documentation",
            href: "/contact/docs",
            desc: "Learn how to use PScoat",
          },
          {
            label: "Community",
            href: "/contact/community",
            desc: "Connect with users",
          },
        ],
      },
    ],
    dropdown: true,
  },
];

const ExtraCards: React.FC<{ label: string; onLinkClick?: () => void }> = ({
  label,
  onLinkClick,
}) => {
  if (label === "Features") {
    return <NavbarExtraCard type="features" onLinkClick={onLinkClick} />;
  }
  if (label === "About") {
    return <NavbarExtraCard type="about" onLinkClick={onLinkClick} />;
  }
  if (label === "Contact") {
    return <NavbarExtraCard type="contact" onLinkClick={onLinkClick} />;
  }
  return null;
};

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState<boolean>(false);
  const current = open !== null ? topNav[open] : null;
  const heroRef = useRef<HTMLElement>(null);

  // Intersection Observer for hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll detection for navbar visibility
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hide navbar when entering the second Spline section (after hero section)
      // Show navbar when leaving the second Spline section
      if (scrollY > windowHeight && scrollY < windowHeight * 13) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Performance optimization: Only load Spline when hero is visible
  const handleSplineLoad = useCallback(() => {
    setIsSplineLoaded(true);
  }, []);

  // hover-intent timer to avoid flicker and keep banner open while navigating
  const closeTimer = useRef<number | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 120);
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/20 backdrop-blur-lg transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-black">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0180ae] to-[#00a4d6]">
                  PScoat
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-6 relative"
              onMouseLeave={scheduleClose}
            >
              {topNav.map((item, idx) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (item.dropdown === false) {
                      setOpen(null);
                    } else {
                      setOpen(idx);
                    }
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href={item.href || "#"}
                    className="py-2 px-2 font-medium transition-colors text-gray-800 hover:text-[#0180ae]"
                    onClick={(e) => {
                      if (!item.href || item.href === "#") {
                        e.preventDefault();
                      } else {
                        setOpen(null);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-[#0180ae] focus:outline-none focus:text-[#0180ae]"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed full-width dropdown banner */}
      {current && isNavbarVisible && (
        <div
          className="fixed left-0 right-0 top-16 bg-white/20 backdrop-blur-lg border-t border-gray-200 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] z-40"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Desktop layout with vertical dividers and equal-height columns */}
            <div>
              {["Features", "About", "Contact"].includes(current.label) && (
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:divide-x lg:divide-gray-200 items-stretch">
                  {/* Column 1 */}
                  {current.groups[0] && (
                    <div className="lg:px-6">
                      <NavbarDropdownColumn
                        group={current.groups[0]}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  )}
                  {/* Column 2 */}
                  {current.groups[1] && (
                    <div className="lg:px-6">
                      <NavbarDropdownColumn
                        group={current.groups[1]}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  )}
                  {/* Column 3: Extra card filling remaining height */}
                  <div className="lg:px-6 h-full">
                    <div className="h-full">
                      <ExtraCards
                        label={current.label}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile/Tablet layout */}
            <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-10">
              {current.groups.map((group) => (
                <div key={group.title}>
                  <div className="text-xs font-semibold text-[#0180ae] tracking-widest mb-3 uppercase">
                    {group.title}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#0180ae] transition-colors"
                        >
                          <span className="flex-1">
                            <span className="flex items-center gap-2 text-sm font-semibold">
                              {link.label}
                            </span>
                            {link.desc && (
                              <span className="block text-xs text-gray-500 mt-0.5">
                                {link.desc}
                              </span>
                            )}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <ExtraCards
                label={current.label}
                onLinkClick={() => setOpen(null)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && isNavbarVisible && (
        <div className="md:hidden border-t border-gray-200 bg-white/20 backdrop-blur-lg">
          <div className="py-4">
            {topNav.map((item, idx) => (
              <details key={item.label} className="group">
                <summary className="list-none cursor-pointer px-2 py-3 font-semibold flex items-center justify-between">
                  <span className="text-gray-800">{item.label}</span>
                  <span className="transition-transform group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <div className="pl-4 pb-4 space-y-4">
                  {item.groups.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs font-semibold text-[#0180ae] tracking-widest mb-2 uppercase">
                        {group.title}
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-start gap-3 px-2 py-2 text-gray-700 hover:text-[#0180ae]"
                            >
                              <span className="text-sm font-medium">
                                {link.label}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
            <div className="px-2 pt-2">
              <button className="w-full bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold py-2 px-4 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="w-full min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full h-screen flex">
          {/* Spline Background - Full Viewport with optimizations */}
          <div className="absolute inset-0 w-full h-full">
            {isHeroVisible && (
              <Spline
                scene="https://prod.spline.design/QevFsvUiomSFUvkb/scene.splinecode"
                onLoad={handleSplineLoad}
                style={{
                  width: "100%",
                  height: "100%",
                  // Performance optimizations
                  willChange: "transform",
                  transform: "translateZ(0)", // Force hardware acceleration
                }}
              />
            )}
            {/* Fallback background when Spline is not loaded */}
            {!isSplineLoaded && (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300" />
            )}
          </div>

          {/* Left Column - Content (col-8) */}
          <div className="relative z-10 w-2/3 flex flex-col justify-center items-center px-16 py-20">
            <div className="max-w-2xl text-left">
              <h1 className="text-6xl font-bold text-black leading-tight mb-6">
                Welcome to My
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0180ae] to-[#00a4d6]">
                  Mockup
                </span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                Experience the future of design with our cutting-edge platform.
                Create stunning visuals that captivate and inspire your
                audience.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:border-[#0180ae] hover:bg-gray-100 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Empty (col-4) */}
          <div className="w-1/3"></div>
        </section>

        {/* PScoat Information Section */}
        <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                POWER SMART COAT
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unikátní termoizolace s využitím nanotechnologie - špičkové
                moderní nátěry nové generace
              </p>
            </div>

            {/* Protection Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tepelným ztrátám
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Korozi
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kondenzaci
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Plísním
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Požáru
                </h3>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Jednoduchá aplikace
                  </h3>
                </div>
                <p className="text-gray-600">
                  PSC se nanáší strojem nebo ručně štětcem v tloušťce převážně
                  1,5 - 3 mm. Jednoduchá aplikace ve velmi krátkém čase.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ochrana zařízení
                  </h3>
                </div>
                <p className="text-gray-600">
                  Aplikace přímo na horký povrch. Odolnost vůči UV záření a
                  chemikáliím. Snadné opravy přímo na poškozeném místě.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ekologický produkt
                  </h3>
                </div>
                <p className="text-gray-600">
                  Nízká uhlíková stopa, šetrný k životnímu prostředí, ochrana
                  zdraví a prodlužuje životnost zařízení.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Klíčové vlastnosti PScoat
                </h3>
                <p className="text-xl opacity-90">
                  PScoat odráží &gt; 92% světelného záření v celém svém spektru
                  (TSR)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">
                    Vlastnosti produktu:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      UV odolný, netoxický a ekologický
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Významné energetické úspory
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Plně certifikované produkty
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Typy povrchů:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="font-semibold">Na kov</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🏠</div>
                      <div className="font-semibold">Na stěny</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🌳</div>
                      <div className="font-semibold">Na dřevo</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🏢</div>
                      <div className="font-semibold">Na PVC / střechy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll-driven Spline Section */}
        <section className="bg-[#252854] relative w-full h-[1200vh]">
          <div className="sticky top-0 w-full h-screen">
            <Spline
              scene="https://prod.spline.design/rzZ4WPhunmMFQ3aU/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
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
    </>
  );
}
