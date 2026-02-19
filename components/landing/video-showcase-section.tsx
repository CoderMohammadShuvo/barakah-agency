"use client";

import Image from "next/image";

export function VideoShowcaseSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3F1200] mb-4 font-lato">
            Grow Your Business, Build Your Legacy.
          </h2>
          <p className="text-lg text-[#5c4033] max-w-3xl mx-auto font-lato">
            Discover how ROI²™ positions you to win loyal customers, achieve
            brand dominance, and build a legacy that lasts.
          </p>
        </div>

        {/* Video Container */}
        <div className="container mx-auto">
          <Image
            src="/assets/whatif.png"
            alt="Video Thumbnail"
            width={1000}
            height={800}
            className="object-cover mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
