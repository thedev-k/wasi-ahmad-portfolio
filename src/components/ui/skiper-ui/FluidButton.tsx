import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";
import { TextRoll } from "./skiper58";
import { cn } from "@/lib/utils";

interface FluidButtonProps extends HTMLMotionProps<"button"> {
  children: string;
  className?: string;
}

export const FluidButton = React.forwardRef<HTMLButtonElement, FluidButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hovered"
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-surface-dark px-8 font-sans font-medium text-white transition-all",
          className
        )}
        {...props}
      >
        {/* Background that scales up (Fluid effect) */}
        <motion.div
          variants={{
            initial: { y: "100%", borderRadius: "50% 50% 0 0" },
            hovered: { y: "0%", borderRadius: "0% 0% 0 0" },
          }}
          transition={{
            duration: 0.5,
            ease: [0.19, 1, 0.22, 1], // fluid ease-out
          }}
          className="absolute inset-0 z-0 bg-text-secondary"
        />
        
        <span className="relative z-10 flex items-center justify-center">
          <TextRoll className="text-sm font-semibold tracking-wider">
            {children}
          </TextRoll>
        </span>
      </motion.button>
    );
  }
);

FluidButton.displayName = "FluidButton";
