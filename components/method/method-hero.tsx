"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ImpactSlider } from "./impact-slider";

export function MethodHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FFF5F0]">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[120%] h-[120%] text-[#E76F3D]/20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="500"
            cy="500"
            r="100"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="200"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="300"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="400"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="500"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 pl-10">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-medium text-[#381E11] mb-4"
          >
            A Strategic Framework Rooted in Ethics, Built for Longevity
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-[#381E11] leading-none mb-8 tracking-tighter font-lato"
          >
            The Barakah Method
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#5C4033] leading-relaxed mb-10 w-full"
          >
            The Barakah Method is our proprietary framework that sustains your
            values-aligned brand growth. It blends cultural insight, ethical
            design, and data-led marketing to grow the legacy customers you
            deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#E76F3D] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d46235] transition-all group"
            >
              Grow With Barakah
              <div className="bg-white rounded-full p-1 text-[#E76F3D] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </motion.div>
        </div>
        <ImpactSlider />
      </div>
    </section>
  );
}
