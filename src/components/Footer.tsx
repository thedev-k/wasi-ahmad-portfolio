import { Link } from "react-router-dom";
import { TextRoll } from "./ui/skiper-ui/skiper58";
import { InstagramLogo as Instagram, FacebookLogo as Facebook } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-dark text-surface-primary pt-24 pb-8 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Brand Area */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link to="/" className="font-serif italic text-4xl hover:opacity-80 transition-opacity flex items-start">
            Wasi Ahmad<sup className="text-[0.45em] font-sans mt-2 ml-0.5">TM</sup>
          </Link>
          <p className="font-sans text-sm text-surface-primary/70 leading-relaxed">
            Capturing the essence of your timeless love stories with an editorial and cinematic touch. Based in Lahore, traveling worldwide.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs uppercase tracking-widest text-surface-primary/50 mb-2">Navigation</span>
            <Link to="/"><TextRoll className="text-sm font-sans">Home</TextRoll></Link>
            <Link to="/portfolio"><TextRoll className="text-sm font-sans">Portfolio</TextRoll></Link>
            <Link to="/about"><TextRoll className="text-sm font-sans">About me</TextRoll></Link>
            <Link to="/pricing"><TextRoll className="text-sm font-sans">Pricing</TextRoll></Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="font-sans text-xs uppercase tracking-widest text-surface-primary/50 mb-2">Connect</span>
            <Link to="/contact"><TextRoll className="text-sm font-sans">Contact</TextRoll></Link>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
              <TextRoll className="text-sm font-sans">Instagram</TextRoll>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
              <TextRoll className="text-sm font-sans">Facebook</TextRoll>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-surface-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-sans text-xs text-surface-primary/50">
          © {new Date().getFullYear()} Wasi Ahmad Photography. All rights reserved.
        </span>
        <span className="font-sans text-xs text-surface-primary/50">
          Crafted with love
        </span>
      </div>
    </footer>
  );
}
