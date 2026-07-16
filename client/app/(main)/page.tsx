"use client";

import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { SpecialOpportunities } from "@/components/sections/home/SpecialOpportunities";
import { SMWNews } from "@/components/sections/home/SMWNews";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ServicesPreview />
      <SpecialOpportunities />
      <SMWNews />
    </main>
  );
}
