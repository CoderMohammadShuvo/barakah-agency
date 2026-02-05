"use client"

import Image from "next/image"

const brands = [
    { id: 1, name: "Sonara Capital", logo: "/brands/sonara-capital.svg" },
    { id: 2, name: "Manara West", logo: "/brands/manara-west.svg" },
    { id: 3, name: "Fadwa Masala", logo: "/brands/fadwa-masala.svg" },
    { id: 4, name: "Brand 4", logo: "/brands/brand-4.svg" },
    { id: 5, name: "Long Beach", logo: "/brands/long-beach.svg" },
    { id: 6, name: "Blended Orange", logo: "/brands/blended-orange.svg" },
    { id: 7, name: "Honey Mama", logo: "/brands/honey-mama.svg" },
    { id: 8, name: "Brand 8", logo: "/brands/brand-8.svg" },
    { id: 9, name: "Doubletree Realty", logo: "/brands/doubletree.svg" },
]

export function BrandsSection() {
    return (
        <section className="relative py-16 md:py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Decorative Icon */}
                <div className="flex justify-center mb-4">
                    <svg className="w-12 h-12 text-[#f59e5f]" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                        <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.7" />
                    </svg>
                </div>

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold text-[#f59e5f] font-lato">
                        • Brands that echo with Us •
                    </h2>
                </div>

                {/* Brand Logos Grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">

                    {/* Placeholder logos - using text for now */}
                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-24 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                                <circle cx="25" cy="25" r="20" fill="#4ade80" opacity="0.3" />
                                <text x="50" y="30" fontSize="12" fill="#333" fontWeight="600">SONARA</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-24 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                                <text x="10" y="30" fontSize="14" fill="#7c3aed" fontWeight="700">manara</text>
                                <text x="10" y="42" fontSize="10" fill="#7c3aed">west</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-28 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 120 50">
                                <text x="10" y="28" fontSize="16" fill="#ec4899" fontWeight="700" fontStyle="italic">Fadwa</text>
                                <text x="10" y="42" fontSize="10" fill="#ec4899" fontWeight="600">MASALA</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-24 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                                <path d="M20,35 Q30,15 40,35 Q50,15 60,35" fill="none" stroke="#f59e5f" strokeWidth="3" />
                                <circle cx="40" cy="25" r="3" fill="#f59e5f" />
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-32 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 140 50">
                                <text x="10" y="22" fontSize="10" fill="#f59e5f" fontWeight="600">CITY OF</text>
                                <text x="10" y="35" fontSize="14" fill="#f59e5f" fontWeight="700">LONG BEACH</text>
                                <text x="10" y="44" fontSize="8" fill="#f59e5f">College Promise</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-32 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 140 50">
                                <text x="10" y="28" fontSize="12" fill="#f59e5f" fontWeight="600">BLENDED</text>
                                <text x="10" y="40" fontSize="10" fill="#f59e5f">ORANGE</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-28 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 120 50">
                                <text x="10" y="28" fontSize="14" fill="#3b82f6" fontWeight="700">HONEY</text>
                                <text x="10" y="42" fontSize="12" fill="#3b82f6" fontWeight="600">MAMA</text>
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-24 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 100 50">
                                <rect x="30" y="15" width="15" height="20" fill="#333" opacity="0.7" />
                                <rect x="48" y="15" width="15" height="20" fill="#333" opacity="0.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <div className="w-32 h-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 140 50">
                                <text x="10" y="24" fontSize="11" fill="#333" fontWeight="700">DOUBLETREE</text>
                                <text x="10" y="38" fontSize="10" fill="#333" fontWeight="600">REALTY INC.</text>
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
