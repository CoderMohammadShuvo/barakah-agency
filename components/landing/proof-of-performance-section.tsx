"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Days of Eid",
    logo: "/assets/daysofeid.png",
    logoColor: "#d4a574",
    tags: ["eCommerce Marketing Strategy", "Paid Media"],
    description:
      "We begin by deeply understanding your mission, values, and the impact you want to create. Every strategy is aligned with your ethical foundations, cultural context, and long-term vision, ensuring your marketing reflects what your brand truly stands for, not just what it sells.",
    metrics: [
      { label: "Purchases", value: "272" },
      { label: "Attributed Sales Via Paid Media", value: "$12,049" },
    ],
    bgColor: "from-orange-200 to-orange-300",
  },
  {
    id: 2,
    title: "Fadwa Masala",
    logo: "/assets/fadwamasala.png",
    logoColor: "#b8449d",
    tags: ["eCommerce Marketing Strategy", "Paid Media"],
    description:
      "We begin by deeply understanding your mission, values, and the impact you want to create. Every strategy is aligned with your ethical foundations, cultural context, and long-term vision, ensuring your marketing reflects what your brand truly stands for, not just what it sells.",
    metrics: [
      { label: "Purchases", value: "272" },
      { label: "Attributed Sales Via Paid Media", value: "$12,049" },
    ],
    bgColor: "from-orange-200 to-orange-300",
  },
  {
    id: 3,
    title: "Halal Expo",
    logo: "/assets/halalexpo.png",
    logoSubtext: "6TH US International",
    logoColor: "#5a7ba8",
    tags: ["Event Marketing Strategy", "Paid Media"],
    description:
      "We begin by deeply understanding your mission, values, and the impact you want to create. Every strategy is aligned with your ethical foundations, cultural context, and long-term vision.",
    metrics: [],
    bgColor: "from-orange-200 to-orange-300",
  },
  {
    id: 4,
    title: "Ten Peaks Shuttle & Tours",
    logo: "/assets/tenpeaks.png",
    logoColor: "#2563eb",
    tags: ["Tourism Marketing Strategy", "Paid Media"],
    description:
      "We begin by deeply understanding your mission, values, and the impact you want to create. Every strategy is aligned with your ethical foundations.",
    metrics: [],
    bgColor: "from-orange-200 to-orange-300",
  },
];

export function ProofOfPerformanceSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-[#381e11] mb-2 font-lato">
            • Results •
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#381e11] mb-16 font-lato">
            Proof of Performance. Built for Legacy.
          </h2>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial="initial"
              whileHover="expanded"
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer border border-stone-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[300px]">
                {/* Left Column - Info */}
                <div className="p-10 flex flex-col justify-center relative z-10">
                  <div className="w-full">
                    <h3 className="text-3xl font-bold text-[#381e11] mb-6 font-lato italic">
                      {study.title}
                    </h3>

                    {/* Initial State Tags */}
                    <motion.div
                      variants={{
                        initial: {
                          opacity: 1,
                          height: "auto",
                          marginBottom: 0,
                        },
                        expanded: { opacity: 0, height: 0, marginBottom: 0 },
                      }}
                      className="flex flex-wrap gap-2 overflow-hidden"
                    >
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 border border-[#381e11]/20 rounded-full text-[10px] uppercase tracking-wider font-bold text-[#381e11] font-lato"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Expanded Content */}
                    <motion.div
                      variants={{
                        initial: { opacity: 0, height: 0, marginTop: 0 },
                        expanded: { opacity: 1, height: "auto", marginTop: 24 },
                      }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-[#5c4033] leading-relaxed mb-8 font-lato text-justify">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      {study.metrics.length > 0 && (
                        <div className="flex gap-10 mb-8 p-6 bg-stone-50 rounded-2xl">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx}>
                              <div className="text-3xl font-black text-[#381e11] font-lato">
                                {metric.value}
                              </div>
                              <div className="text-[10px] uppercase italic tracking-widest text-[#5c4033] font-lato font-bold mt-1">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#381e11] rounded-full text-[10px] font-bold text-white font-lato uppercase tracking-tighter"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Button
                          asChild
                          variant="ghost"
                          className="group/btn rounded-full font-lato font-bold text-[#381e11] hover:bg-[#381e11] hover:text-white transition-all flex items-center"
                        >
                          <Link href={`/case-studies/${study.id}`}>
                            Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right Column - Logo */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${study.bgColor} p-12 flex items-center justify-center min-h-[300px]`}
                >
                  <motion.div
                    variants={{
                      initial: { scale: 1, rotate: 0 },
                      expanded: { scale: 1.1, rotate: -2 },
                    }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="text-center relative z-10"
                  >
                    {study.logo && (
                      <Image
                        src={study.logo}
                        alt={study.logoSubtext}
                        width={300}
                        height={300}
                        className="mb-4"
                      />
                    )}
                  </motion.div>

                  {/* Subtle Overlay Pattern */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                      <pattern
                        id="pattern"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#pattern)" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
