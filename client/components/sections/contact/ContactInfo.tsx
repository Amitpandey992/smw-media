"use client";

import { motion } from "framer-motion";
import { brandInfo, officeLocations } from "@/lib/data/siteContent";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10"
    >
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mb-4 font-heading">Direct Contact</h3>
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${brandInfo.email}`}
            className="flex items-center gap-3 text-(--text-primary) hover:text-(--accent-primary) transition-colors"
          >
            <Mail className="h-5 w-5 text-(--accent-primary)" />
            <span>{brandInfo.email}</span>
          </a>
          <div className="flex items-center gap-3 text-(--text-primary)">
            <Phone className="h-5 w-5 text-(--accent-primary)" />
            <div className="flex gap-4">
              {brandInfo.phones.map((phone, i) => (
                <a
                  key={i}
                  href={`tel:${phone}`}
                  className="hover:text-(--accent-primary) transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold mb-6 font-heading">Office Locations</h3>
        <div className="flex flex-col gap-6">
          {officeLocations.map((location, i) => (
            <div key={i} className="flex gap-4 items-start">
              <MapPin className="h-6 w-6 text-(--accent-primary) shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-(--accent-primary) mb-1">
                  {location.type}
                </h4>
                <p className="text-(--text-muted) leading-relaxed">
                  {location.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
