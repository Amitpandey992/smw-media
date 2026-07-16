"use client";

import Image from "next/image";
import { SplitText } from "@/components/react-bits/SplitText";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { GridScan } from "@/components/react-bits/GridScan";
import { useRef } from "react";
import { brandInfo } from "@/lib/data/siteContent";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80"
          alt="Cinematic Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#f00520"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center max-w-5xl pointer-events-none">
        <h2 className="text-lg font-heading font-bold text-foreground leading-tight mb-4 relative">
          <VariableProximity
            label={`Welcome to ${brandInfo.name}`}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight relative">
          <VariableProximity
            label={brandInfo.tagline}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />
        </h1>
      </div>
    </section>
  );
}
