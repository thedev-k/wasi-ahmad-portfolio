"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const STAGGER = 0.025;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative inline-flex overflow-hidden", className)}
    >
      <span className="flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: 0.3,
                ease: [0.215, 0.61, 0.355, 1],
                delay,
              }}
              className="inline-block"
              style={l === " " ? { width: "0.25em" } : undefined}
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
      <span className="absolute inset-0 flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.3,
                ease: [0.215, 0.61, 0.355, 1],
                delay,
              }}
              className="inline-block"
              style={l === " " ? { width: "0.25em" } : undefined}
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
};

export { TextRoll };
