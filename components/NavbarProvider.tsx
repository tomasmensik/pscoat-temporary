"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./shared/navbar/Navbar";

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find the spline section element by class or data attribute
      const splineSection = document.querySelector("[data-spline-section]");

      if (!splineSection) {
        setIsNavbarVisible(true);
        return;
      }

      const sectionRect = splineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isEntirelyInSection =
        sectionRect.top <= 0 && sectionRect.bottom >= windowHeight;

      setIsNavbarVisible(!isEntirelyInSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isNavbarVisible={isNavbarVisible} />
      {children}
    </>
  );
}
