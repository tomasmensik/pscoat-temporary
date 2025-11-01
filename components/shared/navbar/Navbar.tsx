"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import LanguageSwitcher from "../LanguageSwitcher";
import { HamburgerIcon, CloseIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { navItems } from "./data";

interface NavbarProps {
  isNavbarVisible: boolean;
}

export default function Navbar({ isNavbarVisible }: NavbarProps) {
  const { t } = useI18n();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mobile-menu-open");
    };
  }, [isMobileOpen]);

  return (
    <nav className="w-full bg-transparent relative z-20">
      <div className="max-w-7xl py-4 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative flex justify-center">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center h-20 gap-12 lg:gap-16 w-full justify-between md:justify-start">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="PScoat Logo"
                  width={120}
                  height={32}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black font-medium hover:text-[#2B659C] transition-colors text-sm drop-shadow-sm"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            {/* CTA Button and Language Switcher */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <LanguageSwitcher />
              <Button
                href="/pozadat-o-nabidku"
                variant="primary"
                size="sm"
              >
                {t("nav.chciKonzultaci")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Otevřít menu"
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen((v) => !v)}
                className="text-black hover:text-[#2B659C] focus:outline-none drop-shadow-sm"
              >
                {isMobileOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <HamburgerIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Separator Line - matches the width of the navbar content */}
          <div className="h-px bg-black/80 w-full"></div>

          {/* Mobile fullscreen overlay menu with backdrop blur */}
          {isMobileOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Backdrop: blurs page behind and dims */}
              <button
                aria-label="Zavřít menu"
                onClick={() => setIsMobileOpen(false)}
                className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-md"
              />

              {/* Menu content: full width, full height */}
              <div className="absolute inset-0 bg-white">
                {/* Top bar with same navbar layout + divider */}
                <div className="pt-[max(env(safe-area-inset-top),16px)]">
                  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center h-20 gap-12 lg:gap-16 w-full justify-between md:justify-start">
                        <div className="flex-shrink-0">
                          <Link
                            href="/"
                            onClick={() => setIsMobileOpen(false)}
                            className="flex-shrink-0"
                          >
                            <Image
                              src="/logo.svg"
                              alt="PScoat Logo"
                              width={120}
                              height={32}
                              className="h-12 w-auto"
                            />
                          </Link>
                        </div>
                        <button
                          aria-label="Zavřít menu"
                          onClick={() => setIsMobileOpen(false)}
                          className="p-2 text-black hover:text-[#2B659C]"
                        >
                          <CloseIcon className="h-7 w-7" />
                        </button>
                      </div>
                      <div className="h-px bg-black/80 w-full"></div>
                    </div>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pt-6 pb-[max(env(safe-area-inset-bottom),24px)] h-full overflow-auto">
                  <div className="space-y-5">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-black font-semibold hover:text-[#2B659C] transition-colors text-2xl"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                    <div className="pt-4">
                      <div className="flex justify-start -ml-3">
                        <LanguageSwitcher />
                      </div>
                    </div>
                    <Button
                      href="/pozadat-o-nabidku"
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={() => setIsMobileOpen(false)}
                      className="text-center"
                    >
                      {t("nav.chciKonzultaci")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
