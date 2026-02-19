"use client";

import React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/global";
import { motion } from "framer-motion";
import { Target, Fingerprint, Cpu, Infinity } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
];

export function TargetingScoring() {
  return (
    <Section className="bg-white">
      <h1 className="text-4xl text-center lg:text-7xl font-bold text-[#3D2012] hover:no-underline text-left py-4 focus:outline-none">
        ZeroFrame™ Targeting & Website Visitor Scoring
      </h1>
      <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-5xl mx-auto pt-0 pb-6 pr-4 text-center">
        The Audience & Traffic Scoring module distills insights from over 120
        trusted data sources to map how your users discover, evaluate, and
        decide. This intelligence is deployed directly into Meta and TikTok —
        accelerating campaign performance without relying on slow native
        targeting models. The result: 30–40% lower CPAs and more intentional,
        efficient spend.
      </p>

      <div className="relative container mx-auto">
        <div className="bg-[#E76F3D] rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
          {/* Main Flow Area */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-20 z-10">
            {/* Column 1: Avatars & Flow Start */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="relative">
                {/* Connection Line from Avatars to Middle */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-12 lg:w-24 h-[2px] border-t-2 border-dashed border-white/20 hidden lg:block" />

                <div className="flex flex-col -space-y-4">
                  {avatars.map((url, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-[#E76F3D] overflow-hidden bg-white shadow-xl relative z-[10]"
                    >
                      <Image
                        src={url}
                        alt={`Visitor ${i + 1}`}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-4 border-[#E76F3D] bg-[#5C4033] flex items-center justify-center text-white shadow-xl relative z-[10]"
                  >
                    <Infinity size={24} />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Column 2: Content Action Cards */}
            <div className="flex flex-col justify-center gap-6">
              {[
                { icon: Target, text: "Target using credit card data" },
                { icon: Fingerprint, text: "Visitor ID & traffic scoring" },
                { icon: Cpu, text: "AI co-pilot / Act + Convert" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-[#2D2D2D] rounded-xl p-5 flex items-center gap-4 text-white shadow-2xl border border-white/5 relative group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="font-medium text-sm lg:text-base">
                    {item.text}
                  </span>

                  {/* Outgoing Connection Lines from middle to right */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 w-12 lg:w-24 h-[2px] border-t-2 border-dashed border-white/20 hidden lg:block" />
                </motion.div>
              ))}
            </div>

            {/* Column 3: Metrics Dashboard */}
            <div className="flex flex-col justify-center gap-6">
              {[
                {
                  title: "Total conversions",
                  value: "4,040",
                  growth: "+20.6%",
                  sub: "3,349",
                },
                {
                  title: "Clickthrough rate",
                  value: "60%",
                  growth: "+21.8%",
                  sub: "49.2%",
                },
                {
                  title: "Total revenue",
                  value: "$248,000",
                  growth: "+21.8%",
                  sub: "$203,602",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-[#2D2D2D] rounded-xl p-5 text-white shadow-2xl border border-white/5 flex flex-col gap-2 relative overflow-hidden"
                >
                  {/* Subtle Sparkline SVG */}
                  <div className="absolute right-4 bottom-4 w-20 h-10 opacity-30">
                    <svg
                      viewBox="0 0 100 40"
                      className="w-full h-full stroke-white fill-none"
                      strokeWidth="2"
                    >
                      <path d="M 0,35 Q 20,30 40,35 T 80,10 T 100,5" />
                    </svg>
                  </div>

                  <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
                    {item.title}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{item.value}</span>
                    <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">
                      {item.growth}
                    </span>
                  </div>
                  <span className="text-xs text-white/40">{item.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Descriptive Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10 relative z-10">
            <div className="space-y-2">
              <p className="text-white font-bold leading-tight">
                Audience creation based on real-time behavior, updated daily.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold leading-tight">
                Website User Identification & Journey Mapping
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold leading-tight">
                Intent and readiness signals
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-bold leading-tight">
                Messaging alignment by persona
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
        </div>
      </div>
    </Section>
  );
}
