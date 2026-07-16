"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { servicesData } from "@/lib/data/servicesData";
import VariableProximity from "../react-bits/VariableProximity";

import Image from "next/image";
import GlassSurface from "@/components/react-bits/GlassSurface";

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
      {/* The hero section is now rendered by ServicesHero on the dedicated page */}
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
  const imageUrl = service.image || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000";

  return (
    <>
      <div
        ref={blockRef}
        className="min-h-screen w-full flex items-center py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-4 h-full relative">
          {/* Left Column: Sticky Content */}
          <div className="h-full relative">
            <div className="sticky top-32 h-fit z-20">
              <GlassSurface 
                width="100%" 
                height="100%" 
                borderRadius={32} 
                className="p-6 md:p-10 lg:p-12 shadow-2xl"
              >
                <div className="space-y-12 w-full">
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
              </GlassSurface>
            </div>
          </div>

          {/* Right Column: Media */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              style={{ y, opacity }}
              className="w-full md:w-[85%] aspect-[4/5] mx-auto rounded-3xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center relative overflow-hidden backdrop-blur-md shadow-2xl"
            >
              <Image
                src={imageUrl}
                alt={service.title}
                fill
                className="object-cover opacity-80"
              />
              {/* Inner aesthetic details */}
              <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent)] opacity-20" />

              <div className="absolute bottom-8 right-8 z-10">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-xl">
                  <span className="text-2xl font-light text-white/80">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
