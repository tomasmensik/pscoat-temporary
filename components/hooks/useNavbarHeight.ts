"use client";

import { useEffect, useState } from "react";

export function useNavbarHeight() {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        const height = navbar.offsetHeight;
        setNavbarHeight(height);
        // Set CSS custom property for use in CSS
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    };

    // Initial measurement
    updateNavbarHeight();

    // Update on resize
    window.addEventListener("resize", updateNavbarHeight);

    // Use MutationObserver to detect navbar changes
    const observer = new MutationObserver(updateNavbarHeight);
    const navbar = document.querySelector("nav");
    if (navbar) {
      observer.observe(navbar, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      observer.disconnect();
    };
  }, []);

  return navbarHeight;
}
