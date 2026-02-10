"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutHero() {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20
  bg-cover bg-center
"
    >
      {/* Background Radial Glow & Concentric Circles */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Background"
          fill
          className="object-fit object-top opacity-40 mix-blend-multiply"
          priority
          quality={100}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Subheading */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-lg md:text-xl font-medium text-[#381E11] tracking-tight"
          >
            Growth with Integrity.
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-7xl font-black text-[#381E11] leading-[1.1] tracking-tighter font-lato"
          >
            Marketing That Honors Purpose, People, and Planet.
          </motion.h1>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-[#5C4033] max-w-3xl mx-auto leading-relaxed"
          >
            Barakah Agency partners with top brands worldwide to preserve their
            values, strengthen their reputation, and design ethical marketing
            strategies that stand the test of time.
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
              <span className="text-xl">Grow With Barakah</span>
              <div className="bg-white rounded-full p-2 h-12 w-12 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative center dots or symbols if needed - Keeping it clean like the image */}
    </section>
  );
}
