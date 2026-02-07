"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/2.png",
    alt: "Branding Work 1",
    rotate: -12,
    x: "-100%",
    y: "15%",
    zIndex: 10,
  },
  {
    src: "/assets/1.png",
    alt: "Branding Work 2",
    rotate: -6,
    x: "-50%",
    y: "5%",
    zIndex: 20,
  },
  {
    src: "/assets/3.png",
    alt: "Branding Work 3",
    rotate: 0,
    x: "0%",
    y: "0%",
    zIndex: 30,
    isCenter: true,
  },
  {
    src: "/assets/5.png",
    alt: "Branding Work 4",
    rotate: 6,
    x: "50%",
    y: "5%",
    zIndex: 20,
  },
  {
    src: "/assets/4.png",
    alt: "Branding Work 5",
    rotate: 12,
    x: "100%",
    y: "15%",
    zIndex: 10,
  },
];

export function BrandingHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFCF9] pt-32 pb-40">
      {/* Background Radial Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border border-[#E76F3D]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] border border-[#E76F3D]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#E76F3D]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#E76F3D]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#E76F3D]/5 rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,111,61,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#E76F3D]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-7xl lg:text-[100px] font-bold text-[#3D1A10] text-center leading-[0.95] tracking-[-0.03em] max-w-5xl mb-12"
        >
          Build a Brand that <br className="hidden md:block" />
          Outlasts the Moment
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
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

        {/* Fanned Images Container */}
        <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] mt-20">
          <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: image.rotate,
                  x: image.x,
                  translateY: image.y,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ zIndex: image.zIndex }}
                className={`absolute w-[200px] sm:w-[350px] lg:w-[450px] aspect-[4/3] bg-white shadow-2xl overflow-hidden border-4 border-white ${
                  image.isCenter ? "z-30" : ""
                }`}
              >
                <div className="w-full h-full relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade Overlay at the bottom */}
          <div className="absolute bottom-0 left-[-20%] right-[-20%] h-64 bg-gradient-to-t from-[#FFFCF9] via-[#FFFCF9]/80 to-transparent z-40" />

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 text-center z-50 transform translate-y-12"
          >
            <p className="text-lg md:text-xl text-[#3D1A10] font-bold tracking-tight px-4">
              Brand Impact, Powered by The Barakah <br /> Method and Mesghali
              Studio
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
