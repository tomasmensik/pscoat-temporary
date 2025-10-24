"use client";

import React, { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import NavbarDropdownColumn from "../components/NavbarDropdownColumn";
import NavbarExtraCard from "../components/NavbarExtraCard";

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
  const current = open !== null ? topNav[open] : null;

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
        <section className="relative w-full h-screen flex">
          {/* Spline Background - Full Viewport */}
          <div className="absolute inset-0 w-full h-full">
            <Spline scene="https://prod.spline.design/QevFsvUiomSFUvkb/scene.splinecode" />
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

        {/* Scroll-driven Spline Section */}
        <section className="bg-[#252854] relative w-full h-[1200vh]">
          <div className="sticky top-0 w-full h-screen">
            <Spline scene="https://prod.spline.design/rzZ4WPhunmMFQ3aU/scene.splinecode" />
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
