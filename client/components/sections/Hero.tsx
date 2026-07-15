"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SplitText } from "@/components/react-bits/SplitText";
import { GridScan } from "@/components/react-bits/GridScan";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-background overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.1}
          scanColor="#f00520"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl pointer-events-none">
        <SplitText
          text="Welcome to SMW Media & Entertainment."
          className="text-lg font-heading font-bold text-foreground leading-tight mb-4"
        />
        <SplitText
          text="Creating Stories • Building Brands • Connecting Audiences"
          className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight"
        />

        {/* <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-primary text-white font-sans font-medium rounded-full relative overflow-hidden group pointer-events-auto"
        >
          <span className="relative z-10">Explore Services</span>
          <motion.div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
        </motion.button> */}
      </div>

      {/* <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
