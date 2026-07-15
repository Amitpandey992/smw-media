'use client';

import { motion, Variants } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Brands Transformed' },
  { value: '10+', label: 'Years Experience' },
  { value: '100+', label: 'Campaigns' },
  { value: 'PAN India', label: 'Network' }
];

export default function AboutStats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center justify-center space-y-2">
              <h3 
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-primary)' }}
              >
                {stat.value}
              </h3>
              <p 
                className="text-sm md:text-base font-medium tracking-wide uppercase"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
