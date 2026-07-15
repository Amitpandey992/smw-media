"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltedCard({ children, className = "" }: TiltedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden rounded-xl border border-border bg-surface shadow-2xl group ${className}`}
      style={{ perspective: "1000px" }}
    >
      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
