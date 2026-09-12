import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer: "Yes, we absolutely love traveling! We've covered weddings across Pakistan and internationally. Travel and accommodation expenses are usually handled separately depending on the location."
  },
  {
    question: "How long does it take to get our photos and videos?",
    answer: "We typically deliver the highlight video and a selection of edited photos within 2-3 weeks. The complete gallery and full-length films usually take 6-8 weeks, as we carefully edit each piece to perfection."
  },
  {
    question: "Do we get all the raw unedited footage?",
    answer: "We provide raw footage only in our 'Heirloom' package or as an add-on. We believe our editing process is a crucial part of our art, but we understand some couples want everything!"
  },
  {
    question: "How do we secure our date?",
    answer: "To secure your date, we require a signed contract and a 50% non-refundable retainer. The remaining balance is due one week prior to your first event."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-surface-primary py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply flex items-center justify-center">
        <img src="/images/bg/ascii-2.png" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-sm uppercase tracking-widest text-text-secondary mb-4 block">Information</span>
          <h2 className="font-serif text-4xl md:text-6xl italic text-surface-dark">
            Questions & Answers
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="border-b border-border-light pb-4"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="font-sans text-lg md:text-xl font-medium text-surface-dark group-hover:text-text-secondary transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 ml-4 text-surface-dark"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-text-secondary pb-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
