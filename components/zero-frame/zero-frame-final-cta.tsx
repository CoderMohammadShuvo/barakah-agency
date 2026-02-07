'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ZeroFrameFinalCTA() {
    return (
        <section className="relative py-24 lg:py-40 overflow-hidden bg-white">
            {/* Background Decorative Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.05, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#E76F3D] to-white whitespace-nowrap"
                    style={{ WebkitTextStroke: "1px rgba(231, 111, 61, 0.2)" }}
                >
                    ZeroFrame™ Intelligence
                </motion.h2>
            </div>

            {/* Decorative Background Glow & Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(231,111,61,0.05)_0%,transparent_70%)]" />
                <svg
                    viewBox="0 0 1000 1000"
                    className="absolute w-[100%] h-[100%] text-[#E76F3D]/5 opacity-60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="350" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="500" cy="500" r="500" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#381E11] font-lato leading-tight tracking-tight">
                        Ready to Centralize<br />Your Growth Stack?
                    </h2>

                    <p className="text-base md:text-lg text-[#5C4033]/80 max-w-2xl mx-auto leading-relaxed">
                        <span className="font-bold text-[#381E11]">ZeroFrame Intelligence</span> is a proprietary integration that combines two powerful technologies: Wicked Reports and our custom-built platform designed specifically for eCommerce brands. This exclusive configuration forms the core of our performance tech stack — giving you deeper attribution, smarter targeting, insights, and more intentional growth.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="pt-8"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-[#E76F3D] text-white hover:bg-[#d46235] transition-all rounded-full pl-10 pr-3 py-3 font-bold shadow-xl shadow-[#E76F3D]/20 group"
                        >
                            <span className="text-xl">Book a Demo</span>
                            <div className="bg-white rounded-full p-2 h-14 w-14 flex items-center justify-center transition-transform group-hover:translate-x-1">
                                <ArrowRight className="h-7 w-7 text-[#E76F3D]" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
