"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BarakahEcosystemSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#381e11] mb-8 font-lato">
            The Barakah Ecosystem
          </h2>
        </div>

        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16 w-full mx-auto">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#381e11] font-lato">
              Specialized Brands, Built
              <br />
              for Distinct Industries
            </h3>
          </div>
          <div>
            <p className="text-base text-[#5c4033] leading-relaxed font-lato">
              Each Barakah sub-brand is purpose-built to serve the needs,
              language, and realities of a specific industry. While every brand
              operates independently in its domain, all are grounded in the same
              Barakah vision, values, and quality standard.
            </p>
          </div>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - JIRA */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] shadow-lg hover:shadow-xl transition-all">
            <Image
              src="/assets/11.png"
              alt="JIRA E-Commerce Marketing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3">
                <div
                  className="text-3xl font-bold mb-1 font-lato"
                  style={{ fontFamily: "serif" }}
                >
                  جيرا
                </div>
                <div className="text-xl font-bold font-lato">JIRA</div>
              </div>
              <p className="text-sm font-semibold mb-2 font-lato">
                E-Commerce Marketing Agency
              </p>
              <p className="text-xs leading-relaxed opacity-90 font-lato">
                We help purpose-driven e-commerce brands grow with clarity and
                conscience. Our approach blends ethical performance strategy,
                intentional community-building, and culturally aware creative to
                build lasting customer relationships.
              </p>
            </div>
          </div>

          {/* Card 2 - Engineering Marketing Agency */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] shadow-lg hover:shadow-xl transition-all">
            <Image
              src="/assets/22.jpg"
              alt="Engineering Marketing Agency"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <div className="text-xl font-bold font-lato">
                  The Engineering
                  <br />
                  Marketing Agency
                </div>
              </div>
              <p className="text-xs leading-relaxed opacity-90 font-lato">
                We support engineering firms and industrial innovators in
                translating complex ideas into compelling narratives. From
                technical content to strategic campaigns, we help teams grow
                with credibility, clarity, and long-term trust.
              </p>
            </div>
          </div>

          {/* Card 3 - Health Digital */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] shadow-lg hover:shadow-xl transition-all">
            <Image
              src="/assets/33.jpg"
              alt="Health Digital Healthcare Marketing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                <div className="text-xl font-bold font-lato">
                  Health Digital
                </div>
              </div>
              <p className="text-sm font-semibold mb-2 font-lato">
                Healthcare Marketing Agency
              </p>
              <p className="text-xs leading-relaxed opacity-90 font-lato">
                We partner with health-focused organizations to build ethical,
                human-centered digital strategies. Whether you're navigating
                patient education, growth, or advocacy, our approach centers on
                equity, care, and culturally respectful communication.
              </p>
            </div>
          </div>

          {/* Card 4 - ZeroFrame */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] shadow-lg hover:shadow-xl transition-all md:col-span-1 lg:col-start-2">
            <Image
              src="/assets/44.png"
              alt="ZeroFrame Sales & Marketing Automation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3 flex items-center gap-2">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M7 2v20M17 2v20M2 12h20" />
                </svg>
                <div className="text-xl font-bold font-lato">ZeroFrame™</div>
              </div>
              <p className="text-sm font-semibold mb-2 font-lato">
                Sales & Marketing Automation
              </p>
              <p className="text-xs leading-relaxed opacity-90 font-lato">
                ZeroFrame is an all-in-one sales and automation platform built
                on Go High Level — tailored for all industries we serve. It
                streamlines lead capture, email marketing, CRM, and client
                workflows into one intentional system, helping you grow with
                structure, clarity, and efficiency.
              </p>
            </div>
          </div>

          {/* Card 5 - NUBAYIN */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] shadow-lg hover:shadow-xl transition-all">
            <Image
              src="/assets/55.jpg"
              alt="NUBAYIN Storytelling Studio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-3">
                <div className="text-2xl font-bold font-lato">NUBAYIN</div>
              </div>
              <p className="text-xs leading-relaxed opacity-90 font-lato">
                NUBAYIN is a storytelling and entertainment studio creating
                media rooted in spiritual imagination, cultural wisdom, and
                liberated narratives. Through film, animation, and immersive
                experiences, NUBAYIN challenges narratives, celebrates beauty,
                and reclaims joy through a decolonial lens.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 font-lato"
          >
            <Link href="/ecosystem">
              Explore The Barakah Ecosystem
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
