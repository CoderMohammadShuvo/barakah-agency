'use client'

import React from "react"
import { motion } from "framer-motion"

export function ContactQuoteSection() {
    return (
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    {/* Background Gradient with Grain Texture Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9A3412] to-[#FB923C]" />
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6-mini.png')]" />

                    <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center text-center text-white">

                        {/* Top Sphere Visual (Half-moon style) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-30 grayscale invert">
                            <svg
                                width="1126"
                                height="1126"
                                viewBox="0 0 1126 1126"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full"
                            >
                                <path
                                    d="M551.151 1125.46L592.156 1123.73L630.291 1122.04L669.725 1114.53L709.157 1107.02L746.152 1092.22"
                                    stroke="currentColor"
                                    strokeWidth="20"
                                />
                                <circle cx="563" cy="563" r="450" stroke="currentColor" strokeWidth="40" opacity="0.4" />
                                <circle cx="563" cy="563" r="350" stroke="currentColor" strokeWidth="30" opacity="0.3" />
                            </svg>
                        </div>

                        {/* Quote Container */}
                        <div className="relative max-w-4xl mx-auto space-y-8">
                            {/* Quote Marks */}
                            <div className="absolute -left-4 md:-left-12 top-0 text-white/40 select-none">
                                <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
                                    <path d="M0 48V20.4L10.8 0H26.4L18 20.4H28.8V48H0ZM31.2 48V20.4L42 0H57.6L49.2 20.4H60V48H31.2Z" />
                                </svg>
                            </div>
                            <div className="absolute -right-4 md:-right-12 top-0 text-white/40 select-none scale-x-[-1]">
                                <svg width="60" height="48" viewBox="0 0 60 48" fill="currentColor">
                                    <path d="M0 48V20.4L10.8 0H26.4L18 20.4H28.8V48H0ZM31.2 48V20.4L42 0H57.6L49.2 20.4H60V48H31.2Z" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black italic tracking-wide">
                                "Rise Above the Noise" – It's More Than Just a Tagline
                            </h2>

                            {/* Quote Text */}
                            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed opacity-90 font-serif italic">
                                "In the arena of marketing, our true opponent is indifference. Every campaign we launch and every strategy we devise is a jab at apathy and a hook for change, striving to leave the world a little better than we found it. At Barakah Agency, we don't just fight to win; we fight for a cause."
                            </p>

                            {/* Attribution */}
                            <div className="pt-6">
                                <p className="text-xl md:text-2xl font-black tracking-tight">
                                    -Ziad Itani, Founder, Growth & Strategy
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
