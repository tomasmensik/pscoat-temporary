"use client";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  isNavbarVisible: boolean;
}

const navItems = [
  { label: "Využití", href: "/#industry-section" },
  { label: "Produkty", href: "/produkty" },
  { label: "Technologie", href: "/technologie" },
  { label: "Realizace", href: "/#realizace-section" },
  { label: "Výrobce", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar({ isNavbarVisible }: NavbarProps) {
  return (
    <nav className="w-full bg-transparent relative z-20">
      <div className="max-w-7xl py-4 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center h-20 gap-12 lg:gap-16">
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
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/pozadat-o-nabidku"
                className="bg-[#2B659C] hover:bg-cyan-600 text-white px-6 py-3 rounded-sm text-xs transition-colors"
              >
                Chci technickou konzultaci
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-black hover:text-white focus:outline-none drop-shadow-sm">
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

          {/* Separator Line - matches the width of the navbar content */}
          <div className="h-px bg-black/80 w-full"></div>
        </div>
      </div>
    </nav>
  );
}
