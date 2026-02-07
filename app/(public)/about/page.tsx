import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Heart, Zap } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Barakah Agency's mission to transform marketing through ethical practices and authentic brand building.",
}

const values = [
  {
    icon: Heart,
    title: "Integrity First",
    description: "We believe in transparent, honest marketing that builds trust rather than manipulates.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Our work aims to uplift communities and create positive social change.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We deliver exceptional results without compromising our ethical standards.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously evolve our methods while staying true to our core principles.",
  },
]

const team = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    image: "/team/ahmed.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "/team/sarah.jpg",
  },
  {
    name: "Omar Rahman",
    role: "Head of Strategy",
    image: "/team/omar.jpg",
  },
  {
    name: "Fatima Khan",
    role: "Performance Lead",
    image: "/team/fatima.jpg",
  },
]

import { AboutHero } from "@/components/about/about-hero"
import { AboutEthos } from "@/components/about/about-ethos"
import { AboutPrinciples } from "@/components/about/about-principles"
import { AboutProcess } from "@/components/about/about-process"
import { AboutTeam } from "@/components/about/about-team"
import { AboutFAQ } from "@/components/about/about-faq"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutEthos />
      <AboutPrinciples />
      <AboutProcess />
      <AboutTeam />
      <AboutFAQ />

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Born from Purpose, Driven by Values
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Barakah Agency was founded on a simple belief: marketing should uplift,
                not manipulate. In a world saturated with aggressive tactics and misleading
                claims, we chose a different path.
              </p>
              <p>
                Our name, "Barakah," represents the blessing and abundance that comes from
                doing things the right way. We've built our agency on the principle that
                sustainable success comes from creating genuine value for our clients' audiences.
              </p>
              <p>
                Today, we work with purpose-driven brands across industries, helping them
                build authentic connections and achieve remarkable growth - all while staying
                true to their values and ours.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span>Agency Team Photo</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="Our Values"
          title="What Guides Us"
          description="These core principles shape every decision we make and every campaign we create."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-card rounded-xl border border-border text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionHeader
          subtitle="Our Team"
          title="Meet the People Behind Barakah"
          description="A diverse team of strategists, creatives, and marketing experts united by shared values."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-4">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  {member.name}
                </div>
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let's discuss how we can help your brand grow with integrity.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
