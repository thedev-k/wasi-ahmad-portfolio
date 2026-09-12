"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextRoll } from "./skiper58";

const defaultImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=600&auto=format&fit=crop",
];

const Skiper30 = ({ images = defaultImages }: { images?: string[] }) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  // Gentler multipliers on mobile to reduce the total pixel distance animated per frame
  const y = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.8 : 2)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 1.2 : 3.3)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };

    resize();
    window.addEventListener("resize", resize);

    // Only initialize Lenis smooth-scroll on desktop — mobile browsers
    // already have hardware-accelerated native scroll; Lenis fights the
    // compositor and causes the jitter/lag the user reported.
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (window.innerWidth >= 768) {
      lenis = new Lenis();
      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (lenis) lenis.destroy();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* Portfolio intro heading */}
      <div className="relative flex flex-col items-center justify-center py-28 md:py-36 bg-surface-secondary/60">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply flex items-center justify-center">
          <img src="/images/bg/ascii-1.png" alt="" className="object-cover w-full h-full" />
        </div>
        <span className="relative text-xs uppercase font-sans tracking-[0.25em] text-text-muted mb-2 text-center leading-tight after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-3 after:h-10 after:w-px after:bg-text-muted/40 after:content-['']">
          SEE<br />PORTFOLIO
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl italic text-surface-dark text-center mt-16">
          A Few Favorite Frames
        </h2>
        <p className="font-sans text-text-secondary text-sm md:text-base text-center max-w-md mt-5 leading-relaxed">
          A curated selection of images that continue to mean something long after they were delivered.
        </p>
        <div className="mt-10">
          <Link to="/portfolio" className="inline-block">
            <TextRoll className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-surface-dark cursor-pointer hover:opacity-80 transition-opacity">View Portfolio</TextRoll>
          </Link>
        </div>
      </div>

      {/* Parallax gallery */}
      <div
        ref={gallery}
        className="relative box-border flex h-[130vh] md:h-[175vh] gap-[4vw] md:gap-[2vw] overflow-hidden bg-surface-primary p-[4vw] md:p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} className="flex" />
        <Column images={[images[3], images[4], images[5]]} y={y2} className="flex" />
        <Column images={[images[6], images[7], images[8]]} y={y3} className="hidden md:flex" />
        <Column images={[images[9], images[10], images[11] || images[0]]} y={y4} className="hidden lg:flex" />
      </div>
    </section>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
};

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={`relative -top-[45%] h-[160%] md:h-[140%] w-1/2 md:w-1/3 lg:w-1/4 min-w-[140px] flex-col gap-[4vw] md:gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%] ${className || ""}`}
      style={{ y, willChange: "transform" }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-xl">
          <img
            src={`${src}`}
            alt="wedding photograph"
            loading="lazy"
            className="pointer-events-none object-cover w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren't associated with the siena.film . They're independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */
