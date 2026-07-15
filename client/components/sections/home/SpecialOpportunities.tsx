"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { artistOpportunities } from "@/lib/data/opportunitiesData";
import {
  Mic,
  Star,
  Video,
  Disc,
  Headphones,
  Share2,
  Camera,
  Users,
  Settings,
  Compass,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mic,
  Star,
  Video,
  Disc,
  Headphones,
  Share2,
  Camera,
  Users,
  Settings,
  Compass,
};

export function SpecialOpportunities() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Optional radial gradient for a deep dark look */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(230, 0, 0, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight relative"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            <VariableProximity
              label="Special Opportunities for Artists"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Join our network and elevate your artistic career with exclusive
            opportunities tailored for growth and success.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {artistOpportunities.map((opportunity, index) => {
            const Icon = iconMap[opportunity.iconName] || Star;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  borderColor: "var(--accent-primary)",
                  boxShadow: "0 10px 30px -10px rgba(230, 0, 0, 0.15)",
                }}
                className="p-8 rounded-xl border border-transparent transition-all duration-300 flex flex-col items-start gap-4"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div
                  className="p-4 rounded-lg mb-2"
                  style={{
                    backgroundColor: "rgba(230, 0, 0, 0.1)",
                    color: "var(--accent-primary)",
                  }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {opportunity.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "var(--text-muted)",
                  }}
                >
                  {opportunity.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
