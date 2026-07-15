"use client";

import { SplitText } from "@/components/react-bits/SplitText";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { GridScan } from "@/components/react-bits/GridScan";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
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
            label="Welcome to SMW Media & Entertainment."
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight relative">
          <VariableProximity
            label="Creating Stories • Building Brands • Connecting Audiences"
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
