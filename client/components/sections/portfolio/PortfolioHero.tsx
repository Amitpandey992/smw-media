"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center bg-(--bg-base) overflow-hidden pt-20">
      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-(--text-primary)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Masterpieces
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-(--text-muted) max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A glimpse into the stories we've created and the brands we've built.
        </motion.p>
      </div>
    </section>
  );
}
