"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFCF9] pt-28 pb-20">
      {/* Background Image */}
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

      {/* Soft Overlay to blend if needed */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFCF9]/80 z-0 pointer-events-none" />

      <div className="w-full mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left Content - 40% */}
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-[84px] font-bold text-[#3D1A10] leading-[1.1] mb-6 lg:mb-8 tracking-[-0.03em] text-balance"
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

          {/* Right Visual Element - 60% */}
          <div className="w-full lg:w-[60%] relative h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* White side gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFFCF9] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFFCF9] to-transparent z-10 pointer-events-none" />

            <div className="w-full">
              <MarqueeColumn
                speed={40}
                images={[
                  "/assets/1.png",
                  "/assets/2.png",
                  "/assets/3.png",
                  "/assets/be1.jpg",
                  "/assets/i1.png",
                ]}
              />
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
}

function MarqueeColumn({ images, speed, reverse = false }: MarqueeColumnProps) {
  // Duplicate images for infinite loop
  const displayImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-10 sm:gap-12"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed * 2,
            ease: "linear",
          },
        }}
      >
        {displayImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative w-[250px] sm:w-[320px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl group border-4 border-white/50"
          >
            <Image
              src={src}
              alt="Case study"
              fill
              sizes="(max-width: 768px) 320px, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={i < 3}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
