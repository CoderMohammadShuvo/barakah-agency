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
    <Section className="bg-[#E76F3D] overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo & Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* The Flame/Graphic behind W */}
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full translate-y-4 mt-[-100px]" />
            <Image src="/assets/zf5.png" alt="W" width={300} height={300} />
          </motion.div>

          <div className="space-y-2">
            <span className="text-white/80 text-sm font-medium tracking-widest uppercase">
              • Powered by Wicked Reports •
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-lato leading-tight">
              Your Multi-Channel
              <br />
              Attribution Interface
            </h2>
          </div>
        </div>

        {/* Dashboard Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Display Window */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#3A241A]/10 aspect-[16/10]"
          >
            {/* Browser Header Visual */}
            <div className="bg-gray-100/80 p-3 lg:p-4 flex gap-2 items-center border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="ml-4 flex-1 h-6 bg-white rounded-md border border-gray-200 flex items-center px-4 text-[10px] text-gray-400 font-mono">
                wickedreports.com/mission-control/dashboard
              </div>
            </div>

            <div className="relative h-full">
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
