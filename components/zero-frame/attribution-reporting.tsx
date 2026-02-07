'use client'

import React from "react"
import { Section, SectionHeader } from "@/components/global"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const attributionCards = [
    {
        title: "Multi-touch attribution",
        description: "Understand how each interaction contributes to conversion.",
        clipPath: "polygon(0 40%, 100% 100%, 100% 100%, 0% 100%)", // Default for mobile if needed, but we'll use specific ones
        gradient: "from-[#F09464] to-[#E76F3D]",
    },
    {
        title: "Channel & Campaign Tracking",
        description: "Understand how each interaction contributes to conversion.",
        gradient: "from-[#F09464] to-[#E76F3D]",
    },
    {
        title: "Revenue & Conversion Reporting",
        description: "Understand how each interaction contributes to conversion.",
        gradient: "from-[#F09464] to-[#E76F3D]",
    },
    {
        title: "Customer Journey Visibility",
        description: "Understand how each interaction contributes to conversion.",
        gradient: "from-[#F09464] to-[#E76F3D]",
    },
]

export function AttributionReporting() {
    return (
        <Section className="bg-white overflow-hidden pb-0 lg:pb-0">
            <SectionHeader
                title="First-Party Attribution Reporting"
                description="This module uses 15,000+ lines of code and tracks how users interact across channels and touchpoints to show which campaigns, ads, and actions are actually driving conversions and revenue."
            />

            <div className="relative max-w-7xl mx-auto mt-20">
                {/* Central Dome Visual */}
                <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-full max-w-3xl aspect-square pointer-events-none opacity-40">
                    <svg viewBox="0 0 400 300" className="w-full h-full text-[#E76F3D]/30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 50,300 Q 200,50 350,300" stroke="currentColor" strokeWidth="1" />
                        <path d="M 70,300 Q 200,80 330,300" stroke="currentColor" strokeWidth="1" />
                        <path d="M 90,300 Q 200,110 310,300" stroke="currentColor" strokeWidth="1" />
                        <path d="M 110,300 Q 200,140 290,300" stroke="currentColor" strokeWidth="1" />

                        {/* Cross lines for the grid effect */}
                        <path d="M 100,280 Q 200,150 300,280" stroke="currentColor" strokeWidth="1" />
                        <path d="M 140,240 Q 200,180 260,240" stroke="currentColor" strokeWidth="1" />

                        {/* Vertical curves */}
                        <path d="M 200,50 L 200,300" stroke="currentColor" strokeWidth="1" />
                        <path d="M 150,75 Q 170,200 200,300" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M 250,75 Q 230,200 200,300" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative z-10 items-end">
                    {/* Card 1 */}
                    <div className="relative h-[350px] lg:h-[400px]">
                        <div
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#F09464] to-[#E76F3D] p-8 pb-12 rounded-b-[2rem] flex flex-col justify-end text-white shadow-xl"
                            style={{
                                clipPath: "polygon(0 40%, 100% 70%, 100% 100%, 0% 100%)",
                                height: "100%"
                            }}
                        >
                            <h3 className="text-xl font-bold mb-3 leading-tight max-w-[150px]">Multi-touch attribution</h3>
                            <p className="text-sm opacity-90 leading-relaxed font-medium">Understand how each interaction contributes to conversion.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative h-[350px] lg:h-[400px]">
                        <div
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#EF8F5C] to-[#E76F3D] p-8 pb-12 flex flex-col justify-end text-white shadow-xl"
                            style={{
                                clipPath: "polygon(0 70%, 100% 110%, 100% 100%, 0% 100%)",
                                height: "75%"
                            }}
                        >
                            <h3 className="text-xl font-bold mb-3 leading-tight max-w-[180px]">Channel & Campaign Tracking</h3>
                            <p className="text-sm opacity-90 leading-relaxed font-medium">Understand how each interaction contributes to conversion.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative h-[350px] lg:h-[400px]">
                        <div
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#EE8A55] to-[#E76F3D] p-8 pb-12 flex flex-col justify-end text-white shadow-xl"
                            style={{
                                clipPath: "polygon(0 110%, 100% 70%, 100% 100%, 0% 100%)",
                                height: "75%"
                            }}
                        >
                            <h3 className="text-xl font-bold mb-3 leading-tight max-w-[180px]">Revenue & Conversion Reporting</h3>
                            <p className="text-sm opacity-90 leading-relaxed font-medium">Understand how each interaction contributes to conversion.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative h-[350px] lg:h-[400px]">
                        <div
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-[#E76F3D] to-[#D46235] p-8 pb-12 rounded-b-[2rem] flex flex-col justify-end text-white shadow-xl"
                            style={{
                                clipPath: "polygon(0 70%, 100% 40%, 100% 100%, 0% 100%)",
                                height: "100%"
                            }}
                        >
                            <h3 className="text-xl font-bold mb-3 leading-tight max-w-[150px]">Customer Journey Visibility</h3>
                            <p className="text-sm opacity-90 leading-relaxed font-medium">Understand how each interaction contributes to conversion.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
