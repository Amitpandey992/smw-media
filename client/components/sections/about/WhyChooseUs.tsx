'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';
import VariableProximity from '@/components/react-bits/VariableProximity';
import { 
  Briefcase, 
  Users, 
  Video, 
  Target, 
  Award, 
  CheckCircle 
} from 'lucide-react';

import { whyChooseUs } from '@/lib/data/siteContent';

import Waves from '@/components/react-bits/Waves';
import ScrollStack, { ScrollStackItem } from '@/components/react-bits/ScrollStack';

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="rgba(230, 0, 0, 0.2)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
              label="Why Choose Us"
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
            Partnering with us means choosing excellence, innovation, and a dedicated team committed to your success.
          </motion.p>
        </div>

        <div className="w-full max-w-4xl mx-auto h-[600px] rounded-3xl border border-[var(--border-default)] overflow-hidden shadow-2xl relative z-20">
          <ScrollStack
            className="w-full h-full"
            itemDistance={50}
            itemScale={0.03}
            baseScale={0.9}
            rotationAmount={2}
          >
            {whyChooseUs.map((reason, index) => (
              <ScrollStackItem 
                key={index} 
                itemClassName="flex flex-col items-center justify-center text-center gap-6"
              >
                {/* We override background manually using standard styles to ensure palette matching */}
                <div 
                  className="absolute inset-0 rounded-[40px] z-0" 
                  style={{ 
                    backgroundColor: 'var(--bg-surface)', 
                    border: '1px solid var(--border-default)',
                    boxShadow: '0 10px 30px -10px rgba(230, 0, 0, 0.1)'
                  }} 
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div 
                    className="p-4 rounded-full mb-4"
                    style={{ backgroundColor: 'rgba(230, 0, 0, 0.15)', color: 'var(--accent-primary)' }}
                  >
                    <CheckCircle className="w-10 h-10" strokeWidth={2} />
                  </div>
                  <h3 
                    className="text-2xl font-bold px-4"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                  >
                    {reason}
                  </h3>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
