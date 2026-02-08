import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, FileText, Download } from "lucide-react"
import { PageHeader } from "@/components/global"
import { Section, SectionHeader } from "@/components/global"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Ethical Marketing Hub",
  description: "Free resources, guides, and insights on ethical marketing practices for purpose-driven brands.",
}

const resources = [
  {
    icon: BookOpen,
    title: "The Ethical Marketing Playbook",
    description: "A comprehensive guide to building marketing strategies that align with your values.",
    type: "Guide",
    href: "#",
  },
  {
    icon: Video,
    title: "Webinar: Marketing Without Manipulation",
    description: "Learn how to create compelling campaigns that inspire rather than deceive.",
    type: "Video",
    href: "#",
  },
  {
    icon: FileText,
    title: "Halal Marketing Checklist",
    description: "Ensure your marketing materials meet ethical and halal standards.",
    type: "Checklist",
    href: "#",
  },
  {
    icon: Download,
    title: "Brand Values Template",
    description: "Define and document your brand's core values with our free template.",
    type: "Template",
    href: "#",
  },
]

const topics = [
  {
    title: "Transparency in Advertising",
    description: "Building trust through honest, clear communication with your audience.",
  },
  {
    title: "Data Ethics & Privacy",
    description: "Respecting customer data and maintaining privacy in your marketing efforts.",
  },
  {
    title: "Inclusive Marketing",
    description: "Creating campaigns that represent and respect diverse audiences.",
  },
  {
    title: "Sustainable Practices",
    description: "Reducing environmental impact while growing your business.",
  },
  {
    title: "Community Building",
    description: "Fostering genuine connections over transactional relationships.",
  },
  {
    title: "Impact Measurement",
    description: "Tracking meaningful metrics beyond just conversions and revenue.",
  },
]

export default function EthicalMarketingHubPage() {
  return (
    <>
      <PageHeader
        title="Ethical Marketing Hub"
        description="Free resources and insights to help you build marketing strategies that align with your values."
        breadcrumbs={[{ label: "Ethical Marketing Hub" }]}
      />

      {/* Featured Resources */}
      <Section>
        <SectionHeader
          subtitle="Free Resources"
          title="Learn Ethical Marketing"
          description="Download our free guides, templates, and resources to transform your marketing approach."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    {resource.type}
                  </span>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Topics */}
      <Section className="bg-muted/30">
        <SectionHeader
          subtitle="Key Topics"
          title="What We Cover"
          description="Explore the essential principles of ethical marketing and how to apply them to your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights on ethical marketing, 
            exclusive resources, and industry updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Need Personalized Guidance?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let's discuss how we can help you implement ethical marketing in your business.
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
