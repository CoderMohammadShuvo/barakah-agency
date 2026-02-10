'use client'

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
    return (
        <section className="py-12 md:py-20 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="container mx-auto max-w-6xl relative rounded-[2.5rem] bg-[#FFF5F2] border border-[#FFE2D9] overflow-hidden"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-12">

                    {/* Left Side: Content & Sphere */}
                    <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
                        {/* Branded Sphere Visual */}
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full text-[#E76F3D] opacity-40"
                            >
                                {[...Array(8)].map((_, i) => (
                                    <motion.ellipse
                                        key={i}
                                        cx="50"
                                        cy="50"
                                        rx="45"
                                        ry="15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        initial={{ rotate: i * 22.5 }}
                                        animate={{ rotate: i * 22.5 + 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    />
                                ))}
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-[#381e11] tracking-tight">
                                Join Our Newsletter
                            </h2>
                            <p className="text-[#5c4033] text-lg font-medium leading-relaxed max-w-md">
                                Receive fresh articles straight in your inbox, every Friday morning. We also share interesting finds from the internet!
                            </p>

                            <form className="relative flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                                <div className="flex-1 relative">
                                    <Input
                                        type="email"
                                        placeholder="demo@gmail.com"
                                        className="h-14 px-6 rounded-full border-[#F0EBE8] bg-white text-[#381e11] placeholder:text-[#5c4033]/40 focus:ring-[#E76F3D]/20 focus:border-[#E76F3D] text-lg shadow-sm"
                                    />
                                </div>
                                <Button
                                    className="h-14 px-8 rounded-full bg-[#E76F3D] hover:bg-[#D45E32] text-white font-bold text-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group shadow-lg shadow-[#E76F3D]/20"
                                >
                                    Submit
                                    <div className="bg-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight className="h-4 w-4 text-[#E76F3D]" />
                                    </div>
                                </Button>
                            </form>
                            <p className="text-[#5c4033]/60 text-sm font-medium pt-2">
                                Weekly newsletter only. No spam, unsubscribe at any time.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Floating Illustration */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 animate-bounce-slow">
                        {/* Envelope & Letter Graphic */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                {/* 3D-ish Envelope Visual */}
                                <motion.div
                                    className="absolute inset-0 z-20"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-2xl">
                                        <path d="M20 60 L100 120 L180 60 L180 160 C 180 165, 175 170, 170 170 L30 170 C 25 170, 20 165, 20 160 Z" fill="#FFFFFF" />
                                        <path d="M20 60 L100 120 L180 60 L100 30 Z" fill="#E76F3D" />
                                        <path d="M100 120 L20 60 L30 170 L100 120 Z" fill="#F5F5F7" opacity="0.6" />
                                        <path d="M100 120 L180 60 L170 170 L100 120 Z" fill="#F5F5F7" opacity="0.6" />
                                    </svg>
                                </motion.div>
                                {/* 3D-ish Letter Visual */}
                                <motion.div
                                    className="absolute inset-0 z-10"
                                    animate={{ y: [0, -40, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="absolute top-[10%] left-[10%] w-[80%] h-[70%] bg-white rounded-lg shadow-xl border border-[#F0EBE8] p-4 flex flex-col gap-2">
                                        <div className="w-[40%] h-2 bg-[#E76F3D]/10 rounded" />
                                        <div className="w-[90%] h-1 bg-[#F0EBE8] rounded" />
                                        <div className="w-[95%] h-1 bg-[#F0EBE8] rounded" />
                                        <div className="w-[85%] h-1 bg-[#F0EBE8] rounded" />
                                        <div className="w-[90%] h-1 bg-[#F0EBE8] rounded" />
                                    </div>
                                </motion.div>
                                {/* Second background envelope shadow-thing from mockup */}
                                <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-[#E76F3D] to-transparent rounded-[2.5rem] blur-3xl scale-125" />
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}
