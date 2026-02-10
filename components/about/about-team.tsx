"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Ziad Itani",
    role: "Founder, Head of Growth",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/ziad.png",
  },
  {
    name: "Ehsaan Mesghali",
    role: "Head of Creative",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/ehsaan.png",
  },
  {
    name: "Mahmood Khan",
    role: "Head of Paid Media",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/mahmood.png",
  },
  {
    name: "Habibur Rahman",
    role: "Web Lead",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/habib.png",
  },
  {
    name: "Safa Abdul Karim",
    role: "Growth Lead",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/safa.png",
  },
  {
    name: "Shariful Sajid",
    role: "Paid Media Lead",
    description:
      "Focuses on growth strategy ethical frameworks and long term direction across all client engagements.",
    image: "/assets/sajid.png",
  },
];

export function AboutTeam() {
  return (
    <section className="py-24 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#381E11]/40 mb-4 block"
          >
            • Meet The Team •
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-[#381E11] font-lato mb-6 leading-tight"
          >
            The People Behind the Work
            <br />& the Agents of Barakah
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#5C4033] leading-relaxed mb-4"
          >
            Meet the people who make Barakah possible — not just by doing great
            work, but by showing up with sincerity, creativity, and a shared
            commitment to purpose-driven growth. Each team member brings a
            unique skillset and a deep alignment with the ethics we live by.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Card background with orange gradient similar to the mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E76F3D] to-[#FBD3C1]" />

              {/* Member Image with mask-like effect */}
              <div className="absolute inset-0 z-10 p-2">
                <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Shadow overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                  {/* Member Details */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                      {member.name}
                    </motion.h3>
                    <motion.span className="text-lg font-medium text-white/90 mb-3 block">
                      {member.role}
                    </motion.span>
                    <motion.p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
                      {member.description}
                    </motion.p>
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
