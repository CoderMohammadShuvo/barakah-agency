"use client";

import Image from "next/image";

type Brand = {
  id: number;
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { id: 1, name: "Brand 1", logo: "/assets/brands/1.png" },
  { id: 2, name: "Manara West", logo: "/assets/brands/2.png" },
  { id: 3, name: "Fadwa Masala", logo: "/assets/brands/3.png" },
  { id: 4, name: "Brand 4", logo: "/assets/brands/4.png" },
  { id: 5, name: "Long Beach", logo: "/assets/brands/5.png" },
  { id: 6, name: "Blended Orange", logo: "/assets/brands/6.png" },
  { id: 7, name: "Honey Mama", logo: "/assets/brands/7.png" },
  { id: 8, name: "Brand 8", logo: "/assets/brands/8.png" },
  { id: 9, name: "Doubletree Realty", logo: "/assets/brands/9.png" },
];

export function BrandsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#381e11] font-lato">
            Stories of Purposeful Growth
          </h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="relative h-12 w-28 md:w-32">
                <Image
                  src={brand.logo}
                  alt={brand.name || "Brand logo"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 150px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
