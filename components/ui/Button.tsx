import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "left",
      fullWidth = false,
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = "font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-sm";
    
    const variantStyles = {
      primary: "bg-[#2B659C] hover:bg-cyan-600 text-white",
      secondary: "bg-gradient-to-r from-[#0180ae] to-[#00a4d6] text-white hover:shadow-lg hover:shadow-[#0180ae]/25 hover:-translate-y-1",
      outline: "border border-white text-white hover:bg-white hover:text-[#223B54]",
      ghost: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </>
    );

    if (href) {
      const { onClick, ...linkProps } = props;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick}
          {...(linkProps as any)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

