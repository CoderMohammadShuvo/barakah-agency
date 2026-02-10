"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ServicesHero() {
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

          {/* Right Visual Element - Auto Slider */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0 overflow-hidden">
            <div className="relative w-full max-w-[650px] h-full flex gap-4 sm:gap-6 justify-center lg:justify-end scale-90 sm:scale-100 pb-20">
              {/* Fade Gradients */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFFCF9] to-transparent z-40" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFFCF9] to-transparent z-40" />

              {/* Column 1: Slow Up */}
              <div className="flex-1 max-w-[200px] relative">
                <MarqueeColumn
                  speed={60}
                  images={[
                    "/assets/1.png",
                    "/assets/2.png",
                    "/assets/3.png",
                    "/assets/be1.jpg",
                    "/assets/i1.png",
                  ]}
                />
              </div>

              {/* Column 2: Faster Down (Featured) */}
              <div className="flex-1 max-w-[240px] relative pt-12">
                <MarqueeColumn
                  speed={45}
                  reverse
                  images={[
                    "/assets/be2.jpg",
                    "/assets/4.png",
                    "/assets/5.png",
                    "/assets/a1.png",
                    "/assets/i2.png",
                  ]}
                  featured
                />
              </div>

              {/* Column 3: Medium Up */}
              <div className="flex-1 max-w-[200px] relative pt-24">
                <MarqueeColumn
                  speed={55}
                  images={[
                    "/assets/a2.png",
                    "/assets/a3.png",
                    "/assets/be3.jpg",
                    "/assets/a4.png",
                    "/assets/i4.png",
                  ]}
                />
              </div>

              {/* Decorative Lines (connecting columns subtlely) */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <svg
                  className="w-full h-full opacity-10"
                  viewBox="0 0 500 800"
                  fill="none"
                >
                  <path
                    d="M100 200 Q 250 400 400 200"
                    stroke="#E76F3D"
                    strokeWidth="1"
                  />
                  <path
                    d="M150 500 Q 300 300 450 500"
                    stroke="#E76F3D"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-components for the slider
interface MarqueeColumnProps {
  images: string[];
  speed: number;
  reverse?: boolean;
  featured?: boolean;
}

function MarqueeColumn({
  images,
  speed,
  reverse = false,
  featured = false,
}: MarqueeColumnProps) {
  // Duplicate images for infinite loop
  const displayImages = [...images, ...images];

  return (
    <div className="relative h-full overflow-hidden rounded-[32px] sm:rounded-[48px]">
      <motion.div
        className="flex flex-col gap-4 sm:gap-6"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {displayImages.map((src, i) => (
          <div
            key={i}
            className={`relative w-full aspect-[2/3.2] rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 group ${
              featured ? "scale-105 z-10" : "scale-100 opacity-80"
            }`}
          >
            <Image
              src={src}
              alt="Case study"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 150px, 250px"
              priority={i < 3}
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-60 pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
