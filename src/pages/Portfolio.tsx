import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const portfolioEvents = [
  {
    id: "aria-thomas",
    title: "Aria & Thomas",
    location: "Tuscany, Italy",
    type: "Wedding",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    ]
  },
  {
    id: "elena-marcus",
    title: "Elena & Marcus",
    location: "Lake Como, Italy",
    type: "Elopement",
    cover: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    ]
  },
  {
    id: "sarah-james",
    title: "Sarah & James",
    location: "Amalfi Coast",
    type: "Wedding",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800&auto=format&fit=crop",
    ]
  },
  {
    id: "chloe-noah",
    title: "Chloe & Noah",
    location: "Paris, France",
    type: "Engagement",
    cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    ]
  }
];

export function Portfolio() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // slight delay to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="w-full min-h-screen bg-surface-primary pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs uppercase tracking-widest text-text-secondary mb-4"
          >
            Curated Gallery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl italic text-surface-dark"
          >
            The Portfolio
          </motion.h1>
        </header>

        <div className="flex flex-col gap-32">
          {portfolioEvents.map((event) => (
            <div key={event.id} id={event.id} className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                {/* Event Header */}
                <div className="flex flex-col items-center text-center">
                  <h2 className="font-serif text-4xl md:text-5xl text-surface-dark mb-3">{event.title}</h2>
                  <p className="font-sans text-sm tracking-widest uppercase text-text-secondary">
                    {event.location} &mdash; {event.type}
                  </p>
                </div>
                
                {/* Cover Image */}
                <div className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    src={event.cover} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700" 
                    loading="lazy"
                  />
                </div>
                
                {/* Grid Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {event.images.map((src, i) => (
                    <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={src} 
                        alt={`${event.title} details`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
