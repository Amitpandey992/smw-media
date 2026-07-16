"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import VariableProximity from "@/components/react-bits/VariableProximity";
import Stack from "@/components/react-bits/Stack";
import { portfolioData } from "@/lib/data/portfolioData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export function Portfolio() {
  const containerRef = useRef(null);
  
  return (
    <section id="portfolio" className="py-32 px-6 bg-surface relative border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-sans tracking-widest uppercase text-primary mb-4">Featured Work</h2>
              <h3 ref={containerRef} className="text-4xl md:text-5xl font-heading font-bold text-foreground relative">
                <VariableProximity
                  label="Showcasing our finest creative endeavors."
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </h3>
            </div>
            <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-sans">
              Explore full portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-full max-w-2xl aspect-4/3 md:aspect-video mx-auto mt-12 cursor-grab active:cursor-grabbing">
            <Stack
              randomRotation={true}
              sensitivity={100}
              sendToBackOnClick={true}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              cards={portfolioData.map((item) => (
                <div key={item.id} className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border group bg-[#050505]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary font-sans text-xs font-bold tracking-widest uppercase mb-2">
                      {item.category}
                    </p>
                    <h4 className="text-3xl font-heading font-bold text-white shadow-sm">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
