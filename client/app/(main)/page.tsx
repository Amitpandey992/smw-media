"use client";

import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { SpecialOpportunities } from "@/components/sections/home/SpecialOpportunities";
import { SMWNews } from "@/components/sections/home/SMWNews";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <OurServices />
      <SpecialOpportunities />
      <SMWNews />
      <Portfolio />
      <Contact />
    </main>
  );
}
