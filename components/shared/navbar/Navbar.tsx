"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { TopItem } from "../../../lib/types/navigation";
import { topNav } from "../../../lib/constants/navigation";
import NavbarDropdown from "./NavbarDropdown";
import NavbarExtraCard from "../../NavbarExtraCard";
import NavbarDropdownColumn from "../../NavbarDropdownColumn";
import { COLORS, GRADIENTS } from "../../../lib/constants/design";

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

interface NavbarProps {
  isNavbarVisible: boolean;
}

export default function Navbar({ isNavbarVisible }: NavbarProps) {
  const [open, setOpen] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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

  const current = open !== null ? topNav[open] : null;

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/20 backdrop-blur-xl transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <Image
                  src="/logo.svg"
                  alt="PScoat Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto hover:opacity-80 transition-opacity"
                  priority
                />
              </a>
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
                    className={`py-2 px-2 font-medium transition-colors text-gray-800 hover:text-[${COLORS.brand.primary}]`}
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
              <a
                href="/pozadat-o-nabidku"
                className={`inline-block bg-gradient-to-r ${GRADIENTS.brand} text-white px-6 py-2 rounded-sm text-sm font-medium hover:shadow-lg hover:shadow-[${COLORS.brand.primary}]/25 transition-all duration-300 transform hover:-translate-y-0.5`}
              >
                Požádat o nabídku
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-800 hover:text-[${COLORS.brand.primary}] focus:outline-none focus:text-[${COLORS.brand.primary}]`}
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
        <NavbarDropdown
          current={current}
          onLinkClick={() => setOpen(null)}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
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
                        <div
                          className={`text-xs font-semibold text-[${COLORS.brand.primary}] tracking-widest mb-2 uppercase`}
                        >
                          {group.title}
                        </div>
                        <ul className="space-y-2">
                          {group.items.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-start gap-3 px-2 py-2 text-gray-700 hover:text-[${COLORS.brand.primary}]`}
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
              <a
                href="/pozadat-o-nabidku"
                className={`block w-full bg-gradient-to-r ${GRADIENTS.brand} text-white font-semibold py-2 px-4 rounded-lg text-center`}
              >
                Požádat o nabídku
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
