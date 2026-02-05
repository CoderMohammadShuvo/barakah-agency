import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Palette, BarChart3, Target, Megaphone, Globe, Sparkles, CheckCircle } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive suite of ethical marketing services including branding, performance marketing, and strategic consulting.",
}

const services = [
  {
    id: "branding",
    icon: Palette,
    title: "Branding",
    description: "Build a powerful, authentic brand identity that resonates with your audience and reflects your values.",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Messaging Framework",
      "Brand Voice Development",
    ],
    href: "/services/branding",
  },
  {
    id: "performance-marketing",
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Data-driven campaigns across paid channels that maximize ROI while maintaining ethical standards.",
    features: [
      "Paid Social Advertising",
      "Search Engine Marketing",
      "Programmatic Display",
      "Conversion Optimization",
      "Analytics & Reporting",
    ],
    href: "/services/performance-marketing",
  },
  {
    id: "strategy",
    icon: Target,
    title: "Strategy Consulting",
    description: "Strategic guidance to align your marketing efforts with your business goals and ethical principles.",
    features: [
      "Marketing Audits",
      "Go-to-Market Strategy",
      "Competitive Analysis",
      "Customer Research",
      "Growth Planning",
    ],
    href: "/services#strategy",
  },
  {
    id: "content",
    icon: Megaphone,
    title: "Content Marketing",
    description: "Compelling content that educates, inspires, and drives engagement with your target audience.",
    features: [
      "Content Strategy",
      "Blog & Article Writing",
      "Video Production",
      "Social Media Content",
      "Email Marketing",
    ],
    href: "/services#content",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital Presence",
    description: "Website design and development that creates meaningful connections and drives conversions.",
    features: [
      "Website Design",
      "UX/UI Optimization",
      "SEO Strategy",
      "Landing Page Design",
      "E-commerce Solutions",
    ],
    href: "/services#digital",
  },
  {
    id: "barakah-method",
    icon: Sparkles,
    title: "The Barakah Method",
    description: "Our proprietary approach combining ethical principles with modern marketing excellence.",
    features: [
      "Values Alignment Workshop",
      "Ethical Marketing Audit",
      "Stakeholder Engagement",
      "Impact Measurement",
      "Ongoing Advisory",
    ],
    href: "/barakah-method",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive marketing solutions designed to help ethical businesses thrive."
        breadcrumbs={[{ label: "Services" }]}
      />

      <Section>
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}>
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span>{service.title} Visual</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation and we'll help you identify the best approach for your goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
