import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  BarChart3,
  Target,
  Megaphone,
  Globe,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/global";
import { Button } from "@/components/ui/button";
import { ServicesHero } from "@/components/services/services-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive suite of ethical marketing services including branding, performance marketing, and strategic consulting.",
};

const services = [
  {
    id: "branding",
    subtitle: "Build a Brand People Trust",
    title: "Branding & Identity",
    description:
      "We create brand identities that are clear, cohesive, and enduring. From logos and visual systems to brand guidelines, we help define how your brand looks, feels, and shows up across every touchpoint.",
  },
  {
    id: "performance-marketing",
    subtitle: "Growth Backed by Strategy and Data",
    title: "Performance Marketing & Paid Media",
    description:
      "Our performance marketing focuses on intentional growth, not short-term spikes. We design paid media and search strategies that prioritize relevance, efficiency, and measurable impact.",
  },
  {
    id: "digital",
    subtitle: "Experiences Designed to Convert",
    title: "Website Design & Development",
    description:
      "We design and build websites that balance form and function. Every experience is rooted in UX clarity, thoughtful UI, and performance — ensuring your site supports both users and business goals.",
  },
  {
    id: "social-media",
    subtitle: "Consistent Presence. Meaningful Engagement.",
    title: "Social Media Marketing",
    description:
      "We help brands show up with purpose across social platforms. From strategy to execution, we focus on content and campaigns that build trust, relevance, and long-term audience relationships.",
  },
  {
    id: "seo-sem",
    subtitle: "Visibility That Compounds Over Time",
    title: "SEO / SEM",
    description:
      "Our SEO and SEM services improve discoverability through strategic optimization, search intent alignment, and content support — helping brands earn attention where it matters most.",
  },
  {
    id: "cro",
    subtitle: "Turn Traffic Into Action",
    title: "CRO",
    description:
      "We analyze user behavior and refine experiences to improve conversion. Through testing, insights, and iteration, we help brands make every interaction more effective and intentional.",
  },
];

const benefits = [
  {
    title: "Clarity Before Action",
    description:
      "We don’t jump to solutions. We listen, analyze, and align — so every move is rooted in your mission, constraints, and goals.",
  },
  {
    title: "Strategy Built on Trust",
    description:
      "Our process centers trust and transparency. You’ll always know the “why” behind our recommendations — and how they serve your values.",
  },
  {
    title: "Ethical, Not Extractive",
    description:
      "Growth shouldn’t come at the cost of your integrity. We design systems that honor people, communities, and long-term outcomes.",
  },
  {
    title: "Systems that Scale With You",
    description:
      "We don’t do one-size-fits-all. Our strategies are designed to grow with your team — sustainable, adaptable, and clear.",
  },
  {
    title: "Legacy-Driven Results",
    description:
      "We prioritize depth over hype. Our work leaves a lasting impact on your brand, your audience, and the communities you serve.",
  },
];

function MandalaIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#3D1A10]/40"
    >
      <circle cx="24" cy="12" r="1.5" fill="currentColor" />
      <circle cx="24" cy="36" r="1.5" fill="currentColor" />
      <circle cx="12" cy="24" r="1.5" fill="currentColor" />
      <circle cx="36" cy="24" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="32.5" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="32.5" r="1.5" fill="currentColor" />
      <circle cx="32.5" cy="32.5" r="1.5" fill="currentColor" />
      <circle cx="24" cy="6" r="1" fill="currentColor" />
      <circle cx="24" cy="42" r="1" fill="currentColor" />
      <circle cx="6" cy="24" r="1" fill="currentColor" />
      <circle cx="42" cy="24" r="1" fill="currentColor" />
      <circle
        cx="24"
        cy="24"
        r="6"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 3"
      />
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFCF9]">
      <ServicesHero />

      {/* Services List */}
      <Section className="py-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t border-[#3D1A10]/10" />
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group cursor-default"
            >
              <div className="py-24 lg:py-32 flex flex-col items-start text-left">
                <span className="block text-xl lg:text-2xl text-[#3D1A10]/60 font-medium mb-4 tracking-tight">
                  {service.subtitle}
                </span>
                <h2 className="text-5xl lg:text-[84px] font-bold text-[#3D1A10] mb-8 leading-[1] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-4">
                  {service.title}
                </h2>
                <div className="max-w-3xl">
                  <p className="text-lg lg:text-2xl text-[#3D1A10]/70 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="border-b border-[#3D1A10]/10" />
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="py-32 lg:py-48">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl lg:text-[84px] font-bold text-[#3D1A10] mb-24 leading-[1] tracking-[-0.03em]">
            Benefits of Working <br /> With Barakah
          </h2>

          <div className="space-y-0">
            <div className="border-t border-[#3D1A10]/10" />
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
                  <div className="flex items-center gap-8 md:gap-12 flex-1">
                    <div className="flex-shrink-0">
                      <MandalaIcon />
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-[#3D1A10] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {benefit.title}
                    </h3>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-lg lg:text-xl text-[#3D1A10]/70 leading-relaxed font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="border-b border-[#3D1A10]/10" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#FFFCF9] border-t border-[#3D1A10]/10">
        <div className="text-center max-w-2xl mx-auto py-24 lg:py-32">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#3D1A10] mb-8 text-balance leading-tight">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg lg:text-xl text-[#3D1A10]/70 mb-12 font-medium">
            Schedule a free consultation and we'll help you identify the best
            approach for your goals.
          </p>
          <Button
            asChild
            size="lg"
            className="h-16 lg:h-20 px-10 lg:px-12 bg-[#E76F3D] hover:bg-[#D46235] text-white rounded-full text-xl font-bold shadow-2xl shadow-orange-500/20 group transition-all hover:scale-105"
          >
            <Link href="/contact" className="flex items-center gap-4">
              Schedule a Consultation
              <div className="bg-white rounded-full p-2 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-6 w-6 text-[#E76F3D]" />
              </div>
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
