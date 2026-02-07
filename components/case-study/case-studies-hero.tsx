"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CaseStudiesHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#FFF5F0] pt-20">
            {/* Background Radial Glow & Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Radial Glow */}
                <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(231,111,61,0.08)_0%,transparent_70%)]" />

                {/* Concentric Circles SVG */}
                <svg
                    viewBox="0 0 1000 1000"
                    className="absolute w-[120%] h-[120%] text-[#E76F3D]/10 opacity-60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="350" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto space-y-8"
                >
                    {/* Subheading */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block text-lg md:text-xl font-medium text-[#5C4033] tracking-tight"
                    >
                        Our Work and Impact
                    </motion.span>

                    {/* Main Heading with Custom Underlines */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black text-[#381E11] leading-[1.1] tracking-tighter font-lato"
                    >
                        Work That Creates{" "}
                        <span className="relative">
                            Lasting Impact
                            <span className="absolute left-0 bottom-2 w-full h-[3px] bg-[#00A8CC]" />
                        </span>{" "}
                        Through{" "}
                        <span className="relative">
                            Purposeful Growth
                            <span className="absolute left-0 bottom-2 w-full h-[3px] bg-[#00A8CC]" />
                        </span>
                    </motion.h1>

                    {/* Body Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-lg md:text-2xl text-[#5C4033] max-w-4xl mx-auto leading-relaxed"
                    >
                        Selected projects that demonstrate how ethical strategy, clear systems, and purposeful execution lead to measurable growth and lasting impact.
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
        </section>
    )
}
