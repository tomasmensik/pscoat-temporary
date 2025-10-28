// Component Types
import { ReactNode } from "react";

// Gallery Types
export interface GalleryItem {
  image: string;
  text: string;
}

export interface GalleryConfig {
  bend: number;
  textColor: string;
  borderRadius: number;
  scrollEase: number;
}

// Feature Types
export interface Feature {
  icon: string | ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export interface ProtectionFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface SustainabilityBenefit {
  gradient: string;
  icon: ReactNode;
  title: string;
  text: string;
}

// Common Component Props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface HoverableComponentProps extends BaseComponentProps {
  hoverable?: boolean;
}

// Section Component Props
export interface SectionProps extends BaseComponentProps {
  splineSectionRef?: React.RefObject<HTMLElement>;
  onVisibilityChange?: (visible: boolean) => void;
}

// Design System Types
export type ColorKeys = "primary" | "secondary" | "accent";
export type GradientKeys =
  | "brand"
  | "brandReverse"
  | "background"
  | "backgroundReverse";
export type TypographyKeys = "h1" | "h2" | "h3" | "h4";

// Spline Scene Types
export type SplineSceneKey = "hero" | "interactive";
