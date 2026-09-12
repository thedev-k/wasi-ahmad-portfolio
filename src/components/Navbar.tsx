import { motion, useScroll, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TextRoll } from "./ui/skiper-ui/skiper58";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 25);
    });
  }, [scrollY]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-surface-primary/95 backdrop-blur-md border-b border-black/5 shadow-2xs py-3.5"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-14 flex items-center justify-between">
          {/* Brand Logo - Left */}
          <Link
            to="/"
            className="text-[15px] font-medium tracking-[0.01em] text-text-primary hover:opacity-80 transition-opacity flex items-start"
            onClick={() => setIsMenuOpen(false)}
          >
            Wasi Ahmad<sup className="text-[0.6em] font-sans mt-0.5">TM</sup>
          </Link>

          {/* Navigation Options - Right (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/portfolio">
              <TextRoll className="text-[14px] font-normal">Portfolio</TextRoll>
            </Link>
            <Link to="/about">
              <TextRoll className="text-[14px] font-normal">About me</TextRoll>
            </Link>
            <Link to="/pricing">
              <TextRoll className="text-[14px] font-normal">Pricing</TextRoll>
            </Link>
            <Link to="/contact">
              <TextRoll className="text-[14px] font-normal">Contact</TextRoll>
            </Link>
          </div>

          {/* Hamburger Menu - Right (Mobile) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-[1.5px] bg-surface-dark block transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-surface-dark block transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-5 h-[1.5px] bg-surface-dark block transition-transform duration-300 ${isMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-surface-primary pt-24 px-8 flex flex-col md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-8 mt-12 text-2xl font-serif italic text-surface-dark">
              <Link to="/portfolio" className="border-b border-border-accent pb-4" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/about" className="border-b border-border-accent pb-4" onClick={() => setIsMenuOpen(false)}>
                About me
              </Link>
              <Link to="/pricing" className="border-b border-border-accent pb-4" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/contact" className="border-b border-border-accent pb-4" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
