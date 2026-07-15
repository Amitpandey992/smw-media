"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Echoes of the Valley",
    category: "Music Production",
    imageClass: "bg-gradient-to-br from-blue-900 to-black",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Urban Motion",
    category: "Ad Film",
    imageClass: "bg-gradient-to-tr from-purple-900 to-black",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Neon Nights",
    category: "Event Management",
    imageClass: "bg-gradient-to-bl from-pink-900 to-black",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Tech Summit 2025",
    category: "Branding",
    imageClass: "bg-gradient-to-t from-green-900 to-black",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export function Portfolio() {
  const containerRef = useRef(null);
  
  return (
    <section id="portfolio" className="py-32 px-6 bg-surface relative border-y border-border/50">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 0.15}
              className={`${item.span} relative group overflow-hidden rounded-xl border border-border`}
            >
              <div className={`absolute inset-0 ${item.imageClass} opacity-80 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Overlay for hover state */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <PlayCircle className="w-8 h-8 text-white ml-1" />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary font-sans text-sm font-medium tracking-wider uppercase mb-2">
                  {item.category}
                </p>
                <h4 className="text-3xl font-heading font-bold text-white">
                  {item.title}
                </h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
