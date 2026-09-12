import { motion } from "motion/react";

export function StoryIntro() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 sm:px-12 lg:px-20 flex justify-center items-center bg-surface-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-[1380px] w-full mx-auto text-center"
      >
        <p
          className="font-serif tracking-[-0.02em] text-center"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(12, 12, 12)",
          }}
        >
          <span className="inline-block text-[36px] leading-[42px] sm:text-[54px] sm:leading-[58px] md:text-[68px] md:leading-[72px] lg:text-[80px] lg:leading-[80px]">
            Where love stories become{" "}
            <span className="inline-block w-[52px] h-[36px] sm:w-[74px] sm:h-[50px] md:w-[90px] md:h-[60px] lg:w-[106px] lg:h-[68px] rounded-lg sm:rounded-[10px] lg:rounded-[14px] overflow-hidden align-middle mx-1.5 sm:mx-2.5 shadow-sm border border-black/10 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop"
                alt="Bride and groom romantic embrace"
                className="w-full h-full object-cover"
              />
            </span>{" "}
            art. Every timeless{" "}
            <span className="inline-block w-[52px] h-[36px] sm:w-[74px] sm:h-[50px] md:w-[90px] md:h-[60px] lg:w-[106px] lg:h-[68px] rounded-lg sm:rounded-[10px] lg:rounded-[14px] overflow-hidden align-middle mx-1.5 sm:mx-2.5 shadow-sm border border-black/10 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400&auto=format&fit=crop"
                alt="Groom boutonniere lapel detail"
                className="w-full h-full object-cover"
              />
            </span>{" "}
            frame celebrates the connections, details, and{" "}
            <span className="inline-block w-[52px] h-[36px] sm:w-[74px] sm:h-[50px] md:w-[90px] md:h-[60px] lg:w-[106px] lg:h-[68px] rounded-lg sm:rounded-[10px] lg:rounded-[14px] overflow-hidden align-middle mx-1.5 sm:mx-2.5 shadow-sm border border-black/10 transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop"
                alt="Couple joyful wedding moment"
                className="w-full h-full object-cover"
              />
            </span>{" "}
            joy that make your wedding unforgettable.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
