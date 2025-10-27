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

// Import CircularGallery dynamically but without SSR for eager loading
const CircularGallery = dynamic(() => import("../components/CircularGallery"), {
  ssr: false,
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
  groups?: NavGroup[];
  href?: string;
  dropdown?: boolean;
}

const topNav: TopItem[] = [
  {
    label: "Co je PSCoat?",
    groups: [
      {
        title: "Informace o produktu",
        items: [
          {
            label: "Specifické vlastnosti",
            href: "/co-je-pscoat/vlastnosti",
            desc: "Klíčové vlastnosti PScoat",
          },
          {
            label: "Porovnání izolací",
            href: "/co-je-pscoat/porovnani",
            desc: "PScoat vs klasická izolace",
          },
        ],
      },
      {
        title: "Použití a aplikace",
        items: [
          {
            label: "Aplikace",
            href: "/co-je-pscoat/aplikace",
            desc: "Způsoby aplikace PScoat",
          },
          {
            label: "Použití",
            href: "/co-je-pscoat/pouziti",
            desc: "Možnosti využití PScoat",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Produkty",
    groups: [
      {
        title: "Oblast použití",
        items: [
          {
            label: "Stavebnictví",
            href: "/produkty/stavebnictvi",
            desc: "Izolace pro stavební průmysl",
          },
          {
            label: "Průmysl",
            href: "/produkty/prumysl",
            desc: "Průmyslové aplikace",
          },
          {
            label: "Veřejný sektor a zdravotnictví",
            href: "/produkty/verejny-sektor",
            desc: "Zdravotnictví a veřejné budovy",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Reference",
    href: "/reference",
    dropdown: false,
  },
  {
    label: "O nás",
    groups: [
      {
        title: "Společnost",
        items: [
          {
            label: "Náš cíl",
            href: "/o-nas/cil",
            desc: "Naše poslání a vize",
          },
          {
            label: "Černá listina",
            href: "/o-nas/cerna-listina",
            desc: "Nevhodné aplikace",
          },
          {
            label: "Ocenění",
            href: "/o-nas/oceneni",
            desc: "Certifikace a uznání",
          },
        ],
      },
    ],
    dropdown: true,
  },
  {
    label: "Kontakt",
    href: "/kontakt",
    dropdown: false,
  },
  {
    label: "Vypočítat úspory",
    href: "/vypocitat-uspory",
    dropdown: false,
  },
];

const ExtraCards: React.FC<{ label: string; onLinkClick?: () => void }> = ({
  label,
  onLinkClick,
}) => {
  if (label === "Co je PSCoat?") {
    return <NavbarExtraCard type="co-je-pscoat" onLinkClick={onLinkClick} />;
  }
  if (label === "Produkty") {
    return <NavbarExtraCard type="produkty" onLinkClick={onLinkClick} />;
  }
  if (label === "O nás") {
    return <NavbarExtraCard type="o-nas" onLinkClick={onLinkClick} />;
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
  const splineSectionRef = useRef<HTMLElement>(null);

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

  // Track navbar visibility based on Spline section
  useEffect(() => {
    const handleScroll = () => {
      if (!splineSectionRef.current) return;

      const sectionRect = splineSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if entire viewport is within the Spline section
      // Navbar should be hidden when the entire viewport is in the Spline section
      const isEntirelyInSection =
        sectionRect.top <= 0 && sectionRect.bottom >= windowHeight;

      setIsNavbarVisible(!isEntirelyInSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

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
              <img src="/logo.svg" alt="PScoat Logo" className="h-8 w-auto" />
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
              <button className="bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white px-6 py-2 rounded-sm text-sm font-medium hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Požádat o nabídku
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
              {current.label === "Co je PSCoat?" && (
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:divide-x lg:divide-gray-200 items-stretch">
                  {/* Column 1 - First group */}
                  {current.groups && current.groups[0] && (
                    <div className="lg:col-span-4 lg:px-6">
                      <NavbarDropdownColumn
                        group={current.groups[0]}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  )}
                  {/* Column 2 - Second group */}
                  {current.groups && current.groups[1] && (
                    <div className="lg:col-span-4 lg:px-6">
                      <NavbarDropdownColumn
                        group={current.groups[1]}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  )}
                  {/* Column 3 - Card */}
                  <div className="lg:col-span-4 lg:px-6 h-full flex items-start">
                    <div className="w-full">
                      <ExtraCards
                        label={current.label}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {["Produkty", "O nás"].includes(current.label) && (
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:divide-x lg:divide-gray-200 items-stretch">
                  {/* Subitems Column - col-4 */}
                  {current.groups && current.groups[0] && (
                    <div className="lg:col-span-4 lg:px-6">
                      <NavbarDropdownColumn
                        group={current.groups[0]}
                        onLinkClick={() => setOpen(null)}
                      />
                    </div>
                  )}
                  {/* Card Column - col-8 */}
                  <div className="lg:col-span-8 lg:px-6 h-full">
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
              {current.groups &&
                current.groups.map((group) => (
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
                  {item.groups &&
                    item.groups.map((group) => (
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
                Požádat o nabídku
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="w-full min-h-screen bg-[#eae9ea]">
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
            {!isSplineLoaded && <div className="w-full h-full bg-[#eae9ea]" />}
          </div>

          {/* Left Column - Content (col-8) */}
          <div className="relative z-10 w-full md:w-2/3 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2">
            <div className="max-w-3xl w-full">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Termoizolační ochrana
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed mb-8">
                PScoat využívá pokročilé mikrosféry na bázi nanotechnologií k
                dosažení špičkové tepelné izolace a ochrany povrchů.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#jak-funguje"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  Jak <span className="font-bold">PSCoat</span> funguje?
                </a>
                <a
                  href="/kontakt"
                  className="w-full sm:w-auto px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-lg hover:border-[#0180ae] hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Empty (col-4) */}
          <div className="hidden md:block w-1/3"></div>
        </section>

        {/* Circular Gallery Section */}
        <section className="w-full bg-gradient-to-b from-[#eae9ea] to-white py-2">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              items={[
                { image: "/gallery/01.jpg", text: "Aplikace PScoat" },
                { image: "/gallery/02.jpg", text: "Termoizolační ochrana" },
                { image: "/gallery/03.jpg", text: "Industriální použití" },
                { image: "/gallery/04.jpg", text: "Stavební aplikace" },
                { image: "/gallery/05.jpg", text: "Profesionální řešení" },
                { image: "/gallery/05b.jpg", text: "Detail aplikace" },
                { image: "/gallery/06.jpg", text: "Dlouhodobá ochrana" },
                { image: "/gallery/07.jpg", text: "Výsledek aplikace" },
                { image: "/gallery/08.jpg", text: "Energetické úspory" },
                { image: "/gallery/09.jpg", text: "Certifikovaný produkt" },
              ]}
              bend={3}
              textColor="#171717"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </section>

        {/* PScoat Information Section */}
        <section className="w-full py-32 bg-gradient-to-b from-white to-[#eae9ea] relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#0180ae]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00a4d6]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#0180ae]/5 to-[#00a4d6]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Modern Hero Text */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                POWER
                <span className="text-[#0180ae] font-bold"> SMART </span>
                COAT
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Špičkové moderní nátěry s využitím nanotechnologie pro dokonalou
                ochranu povrchů, výrazné energetické úspory a dlouhou životnost
              </p>
            </div>

            {/* Minimalist Feature Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Ochrana proti
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  {
                    icon: "/home/tepelne-ztraty.png",
                    title: "Tepelným ztrátám",
                    desc: "Maximální izolace",
                  },
                  {
                    icon: "/home/koroze.png",
                    title: "Korozi",
                    desc: "Dlouhá ochrana",
                  },
                  {
                    icon: "/home/kondenzace.png",
                    title: "Kondenzaci",
                    desc: "Vlhkost mimo",
                  },
                  {
                    icon: "/home/plisne.png",
                    title: "Plísním",
                    desc: "Zdravé prostředí",
                  },
                  {
                    icon: "/home/pozary.png",
                    title: "Požáru",
                    desc: "Bezpečnost",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white/40 backdrop-blur-sm p-8 rounded-t-3xl border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-md font-bold text-gray-900 mb-2 group-hover:text-[#0180ae] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] group-hover:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits with Modern Cards */}
            <div className="mb-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Ekologie a udržitelnost
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    gradient: "from-[#0180ae] to-[#00a4d6]",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    ),
                    title: "Ekologie a udržitelnost",
                    text: "PScoat je ekologický produkt s nízkou uhlíkovou stopou a šetrností k životnímu prostředí.",
                  },
                  {
                    gradient: "from-[#00a4d6] to-[#0180ae]",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    ),
                    title: "Zdraví a bezpečí",
                    text: "Jeho složení přispívá k ochraně zdraví a zvyšuje bezpečnost při používání.",
                  },
                  {
                    gradient: "from-[#0180ae] to-[#00a4d6]",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                        />
                      </svg>
                    ),
                    title: "Výkon a úspora",
                    text: "PScoat prodlužuje životnost zařízení a zajišťuje výraznou úsporu energií.",
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-3xl p-8 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0180ae]/10"
                  >
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                    >
                      {benefit.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 relative z-10 group-hover:text-[#0180ae] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features with Gradient */}
            <div className="relative rounded-[3rem] overflow-hidden bg-white border border-gray-200/50">
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-gray-900">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900">
                    Klíčové vlastnosti{" "}
                    <span className="font-bold text-[#0180ae]">PScoat</span>
                  </h3>
                  <p className="text-sm sm:text-md text-gray-600 max-w-2xl mx-auto">
                    PScoat odráží{" "}
                    <span className="font-bold text-lg text-[#0180ae]">
                      &gt;92%
                    </span>{" "}
                    světelného záření v celém svém spektru (TSR)
                  </p>
                </div>

                {/* Three Column Layout */}
                <div className="max-w-7xl mx-auto space-y-6">
                  {/* Main Features Grid */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                      <svg
                        className="w-6 h-6 text-[#0180ae]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Benefity
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Feature 1 - UV Protection */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">
                        UV odolný
                      </h4>
                      <p className="text-sm text-gray-600">
                        Netoxický a ekologický pro bezpečné použití
                      </p>
                    </div>

                    {/* Feature 2 - Energy Savings */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">
                        Energetické úspory
                      </h4>
                      <p className="text-sm text-gray-600">
                        Významná úspora energií a nákladů
                      </p>
                    </div>

                    {/* Feature 3 - Certified */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-4 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900">
                        Certifikovaný
                      </h4>
                      <p className="text-sm text-gray-600">
                        Plně certifikované produkty
                      </p>
                    </div>
                  </div>

                  {/* Surface Types Grid */}
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                      <svg
                        className="w-6 h-6 text-[#0180ae]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                      Typy povrchů
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        {
                          icon: (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          ),
                          label: "Na kov",
                        },
                        {
                          icon: (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                          ),
                          label: "Na stěny",
                        },
                        {
                          icon: (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          ),
                          label: "Na dřevo",
                        },
                        {
                          icon: (
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                          ),
                          label: "Na PVC / střechy",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center gap-3 group hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-[#0180ae]/30"
                        >
                          <div className="group-hover:scale-110 transition-transform duration-200 text-[#0180ae]">
                            {item.icon}
                          </div>
                          <div className="font-medium text-sm text-center text-gray-900">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll-driven Spline Section */}
        <section ref={splineSectionRef} className="relative w-full h-[1200vh]">
          {/* Wave Divider at start of Spline Section */}
          <div className="bg-gradient-to-b from-[#eae9ea] to-white w-full relative -mt-1 mb-0">
            <img
              src="/home/wave.svg"
              alt="wave divider"
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
          <img
            src="/home/wave2.svg"
            alt="wave divider"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

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
