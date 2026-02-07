"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  const manifesto = `Growth is built on trust. Central to this approach is ROI, our belief that true success must account for both relevance and responsibility. Performance without responsibility is fragile, and impact without accountability is unsustainable. By holding these two dimensions together, we help you build growth systems that are measurable, ethical, and resilient over time. At Barakah Agency, strategy always comes before shortcuts or surface-level metrics. Instead, we focus on strong foundations, and connected systems that allow for long-term alignment or credibility. Our approach respects people and principles, drawing from principles of faith, wisdom, and stewardship. We don't just optimize for clicks or deals, but for practical standards that shape our world. We believe that growth is not just about revenue, but about the quality of the impact created along the way.`;

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-12">
      {/* Background Manifesto Text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03] lg:opacity-[0.05]">
        <p className="text-[#3D1A10] text-[1.5rem] lg:text-[2.5rem] font-medium leading-[1.2] text-center max-w-7xl px-4 uppercase tracking-tighter">
          {manifesto}
        </p>
      </div>

      {/* Mandala/Geometric Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] opacity-[0.15] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#E76F3D]">
          <motion.path
            d="M50 5 C 60 5, 95 40, 95 50 C 95 60, 60 95, 50 95 C 40 95, 5 60, 5 50 C 5 40, 40 5, 50 5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {[...Array(12)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50"
              cy="50"
              rx="45"
              ry="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              initial={{ rotate: i * 15 }}
              animate={{ rotate: i * 15 + 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <motion.ellipse
              key={i}
              cx="50"
              cy="50"
              rx="35"
              ry="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              initial={{ rotate: i * 15 + 7.5 }}
              animate={{ rotate: i * 15 + 7.5 - 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          ))}
          {/* Connecting lines for mesh effect */}
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.05"
              opacity="0.3"
            />
          ))}
        </svg>
      </div>

      {/* Main Heading */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-bold text-[#3D1A10] leading-none tracking-tight"
        >
          Ethical Marketing <br /> Blog
        </motion.h1>
      </div>
    </section>
  );
}
