"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const impactImages = [
  {
    src: "/assets/i1.png",
    alt: "Billboard showcase",
  },
  {
    src: "/assets/i2.png",
    alt: "Creative branding cards",
  },
  {
    src: "/assets/i4.png",
    alt: "Logistics branding showcase",
  },
  {
    src: "/assets/i3.png",
    alt: "Logo design showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    alt: "Strategic marketing",
  },
];

export function ImpactSlider() {
  return (
    <section className="py-20 bg-none overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="border-t border-[#381E11]/10 pt-8">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium text-[#381E11]"
          >
            Brand Impact, Powered by the Barakah Method and Mesghali Studio
          </motion.h3>
        </div>
      </div>

      {/* Slider */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: [0, -1600] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {/* Double the images for infinite loop */}
          {[...impactImages, ...impactImages].map((image, idx) => (
            <div
              key={idx}
              className="relative w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
