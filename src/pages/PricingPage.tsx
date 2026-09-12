import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";

export function PricingPage() {
  return (
    <main className="w-full min-h-screen bg-surface-primary pt-24">
      <Pricing />
      <FAQ />
    </main>
  );
}
