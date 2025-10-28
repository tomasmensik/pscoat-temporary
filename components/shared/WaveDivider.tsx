import { memo } from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

interface WaveDividerProps {
  variant?: "wave" | "wave2";
  className?: string;
  inverted?: boolean;
}

const WaveDivider = memo(function WaveDivider({
  variant = "wave",
  className,
  inverted = false,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-[#eae9ea] to-white w-full relative -mt-1 mb-0",
        inverted && "from-white to-[#eae9ea]",
        className
      )}
    >
      <Image
        src={`/home/${variant}.svg`}
        alt="wave divider"
        width={1920}
        height={200}
        className="w-full h-auto block"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
});

export default WaveDivider;
