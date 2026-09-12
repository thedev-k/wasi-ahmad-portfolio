import { motion } from "framer-motion";
import { FluidButton } from "../components/ui/skiper-ui/FluidButton";

export function Contact() {
  return (
    <main className="relative w-full min-h-screen bg-surface-primary pt-32 pb-24 px-6 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply flex items-center justify-center">
        <img src="/images/bg/ascii-2.png" alt="" className="object-cover w-full h-full" />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Side: Text & Info */}
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-widest text-text-secondary mb-4"
          >
            Inquire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl italic text-surface-dark mb-6"
          >
            Say Hello
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text-secondary leading-relaxed mb-12"
          >
            We would love to hear about your upcoming celebration. Please fill out the form, and we'll get back to you within 48 hours.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 font-sans text-sm text-surface-dark"
          >
            <p><strong>Email:</strong> hello@wasiahmad.com</p>
            <p><strong>Studio:</strong> DHA Phase 6, Lahore</p>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-12 rounded-2xl border border-border-subtle bg-surface-secondary/40 backdrop-blur-sm"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 relative">
              <label className="font-sans text-xs uppercase tracking-widest text-text-secondary">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border-accent pb-3 pt-2 font-sans text-sm text-text-primary outline-none focus:border-surface-dark transition-colors placeholder:text-text-muted" placeholder="Jane Doe" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="font-sans text-xs uppercase tracking-widest text-text-secondary">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-border-accent pb-3 pt-2 font-sans text-sm text-text-primary outline-none focus:border-surface-dark transition-colors placeholder:text-text-muted" placeholder="jane@example.com" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="font-sans text-xs uppercase tracking-widest text-text-secondary">Event Date</label>
              <input type="text" className="w-full bg-transparent border-b border-border-accent pb-3 pt-2 font-sans text-sm text-text-primary outline-none focus:border-surface-dark transition-colors placeholder:text-text-muted" placeholder="e.g. October 15, 2027" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="font-sans text-xs uppercase tracking-widest text-text-secondary">Message</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-border-accent pb-3 pt-2 font-sans text-sm text-text-primary outline-none focus:border-surface-dark transition-colors resize-none placeholder:text-text-muted" placeholder="Tell us about your plans..."></textarea>
            </div>
            
            <FluidButton className="mt-6">
              SEND INQUIRY
            </FluidButton>
          </form>
        </motion.div>

      </div>
    </main>
  );
}
