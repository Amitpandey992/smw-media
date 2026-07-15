'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import VariableProximity from '@/components/react-bits/VariableProximity';

export default function AboutHero() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delay: 0.3,
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1 
          ref={containerRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <VariableProximity
            label="Who We Are"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </motion.h1>
        
        <motion.p 
          className="max-w-3xl text-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          SMW Media & Entertainment Pvt. Ltd. is a full-service media, entertainment, branding and digital communications company delivering innovative creative solutions across multiple industries. We transform ideas into impactful stories that inspire, influence and deliver measurable results.
        </motion.p>
      </div>
    </section>
  );
}
