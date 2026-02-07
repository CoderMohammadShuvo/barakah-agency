"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MethodLegacy() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header Section */}
                <div className="max-w-5xl mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-medium text-[#381E11] mb-4"
                    >
                        Return on Investment. Return on Impact.
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black text-[#381E11] leading-[1.1] mb-10 tracking-tighter font-lato"
                    >
                        It's How We Build<br />Your Brand's Legacy
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#5C4033] leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            At Barakah Agency, growth isn't just about what you achieve today, but what continues to grow tomorrow.
                            ROI²™ represents our belief that every marketing decision carries responsibility. Yes, it should convert;
                            but it should also reflect your values, signal clarity, and earn lasting trust. When done right,
                            strategy compounds: trust deepens, loyalty grows, revenue increases, and brands evolve into legacies.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            When performance is guided by purpose, revenue becomes sustainable rather than fragile.
                            Customers stay longer, advocacy grows stronger, and trust deepens over time.
                            The result is not just momentum, but durability.
                        </motion.p>
                    </div>
                </div>

                {/* Visual Showcase (Animated Diamond) */}
                <div className="max-w-6xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-video shadow-2xl flex items-center justify-center p-12"
                    >
                        {/* Animated Diamond Shape */}
                        <div className="relative w-[30%] lg:w-[25%] aspect-square">
                            <svg viewBox="0 0 400 400" className="w-full h-full">
                                <defs>
                                    <pattern id="lines-legacy" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                                        <line x1="0" y1="2" x2="4" y2="2" stroke="#000" strokeWidth="2" opacity="0.3" />
                                    </pattern>
                                    <linearGradient id="diamondGradient-legacy" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f59e5f" />
                                        <stop offset="100%" stopColor="#f7a96a" />
                                    </linearGradient>
                                </defs>

                                {/* Rotating diamond */}
                                <motion.g
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: '200px 200px' }}
                                >
                                    <path
                                        d="M 200 50 L 350 200 L 200 350 L 50 200 Z"
                                        fill="url(#diamondGradient-legacy)"
                                        stroke="none"
                                    />
                                    <path
                                        d="M 200 50 L 350 200 L 200 350 L 50 200 Z"
                                        fill="url(#lines-legacy)"
                                        stroke="none"
                                    />
                                </motion.g>
                            </svg>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-12 left-12">
                            <div className="bg-[#E76F3D] text-white px-6 py-2 rounded-lg font-bold text-xl">
                                What if performance
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-start"
                >
                    <Link
                        href="/barakah-ecosystem"
                        className="inline-flex items-center gap-3 bg-[#E76F3D] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#d46235] transition-all group"
                    >
                        Explore The Barakah Ecosystem
                        <div className="bg-white rounded-full p-1 text-[#E76F3D] group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="h-5 w-5" />
                        </div>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}
