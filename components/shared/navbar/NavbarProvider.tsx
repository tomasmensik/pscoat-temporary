"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="relative">
      {/* Only show navbar in layout if not on homepage (homepage has navbar in hero section) */}
      {!isHomePage && <Navbar isNavbarVisible={true} />}
      {children}
    </div>
  );
}
