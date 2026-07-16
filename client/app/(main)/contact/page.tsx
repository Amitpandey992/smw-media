"use client";

import { motion } from "framer-motion";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import GridDistortion from "@/components/react-bits/GridDistortion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-(--bg-base) pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GridDistortion 
          imageSrc="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1920&q=80" 
          grid={10} 
          mouse={0.1} 
          strength={0.15} 
          relaxation={0.9} 
          className="w-full h-full opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-(--bg-base) via-(--bg-base)/70 to-(--bg-base)/50 z-10 pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="w-full mb-16 px-4 relative z-20">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-(--text-primary) font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-(--text-muted) max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Let's create something extraordinary together.
          </motion.p>
        </div>
      </section>


      {/* Content Grid */}
      <section className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <ContactInfo />
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
