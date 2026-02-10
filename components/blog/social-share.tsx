'use client'

import React from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export function SocialShare() {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ]

    return (
        <div className="relative overflow-hidden rounded-2xl bg-[#FFF5F2] border border-[#FFE2D9] p-8 group">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-40 text-[#E76F3D] pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[...Array(6)].map((_, i) => (
                        <motion.ellipse
                            key={i}
                            cx="50"
                            cy="50"
                            rx="45"
                            ry="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            initial={{ rotate: i * 30 }}
                            animate={{ rotate: i * 30 + 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </svg>
            </div>

            <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black text-[#381e11]">Share in Social Media</h3>
                <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, idx) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            whileHover={{ y: -4, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full bg-[#E76F3D] flex items-center justify-center text-white shadow-lg shadow-[#E76F3D]/20 transition-all hover:bg-[#D45E32]"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    )
}
