// Design System Constants
// Centralized design tokens for PScoat application

// Brand Colors
export const COLORS = {
  brand: {
    primary: "#0180ae",
    secondary: "#00a4d6",
    accent: "#eae9ea",
  },
  text: {
    primary: "#171717",
    secondary: "#545050",
    muted: "#6b7280",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f9fafb",
    accent: "#eae9ea",
    dark: "#252854",
  },
  border: {
    light: "#e5e7eb",
    primary: "#d1d5db",
  },
} as const;

// Gradients
export const GRADIENTS = {
  brand: "from-[#0180ae] to-[#00a4d6]",
  brandReverse: "from-[#00a4d6] to-[#0180ae]",
  background: "from-[#eae9ea] to-white",
  backgroundReverse: "from-white to-[#eae9ea]",
} as const;

// Spline Scene URLs
export const SPLINE_SCENES = {
  hero: "https://prod.spline.design/QevFsvUiomSFUvkb/scene.splinecode",
  interactive: "https://prod.spline.design/rzZ4WPhunmMFQ3aU/scene.splinecode",
} as const;

// Common spacing and sizing
export const SPACING = {
  section: {
    padding: "py-32",
    margin: "my-16",
  },
  card: {
    padding: "p-6 md:p-8",
    paddingLarge: "p-8 sm:p-12 lg:p-16",
  },
  container: {
    maxWidth: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
} as const;

// Typography
export const TYPOGRAPHY = {
  heading: {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-2xl sm:text-3xl lg:text-4xl font-semibold",
    h3: "text-xl sm:text-2xl font-bold",
    h4: "text-lg font-semibold",
  },
  body: {
    large: "text-base sm:text-lg md:text-xl lg:text-xl",
    regular: "text-sm sm:text-base",
    small: "text-xs sm:text-sm",
  },
} as const;

// Component styles
export const COMPONENTS = {
  button: {
    primary: `bg-gradient-to-r ${GRADIENTS.brand} text-white rounded-lg hover:shadow-lg hover:shadow-[#0180ae]/25 transition-all duration-300 transform hover:-translate-y-1`,
    secondary:
      "border-2 border-gray-800 text-gray-800 rounded-lg hover:border-[#0180ae] hover:bg-gray-100 transition-all duration-300",
  },
  card: {
    base: "bg-white/40 backdrop-blur-sm rounded-3xl border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10",
    glass: "bg-white/20 backdrop-blur-xl",
  },
} as const;

// Animation durations
export const ANIMATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  hover: "transition-all duration-300",
  hoverSlow: "transition-all duration-500",
} as const;

// Breakpoints (for reference, Tailwind handles responsive design)
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
