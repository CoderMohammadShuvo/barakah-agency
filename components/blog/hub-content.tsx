"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Sidebar: Author Bio Card
 */
export function AuthorBio() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#E76F3D]/20">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            alt="Ziad Itani"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold text-[#5c4033]/40 uppercase tracking-widest block">
            Written By
          </span>
          <h3 className="text-2xl font-black text-[#3F1200]">Ziad Itani</h3>
        </div>
      </div>
      <p className="text-[#5c4033] leading-relaxed text-sm lg:text-base">
        Ziad Itani is the Co-Founder at Barakah Agency. A visionary in ethical
        marketing, Ziad champions integrity-driven growth strategies and
        innovative solutions. When he's not helping clients succeed, he enjoys
        spending quality time with family and friends, exploring the great
        outdoors, and delving into thought-provoking books.
      </p>
    </div>
  );
}

/**
 * Sidebar: Newsletter Card
 */
export function NewsletterSidebarCard() {
  return (
    <div className="bg-[#FFF5F2] border border-[#FFE2D9] rounded-[2rem] p-8 space-y-6 relative overflow-hidden group">
      <div className="relative z-10 space-y-4">
        <div className="w-16 h-16 relative">
          {/* Floating Envelope Icon/Graphic */}
          <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-[#FFE2D9] flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform duration-500">
            <Mail className="w-8 h-8 text-[#E76F3D]" />
          </div>
        </div>
        <h3 className="text-2xl font-black text-[#3F1200] leading-tight">
          Join Our Ethical <br /> Marketing Newsletter
        </h3>
        <p className="text-[#5c4033] text-sm leading-relaxed">
          Get the latest ethical marketing ideas, strategies, and best practices
          delivered to your inbox every other week.
        </p>
        <Button className="w-full bg-[#E76F3D] hover:bg-[#D45E32] text-white rounded-full h-12 flex items-center justify-between px-6 group/btn shadow-lg shadow-[#E76F3D]/20">
          <span className="font-bold">Sign Up</span>
          <div className="bg-white rounded-full p-1 group-hover/btn:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4 text-[#E76F3D]" />
          </div>
        </Button>
      </div>
      {/* Soft Background decorative element */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E76F3D]/5 rounded-full blur-2xl" />
    </div>
  );
}

/**
 * Main Content: Table of Contents
 */
export function TableOfContents() {
  const items = [
    "What Is Ethical Marketing?",
    "Understanding the Real Meaning of Ethical Marketing",
    "What Are 4 Definitions of Ethical Marketing From Experts?",
    "Eight Ethical Marketing Core Concepts",
    "Five Common Misconceptions About Ethical Marketing",
    "What Is B2B Ethical Marketing?",
    "What Is B2C Ethical Marketing?",
    "What Is The Best Definition of Ethical Marketing?",
    "What Does Ethical Marketing Do?",
  ];

  return (
    <div className="space-y-8">
      <div className="bg-[#FFF5F2] border-l-4 border-[#E76F3D] px-6 py-4 rounded-r-xl">
        <h2 className="text-3xl font-black text-[#3F1200]">Table of Content</h2>
      </div>
      <ul className="space-y-4 pl-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 group cursor-pointer">
            <span className="font-black text-[#E76F3D] min-w-[24px]">
              {i + 1}.
            </span>
            <span className="font-bold text-[#3F1200] group-hover:text-[#E76F3D] transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Main Content: Starter Pack CTA
 */
export function StarterPackCTA() {
  return (
    <div className="bg-[#FFF5F2] border border-[#FFE2D9] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-sm">
      <div className="md:w-1/3 bg-[#E76F3D] p-8 flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 bg-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-center p-6 shadow-2xl border-4 border-white/20">
          <span className="text-lg font-black text-[#3F1200] leading-tight mb-1">
            Ethical Marketing
          </span>
          <span className="text-sm font-bold text-[#E76F3D] uppercase tracking-tighter">
            Starter Pack
          </span>
          <div className="mt-2 w-8 h-1 bg-[#3F1200]/10 rounded-full" />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      <div className="flex-1 p-8 md:p-10 space-y-6 flex flex-col justify-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-[#3F1200] leading-tight">
            Download Your Ethical Marketing Starter Pack Now
          </h3>
          <p className="text-[#5c4033] leading-relaxed">
            No signup required—just click the button below. Enjoyed this free
            resource? Consider joining our email list to stay updated on the
            latest in ethical marketing.
          </p>
        </div>
        <Button
          size="lg"
          className="w-fit bg-[#E76F3D] hover:bg-[#D45E32] text-white rounded-full h-14 px-10 flex items-center gap-4 group/btn shadow-lg shadow-[#E76F3D]/20"
        >
          <span className="text-lg font-bold">Download</span>
          <div className="bg-white rounded-full p-2 group-hover/btn:scale-110 transition-transform">
            <Download className="w-5 h-5 text-[#E76F3D]" />
          </div>
        </Button>
      </div>
    </div>
  );
}

/**
 * Blue Border Content Box (for Definitions, 8Ps, etc)
 */
export function ContentBox({
  title,
  children,
  className,
  variant = "default",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "infographic";
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.5rem] p-8 md:p-12 border-2",
        variant === "default"
          ? "border-[#A5D8FF] bg-white"
          : "border-[#FFE2D9] bg-[#FFF5F2]",
        className,
      )}
    >
      {title && (
        <h3
          className={cn(
            "text-3xl md:text-4xl font-black mb-8",
            variant === "default" ? "text-[#00B4D8]" : "text-[#3F1200]",
          )}
        >
          {title}
        </h3>
      )}
      <div className="space-y-6">{children}</div>

      {/* Background design element like in Image 2 */}
      {variant === "default" && (
        <div className="absolute top-8 right-8 w-24 h-24 opacity-20 pointer-events-none text-[#00B4D8]">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
            <path d="M50 10 L50 90 M10 50 L90 50" />
          </svg>
        </div>
      )}
    </div>
  );
}

