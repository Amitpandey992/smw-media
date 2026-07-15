"use client";

import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <OurServices />
      <Portfolio />
      <Contact />
    </main>
  );
}
