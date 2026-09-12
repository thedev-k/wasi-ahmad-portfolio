"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface SkiperImageItem {
  src: string;
  alt: string;
  title: string;
  location?: string;
  link?: string;
}

const defaultWeddingImages: SkiperImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    alt: "The Golden Hour Veil - Lahore Fort",
    title: "Aria & Thomas",
    location: "Tuscany, Italy",
    link: "/portfolio#aria-thomas",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
    alt: "Haveli Barood Khana Barat Celebration",
    title: "Elena & Marcus",
    location: "Lake Como",
    link: "/portfolio#elena-marcus",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    alt: "Vintage Mercedes Grand Entrance",
    title: "Sarah & James",
    location: "Amalfi Coast",
    link: "/portfolio#sarah-james",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    alt: "Margalla Hills Estate Celebration",
    title: "Chloe & Noah",
    location: "Paris, France",
    link: "/portfolio#chloe-noah",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    alt: "Subtle Emerald & Heritage Heirlooms",
    title: "Heritage Heirlooms",
    location: "Gulberg Private Estate",
    link: "/portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    alt: "Emotional Rukhsati Reflections",
    title: "Rukhsati Reflections",
    location: "Civil Lines, Lahore",
    link: "/portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    alt: "Royal Palm Grand Walima",
    title: "The Royal Palm",
    location: "Canal Road, Lahore",
    link: "/portfolio",
  },
];

interface Skiper54Props {
  images?: SkiperImageItem[];
  className?: string;
  autoplay?: boolean;
}

const Skiper54 = ({
  images = defaultWeddingImages,
  className,
  autoplay = true,
}: Skiper54Props) => {
  return (
    <div className={cn("flex h-full w-full items-center justify-center overflow-hidden bg-transparent", className)}>
      <Carousel_006
        images={images}
        className="w-full"
        loop={true}
        autoplay={autoplay}
        showNavigation={true}
        showPagination={true}
      />
    </div>
  );
};

export interface Carousel_006Props {
  images: SkiperImageItem[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const Carousel_006 = ({
  images,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true,
}: Carousel_006Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full relative", className)}
      opts={{
        loop,
        slidesToScroll: 1,
        align: "center",
      }}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 3500,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }
    >
      <CarouselContent className="flex h-[500px] sm:h-[560px] md:h-[620px] w-full items-center -ml-4">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-[85%] md:h-[82%] w-full basis-[85%] sm:basis-[60%] md:basis-[36%] lg:basis-[30%] xl:basis-[26%] items-center justify-center pl-4 cursor-pointer"
            onClick={() => {
              if (current === index && img.link) {
                if (img.link.startsWith("http")) {
                  window.open(img.link, "_blank");
                } else {
                  navigate(img.link);
                }
              } else {
                api?.scrollTo(index);
              }
            }}
          >
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(14% 0 14% 0 round 1.5rem)"
                    : "inset(0 0 0 0 round 1.5rem)",
                scale: current === index ? 1 : 0.96,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full w-full overflow-hidden rounded-[1.5rem] shadow-md"
            >
              <div className="relative h-full w-full border border-black/5 bg-black/5">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-700 ease-out",
                    current === index ? "scale-100" : "scale-110 filter grayscale-[15%]"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70" />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {current === index && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-2 left-0 right-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none"
                >
                  <span className="font-serif text-white text-lg md:text-xl font-normal drop-shadow-sm">
                    {img.title}
                  </span>
                  {img.location && (
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/80 mt-0.5">
                      {img.location}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex w-full items-center justify-between px-6 sm:px-12">
        {showPagination && (
          <div className="flex items-center gap-2">
            {Array.from({ length: images.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  current === index
                    ? "w-7 bg-surface-dark"
                    : "w-1.5 bg-border-accent hover:bg-text-secondary"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {showNavigation && (
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous slide"
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-border-accent bg-surface-primary/80 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-surface-dark hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-full border border-border-accent bg-surface-primary/80 backdrop-blur-sm flex items-center justify-center text-text-primary hover:bg-surface-dark hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </Carousel>
  );
};

export { Skiper54, Carousel_006 };
