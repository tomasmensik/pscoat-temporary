import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Czech Republic Flag SVG Component
export const CzechFlag = ({ className = "w-6 h-4" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 60 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Czech Republic flag"
    style={{ borderRadius: "2px", overflow: "hidden" }}
    shapeRendering="geometricPrecision"
  >
    {/* White top stripe */}
    <rect y="0" width="60" height="20" fill="#ffffff" />
    {/* Red bottom stripe */}
    <rect y="20" width="60" height="20" fill="#d7141a" />
    {/* Blue triangle - starts at left edge, goes to center */}
    <polygon points="0,0 30,20 0,40" fill="#11457e" />
  </svg>
);

// United Kingdom Flag SVG Component
export const UKFlag = ({ className = "w-6 h-4" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 900 600"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Kingdom flag"
  >
    <path fill="#012169" d="M0 0h900v600H0z" />
    <path
      fill="#fff"
      d="M0 0l900 600M900 0L0 600"
      stroke="#fff"
      strokeWidth="120"
      strokeLinecap="square"
    />
    <path
      fill="#c8102e"
      d="M0 0l900 600M900 0L0 600"
      stroke="#c8102e"
      strokeWidth="80"
      strokeLinecap="square"
    />
    <path
      fill="#fff"
      d="M450 0v600M0 300h900"
      stroke="#fff"
      strokeWidth="200"
    />
    <path
      fill="#c8102e"
      d="M450 0v600M0 300h900"
      stroke="#c8102e"
      strokeWidth="120"
    />
  </svg>
);