/**
 * Expert Quote Card
 */
export function ExpertQuote({
  number,
  quote,
  author,
  company,
}: {
  number: string;
  quote: string;
  author: string;
  company?: string;
}) {
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-black text-[#5c4033]">
        Definition #{number}
      </h4>
      <div className="bg-[#48CAE4] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
        {/* Quote Mark Icon */}
        <div className="absolute top-8 left-8 opacity-20">
          <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor">
            <path d="M10.6667 36L0 25.3333V0H18.6667V18.6667H10.6667L10.6667 36ZM37.3333 36L26.6667 25.3333V0H45.3333V18.6667H37.3333V36Z" />
          </svg>
        </div>

        <div className="relative z-10 space-y-8 flex flex-col items-center text-center">
          <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-3xl pt-8">
            "{quote}"
          </p>
          <div className="space-y-1">
            <p className="text-lg font-black">- {author}</p>
            {company && (
              <p className="text-sm font-bold text-white/80">{company}</p>
            )}
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

/**
 * Animated Marketing Flow Infographic (Image 2)
 */
export function EthicalMarketingInfographic() {
  const steps = [
    { title: "Positioning", color: "bg-[#1A1A1A]" },
    { title: "Market Research", color: "bg-[#1A1A1A]" },
    { title: "Physical Evidence", color: "bg-[#1A1A1A]" },
    { title: "Promotion", color: "bg-[#1A1A1A]" },
    { title: "Pricing Analysis", color: "bg-[#1A1A1A]" },
    { title: "Distribution", color: "bg-[#1A1A1A]" },
    { title: "Ethical Framework", color: "bg-[#1A1A1A]" },
    { title: "Faith-Led", color: "bg-[#1A1A1A]" },
  ];

  return (
    <div className="bg-[#FF9F66] rounded-[3rem] p-8 md:p-12 flex flex-col items-center gap-12 relative overflow-hidden shadow-2xl">
      {/* Header part */}
      <div className="bg-[#E76F3D] rounded-full px-12 py-6 text-center text-white space-y-1 shadow-inner relative z-10 border-2 border-white/10">
        <span className="text-4xl md:text-5xl font-black block tracking-tight">
          Ethical Marketing
        </span>
        <div className="flex justify-center py-2">
          <div className="w-1.5 h-6 bg-white/40 rounded-full" />
        </div>
        <span className="text-lg font-bold block max-w-xs mx-auto leading-tight">
          Drives profitable customer action through ↓ ↓ ↓
        </span>
      </div>

      {/* Grid part */}
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl relative z-10">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 flex-1 w-full">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "relative py-4 md:py-6 rounded-xl flex items-center justify-center text-white overflow-hidden group border-b-4 border-black/20 text-center px-4",
                step.color,
              )}
            >
              <div className="absolute top-0 right-0 w-8 h-full bg-white/5 -skew-x-12 translate-x-4" />
              <span className="text-xs md:text-sm lg:text-base font-bold relative z-10">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Simplified Flow Labels for mobile, complex for desktop */}
        <div className="flex flex-col gap-6 md:gap-8 min-w-[200px] text-[#3F1200] w-full lg:w-auto">
          {[
            { label: "Prompts", target: "Audience Retention" },
            { label: "Generates", target: "Product Interest" },
            { label: "Generates", target: "Product Demand" },
            { label: "Influences", target: "Product Desire" },
            { label: "Persuades", target: "Action" },
          ].map((flow, i) => (
            <div
              key={i}
              className="flex items-center justify-between lg:justify-start gap-3 text-sm md:text-base font-black"
            >
              <span className="opacity-60 uppercase text-[10px] tracking-widest">
                {flow.label}
              </span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
              <span className="text-white whitespace-nowrap">
                {flow.target}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Logo bottom right */}
      <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-2 text-white/80 font-serif text-lg">
        <span>Barakah</span>
        <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <span>Agency</span>
      </div>

      {/* Soft sparkle decorations like in Image 2 */}
      <div className="absolute top-1/4 left-1/4 text-white/30 animate-pulse">
        ✦
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-white/30 animate-pulse">
        ✦
      </div>
    </div>
  );
}

/**
 * Editorial Banner with Globe Wireframe (Image 7 & 8)
 */
export function EditorialBanner({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.5rem] p-8 md:p-12 border-2 border-[#A5D8FF] bg-white overflow-hidden shadow-sm",
        className,
      )}
    >
      <div className="relative z-10 lg:pr-48 space-y-4">
        <h3 className="text-3xl font-black text-[#00B4D8]">{title}</h3>
        <p className="text-[#5c4033] leading-relaxed max-w-2xl font-medium">
          {description}
        </p>
      </div>

      {/* Globe Wireframe SVG - Top Right */}
      <div className="absolute top-0 right-0 w-64 h-64 -translate-y-12 translate-x-12 opacity-50 pointer-events-none text-[#00B4D8]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="100" cy="100" r="80" />
          <ellipse cx="100" cy="100" rx="30" ry="80" />
          <ellipse cx="100" cy="100" rx="80" ry="30" />
          <line x1="20" y1="100" x2="180" y2="100" />
          <line x1="100" y1="20" x2="100" y2="180" />
          <path d="M45 45 Q 100 100 155 155" />
          <path d="M155 45 Q 100 100 45 155" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Concentric Infographic (Image 9)
 */
export function ConcentricInfographic() {
  const layers = [
    { title: "Ethical Marketing", color: "bg-[#FFF5F2]" },
    { title: "Ethical Marketing Strategies", color: "bg-[#E76F3D]" },
    { title: "Ethical Marketing Tactics", color: "bg-[#48CAE4]" },
    { title: "Ethical Marketing Channels", color: "bg-[#90E0EF]" },
    { title: "Ethical Marketing Content", color: "bg-black" },
    {
      title: "Ethical Marketing Collateral",
      color: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <div className="bg-[#FBD3C1] rounded-[3rem] p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl aspect-square md:aspect-auto md:min-h-[600px]">
      <h2 className="absolute top-12 text-3xl md:text-5xl font-black text-[#3F1200] text-center px-4">
        What Does Ethical Marketing Do?
      </h2>

      <div className="w-full max-w-xl flex flex-col items-center relative gap-4 mt-20">
        {layers.map((layer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "w-full rounded-[2.5rem] p-4 md:p-6 flex items-center justify-center text-center shadow-lg border-2 border-black/5",
              layer.color,
              layer.textColor || "text-white",
            )}
            style={{ width: `${100 - i * 10}%` }}
          >
            <span className="text-xs md:text-base font-black uppercase tracking-tight">
              {layer.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Logo bottom center */}
      <div className="absolute bottom-6 flex items-center gap-2 text-[#3F1200]/60 font-serif text-lg">
        <span>Barakah</span>
        <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
          <div className="w-2 h-2 bg-current rounded-full" />
        </div>
        <span>Agency</span>
      </div>
    </div>
  );
}

/**
 * References Section Footer
 */
export function ReferencesList({ refs }: { refs: string[] }) {
  return (
    <div className="pt-16 border-t border-[#F0EBE8] mt-12 space-y-6">
      <h3 className="text-xl font-black text-[#3F1200]">References:</h3>
      <ol className="space-y-3 list-decimal pl-6 text-sm text-[#5c4033]/70 font-medium">
        {refs.map((ref, i) => (
          <li key={i}>{ref}</li>
        ))}
      </ol>
    </div>
  );
}
