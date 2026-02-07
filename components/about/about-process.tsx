"use client"

import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Ear, Search, ShieldCheck, Target, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
    {
        id: "01",
        title: "Listen Deeply",
        description: "We begin by understanding your goals, audience, constraints, and market context. Every decision starts by anchoring your brand in what matters most.",
        icon: Ear,
        side: "left",
    },
    {
        id: "02",
        title: "Diagnose with Insight",
        description: "We assess where you are and uncover unseen opportunities using our ZeroFrame™ Data Suite – built for clarity, compliance, and growth.",
        icon: Search,
        side: "right",
    },
    {
        id: "03",
        title: "Strategize for Scale",
        description: "Together, we co-create a roadmap aligned with your brand identity, business goals, and long-term impact. No fluff — just focused direction.",
        icon: ShieldCheck, // Using ShieldCheck as a placeholder for the knight/strategy icon
        side: "left",
    },
    {
        id: "04",
        title: "Execute with Precision",
        description: "From branding and paid media to automation and community growth, we deploy the right mix of services to deliver measurable momentum.",
        icon: Target,
        side: "right",
    },
    {
        id: "05",
        title: "Refine and Sustain",
        description: "We track performance, optimize continuously, and advise proactively — because legacy isn't a moment. It's a mindset.",
        icon: RefreshCw,
        side: "left",
    },
]

export function AboutProcess() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <section ref={containerRef} className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold uppercase tracking-[0.2em] text-[#381E11]/40 mb-4 block"
                    >
            // How We Work With You //
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-[#381E11] font-lato max-w-3xl mx-auto leading-tight"
                    >
                        To Build Sustainable,<br />Legacy-Aligned Growth
                    </motion.h2>
                </div>

                {/* Process Content */}
                <div className="relative max-w-5xl mx-auto lg:h-[1800px] h-[2500px]">
                    {/* Central Path SVG */}
                    <div className="absolute inset-0 flex justify-center pointer-events-none">
                        <svg
                            className="h-full w-full max-w-[400px]"
                            viewBox="0 0 400 1800"
                            fill="none"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Static background path */}
                            <path
                                d="M 200 0 C 200 150 350 150 350 300 C 350 450 50 450 50 600 C 50 750 350 750 350 900 C 350 1050 50 1050 50 1200 C 50 1350 350 1350 350 1500 C 350 1650 200 1650 200 1800"
                                stroke="#381E11"
                                strokeWidth="12"
                                strokeLinecap="round"
                                opacity="0.1"
                            />
                            {/* Animated path */}
                            <motion.path
                                d="M 200 0 C 200 150 350 150 350 300 C 350 450 50 450 50 600 C 50 750 350 750 350 900 C 350 1050 50 1050 50 1200 C 50 1350 350 1350 350 1500 C 350 1650 200 1650 200 1800"
                                stroke="#381E11"
                                strokeWidth="12"
                                strokeLinecap="round"
                                style={{
                                    pathLength,
                                }}
                            />
                        </svg>
                    </div>

                    {/* Cards */}
                    <div className="relative h-full">
                        {processSteps.map((step, idx) => {
                            const isLeft = step.side === "left";
                            const topOffset = idx * (100 / processSteps.length);

                            return (
                                <div
                                    key={step.id}
                                    className={cn(
                                        "absolute w-full md:w-[60%] lg:w-[45%] flex",
                                        isLeft ? "left-0 justify-start" : "right-0 justify-end"
                                    )}
                                    style={{ top: `${topOffset}%` }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ margin: "-100px" }}
                                        transition={{ duration: 0.8 }}
                                        className="relative group w-full"
                                    >
                                        <div className={cn(
                                            "bg-gradient-to-br from-[#E76F3D] to-[#FBD3C1] p-[1px] rounded-[40px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2",
                                            isLeft ? "rounded-tl-none" : "rounded-tr-none"
                                        )}>
                                            <div className={cn(
                                                "bg-white p-8 md:p-10 rounded-[40px] flex flex-col items-start gap-4",
                                                isLeft ? "rounded-tl-none" : "rounded-tr-none"
                                            )}>
                                                {/* Step Icon */}
                                                <div className="flex items-center gap-6 mb-2">
                                                    <div className="w-20 h-20 rounded-full bg-[#FBD3C1]/30 flex items-center justify-center text-[#E76F3D]">
                                                        <step.icon className="w-10 h-10 stroke-[1.5]" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[#E76F3D] font-bold text-sm tracking-widest uppercase mb-1">
                               // Step {step.id}
                                                        </span>
                                                        <h3 className="text-3xl font-black text-[#381E11] leading-none">
                                                            {step.title}
                                                        </h3>
                                                    </div>
                                                </div>

                                                <p className="text-[#5C4033] text-lg leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
