'use client'

import React from "react"
import { motion } from "framer-motion"

export function EthicalMarketingHero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-32 pb-20 px-4">
            {/* Background Mandala Graphic */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] lg:w-[1000px] lg:h-[1000px] -translate-x-1/2 opacity-[0.08] lg:opacity-[0.12] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#E76F3D]">
                    <motion.path
                        d="M50 5 C 60 5, 95 40, 95 50 C 95 60, 60 95, 50 95 C 40 95, 5 60, 5 50 C 5 40, 40 5, 50 5 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                    />
                    {[...Array(16)].map((_, i) => (
                        <motion.ellipse
                            key={i}
                            cx="50"
                            cy="50"
                            rx="45"
                            ry="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.15"
                            initial={{ rotate: i * 11.25 }}
                            animate={{ rotate: i * 11.25 + 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                    {[...Array(12)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx="50"
                            cy="50"
                            r={10 + i * 3.5}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.05"
                            strokeDasharray="1 2"
                            initial={{ rotate: i * 30 }}
                            animate={{ rotate: i * 30 - 360 }}
                            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </svg>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="max-w-4xl space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xl md:text-2xl font-bold text-[#381e11]"
                    >
                        Ethical Marketing Hub
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-black text-[#381e11] leading-[1] tracking-tight"
                    >
                        What Is Ethical <br className="hidden md:block" />
                        Marketing? The <br className="hidden lg:block" />
                        Basics Every <br className="hidden md:block" />
                        Marketer Needs <br className="hidden lg:block" />
                        To Know
                    </motion.h1>
                </div>
            </div>

            {/* Gradient Overlay for soft transition */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    )
}
