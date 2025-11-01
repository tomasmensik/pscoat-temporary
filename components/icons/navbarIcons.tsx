import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Hamburger Menu Icon
export const HamburgerIcon = ({ className = "h-6 w-6", width, height }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
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
);

// Close/X Icon
export const CloseIcon = ({ className = "h-6 w-6", width, height }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

