"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MethodAgency() {
  return (
    <section className="py-24 bg-[#E76F3D] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Content Header */}
        <div className="w-full mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-medium text-[#381E11] mb-6"
          >
            Barakah-First
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#381E11] leading-none mb-10 tracking-tighter font-lato"
          >
            More Than an Agency
          </motion.h2>

          <div className="space-y-8 text-lg md:text-xl text-[#381E11] leading-relaxed w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Barakah Agency, we work as an extension of the teams we partner
              with. Our role goes beyond marketing execution. We embed ourselves
              in your mission, guided by values that run deeper than short-term
              metrics or surface-level success. We begin with purpose. Rooted in
              faith and responsibility, our work is shaped by a commitment to
              trust, integrity, and cultural awareness. We believe growth should
              strengthen relationships, not compromise them.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our philosophy is simple. We are part of something greater than
              ourselves. By combining human creativity with ethical intelligence
              and strategic clarity, we design growth systems that reflect who
              you are and what you stand for. This is how we turn intention into
              ROI²™ — measurable performance alongside meaningful impact. The
              Barakah Method is designed to evolve. It adapts as your goals
              change and your challenges become more complex. It meets your
              business where it is today and supports its progress toward where
              it should go next.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-bold"
            >
              Above all, we value legacy over visibility and relationships over
              transactions. When organizations grow with Barakah, they grow with
              purpose — and in ways that endure.
            </motion.p>
          </div>
        </div>

        {/* Large Team Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
            alt="Barakah Agency team collaborating"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Unique Cyan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-3 bg-[#00A8CC] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#0096b8] transition-all group"
          >
            Explore Our Solutions
            <div className="bg-white rounded-full p-1 text-[#00A8CC] group-hover:translate-x-1 transition-transform">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
