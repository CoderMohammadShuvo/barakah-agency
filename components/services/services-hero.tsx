"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ServicesHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);
  const rotate1 = useTransform(scrollY, [0, 500], [-6, -10]);
  const rotate2 = useTransform(scrollY, [0, 500], [6, 10]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFCF9] pt-28 pb-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(228,111,61,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(30,144,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-[100px] font-bold text-[#3D1A10] leading-[1.1] mb-6 lg:mb-8 tracking-[-0.03em] text-balance"
            >
              Services for a <br className="hidden lg:block" />
              <span className="text-[#3D1A10]">New Economy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg lg:text-2xl text-[#3D1A10]/70 leading-relaxed max-w-xl mb-10 lg:mb-12 text-pretty font-medium mx-auto lg:mx-0"
            >
              Moving beyond extractive marketing to build high-performance
              systems that honor your values and your bottom line.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="h-14 lg:h-16 px-8 lg:px-10 bg-[#E76F3D] hover:bg-[#D46235] text-white rounded-full text-lg lg:text-xl font-bold transition-all hover:scale-105 shadow-xl shadow-orange-500/20 group"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-3 lg:gap-4"
                >
                  Grow with Barakah
                  <div className="bg-white rounded-full p-1 lg:p-1.5 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 text-[#E76F3D]" />
                  </div>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[750px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[550px] h-full flex items-center justify-center scale-75 sm:scale-90 lg:scale-100">
              {/* Card 1: Left Faded */}
              <motion.div
                style={{ y: y1, rotate: rotate1 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute left-0 lg:-left-20 w-[260px] h-[450px] rounded-[40px] bg-[#E8F3EF] shadow-2xl z-10 overflow-hidden border border-white/20 backdrop-blur-sm"
              >
                <div className="w-full h-full p-8 flex flex-col gap-6 opacity-30">
                  <div className="w-16 h-16 bg-white rounded-3xl" />
                  <div className="w-full h-4 bg-[#B5D7CC] rounded-full" />
                  <div className="w-3/4 h-4 bg-[#B5D7CC] rounded-full" />
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-white rounded-2xl" />
                    <div className="aspect-square bg-white rounded-2xl" />
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Center Main (The "Car" Card) */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-[340px] h-[580px] rounded-[48px] bg-[#0A0A0A] shadow-[0_0_100px_rgba(30,144,255,0.25)] z-30 overflow-hidden border-[6px] border-[#2A86FF] group/card"
              >
                {/* Simulated Content inspired by image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,165,0,0.15),transparent_50%)]" />

                {/* Visual Placeholder for the car */}
                <div className="w-full h-full relative overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Retro Grid Background */}
                    <div className="absolute bottom-0 w-full h-1/2 opacity-20 bg-[linear-gradient(rgba(30,144,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,144,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,black,transparent)]" />

                    {/* Abstract Car Shape */}
                    <div className="relative w-64 h-32 bg-gradient-to-r from-[#4A5568] to-[#CBD5E0] rounded-t-[100px] rounded-b-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform -skew-x-12 ring-2 ring-white/10 overflow-hidden">
                      <div className="absolute top-2 left-10 w-40 h-12 bg-sky-900/40 rounded-t-[50px]" />
                    </div>
                  </motion.div>
                </div>

                <div className="absolute bottom-12 left-10 z-20">
                  <h3 className="text-white font-bold text-5xl tracking-widest opacity-80 mb-2">
                    TESLA
                  </h3>
                  <p className="text-[#2A86FF] font-medium tracking-tight">
                    Limited availability
                  </p>
                </div>

                <div className="absolute top-10 right-10 z-20 flex flex-col items-end">
                  <div className="w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Right Faded (Assistio) */}
              <motion.div
                style={{ y: y2, rotate: rotate2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute right-0 lg:-right-10 w-[260px] h-[450px] rounded-[40px] bg-gradient-to-br from-[#A855F7] to-[#3B82F6] shadow-2xl z-10 flex flex-col items-center justify-center p-8 blur-[2px]"
              >
                <div className="text-white font-bold text-4xl italic tracking-tighter mb-8">
                  ssistio
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="w-full h-8 bg-white/20 rounded-2xl" />
                  <div className="w-2/3 h-8 bg-white/20 rounded-2xl" />
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
                viewBox="0 0 500 600"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M${-100 + i * 50} ${200 + i * 30} Q ${250} ${300} ${600} ${250 + i * 20}`}
                    stroke="rgba(231,111,61,0.15)"
                    strokeWidth="0.8"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 3,
                      delay: 1.5 + i * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
