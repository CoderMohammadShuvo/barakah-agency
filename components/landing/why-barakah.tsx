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
              className="text-2xl md:text-3xl font-bold text-[#3F1200] tracking-tight font-lato uppercase cursor-pointer relative inline-block"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              WHY BARAKAH
            </h2>

            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute top-full left-0 mt-4 w-80 bg-white border border-[#e5e5e5] rounded-lg shadow-xl p-6 z-50 animate-fade-in">
                <h3 className="text-xl font-bold text-[#3F1200] mb-2 font-lato">
                  Barakah
                </h3>
                <p className="text-sm text-[#5c4033] mb-3 font-lato">
                  [bar·a·kah] — بركة
                </p>
                <p className="text-[15px] text-[#3F1200] leading-relaxed font-lato">
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
    text-[#3F1200]
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
      text-[#3F1200]
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
      text-[#3F1200]
    "
              >
                That's What We Call
                <span className="text-primary italic font-bold"> Barakah</span>
              </span>
            </h3>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 animate-fade-in opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms] w-full max-w-md sm:max-w-none">
              <Button
                asChild
                className="
    bg-[#E76F3D]
    text-white
    font-bold
    text-base sm:text-lg
    rounded-[56px]
    w-full sm:w-auto
    px-[16px] sm:px-[20px]
    py-[6px]
    h-[48px] sm:h-[52px]

    inline-flex
    items-center
    justify-center
    gap-[10px]

    shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]

    hover:bg-[#d46235]
    transition-all
  "
              >
                <Link href="/about">
                  Why Choose Barakah
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-white rounded-full flex items-center justify-center ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10744 9.99986H15.8926M15.8926 9.99986L10 4.1073M15.8926 9.99986L10 15.8924"
                        stroke="black"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </Button>

              <Button
                asChild
                className="
    bg-[#00A7C7]
    text-white
    font-bold
    text-base sm:text-lg
    rounded-[56px]
    w-full sm:w-auto
    px-[16px] sm:px-[20px]
    py-[6px]
    h-[48px] sm:h-[52px]

    inline-flex
    items-center
    justify-center
    gap-[10px]

    shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]

    hover:bg-[#d46235]
    transition-all
  "
              >
                <Link href="/about">
                  Meet the Team
                  <div className="h-7 w-7 sm:h-8 sm:w-8 bg-white rounded-full flex items-center justify-center ">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.10744 9.99986H15.8926M15.8926 9.99986L10 4.1073M15.8926 9.99986L10 15.8924"
                        stroke="black"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
