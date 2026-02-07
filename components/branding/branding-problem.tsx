"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/global";
import Image from "next/image";

const leftItems = [
  {
    title: '"Surface-Level" Trap',
    description:
      "You’ve invested in logos, colors, and campaigns — but skipped the deeper work. Without clarity on who you are and why you exist, execution becomes noise instead of signal.",
    active: true,
  },
  {
    title: 'The "Inconsistency" Tax',
    description:
      "Every disconnected message, visual, or voice quietly erodes trust. Over time, inconsistency becomes an invisible tax — paid in lower conversions, longer sales cycles, and diluted equity.",
  },
  {
    title: "Growth Without Gravity",
    description:
      "Momentum without meaning doesn’t compound. When growth isn’t anchored to a clear narrative, brands expand outward but never deepen — making loyalty fragile and differentiation temporary.",
  },
];

const rightGrid = [
  {
    type: "card",
    title: "The Explainer's Fatigue",
    content:
      "You’re spending 80% of your energy explaining what you do — leaving only 20% to actually close. When clarity is missing, your audience makes you work harder for their attention.",
    color: "#E76F3D",
  },
  {
    type: "card",
    title: "The Friction",
    content:
      "Your digital presence feels like a collection of strangers. Different voices. Different visuals. One confused audience that doesn’t know where to focus — or why to care.",
    color: "#E76F3D",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=800&auto=format&fit=crop",
    alt: "Red Tree",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    alt: "Woman with Flowers",
  },
  {
    type: "card",
    title: "The Trust Variable",
    content:
      "Your digital presence feels like a collection of strangers. Different voices. Different visuals. One confused audience that doesn’t know where to focus — or why to care.",
    color: "#E76F3D",
  },
  {
    type: "card",
    title: 'The "Hollow" Metric',
    content:
      "Your digital presence feels like a collection of strangers. Different voices. Different visuals. One confused audience that doesn’t know where to focus — or why to care.",
    color: "#E76F3D",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516233758813-a38d024919c5?q=80&w=800&auto=format&fit=crop",
    alt: "Rice Terraces",
  },
];

export function BrandingProblem() {
  return (
    <Section className="bg-[#FFFCF9] py-24">
      <div className="container mx-auto px-4">
        {/* Header content */}
        <div className="max-w-4xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-bold text-[#3D1A10] mb-8 leading-[1.1]"
          >
            Great products fail in <br /> weak stories.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-[#3D1A10]/70 leading-relaxed font-medium max-w-2xl"
          >
            High-growth founders often hit a ceiling when their business
            outgrows its narrative. You're operating at a Level 10 — but your
            brand is still communicating at a Level 2.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Problem List */}
          <div className="space-y-12 sticky top-32">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-6 relative group cursor-default`}
              >
                {item.active && (
                  <div className="absolute left-[-24px] top-2 bottom-2 w-1.5 bg-[#E76F3D] rounded-full" />
                )}
                <div className="transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="text-2xl lg:text-4xl font-bold text-[#3D1A10] mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#3D1A10]/60 leading-relaxed max-w-lg font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <Button
                asChild
                className="bg-[#E76F3D] hover:bg-[#D46235] text-white rounded-full h-16 px-10 text-xl font-bold group shadow-xl shadow-orange-500/10"
              >
                <a href="#contact" className="flex items-center gap-4">
                  Build with Barakah
                  <div className="bg-white rounded-full p-2 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
                  </div>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Staggered Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {/* The Explainer's Fatigue */}
              <Card item={rightGrid[0]} />
              {/* Red Tree Image */}
              <GridImage item={rightGrid[2]} className="aspect-[4/5]" />
              {/* The Trust Variable */}
              <Card item={rightGrid[4]} />
            </div>

            {/* Column 2 */}
            <div className="space-y-4 mt-8 lg:mt-12">
              {/* The Friction */}
              <Card item={rightGrid[1]} />
              {/* Woman Image */}
              <GridImage item={rightGrid[3]} className="aspect-square" />
              {/* The Hollow Metric */}
              <Card item={rightGrid[5]} />
              {/* Rice Terraces Image */}
              <GridImage item={rightGrid[6]} className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Card({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 lg:p-10 rounded-2xl text-white h-fit"
      style={{ backgroundColor: item.color }}
    >
      <h4 className="text-xl lg:text-2xl font-bold mb-4">{item.title}</h4>
      <p className="text-sm lg:text-base opacity-90 leading-relaxed font-medium">
        {item.content}
      </p>
    </motion.div>
  );
}

function GridImage({ item, className }: { item: any; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl overflow-hidden shadow-xl ${className}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
      />
    </motion.div>
  );
}
