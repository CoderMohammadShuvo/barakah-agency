"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/global";
import { cn } from "@/lib/utils";

const dashboards = [
  { id: 1, src: "/assets/zf6.png", alt: "Wicked Reports Dashboard 1" },
  { id: 2, src: "/assets/zf6.png", alt: "Wicked Reports Dashboard 2" },
  {
    id: 3,
    src: "/assets/zf6.png",
    alt: "Wicked Reports Dashboard 3",
  },
];

export function MultiChannelAttribution() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section className="bg-[#E76F3D] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo & Header */}
        <div className="relative text-center mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <Image
              src="/assets/zf5.png"
              alt="W"
              width={436}
              height={438}
              className="mt-[-200px]"
            />
          </motion.div>

          {/* Heading Block */}
          <div className="absolute left-0 right-0 top-2/3 -translate-y-1/2 z-20 ">
            <span className="text-[#3F1200] text-lg font-medium tracking-widest uppercase block">
              • Powered by Wicked Reports •
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3F1200] font-lato leading-tight">
              Your Multi-Channel
              <br />
              Attribution Interface
            </h2>
          </div>
        </div>

        {/* Dashboard Carousel */}
        <div className="relative max-w-7xl mx-auto ">
          {/* Main Display Window */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border-8 border-black aspect-[16/10]"
          >
            {/* Browser Header Visual */}

            <div className="relative h-full mt-[-100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={dashboards[activeTab].src}
                    alt={dashboards[activeTab].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {dashboards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeTab === i
                    ? "w-10 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50",
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
