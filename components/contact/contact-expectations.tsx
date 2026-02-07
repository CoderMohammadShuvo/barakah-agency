'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactExpectations() {
    return (
        <section className="relative py-20 md:py-32 bg-[#00A9CE] overflow-hidden text-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className="space-y-8 relative z-10">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-lg font-medium opacity-80 block"
                            >
                                The Barakah Method
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-4xl md:text-6xl font-black leading-tight tracking-tight"
                            >
                                What to Expect on Your Call
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-6 text-lg md:text-xl font-medium opacity-90 leading-relaxed"
                        >
                            <p>
                                At Barakah Agency, we're not your typical marketing firm; we believe in a holistic, ethical approach that resonates deeply with your values. Our mission is to help you rise above the noise and achieve meaningful growth.
                            </p>
                            <p>
                                On this call, we want to understand your unique journey, your goals, and the challenges you face. Rest assured, this call isn't about selling you services you don't need. Our aim is to build authentic, lasting partnerships that add real value to your business.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-black">Here's what you can expect:</h3>
                            <ul className="space-y-4 border-l border-white/20 pl-6 text-base md:text-lg opacity-80">
                                <li>
                                    <span className="font-bold">A Deep Dive Into Your Needs:</span> We're here to listen. We'll discuss your current situation, aspirations, and any obstacles that might be holding you back.
                                </li>
                                <li>
                                    <span className="font-bold">No Hard Sells:</span> This isn't a sales pitch. We're dedicated to understanding if our ethical marketing services align with your vision and if we can genuinely contribute to your success.
                                </li>
                                <li>
                                    <span className="font-bold">Commitment to Integrity:</span> Our goal is to offer an honest assessment. If we're not the right fit, we'll let you know and suggest other paths that might better suit your needs.
                                </li>
                            </ul>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-base opacity-70 italic max-w-xl"
                        >
                            This initial conversation will take about 30 minutes. Your dedicated expert will ask insightful questions to ensure we fully grasp your vision and determine if Barakah Agency can help you achieve your goals. If we're not the best fit, we'll be upfront about it.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <button className="group flex items-center gap-4 px-10 py-5 bg-[#E76F3D] hover:bg-[#d46235] text-white rounded-full transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                                <span className="text-xl font-black">Get Started</span>
                                <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full group-hover:translate-x-1 transition-transform">
                                    <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
                                </div>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column - Visual Sphere Ported from Landing */}
                    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] aspect-square opacity-20 pointer-events-none lg:relative lg:right-0 lg:top-0 lg:translate-y-0 lg:w-full lg:opacity-100">
                        <div className="relative w-full aspect-square">
                            <svg
                                width="1126"
                                height="1126"
                                viewBox="0 0 1126 1126"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="animate-spin-slow w-full h-full text-black stroke-current"
                            >
                                <path
                                    d="M551.151 1125.46C552.73 1125.44 571.181 1124.66 592.156 1123.73L630.291 1122.04L669.725 1114.53L709.157 1107.02L746.152 1092.22C766.497 1084.07 783.709 1077.15 784.4 1076.84C785.088 1076.52 788.92 1073.96 792.914 1071.13C796.912 1068.31 800.144 1065.97 800.104 1065.93C800.058 1065.88 786.241 1069.35 769.392 1073.63L738.752 1081.42L730.628 1081.91L722.499 1082.4L713.593 1085.94L704.683 1089.48L667.014 1096.54L629.346 1103.6L590.105 1105.32L550.863 1107.05L542.28 1105.35C537.56 1104.41 521.558 1101.25 506.722 1098.32L479.746 1092.99L446.549 1079.2C428.29 1071.62 412.931 1065.2 412.414 1064.94C411.899 1064.68 398.817 1056.31 383.344 1046.33C361.847 1032.47 354.731 1027.73 353.178 1026.23C352.061 1025.15 339.922 1014.01 326.205 1001.48L301.262 978.704L287.489 974.403C279.915 972.04 273.654 970.165 273.583 970.24C273.505 970.317 276.555 974.838 280.356 980.296C284.157 985.75 287.43 990.573 287.63 991.014C287.831 991.452 299.77 1002.59 314.162 1015.75L340.361 1039.7L371.732 1059.69L403.047 1079.68L437.903 1094.95C464.217 1106.49 473.216 1110.3 474.632 1110.51C475.664 1110.66 492.658 1114.1 512.399 1118.15L548.325 1125.5L551.151 1125.46Z"
                                    fillOpacity="0.2"
                                />
                                {/* Simplified wireframe representation if possible, otherwise I'll copy the key nodes if token limit allows */}
                                <circle cx="563" cy="563" r="450" strokeWidth="20" strokeLinecap="round" strokeDasharray="50 30" opacity="0.3" />
                                <circle cx="563" cy="563" r="350" strokeWidth="15" strokeLinecap="round" strokeDasharray="30 40" opacity="0.2" />
                                <circle cx="563" cy="563" r="250" strokeWidth="10" strokeLinecap="round" strokeDasharray="20 50" opacity="0.1" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
