"use client";

import React from "react";
import { Section, SectionHeader } from "@/components/global";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const intelligenceItems = [
  {
    id: "item-1",
    title: "Where Clarity Begins",
    content:
      "We begin by deeply understanding your mission, values, and the impact you want to create. Every strategy is aligned with your ethical foundations, cultural context, and long-term vision, ensuring your marketing reflects what your brand truly stands for, not just what it sells.",
  },
  {
    id: "item-2",
    title: "Turning Data Into Understanding",
    content:
      "Our data-driven approach doesn't just stop at numbers. We analyze patterns and trends to provide deep insights into audience behavior and brand perception, turning raw data into meaningful intelligence that guides every decision.",
  },
  {
    id: "item-3",
    title: "From Insight to Responsible Action",
    content:
      "We translate insights into concrete, responsible marketing actions. Our framework ensures that every strategy is not only effective but also ethical and sustainable, creating long-term value for your brand and its community.",
  },
];

export function ZeroFrameIntelligence() {
  return (
    <Section className="bg-white w-full">
      <h1 className="text-4xl text-center lg:text-7xl font-bold text-[#3D2012] hover:no-underline text-left py-4 focus:outline-none">
        What is ZeroFrame™ Intelligence Suite?
      </h1>
      <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-5xl mx-auto pt-0 pb-6 pr-4 text-center">
        Refined through 200,000+ hours of strategy, execution, and optimization,
        our method aligns ethical marketing, cultural intelligence, and
        data-driven decision-making into one proven framework.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
        {/* Left Column: Chart Visual */}
        <div className="relative group">
          {/* Main Orange Frame */}
          <div className="bg-[#E87343] rounded-xl p-6 lg:p-8 relative overflow-hidden aspect-[4/3] flex items-end justify-end">
            {/* White Content Area */}
            <div className="bg-[#FFF8F5] rounded-tl-[2rem] w-[95%] h-[90%] absolute right-0 bottom-0 p-8 shadow-sm">
              <div className="h-full flex flex-col">
                <h3 className="text-[#4A4A4A] text-2xl font-semibold mb-8">
                  Interaction
                </h3>

                <div className="flex-1 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between py-2">
                    {[250, 150, 50, 0].map((label) => (
                      <div key={label} className="flex items-center gap-4">
                        <span className="text-[#A0A0A0] text-sm w-8 text-right font-medium">
                          {label}
                        </span>
                        <div className="flex-1 h-[1px] bg-[#EAEAEA]" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Lines (Custom SVG) */}
                  <svg
                    className="absolute inset-x-12 inset-y-0 w-[calc(100%-3rem)] h-full overflow-visible"
                    viewBox="0 0 400 200"
                    preserveAspectRatio="none"
                  >
                    {/* Blue Thick Line */}
                    <path
                      d="M 0,180 Q 50,110 80,130 T 150,140 T 220,160 T 300,120 T 400,170"
                      fill="none"
                      stroke="#7B61FF"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="opacity-70"
                    />
                    {/* Blue Thin Line */}
                    <path
                      d="M 0,160 Q 40,150 70,100 T 140,150 T 210,130 T 310,140 T 400,180"
                      fill="none"
                      stroke="#7B61FF"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="opacity-40"
                    />
                    {/* Red Main Line */}
                    <path
                      d="M 0,195 Q 60,180 90,120 T 150,80 T 220,140 T 300,160 T 360,100 T 400,110"
                      fill="none"
                      stroke="#FF6B6B"
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                  </svg>

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-[-1.5rem] inset-x-4 flex justify-between px-8">
                    {["25.02", "26.02", "27.02", "28.02", "29.02"].map(
                      (date) => (
                        <span
                          key={date}
                          className="text-[#A0A0A0] text-sm font-medium"
                        >
                          {date}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion Content */}
        <div>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full space-y-4"
          >
            {intelligenceItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-gray-200 py-2 last:border-0"
              >
                <AccordionTrigger className="text-xl lg:text-2xl font-bold text-[#3D2012] hover:no-underline text-left py-4 focus:outline-none">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B6B6B] text-lg leading-relaxed pt-0 pb-6 pr-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
