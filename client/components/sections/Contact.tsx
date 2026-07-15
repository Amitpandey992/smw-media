"use client";

import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import VariableProximity from "@/components/react-bits/VariableProximity";
import { Send } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-sm font-sans tracking-widest uppercase text-primary mb-4">
                Get In Touch
              </h2>
              <h3 ref={containerRef} className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight mb-6 relative">
                <VariableProximity
                  label="Let's create something extraordinary."
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </h3>
              <p className="text-lg text-muted-foreground font-sans max-w-md mb-12">
                Whether you have a fully formed vision or just the spark of an
                idea, we are ready to bring it to life. Reach out today.
              </p>

              <div className="space-y-6 text-muted-foreground font-sans">
                <div>
                  <strong className="block text-foreground font-medium mb-1">
                    Email Us
                  </strong>
                  <a
                    href="mailto:hello@smwmedia.com"
                    className="hover:text-primary transition-colors"
                  >
                    hello@smwmedia.com
                  </a>
                </div>
                <div>
                  <strong className="block text-foreground font-medium mb-1">
                    Call Us
                  </strong>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-surface p-8 md:p-12 rounded-2xl border border-border shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="music">Music Production</option>
                    <option value="film">Film & Ad Production</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : isSuccess ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
