import { ReactNode, memo } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { ANIMATIONS, COLORS, GRADIENTS } from "../../lib/constants/design";
import GradientCard from "./GradientCard";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string | ReactNode;
  gradient?: string;
  className?: string;
  variant?: "default" | "icon" | "image";
  hoverable?: boolean;
}

const FeatureCard = memo(function FeatureCard({
  title,
  description,
  icon,
  gradient = GRADIENTS.brand,
  className,
  variant = "default",
  hoverable = true,
}: FeatureCardProps) {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return variant === "image" ? (
        <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div
          className={cn(
            "w-12 h-12 rounded-lg bg-gradient-to-br",
            gradient,
            "flex items-center justify-center mb-4 text-white shadow-lg",
            hoverable &&
              "group-hover:scale-105 transition-transform duration-300"
          )}
        >
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "w-16 h-16 rounded-lg bg-gradient-to-br",
          gradient,
          "flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg"
        )}
      >
        {icon}
      </div>
    );
  };

  return (
    <GradientCard
      gradient={gradient}
      className={cn("p-6 md:p-8", className)}
      hoverable={hoverable}
      glassMorphism={variant === "image"}
    >
      <div
        className={cn(
          "flex flex-col items-center text-center",
          variant === "default" && "items-start text-left"
        )}
      >
        {renderIcon()}

        <div>
          <h3
            className={cn(
              "text-lg font-bold text-gray-900 mb-2 relative z-10",
              hoverable &&
                `group-hover:text-[${COLORS.brand.primary}] transition-colors`
            )}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed relative z-10">
            {description}
          </p>
        </div>

        {variant === "image" && (
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0180ae] to-[#00a4d6] group-hover:w-full transition-all duration-500" />
        )}
      </div>
    </GradientCard>
  );
});

export default FeatureCard;
