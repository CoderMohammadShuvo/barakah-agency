"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const toolLogos = [
  // Row 1
  {
    name: "HubSpot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  {
    name: "Shopify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  {
    name: "Klaviyo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Klaviyo_Logo.svg",
  },
  {
    name: "BigCommerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/BigCommerce_logo.svg",
  },
  {
    name: "Wicked Reports",
    logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_95746f3607fc110e5f5f7e6f8a8e1b0c/wicked-reports.png",
  },
  {
    name: "Google Tag Manager",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Google_Tag_Manager_logo.svg",
  },
  {
    name: "Google Analytics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Analytics_logo.svg",
  },
  {
    name: "Looker Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Looker_Studio_logo.svg",
  },

  // Row 2
  {
    name: "Google Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
  },
  {
    name: "Bing Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Microsoft_Advertising_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "TikTok Ads",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  },
  {
    name: "Reddit Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg",
  },
  {
    name: "X Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/X_logo_2023.svg",
  },
  {
    name: "LinkedIn Ads",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  },

  // Row 3
  {
    name: "Yotpo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Yotpo_logo.svg",
  },
  {
    name: "Feedonomics",
    logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_48d8c3639e4e6c38b212f9e4e6d4e1f7/feedonomics.png",
  },
  {
    name: "Fueled",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Fueled_logo.svg",
  },
  {
    name: "Grommet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Grommet_logo.svg",
  },
  {
    name: "Carbon 6",
    logo: "https://carbon6.io/wp-content/uploads/2022/05/Carbon6-Logo-Dark.svg",
  },
];

export function PerformanceTools() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden border-t border-[#3D1A10]/5">
      <div className="container mx-auto px-4">
        {/* Decorative Mandala-like Icon */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 text-[#E76F3D] opacity-40"
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M50 5 L50 95 M5 50 L95 50"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x="48"
                  y="10"
                  width="4"
                  height="10"
                  fill="currentColor"
                  transform={`rotate(${i * 45} 50 50)`}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#3D1A10]"
          >
            Services We Use to Scale Your <br className="hidden md:block" />{" "}
            Brand
          </motion.h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-12 lg:gap-16 items-center justify-items-center opacity-80">
          {toolLogos.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="relative w-24 h-12 lg:w-32 lg:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
                onError={(e) => {
                  // Fallback for missing logos
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                }}
              />
              {/* Tooltip or fallback text if image fails is handled by Alt but could be more explicit */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
