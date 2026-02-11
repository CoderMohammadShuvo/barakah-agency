"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhilosophyCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  delay: number;
}

function PhilosophyCard({
  number,
  title,
  subtitle,
  description,
  image,
  accentColor,
  delay,
}: PhilosophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative group h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background: `linear-gradient(to bottom, transparent 20%, ${accentColor} 95%)`,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
        <motion.span
          className="text-2xl lg:text-3xl font-mono font-bold italic mb-6 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {number}
        </motion.span>

        <motion.h4
          className="text-3xl lg:text-4xl font-bold mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {title}
        </motion.h4>

        <motion.p
          className="text-lg lg:text-xl font-medium opacity-90 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className="text-base lg:text-lg leading-relaxed opacity-80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

const philosophyItems = [
  {
    number: "//01",
    title: "Human-First Growth",
    subtitle: "Respectful Acquisition.",
    description:
      "We optimize for the person, not the pixel. By removing aggressive 'fear-based' copywriting and intrusive tracking, we build a brand presence that invites consumers in rather than chasing them down.",
    image: "/assets/pm7.jpg",
    accentColor: "#E76F3D", // Warm orange
  },
  {
    number: "//02",
    title: "Sustainable Scaling",
    subtitle: "Long-term Vitality.",
    description:
      "Growth shouldn't be a 'burn-out' mission. We focus on building evergreen systems that compound in value over time, ensuring your new customer acquisition cost (nCAC) stabilizes as your brand authority grows.",
    image: "/assets/pm8.jpg",
    accentColor: "#0891B2", // Teal/Cyan
  },
  {
    number: "//03",
    title: "Trust as a Metric",
    subtitle: "The Trust Moat.",
    description:
      "Integrity is the ultimate multiplier. We track sentiment and brand health alongside ROAS, ensuring that every dollar spent on advertising is an investment in your long-term reputation, not just a one-time transaction.",
    image: "/assets/pm6.jpg",
    accentColor: "#3D1A10", // Dark Brown
  },
];

export function PerformancePhilosophy() {
  return (
    <section className="bg-[#FFFCF9] py-24 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-20 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl font-bold text-[#3D1A10]/60 block mb-4"
          >
            Ethical Performance Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-[100px] font-bold text-[#3D1A10] leading-[0.9] tracking-tight"
          >
            The Performance Paradox.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard key={item.number} {...item} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
