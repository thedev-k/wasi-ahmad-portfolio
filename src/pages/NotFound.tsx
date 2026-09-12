import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { TextRoll } from "../components/ui/skiper-ui/skiper58";

export function NotFound() {
  return (
    <main className="relative w-full min-h-[85vh] bg-surface-primary pt-36 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply flex items-center justify-center">
        <img src="/images/bg/ascii-1.png" alt="" className="object-cover w-full h-full" />
      </div>

      <div className="max-w-2xl w-full mx-auto relative z-10 flex flex-col items-center">
        {/* Editorial Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs uppercase tracking-[0.25em] text-text-secondary mb-3"
        >
          Error 404
        </motion.span>

        {/* Large Decorative 404 Accent */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif italic text-7xl sm:text-8xl md:text-9xl text-surface-dark/15 select-none -mb-6 md:-mb-10"
        >
          404
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl italic text-surface-dark mb-5 leading-tight"
        >
          A Moment Lost in Time
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-text-secondary text-base md:text-lg max-w-md mb-10 leading-relaxed font-light"
        >
          The page you are looking for has been moved, archived, or never existed. Let us guide you back to our curated gallery.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-surface-dark text-white font-sans text-sm font-medium hover:bg-surface-dark/90 transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            <ArrowLeft weight="bold" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <TextRoll className="tracking-wide">Return Home</TextRoll>
          </Link>

          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border-accent text-surface-dark font-sans text-sm font-medium hover:border-surface-dark bg-transparent transition-all duration-300 active:scale-[0.98]"
          >
            <TextRoll className="tracking-wide">View Portfolio</TextRoll>
            <ArrowRight weight="bold" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
