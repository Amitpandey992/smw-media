'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import VariableProximity from '@/components/react-bits/VariableProximity';
import { brandInfo } from '@/lib/data/siteContent';

import Image from 'next/image';

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
    <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80"
          alt="Who We Are Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <motion.h1 
          ref={containerRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-white drop-shadow-md"
          style={{ fontFamily: 'var(--font-heading)' }}
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
          className="max-w-3xl text-xl leading-relaxed text-white/90 drop-shadow-sm"
          style={{ fontFamily: 'var(--font-sans)' }}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {brandInfo.about.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
