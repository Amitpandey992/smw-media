"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { newsCategories } from "@/lib/data/opportunitiesData";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const mockNews = [
  {
    id: 1,
    title: "SMW Media wins Best Creative Agency Award 2026",
    date: "July 12, 2026",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
    category: "Success Stories",
  },
  {
    id: 2,
    title: "New Talent Hunt launched for upcoming Bollywood Web Series",
    date: "July 08, 2026",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800",
    category: "Event & Program Coverage",
  },
  {
    id: 3,
    title: "SMW Podcast crosses 1 Million listeners on Spotify",
    date: "July 01, 2026",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    category: "Entertainment News",
  },
];

export function SMWNews() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const containerRef2 = useRef<HTMLHeadingElement>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="w-full py-24 bg-surface relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.h2
          ref={containerRef}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight uppercase relative"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--text-primary)",
          }}
        >
          <VariableProximity
            label="SMW NEWS - Publishing News & Achievements"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </motion.h2>
      </div>

      {/* Infinite Marquee for Categories */}
      <div className="w-full flex overflow-hidden mb-20 relative py-4">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--bg-surface), transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--bg-surface), transparent)",
          }}
        />

        <motion.div
          className="flex whitespace-nowrap gap-4 px-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...newsCategories, ...newsCategories, ...newsCategories].map(
            (category, idx) => (
              <div
                key={idx}
                className="px-6 py-3 rounded-full border text-sm font-medium tracking-wide"
                style={{
                  borderColor: "var(--border-default)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                  backgroundColor: "var(--bg-base)",
                }}
              >
                {category}
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* Latest News Layout */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <h3
            ref={containerRef2}
            className="text-2xl font-bold relative"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            <VariableProximity
              label="Latest News"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef2}
              radius={100}
              falloff="linear"
            />
          </h3>
          <button
            className="text-sm font-bold flex items-center gap-2 hover:underline transition-all"
            style={{
              color: "var(--accent-primary)",
              fontFamily: "var(--font-sans)",
            }}
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {mockNews.map((news) => (
            <motion.article
              key={news.id}
              variants={cardVariants}
              className="group flex flex-col rounded-xl overflow-hidden border transition-colors duration-300 hover:border-primary cursor-pointer"
              style={{
                backgroundColor: "var(--bg-base)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "white",
                  }}
                >
                  {news.category}
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <div
                  className="flex items-center gap-2 text-xs mb-3"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h4
                  className="text-xl font-bold mb-4 line-clamp-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)",
                  }}
                >
                  {news.title}
                </h4>
                <div className="mt-auto">
                  <span
                    className="text-sm font-bold flex items-center gap-2 transition-all group-hover:translate-x-1"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Read More{" "}
                    <ArrowRight
                      className="w-4 h-4 text-primary"
                      style={{ color: "var(--accent-primary)" }}
                    />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
