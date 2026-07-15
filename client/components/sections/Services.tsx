"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import { TiltedCard } from "@/components/react-bits/TiltedCard";
import MagicBento from "@/components/react-bits/MagicBento";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const SERVICES = [
  {
    id: "music",
    title: "Music Production",
    desc: "Top-tier audio engineering and music creation.",
    color: "from-blue-500/20",
  },
  {
    id: "video",
    title: "Film & Ad Production",
    desc: "Cinematic visuals and commercial filmmaking.",
    color: "from-purple-500/20",
  },
  {
    id: "artist",
    title: "Artist Management",
    desc: "Guiding talents to their peak potential.",
    color: "from-pink-500/20",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that convert.",
    color: "from-green-500/20",
  },
  {
    id: "branding",
    title: "Branding & Strategy",
    desc: "Building iconic and memorable brand identities.",
    color: "from-orange-500/20",
  },
  {
    id: "pr",
    title: "Public Relations",
    desc: "Crafting narratives that shape public perception.",
    color: "from-red-500/20",
  },
  {
    id: "events",
    title: "Event Management",
    desc: "Flawless execution of grand live experiences.",
    color: "from-yellow-500/20",
  },
  {
    id: "photography",
    title: "Photography",
    desc: "Capturing moments with precision and art.",
    color: "from-cyan-500/20",
  },
  {
    id: "podcast",
    title: "Podcast Production",
    desc: "End-to-end podcast creation and distribution.",
    color: "from-indigo-500/20",
  },
];

export function Services() {
  const containerRef = useRef(null);
  
  return (
    <section id="services" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-sans tracking-widest uppercase text-primary mb-4">
                Our Verticals
              </h2>
              <h3 ref={containerRef} className="text-4xl md:text-5xl font-heading font-bold text-foreground relative">
                <VariableProximity
                  label="Everything you need to dominate the digital era."
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </h3>
            </div>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-sans"
            >
              View all services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <MagicBento 
          cards={SERVICES.map(s => ({
            id: s.id,
            title: s.title,
            description: s.desc,
            gradientClass: s.color
          }))}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="230, 0, 0"
        />
      </div>
    </section>
  );
}
