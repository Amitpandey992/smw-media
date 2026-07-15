"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "@/lib/data/servicesData";
import VariableProximity from "../react-bits/VariableProximity";

export function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Interpolating background color for the section
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#050505", "#110000", "#000511", "#110500", "#050505"],
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative w-full z-10"
    >
      <div className="container mx-auto px-4 pt-24 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h2 className="text-sm font-sans tracking-widest uppercase text-primary mb-4">
            Services
          </h2>
          <h3
            ref={titleRef}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground relative"
          >
            <VariableProximity
              label="What We Offer."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={titleRef}
              radius={100}
              falloff="linear"
            />
          </h3>
        </div>
      </div>
      {servicesData.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </motion.section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof servicesData)[0];
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect for the right column placeholder
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1]);

  const containerRef = useRef(null);

  return (
    <>
      <div
        ref={blockRef}
        className="min-h-screen w-full flex items-center py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-4 h-full relative">
          {/* Left Column: Sticky Content */}
          <div className="h-full relative">
            <div className="sticky top-32 h-fit space-y-12">
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h2>

              <ul className="space-y-6">
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-base md:text-lg text-muted-foreground flex items-center gap-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Media Placeholder */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              style={{ y, opacity }}
              className="w-[85%] md:w-[75%] aspect-3/4 md:aspect-square mx-auto rounded-3xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center relative overflow-hidden backdrop-blur-md shadow-2xl"
            >
              {/* Inner aesthetic details */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent)] opacity-20" />

              <div className="text-center z-10 space-y-6">
                <div className="w-20 h-20 rounded-full border border-white/20 mx-auto flex items-center justify-center bg-white/5 backdrop-blur-xl">
                  <span className="text-3xl font-light text-white/60">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40">
                  Media Placeholder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
