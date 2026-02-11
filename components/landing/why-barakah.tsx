"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyBarakah() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - "WHY BARAKAH" with Tooltip */}
          <div className="lg:col-span-3 relative">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#381e11] tracking-tight font-lato uppercase cursor-pointer relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              WHY BARAKAH
            </h2>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-full left-0 mt-4 w-80 bg-white border border-[#e5e5e5] rounded-lg shadow-xl p-6 z-50 animate-fade-in">
                <h3 className="text-xl font-bold text-[#381e11] mb-2 font-lato">
                  Barakah
                </h3>
                <p className="text-sm text-[#5c4033] mb-3 font-lato">
                  [bar·a·kah] — بركة
                </p>
                <p className="text-[15px] text-[#381e11] leading-relaxed font-lato">
                  <span className="font-semibold">A blessing.</span> A force of
                  goodness. Where a little goes far. Where meaning outweighs
                  metrics.{" "}
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-9">
            <h3
              className="
    font-lato
    text-[#381e11]
    font-normal
    text-[64px]
    leading-[84px]
    tracking-[-0.03em]
    mb-8
  "
            >
              <span className="text-primary italic font-bold">Growth</span> That
              Multiplies What Matters
              <br />
              Not Just{" "}
              <span className="text-primary italic font-bold">Revenue</span>,
              But Real
              <span className="text-primary italic font-bold"> Resonance</span>
              <br />A Strategy That Delivers{" "}
              <span className="text-primary italic font-bold">ROI²™</span>.
              <br />
              <span
                className="
      font-normal
      text-[56px]
      leading-[84px]
      tracking-[-0.03em]
      text-[#381e11]
    "
              >
                Return on Investment × Return on Impact
              </span>
              <br />
              <span
                className="
      font-normal
      text-[56px]
      leading-[84px]
      tracking-[-0.03em]
      text-[#381e11]
    "
              >
                That's What We Call
                <span className="text-primary italic font-bold"> Barakah</span>
              </span>
            </h3>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 font-lato"
            >
              <Link href="/why-barakah">
                Why Customers Trust Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
