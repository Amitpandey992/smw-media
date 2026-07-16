"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully (Simulation).");
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-(--bg-surface) p-8 rounded-xl border border-(--border-default) w-full shadow-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-(--text-primary)">Full Name</label>
          <input 
            type="text" 
            id="name"
            required
            className="bg-[#050505] border border-[#262626] text-white focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) outline-none rounded-md w-full p-3 transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-(--text-primary)">Email Address</label>
          <input 
            type="email" 
            id="email"
            required
            className="bg-[#050505] border border-[#262626] text-white focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) outline-none rounded-md w-full p-3 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-(--text-primary)">Phone Number</label>
          <input 
            type="tel" 
            id="phone"
            className="bg-[#050505] border border-[#262626] text-white focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) outline-none rounded-md w-full p-3 transition-colors"
            placeholder="+91 0000000000"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2 text-(--text-primary)">Interested Service</label>
          <select 
            id="service"
            className="bg-[#050505] border border-[#262626] text-white focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) outline-none rounded-md w-full p-3 transition-colors"
          >
            <option value="">Select a service</option>
            <option value="Event Management">Event Management</option>
            <option value="Film Production">Film Production</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Artist Management">Artist Management</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-(--text-primary)">Message</label>
          <textarea 
            id="message"
            required
            rows={4}
            className="bg-[#050505] border border-[#262626] text-white focus:border-(--accent-primary) focus:ring-1 focus:ring-(--accent-primary) outline-none rounded-md w-full p-3 transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-(--accent-primary) text-white font-bold py-3 px-6 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
