"use client"

export function VideoShowcaseSection() {
    return (
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#381e11] mb-4 font-lato">
                        Grow Your Business, Build Your Legacy.
                    </h2>
                    <p className="text-lg text-[#5c4033] max-w-3xl mx-auto font-lato">
                        Discover how ROI²™ positions you to win loyal customers, achieve brand dominance, and build a legacy that lasts.
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 aspect-video shadow-2xl">
                        {/* Animated Diamond Shape */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-96 h-96">
                                {/* Diamond with horizontal lines pattern */}
                                <svg viewBox="0 0 400 400" className="w-full h-full">
                                    <defs>
                                        <pattern id="lines" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                                            <line x1="0" y1="2" x2="4" y2="2" stroke="#000" strokeWidth="2" opacity="0.3" />
                                        </pattern>
                                        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f59e5f" />
                                            <stop offset="100%" stopColor="#f7a96a" />
                                        </linearGradient>
                                    </defs>

                                    {/* Rotating diamond */}
                                    <g className="animate-spin-slow origin-center" style={{ transformOrigin: '200px 200px' }}>
                                        <path
                                            d="M 200 50 L 350 200 L 200 350 L 50 200 Z"
                                            fill="url(#diamondGradient)"
                                            stroke="none"
                                        />
                                        <path
                                            d="M 200 50 L 350 200 L 200 350 L 50 200 Z"
                                            fill="url(#lines)"
                                            stroke="none"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-8 left-8 z-10">
                            <div className="bg-primary text-white px-4 py-2 rounded font-lato font-semibold inline-block">
                                What if performance
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
