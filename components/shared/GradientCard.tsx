import { ReactNode, memo } from "react";
import { cn } from "../../lib/utils";
import { GRADIENTS, ANIMATIONS } from "../../lib/constants/design";

interface GradientCardProps {
  children: ReactNode;
  gradient?: string;
  className?: string;
  hoverable?: boolean;
  glassMorphism?: boolean;
}

const GradientCard = memo(function GradientCard({
  children,
  gradient = GRADIENTS.brand,
  className,
  hoverable = true,
  glassMorphism = false,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl overflow-hidden border border-gray-200/50",
        glassMorphism ? "bg-white/40 backdrop-blur-sm" : "bg-white",
        hoverable && [
          "hover:border-[#0180ae]/30",
          ANIMATIONS.hoverSlow,
          "hover:shadow-2xl hover:shadow-[#0180ae]/10",
        ],
        className
      )}
    >
      {/* Gradient background on hover */}
      {hoverable && (
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            gradient,
            "opacity-0 group-hover:opacity-5",
            ANIMATIONS.hoverSlow
          )}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
});

export default GradientCard;
