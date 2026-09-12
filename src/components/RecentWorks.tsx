import { motion } from "motion/react";
import { Skiper54 } from "@/components/ui/skiper-ui/skiper54";

export function RecentWorks() {
  return (
    <section id="portfolio" className="relative w-full pt-4 md:pt-8 pb-20 md:pb-28 bg-surface-primary overflow-hidden">
      {/* Editorial Section Header: Heading with remaining text beneath */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 mb-10 md:mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] leading-[1.08] text-text-primary tracking-tight mb-3"
        >
          <span className="italic font-light">Moments carved</span> in light.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-secondary text-body-base max-w-xl mx-auto leading-relaxed"
        >
          An intimate chronicle of bespoke celebrations, heartfelt glances, and timeless weddings documented across Lahore, Islamabad, and worldwide.
        </motion.p>
      </div>

      {/* Skiper54 Clip-Path Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Skiper54 autoplay={true} />
      </motion.div>
    </section>
  );
}
