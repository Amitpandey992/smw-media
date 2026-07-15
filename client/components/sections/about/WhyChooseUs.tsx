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

const reasons = [
  { 
    title: 'Complete Media & Branding Solutions', 
    icon: Briefcase,
    description: 'A holistic approach to all your branding and media needs under one roof.'
  },
  { 
    title: 'Experienced & Creative Team', 
    icon: Users,
    description: 'Our seasoned professionals bring fresh perspectives and innovative ideas.'
  },
  { 
    title: 'In-house Studio & Equipment', 
    icon: Video,
    description: 'State-of-the-art facilities ensuring top-notch production quality without delays.'
  },
  { 
    title: 'Customized Strategies', 
    icon: Target,
    description: 'Tailored solutions designed specifically for your unique business goals.'
  },
  { 
    title: 'High Quality Production', 
    icon: Award,
    description: 'Uncompromising standards in every piece of content we create.'
  },
  { 
    title: 'One Stop Solution', 
    icon: CheckCircle,
    description: 'From ideation to execution, we handle the entire process seamlessly.'
  }
];

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  borderColor: 'var(--accent-primary)',
                  boxShadow: '0 10px 30px -10px rgba(230, 0, 0, 0.1)'
                }}
                className="p-8 rounded-xl border border-transparent transition-colors duration-300 flex flex-col items-start gap-4"
                style={{ 
                  backgroundColor: 'var(--bg-surface)', 
                  borderColor: 'var(--border-default)' 
                }}
              >
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: 'rgba(230, 0, 0, 0.1)', color: 'var(--accent-primary)' }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}
                >
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
