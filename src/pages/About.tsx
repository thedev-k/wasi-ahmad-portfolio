import { motion } from "framer-motion";

export function About() {
  return (
    <main className="w-full min-h-screen bg-surface-primary pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] w-full max-w-md mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1554046920-90dc59f4e6d0?q=80&w=800&auto=format&fit=crop" 
            alt="Wasi Ahmad" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>

        {/* Right Side: Text */}
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs uppercase tracking-widest text-text-secondary mb-4"
          >
            Behind the Lens
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl italic text-surface-dark mb-8"
          >
            I'm Wasi.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-lg text-text-primary font-light leading-relaxed space-y-6"
          >
            <p>
              For over a decade, I've had the immense privilege of documenting love stories. My approach is rooted in an editorial yet deeply authentic style—capturing the grand romance as well as the quiet, unseen in-between moments.
            </p>
            <p>
              I believe your wedding photographs should feel like pieces of art that transport you back to the exact feeling of the day. Every tear, every laugh, and every stolen glance matters.
            </p>
            <p>
              Based in Lahore, but always ready with my passport for wherever your story takes you.
            </p>
          </motion.div>
          
        </div>

      </div>
    </main>
  );
}
