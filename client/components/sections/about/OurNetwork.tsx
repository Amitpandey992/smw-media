'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import VariableProximity from '@/components/react-bits/VariableProximity';
import { Music, Mic, Flame, Newspaper } from 'lucide-react';

const networks = [
  { 
    name: 'SMW MUSIC COMPANY', 
    icon: Music,
    tagline: 'The rhythm of creativity.'
  },
  { 
    name: 'SMW PODCAST', 
    icon: Mic,
    tagline: 'Voices that matter.'
  },
  { 
    name: 'SMW BHAKTI SAGAR', 
    icon: Flame,
    tagline: 'Devotion in every note.'
  },
  { 
    name: 'SMW NEWS', 
    icon: Newspaper,
    tagline: 'सच सब से पहले'
  }
];

export default function OurNetwork() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 relative"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
          >
            <VariableProximity
              label="Our Digital Network"
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
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            Expanding our reach across diverse content verticals.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {networks.map((network, index) => {
            const Icon = network.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 0 20px 2px rgba(230, 0, 0, 0.2)'
                }}
                className="group relative p-8 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-default)'
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: 'rgba(230, 0, 0, 0.1)', 
                    color: 'var(--accent-primary)' 
                  }}
                >
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <h3 
                  className="text-lg font-bold mb-2 tracking-wide"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {network.name}
                </h3>
                
                <p 
                  className="text-sm font-medium opacity-80"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}
                >
                  {network.tagline}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
