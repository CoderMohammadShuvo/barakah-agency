"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Boost Your Revenue",
    description:
      "We design marketing systems that drive revenue responsibly without overreliance on spend, shortcuts, or guesswork.",
  },
  {
    title: "Strengthen Your Brand",
    description:
      "Build a brand that resonates with clarity and purpose, earning the long-term trust and loyalty of your ideal audience.",
  },
  {
    title: "Transform Your Digital Presence",
    description:
      "Elevate your online impact with ethical design and cutting-edge data insights that drive sustainable performance.",
  },
  {
    title: "Expand Your Time",
    description:
      "Simplify your marketing ecosystem and automate complexity so you can focus on the high-level strategy that matters most.",
  },
  {
    title: "Prudent Financial Management",
    description:
      "Optimize your marketing spend with a focus on accountability, transparency, and high-impact allocation.",
  },
  {
    title: "Bridging Knowledge Gaps",
    description:
      "Empower your team with the insights and frameworks needed to lead with integrity in a fast-evolving digital landscape.",
  },
];

export function MethodSolutions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Content area */}
          <div className="space-y-10">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-medium text-[#381E11] mb-4"
              >
                With Purpose and Precision
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-[#381E11] leading-none mb-8 tracking-tighter font-lato"
              >
                Marketing That Works
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-[#5C4033] leading-relaxed max-w-xl"
              >
                Every marketing decision should do more than generate revenue.
                It should build trust, deepen impact, and support long-term
                growth. That's why our approach is rooted in responsibility.
                It's built to be deliberate, measurable, and aligned with
                purpose. At Barakah Agency, we help mission-driven teams scale
                sustainably by focusing on what matters most.
              </motion.p>
            </div>

            {/* Showcase Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/marketingthatwork.jpg"
                alt="Marketing professional showcase"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center gap-3 bg-[#E76F3D] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#d46235] transition-all group"
              >
                Explore Our Solutions
                <div className="bg-white rounded-full p-1 text-[#E76F3D] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Accordion list */}
          <div className="lg:pt-20">
            <div className="divide-y divide-[#381E11]/10 border-t border-[#381E11]/10">
              {solutions.map((solution, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div key={idx} className="overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full py-6 flex items-center justify-between text-left group transition-all duration-300"
                    >
                      <span
                        className={cn(
                          "text-2xl md:text-3xl font-bold transition-all duration-300",
                          isOpen ? "text-[#E76F3D]" : "text-[#381E11]",
                        )}
                      >
                        {solution.title}
                      </span>
                      <div
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border",
                          isOpen
                            ? "bg-[#E76F3D] text-white border-[#E76F3D]"
                            : "border-[#381E11]/20 text-[#381E11]",
                        )}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="pb-8 pr-12">
                            <p className="text-lg text-[#5C4033] leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
