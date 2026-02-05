import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Eye, Sparkles, Shield, Zap } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Zero Frame",
  description: "Our unique approach to brand perception - seeing your brand through the eyes of your audience.",
}

const principles = [
  {
    icon: Eye,
    title: "Fresh Perspective",
    description: "We approach every brand with zero preconceptions, seeing it exactly as your audience does.",
  },
  {
    icon: Sparkles,
    title: "Clarity First",
    description: "Stripping away complexity to reveal the core essence that makes your brand unique.",
  },
  {
    icon: Shield,
    title: "Honest Assessment",
    description: "Providing candid feedback and insights that help you improve, not just what you want to hear.",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description: "Turning observations into concrete strategies that drive real results.",
  },
]

export default function ZeroFramePage() {
  return (
    <>
      <PageHeader
        title="Zero Frame"
        description="A revolutionary approach to understanding how your brand truly appears to the world."
        breadcrumbs={[{ label: "Zero Frame" }]}
      />

      {/* Concept */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            See Your Brand Through New Eyes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            "Zero Frame" is our proprietary methodology for brand perception analysis. 
            We temporarily forget everything we know about marketing best practices and 
            industry norms to see your brand exactly as a first-time visitor would.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This unbiased approach reveals insights that traditional audits miss - 
            the subtle friction points, mixed messages, and missed opportunities that 
            are invisible to those too close to the brand.
          </p>
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="Our Approach"
          title="The Zero Frame Principles"
          description="How we achieve clarity and objectivity in brand analysis."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="p-6 lg:p-8 bg-card rounded-xl border border-border"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <principle.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              The Process
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              How Zero Frame Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Complete Immersion
                  </h4>
                  <p className="text-muted-foreground">
                    Our team experiences your brand as a first-time customer would, 
                    documenting every touchpoint.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Pattern Recognition
                  </h4>
                  <p className="text-muted-foreground">
                    We identify recurring themes, inconsistencies, and opportunities 
                    across your brand ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Strategic Recommendations
                  </h4>
                  <p className="text-muted-foreground">
                    We deliver a comprehensive report with prioritized, actionable 
                    recommendations for improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span>Zero Frame Process Visual</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready for a Fresh Perspective?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Discover what your brand really looks like to the outside world.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Request a Zero Frame Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
