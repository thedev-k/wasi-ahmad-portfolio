import { Link } from "react-router-dom";
import { FluidButton } from "./ui/skiper-ui/FluidButton";
import { Check } from "lucide-react";

export function Pricing() {
  const packages = [
    {
      name: "The Essential",
      price: "150k",
      description: "Perfect for intimate gatherings and small events.",
      features: [
        "1 Senior Photographer",
        "1 Videographer",
        "Highlight Video (3-5 mins)",
        "Soft Copies (Color Graded)",
        "1 Premium Album (50 pages)",
      ],
    },
    {
      name: "The Signature",
      price: "250k",
      description: "Comprehensive coverage for your grand celebrations.",
      features: [
        "2 Senior Photographers",
        "2 Videographers",
        "Drone Coverage",
        "Highlight Video (5-7 mins)",
        "Full Event Video",
        "2 Premium Albums (50 pages)",
      ],
    },
    {
      name: "The Heirloom",
      price: "400k",
      description: "The ultimate luxury experience spanning multiple days.",
      features: [
        "Wasi Ahmad & Team",
        "3 Videographers + Drone",
        "Same Day Edit",
        "Cinematic Film (15-20 mins)",
        "All Raw Footage",
        "3 Premium Albums + Canvases",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-surface-primary py-32 px-6">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <span className="font-sans text-sm uppercase tracking-widest text-text-secondary mb-4 block">Investment</span>
        <h2 className="font-serif text-4xl md:text-6xl italic text-surface-dark mb-16 text-center">
          Pricing & Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {packages.map((pkg, i) => (
            <div key={i} className="flex flex-col p-8 rounded-2xl bg-surface-secondary/40 border border-border-subtle shadow-sm">
              <h3 className="font-serif text-2xl text-surface-dark">{pkg.name}</h3>
              <p className="font-sans text-text-secondary text-sm mt-3 mb-6 min-h-[40px]">
                {pkg.description}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-sans text-sm text-text-secondary">PKR</span>
                <span className="font-serif text-5xl text-surface-dark">{pkg.price}</span>
              </div>
              
              <div className="flex-1">
                <ul className="flex flex-col gap-4">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 font-sans text-sm text-text-primary">
                      <Check className="w-5 h-5 text-surface-dark shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className="mt-8 md:mt-auto w-full pt-4">
                <FluidButton className="w-full">
                  INQUIRE NOW
                </FluidButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
