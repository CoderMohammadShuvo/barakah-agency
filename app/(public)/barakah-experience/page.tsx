import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageSquare, Handshake, Rocket, Award, Users, Clock } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "The Barakah Experience",
  description: "What it's like to work with Barakah Agency - our process, values, and commitment to your success.",
}

const journey = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "A no-pressure conversation to understand your goals, challenges, and vision for growth.",
    duration: "30 minutes",
  },
  {
    icon: Handshake,
    title: "Strategy Session",
    description: "Deep dive into your brand, market, and opportunities with our senior strategists.",
    duration: "2-3 hours",
  },
  {
    icon: Rocket,
    title: "Custom Proposal",
    description: "A tailored roadmap with clear deliverables, timelines, and investment options.",
    duration: "Within 1 week",
  },
  {
    icon: Award,
    title: "Kickoff & Execution",
    description: "Your dedicated team begins work with regular updates and collaborative reviews.",
    duration: "Ongoing",
  },
]

const commitments = [
  {
    title: "Transparent Communication",
    description: "Weekly updates, monthly reviews, and always-on access to your team.",
  },
  {
    title: "No Hidden Fees",
    description: "Clear pricing with everything included - no surprise charges.",
  },
  {
    title: "Results Guarantee",
    description: "If we don't deliver on our promises, we'll make it right.",
  },
  {
    title: "Long-term Partnership",
    description: "We're invested in your success, not just the next invoice.",
  },
]

const testimonials = [
  {
    quote: "Working with Barakah has been transformative. They truly understand what ethical marketing means.",
    author: "Sarah Ahmed",
    role: "CEO, Modest Fashion Co",
  },
  {
    quote: "Finally, an agency that delivers results without compromising our values. Highly recommended.",
    author: "Mohammed Ali",
    role: "Founder, Halal Ventures",
  },
]

export default function BarakahExperiencePage() {
  return (
    <>
      <PageHeader
        title="The Barakah Experience"
        description="Discover what makes working with us different - and why our clients stay for years."
        breadcrumbs={[{ label: "Barakah Experience" }]}
      />

      {/* Client Journey */}
      <Section>
        <SectionHeader
          subtitle="Your Journey"
          title="How We Work Together"
          description="A clear, collaborative process designed for your success."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="p-6 bg-card rounded-xl border border-border h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Clock className="h-3 w-3" />
                  {step.duration}
                </div>
              </div>
              {index < journey.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground/30">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Our Commitments */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="Our Promise"
          title="What You Can Expect"
          description="Commitments we make to every client, every project."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-2">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground">{commitment.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader
          subtitle="Client Stories"
          title="What Our Clients Say"
          description="Don't just take our word for it."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 lg:p-8 bg-card rounded-xl border border-border"
            >
              <blockquote className="text-lg text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
              98%
            </div>
            <p className="text-muted-foreground">Client Retention</p>
          </div>
          <div>
            <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
              150+
            </div>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
              4.9
            </div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
              5+
            </div>
            <p className="text-muted-foreground">Years Avg. Partnership</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Start your journey with a free discovery call.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">
              Schedule Your Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
