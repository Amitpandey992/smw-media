"use client";

import { useRef } from "react";
import VariableProximity from "@/components/react-bits/VariableProximity";

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[50vh] flex items-center justify-center bg-[#050505] z-10 overflow-hidden pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className="text-sm font-sans tracking-widest uppercase text-primary mb-6">
          Our Services
        </h2>
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-heading font-bold text-foreground relative flex justify-center"
        >
          <VariableProximity
            label="What We Offer."
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={titleRef}
            radius={150}
            falloff="linear"
          />
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of specialized verticals, crafted to elevate your brand and deliver excellence across all media and entertainment domains.
        </p>
      </div>
    </section>
  );
}
