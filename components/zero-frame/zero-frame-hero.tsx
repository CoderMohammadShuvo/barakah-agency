"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ZeroFrameHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20">
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

      <div className="w-full relative z-10 mx-auto px-4 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mx-auto "
        >
          {/* Subheading */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-lg md:text-4xl font-medium text-[#5C4033] tracking-tight mt-20"
          >
            ZeroFrame™ Intelligence Suite
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[110px] font-black text-[#3F1200] leading-[1.1] tracking-tighter font-lato"
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
              className="
    hidden sm:inline-flex items-center gap-3
    bg-[#E76F3D]
    text-black
    hover:bg-[#d46235]
    transition-all
    rounded-[56px]
    h-[52px]
    pl-[20px]
    pr-[6px]
    py-[6px]
    font-bold
    shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]
  "
            >
              <span className="text-lg text-white">Grow with Barakah</span>

              <div
                className="
                mt-1
      h-10 w-10
      flex items-center justify-center
    "
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1666_721)">
                    <circle cx="24" cy="20" r="20" fill="#F8FAFC" />
                    <path
                      d="M19.8333 24.1665L28.1666 15.8332M28.1666 15.8332H19.8333M28.1666 15.8332V24.1665"
                      stroke="black"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1666_721"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1666_721"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1666_721"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
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

          <div className="container mx-auto mt-16 relative w-full h-[500px] md:h-[900px]">
            <Image
              src="/assets/Inventory.png"
              alt="ZeroFrame Intelligence Suite Dashboard"
              fill
              className="object-contain "
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
