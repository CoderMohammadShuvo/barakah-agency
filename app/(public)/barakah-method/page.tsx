import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Lightbulb, Target, Heart, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "The Barakah Method",
  description: "Discover our proprietary approach to ethical marketing that delivers exceptional results with integrity.",
}

const pillars = [
  {
    icon: Heart,
    title: "Values Alignment",
    description: "Every strategy starts with understanding and aligning with your core values and ethical principles.",
    points: [
      "Deep-dive discovery sessions",
      "Values mapping workshops",
      "Ethical boundary definition",
      "Stakeholder alignment",
    ],
  },
  {
    icon: Lightbulb,
    title: "Strategic Innovation",
    description: "We combine time-tested principles with cutting-edge techniques for maximum impact.",
    points: [
      "Market research & analysis",
      "Competitive positioning",
      "Creative strategy development",
      "Channel optimization",
    ],
  },
  {
    icon: Target,
    title: "Purposeful Execution",
    description: "Every campaign is executed with precision, maintaining integrity at every touchpoint.",
    points: [
      "Transparent messaging",
      "Authentic storytelling",
      "Community-first approach",
      "Quality over quantity",
    ],
  },
  {
    icon: TrendingUp,
    title: "Measured Growth",
    description: "We track what matters - not just metrics, but meaningful impact and sustainable growth.",
    points: [
      "Custom KPI frameworks",
      "Impact measurement",
      "Continuous optimization",
      "Long-term value creation",
    ],
  },
]

const benefits = [
  "Build lasting trust with your audience",
  "Attract values-aligned customers",
  "Create sustainable competitive advantage",
  "Achieve growth without compromise",
  "Make positive impact at scale",
  "Sleep well knowing your marketing is ethical",
]

export default function BarakahMethodPage() {
  return (
    <>
      <PageHeader
        title="The Barakah Method"
        description="Our proprietary framework for achieving marketing excellence while maintaining the highest ethical standards."
        breadcrumbs={[{ label: "Barakah Method" }]}
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            The Barakah Method is more than a marketing framework - it's a philosophy that 
            proves you don't have to choose between success and integrity. Developed over 
            years of working with purpose-driven brands, our approach delivers exceptional 
            results while honoring your values.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span className="font-medium">Ethical marketing that actually works</span>
          </div>
        </div>
      </Section>

      {/* Four Pillars */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="The Four Pillars"
          title="How the Barakah Method Works"
          description="Our framework is built on four interconnected pillars that ensure ethical excellence at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-card rounded-xl border border-border p-6 lg:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    Pillar {index + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{pillar.description}</p>
              <ul className="space-y-2">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Why It Works
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              The Results Speak for Themselves
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Brands that adopt the Barakah Method consistently outperform their competitors 
              while building deeper, more meaningful relationships with their audiences.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span>Results Infographic</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready to Experience the Barakah Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Schedule a discovery call to learn how the Barakah Method can transform your marketing.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Book Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
