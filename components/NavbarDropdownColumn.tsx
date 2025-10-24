"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface NavbarDropdownColumnProps {
  group: NavGroup;
  className?: string;
  onLinkClick?: () => void;
}

const NavbarDropdownColumn: React.FC<NavbarDropdownColumnProps> = ({
  group,
  className = "",
  onLinkClick,
}) => {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (href: string): boolean => {
    // Exact match
    if (pathname === href) return true;

    // For anchor links, check if we're on the base page
    if (href.includes("#")) {
      const basePath = href.split("#")[0];
      if (pathname === basePath) return true;
    }

    // Check if current path starts with the href (for subpages)
    // But only if href is not just "/" to avoid false positives
    if (href !== "/" && pathname.startsWith(href)) return true;

    return false;
  };

  // Helper function to handle anchor links
  const handleAnchorClick = (
    e: React.MouseEvent,
    href: string,
    anchorId?: string
  ) => {
    if (anchorId && href.includes("#")) {
      e.preventDefault();

      // Check if we're already on the target page
      const basePath = href.split("#")[0];
      if (pathname === basePath) {
        // We're already on the page, just scroll to the section
        const targetElement = document.getElementById(anchorId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          // Close dropdown after clicking anchor link
          if (onLinkClick) {
            onLinkClick();
          }
        }
      } else {
        // We're on a different page, navigate first then scroll
        // Store the target section in sessionStorage
        sessionStorage.setItem("scrollToSection", anchorId);
        // Close dropdown before navigating
        if (onLinkClick) {
          onLinkClick();
        }
        // Navigate to the page
        window.location.href = href;
      }
    } else {
      // For regular links (not anchor links), just close the dropdown
      if (onLinkClick) {
        onLinkClick();
      }
    }
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="text-xs font-semibold text-gray-500 tracking-widest mb-3 uppercase">
        {group.title}
      </div>
      <ul className="space-y-2">
        {group.items.map((link) => {
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href, link.anchorId)}
                className={`group flex items-start gap-3 rounded-lg px-3 py-2 transition-colors ${
                  isActive(link.href)
                    ? "bg-[#0180ae]/10 text-[#0180ae]"
                    : "hover:bg-gray-50 text-gray-700 hover:text-[#0180ae]"
                }`}
              >
                <span className="flex-1">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    {link.label}
                  </span>
                  {link.desc && (
                    <span
                      className={`block text-xs mt-0.5 ${
                        isActive(link.href)
                          ? "text-[#0180ae]/70"
                          : "text-gray-500"
                      }`}
                    >
                      {link.desc}
                    </span>
                  )}
                </span>
                <svg
                  className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarDropdownColumn;
