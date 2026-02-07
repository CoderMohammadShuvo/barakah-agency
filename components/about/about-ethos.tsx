"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const ethosItems = [
    {
        id: "ethics",
        title: "Ethics Before Outcomes",
        description: "We believe results should never come at the expense of responsibility. Every decision we make is guided by ethical considerations.",
        angle: -90, // Top
    },
    {
        id: "strategy",
        title: "For Strategy Before Tactics",
        description: "We prioritize long-term thinking and deep-rooted strategy over quick, superficial marketing tactics that don't last.",
        angle: -18, // Top-right
    },
    {
        id: "systems",
        title: "For Systems Over Shortcuts",
        description: "We build scalable, robust systems that drive sustainable growth instead of chasing temporary hacks and shortcuts.",
        angle: 54, // Bottom-right
    },
    {
        id: "trust",
        title: "For trust over transactions",
        description: "Our focus is on building lasting clinical relationships and trust with audiences, not just driving one-off transactions.",
        angle: 126, // Bottom-left
    },
    {
        id: "impact",
        title: "For Impact Over Speed",
        description: "We measure success by the positive impact we create for people and planet, not just how quickly we can scale.",
        angle: 198, // Top-left
    },
]

export function AboutEthos() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const activeItem = ethosItems.find(item => item.id === hoveredId)

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-[#381E11] mb-6 font-lato"
                    >
                        Built on Trust. Focused on Legacy.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-[#5C4033] leading-relaxed"
                    >
                        Our ethos informs every decision we make, from strategy to execution, ensuring growth
                        is ethical, purposeful, and designed to last.
                    </motion.p>
                </div>

                {/* Interactive Circles Container */}
                <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center">

                    {/* Background Pattern (Subtle Mandala/Grid) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <svg viewBox="0 0 800 800" className="w-full h-full text-[#E76F3D]">
                            <defs>
                                <pattern id="ethos-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            {/* Concentric patterns to match the image style */}
                            <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                            <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            {/* Simplified weave pattern */}
                            <path
                                d="M 400 100 Q 500 150 400 200 Q 300 150 400 100"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="origin-center"
                                style={{ transform: 'rotate(0deg)' }}
                            />
                            {[...Array(8)].map((_, i) => (
                                <path
                                    key={i}
                                    d="M 400 100 Q 550 250 400 400 Q 250 250 400 100"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    style={{ transform: `rotate(${i * 45}deg)`, transformOrigin: '400px 400px' }}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Center Info Circle */}
                    <motion.div
                        className={cn(
                            "absolute z-20 w-[45%] aspect-square rounded-full flex flex-center p-8 text-center items-center justify-center transition-all duration-500",
                            hoveredId ? "bg-[#E76F3D] shadow-2xl shadow-[#E76F3D]/30" : "bg-[#FBD3C1]/50"
                        )}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={hoveredId || 'default'}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center h-full"
                            >
                                <p className={cn(
                                    "text-sm md:text-base leading-snug font-medium transition-colors duration-500",
                                    hoveredId ? "text-white" : "text-[#5C4033]"
                                )}>
                                    {hoveredId
                                        ? activeItem?.description
                                        : "Every decision we make is guided by ethical considerations that respect people, culture, and trust."}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Perimeter Circles */}
                    {ethosItems.map((item) => {
                        const radius = 35; // % from center
                        const x = 50 + radius * Math.cos((item.angle * Math.PI) / 180);
                        const y = 50 + radius * Math.sin((item.angle * Math.PI) / 180);

                        return (
                            <motion.div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={cn(
                                    "absolute z-30 w-[22%] aspect-square rounded-full cursor-pointer flex items-center justify-center p-4 text-center transition-all duration-300 border-2 border-transparent",
                                    hoveredId === item.id
                                        ? "bg-[#E76F3D] text-white scale-110 shadow-lg shadow-[#E76F3D]/40"
                                        : "bg-[#FBD3C1] text-[#381E11] hover:bg-[#FBD3C1]/80"
                                )}
                                style={{
                                    left: `${x}%`,
                                    top: `${y}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <span className="text-xs md:text-sm lg:text-base font-bold leading-tight">
                                    {item.title}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
