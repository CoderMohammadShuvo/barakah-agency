"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function PerformanceHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFCF9] pt-32 pb-40">
      {/* Decorative Background Pattern (Mandala-like) */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#3D1A10]">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          {[...Array(24)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50"
              cy="50"
              rx="48"
              ry="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              initial={{ rotate: i * 7.5 }}
              animate={{ rotate: i * 7.5 + 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-7xl lg:text-[90px] font-bold text-[#3D1A10] leading-[0.95] tracking-[-0.03em] mb-10"
            >
              Performance <br />
              Marketing That <br />
              Respects the Person.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-3xl text-[#3D1A10]/70 leading-relaxed max-w-xl mb-12 font-medium"
            >
              We’ve replaced aggressive tactics with high-integrity growth
              systems. Scale your reach without compromising your reputation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="h-16 px-10 bg-[#E76F3D] hover:bg-[#D46235] text-white rounded-full text-xl font-bold shadow-2xl shadow-orange-500/20 group transition-all hover:scale-105"
              >
                <Link href="/contact" className="flex items-center gap-4">
                  Grow with Barakah
                  <div className="bg-white rounded-full p-2 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
                  </div>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Visual (Speedometer) */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[350px] sm:w-[500px] aspect-square"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#E76F3D]/20 blur-[100px] rounded-full animate-pulse" />

              {/* Speedometer Image Container */}
              <div className="relative w-full h-full bg-[#1A1A1A] rounded-full border-[12px] border-[#2A1A10] shadow-[0_0_80px_rgba(231,111,61,0.3)] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,111,61,0.2)_0%,transparent_70%)]" />

                {/* Simulated Speedometer with SVG & Image */}
                <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-[#3D1A10]/30 shadow-inner">
                  <Image
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                    alt="Speedometer Performance"
                    fill
                    className="object-cover opacity-50 contrast-125 saturate-50"
                  />

                  {/* Gauge Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-[90%] h-[90%] drop-shadow-2xl"
                    >
                      {/* Scale Marks */}
                      {[...Array(20)].map((_, i) => (
                        <line
                          key={i}
                          x1="50"
                          y1="5"
                          x2="50"
                          y2="12"
                          stroke={i > 14 ? "#E76F3D" : "#ffffff40"}
                          strokeWidth="2"
                          transform={`rotate(${i * 12 - 120} 50 50)`}
                        />
                      ))}

                      {/* Speed Needle */}
                      <motion.g
                        initial={{ rotate: -120 }}
                        animate={{ rotate: 40 }}
                        transition={{
                          duration: 2,
                          delay: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        style={{ originX: "50px", originY: "50px" }}
                      >
                        <line
                          x1="50"
                          y1="50"
                          x2="50"
                          y2="10"
                          stroke="#E76F3D"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle cx="50" cy="50" r="4" fill="#E76F3D" />
                      </motion.g>
                    </svg>
                  </div>
                </div>

                {/* Internal Glows */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-orange-500/10 blur-3xl pointer-events-none" />
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-[#E76F3D]/10 blur-2xl rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
