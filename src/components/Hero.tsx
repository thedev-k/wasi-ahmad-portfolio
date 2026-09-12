import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TextRoll } from "./ui/skiper-ui/skiper58";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={sectionRef} className="relative w-full h-[100dvh] flex flex-col bg-surface-primary overflow-hidden pt-16 md:pt-18">
      {/* Hero image card */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-1 pb-1 md:px-4 md:pb-4">
        <motion.div
          initial={{ width: "220px", height: "120px", borderRadius: "16px" }}
          animate={{ width: "100%", height: "100%", borderRadius: "16px" }}
          transition={{ duration: 2.4, ease: [0.22, 0.68, 0.36, 1], delay: 0.3 }}
          className="relative w-full h-full overflow-hidden bg-surface-primary shadow-[0_2px_20px_rgba(0,0,0,0.08)] md:rounded-[20px]"
        >
          {/* Main Hero Image */}
          <motion.img
            style={{ scale: imageScale }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.0, ease: [0.22, 0.68, 0.36, 1], delay: 0.3 }}
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2000&auto=format&fit=crop"
            alt="Wedding couple in golden hour field"
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />

          {/* Bottom gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
          />

          {/* Text and Button overlay - bottom left */}
          <div className="absolute bottom-6 left-5 md:bottom-12 md:left-12 z-10 flex flex-col items-start">
            <h1
              className="font-serif text-white leading-[0.95] tracking-[-0.03em] drop-shadow-md mb-6 md:mb-8"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              <span className="italic block">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Your
                </motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                forever
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mt-1"
              >
                starts here.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link to="/portfolio" className="group inline-flex items-center gap-3 pl-5 pr-3 py-2.5 md:pl-6 md:pr-4 md:py-3 rounded-full bg-surface-primary/95 backdrop-blur-sm text-text-primary text-[14px] md:text-[15px] font-medium shadow-lg hover:bg-white transition-all duration-300 active:scale-[0.97]">
                <TextRoll className="font-medium">See portfolio</TextRoll>
                <ArrowRight weight="bold" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
