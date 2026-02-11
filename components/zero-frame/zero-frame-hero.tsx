"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ZeroFrameHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#FFF5F0] pt-32 pb-20">
      {/* Background Radial Glow & Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Radial Glow */}
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(231,111,61,0.08)_0%,transparent_70%)]" />

        {/* Concentric Circles SVG */}
        <svg
          viewBox="0 0 1000 1000"
          className="absolute w-[120%] h-[120%] text-[#E76F3D]/10 opacity-60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="500"
            cy="500"
            r="150"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="250"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="350"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="500"
            cy="500"
            r="450"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          {/* Subheading */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-lg md:text-xl font-medium text-[#5C4033] tracking-tight"
          >
            ZeroFrame™ Intelligence Suite
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#381E11] leading-[1.1] tracking-tighter font-lato"
          >
            Make Confident Growth Decisions
            <br />
            With Clarity and Responsibility
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-[#5C4033] max-w-5xl mx-auto leading-relaxed"
          >
            Built to support ROI²™, Return on Investment and Return on Impact,
            ZeroFrame™ replaces fragmented tools with a unified system designed
            for ethical, strategic, and sustainable growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#E76F3D] text-white hover:bg-[#d46235] transition-all rounded-full pl-8 pr-2 py-2 font-bold shadow-xl shadow-[#E76F3D]/20 group"
            >
              <span className="text-xl">Grow with Barakah</span>
              <div className="bg-white rounded-full p-2 h-12 w-12 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
              </div>
            </Link>
          </motion.div>

          {/* Reporting Attribution Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-sm md:text-base text-[#5C4033]/60 font-medium pt-12"
          >
            • Reporting & Attribution Interface powered by Wicked Reports •
          </motion.p>

          {/* Dashboard Image Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="relative mt-12 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-white/50"
          >
            <div className="bg-white/80 backdrop-blur-sm p-2 flex gap-2 items-center border-b border-stone-100">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 text-[10px] text-stone-400 font-mono">
                zeroframe.barakah.agency/intelligence-suite
              </div>
            </div>
            <Image
              src="/assets/Inventory.png"
              alt="ZeroFrame Intelligence Suite Dashboard"
              width={1400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
