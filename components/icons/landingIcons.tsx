import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Play Icon
export const PlayIcon = ({ className = "text-black", width = 120, height = 120 }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M40 30L40 90L90 60L40 30Z" fill="currentColor" />
  </svg>
);

// Scroll Arrow Icon (V-shaped with gradient)
export const ScrollArrowIcon = ({ className = "animate-subtle-bounce", width = 80, height = 80 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
  >
    <defs>
      <linearGradient
        id="arrowGradientLeft"
        x1="2"
        y1="4"
        x2="12"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#E01A00" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient
        id="arrowGradientRight"
        x1="12"
        y1="18"
        x2="22"
        y2="4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#1F72B0" />
      </linearGradient>
    </defs>
    <path
      d="M2 4 L12 18"
      stroke="url(#arrowGradientLeft)"
      strokeWidth="0.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 4 L12 18"
      stroke="url(#arrowGradientRight)"
      strokeWidth="0.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

