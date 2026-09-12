import { Hero } from "../components/Hero";
import { RecentWorks } from "../components/RecentWorks";
import { StoryIntro } from "../components/StoryIntro";
import { Skiper30 } from "../components/ui/skiper-ui/skiper30";
import { Reviews } from "../components/Reviews";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";

export function Home() {
  return (
    <main>
      <Hero />
      <StoryIntro />
      <RecentWorks />
      <Skiper30 />
      <Reviews />
      <Pricing />
      <FAQ />
    </main>
  );
}
