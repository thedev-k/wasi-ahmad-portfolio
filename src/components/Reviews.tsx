import { useState } from "react";
import { TextRoll } from "./ui/skiper-ui/skiper58";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allReviews = [
  {
    text: "Wasi made us feel so comfortable. He captured not just how our wedding looked, but exactly how it felt. Every time we look at our photos, we are instantly transported back to those magical moments. Truly the best decision we made for our big day.",
    name: "Zainab & Ali",
    location: "Lahore Fort",
  },
  {
    text: "Working with this team was an absolute dream. They have an incredible eye for detail and a unique way of capturing raw emotions. The editorial style of our photos belongs in a magazine. We couldn't be happier!",
    name: "Sarah & James",
    location: "Lake Como",
  },
  {
    text: "From our very first meeting to the final delivery of our album, the professionalism and artistry were unmatched. They managed to be everywhere without being intrusive. Absolute perfection.",
    name: "Ayesha & Omar",
    location: "Islamabad",
  },
  {
    text: "The cinematic video and photos exceeded all our expectations. They beautifully wove together the narrative of our two families coming together. It's a masterpiece we'll cherish forever.",
    name: "Fatima & Hassan",
    location: "Dubai, UAE",
  }
];

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const reviewsToShow = showAll ? allReviews : allReviews.slice(0, 1);

  return (
    <section className="relative w-full bg-surface-primary py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply flex items-center justify-center">
        <img src="/images/bg/ascii-1.png" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl md:text-6xl italic text-surface-dark mb-16">
          Words of Love
        </h2>
        
        <div className="flex flex-col gap-20 w-full">
          <AnimatePresence>
            {reviewsToShow.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="flex gap-1 text-surface-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  ))}
                </div>
                <p className="font-sans text-lg md:text-2xl lg:text-3xl font-light text-text-primary leading-relaxed max-w-3xl">
                  "{review.text}"
                </p>
                <div className="mt-4">
                  <span className="block font-sans font-medium text-surface-dark uppercase tracking-widest text-xs md:text-sm">
                    {review.name}
                  </span>
                  <span className="block font-sans text-text-secondary text-xs md:text-sm mt-1">
                    {review.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <button 
            onClick={() => setShowAll(true)}
            className="mt-16 group inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-border-accent px-8 font-sans text-sm font-medium text-surface-dark transition-all hover:border-surface-dark"
          >
            <TextRoll className="tracking-widest">Read more reviews</TextRoll>
          </button>
        )}
      </div>
    </section>
  );
}
