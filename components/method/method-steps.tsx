"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const frameworkSteps = [
    {
        number: "01",
        title: "Discovery",
        subtitle: "Uncover What Matters — And Where It Can Take You",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "02",
        title: "Strategy",
        subtitle: "Crafting ROI²™-Driven Strategy",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "03",
        title: "Positioning",
        subtitle: "Positioning You With Purpose",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "04",
        title: "Creative Development",
        subtitle: "Designing Creative That Converts With Conscience",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "05",
        title: "Digital Activation",
        subtitle: "Activating Digital Channels for Impact & Income",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    },
    {
        number: "06",
        title: "Optimization",
        subtitle: "Optimizing for Dual Returns",
        description: "We begin by listening deeply — to your goals, your gaps, and your guiding values. This clarity forms the foundation of an ROI²™ journey rooted in both strategy and sincerity.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
]

export function MethodSteps() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <section ref={containerRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-[#381E11]/40 mb-4 block"
                    >
                        • The Barakah Method •
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-[#381E11] font-lato leading-tight"
                    >
                        A Values-Led Framework for Sustainable<br />Growth and Lasting Impact
                    </motion.h2>
                </div>

                {/* Steps Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Progress Line */}
                    <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-[8px] bg-[#E76F3D]/20 rounded-full">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#381E11] origin-top rounded-full shadow-sm"
                            style={{ scaleY: pathLength }}
                        />
                    </div>

                    {/* Steps List */}
                    <div className="space-y-40 lg:pl-32 pl-12">
                        {frameworkSteps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Content Area */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-[#381E11]/60 font-medium">
                                        <span className="text-lg">({step.number})</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-4xl md:text-5xl font-black text-[#381E11]">
                                            {step.title}
                                        </h3>
                                        <p className="text-2xl font-bold text-[#381E11]/80">
                                            {step.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-lg text-[#5C4033] leading-relaxed max-w-xl">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Image Area */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
