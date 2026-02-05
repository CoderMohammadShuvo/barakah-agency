"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ServicesShowcase() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#381e11] mb-4 font-lato">
                        Everything You Need to Build a<br />Brand That Lasts
                    </h2>
                    <p className="text-lg text-[#5c4033] font-lato">
                        Trusted growth solutions for founders building long-term impact.
                    </p>
                </div>

                {/* Three Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    {/* Card 1 - Branding & Identity */}
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#b85c4f] to-[#d97757] p-8 pb-12 min-h-[600px] flex flex-col"
                    >
                        {/* Decorative Pattern */}
                        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,140 Q100,90 200,140 T400,140" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold text-white mb-2 italic font-lato">
                                Branding & Identity
                            </h3>
                            <p className="text-xl text-white/90 mb-4 font-lato font-semibold">
                                Build a legacy brand with meaning.
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed mb-8 font-lato text-justify">
                                We help you shape a brand narrative and identity that earns long-term trust, scales across markets, and resonates deeply with the communities you serve.
                            </p>

                            {/* Visual Element - Scattered to Grid Images */}
                            <div className="flex-1 flex items-center justify-center mb-12 min-h-[340px]">
                                <div className="relative w-full h-[300px] perspective-1000">
                                    {/* Image 1 */}
                                    <motion.div
                                        className="absolute w-[46%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/40"
                                        variants={{
                                            rest: { x: "-5%", y: "15%", rotate: -12, opacity: 1, zIndex: 10 },
                                            hover: { x: "0%", y: "0%", rotate: 0, scale: 1.05, width: "48%", zIndex: 30 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image src="/assets/1.png" alt="Branding 1" fill className="object-cover" sizes="(max-width: 768px) 46vw, 15vw" />
                                    </motion.div>

                                    {/* Image 2 */}
                                    <motion.div
                                        className="absolute w-[46%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/40"
                                        variants={{
                                            rest: { x: "55%", y: "5%", rotate: 8, opacity: 1, zIndex: 20 },
                                            hover: { x: "52%", y: "0%", rotate: 0, scale: 1.05, width: "48%", zIndex: 30 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image src="/assets/2.png" alt="Branding 2" fill className="object-cover" sizes="(max-width: 768px) 46vw, 15vw" />
                                    </motion.div>

                                    {/* Image 3 */}
                                    <motion.div
                                        className="absolute w-[33%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/40"
                                        variants={{
                                            rest: { x: "25%", y: "65%", rotate: -4, opacity: 1, zIndex: 30 },
                                            hover: { x: "0%", y: "55%", rotate: 0, scale: 1.05, width: "31%", zIndex: 30 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image src="/assets/3.png" alt="Branding 3" fill className="object-cover" sizes="(max-width: 768px) 33vw, 10vw" />
                                    </motion.div>

                                    {/* Image 4 */}
                                    <motion.div
                                        className="absolute w-[33%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/40"
                                        variants={{
                                            rest: { x: "0%", y: "110%", rotate: 6, opacity: 1, zIndex: 20 },
                                            hover: { x: "34.5%", y: "55%", rotate: 0, scale: 1.05, width: "31%", zIndex: 30 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image src="/assets/4.png" alt="Branding 4" fill className="object-cover" sizes="(max-width: 768px) 33vw, 10vw" />
                                    </motion.div>

                                    {/* Image 5 */}
                                    <motion.div
                                        className="absolute w-[33%] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-2 border-white/40"
                                        variants={{
                                            rest: { x: "65%", y: "95%", rotate: 12, opacity: 1, zIndex: 10 },
                                            hover: { x: "69%", y: "55%", rotate: 0, scale: 1.05, width: "31%", zIndex: 30 }
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image src="/assets/5.png" alt="Branding 5" fill className="object-cover" sizes="(max-width: 768px) 33vw, 10vw" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-full border-2 border-white text-white hover:bg-white hover:text-[#b85c4f] transition-all font-lato font-semibold"
                            >
                                <Link href="/services">
                                    Craft Your Legacy
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Card 2 - ZeroFrame Intelligence */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f59e5f] to-[#f7a96a] p-8 pb-12 min-h-[600px] flex flex-col">
                        {/* Decorative Pattern */}
                        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,140 Q100,90 200,140 T400,140" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold text-white mb-2 italic font-lato">
                                ZeroFrame™ Intelligence
                            </h3>
                            <p className="text-xl text-white/90 mb-4 font-lato font-semibold">
                                Actionable intelligence for scalable growth.
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed mb-8 font-lato text-justify">
                                Our proprietary data engine helps you make confident decisions, streamline your marketing, and engage the right audiences while protecting privacy and earning loyalty, over time.
                            </p>

                            {/* Visual Element - Radar/Target with Data Points */}
                            <motion.div
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="flex-1 flex items-end justify-center mb-8"
                            >
                                <div className="relative w-48 h-48">
                                    {/* Concentric circles */}
                                    <Image src="/assets/selected-value.png" alt="Radar" className="w-full h-full object-cover" height={400} width={200} />
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-full border-2 border-white text-white hover:bg-white hover:text-[#f59e5f] transition-all font-lato font-semibold"
                            >
                                <Link href="/zero-frame">
                                    Scale Smarter
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Card 3 - Performance Marketing */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#c96a52] to-[#e88b6f] p-8 pb-12 min-h-[600px] flex flex-col">
                        {/* Decorative Pattern */}
                        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
                            <svg viewBox="0 0 400 200" className="w-full h-full">
                                <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                <path d="M0,140 Q100,90 200,140 T400,140" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex-1 flex flex-col">
                            <h3 className="text-3xl font-bold text-white mb-2 italic font-lato">
                                Performance Marketing
                            </h3>
                            <p className="text-xl text-white/90 mb-4 font-lato font-semibold">
                                Engineered for growth that compounds.
                            </p>
                            <p className="text-white/90 text-sm leading-relaxed mb-8 font-lato text-justify">
                                Our performance marketing strategies prioritize customer lifetime value, brand equity, and measurable returns, not just clicks. Build profitability and loyalty that lasts.
                            </p>

                            {/* Visual Element - Growth Chart */}
                            <motion.div
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                className="flex-1 flex items-end justify-center mb-8"
                            >
                                <div className="relative w-56 h-40">
                                    {/* Chart background */}
                                    <svg viewBox="0 0 200 120" className="w-full h-full">
                                        {/* Growth curve */}
                                        <path
                                            d="M10,110 Q50,100 80,70 T150,30"
                                            fill="none"
                                            stroke="rgba(139,0,0,0.6)"
                                            strokeWidth="3"
                                            strokeDasharray="4,4"
                                        />
                                        <path
                                            d="M10,110 Q50,100 80,70 T150,30 L150,120 L10,120 Z"
                                            fill="rgba(139,0,0,0.2)"
                                        />
                                    </svg>

                                    {/* Metric card */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 shadow-lg border border-white">
                                        <div className="text-xs text-gray-600 mb-1">29 July 00:00</div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-gray-900">220,342.76</span>
                                            <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded">+3.4%</span>
                                        </div>
                                    </div>

                                    {/* Data point indicator */}
                                    <div className="absolute top-8 right-12 w-3 h-3 bg-white rounded-full border-2 border-red-800"></div>
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                className="w-full rounded-full border-2 border-white text-white hover:bg-white hover:text-[#c96a52] transition-all font-lato font-semibold"
                            >
                                <Link href="/services">
                                    Drive Results
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}
