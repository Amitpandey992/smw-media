"use client";

import Image from "next/image";
import { portfolioData } from "@/lib/data/portfolioData";
import { motion } from "framer-motion";

export default function PortfolioGrid() {
  return (
    <section className="w-full bg-(--bg-base)">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="group relative overflow-hidden rounded-xl aspect-4/3 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image 
              src={item.image} 
              alt={item.title}
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-(--accent-primary) text-sm uppercase tracking-wider mb-2 font-semibold">
                {item.category}
              </p>
              <h3 className="text-white text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
