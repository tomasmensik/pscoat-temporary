import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, containerClassName, className, ...props }, ref) => {
    const checkboxClasses = cn(
      "w-5 h-5 text-[#0180ae] focus:ring-2 focus:ring-[#0180ae]/20 cursor-pointer rounded transition-all duration-200",
      error && "border-red-500 focus:ring-red-500/20",
      className
    );

    const containerClasses = cn(
      "flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[#0180ae]/30 hover:bg-gray-50/50 cursor-pointer transition-all duration-200",
      error && "border-red-500/30",
      containerClassName
    );

    return (
      <div className="w-full">
        <label className={containerClasses}>
          <input
            ref={ref}
            type="checkbox"
            className={checkboxClasses}
            {...props}
          />
          {label && (
            <span className="text-gray-700 font-medium">{label}</span>
          )}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

