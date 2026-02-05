import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/global"
import { CaseStudyGrid } from "@/components/case-study/case-study-card"
import { Button } from "@/components/ui/button"
import { getCaseStudies } from "@/server/queries"

export async function FeaturedCaseStudies() {
  const { data: caseStudies } = await getCaseStudies({
    published: true,
    featured: true,
    pageSize: 3,
  })

  if (caseStudies.length === 0) {
    return null
  }

  return (
    <Section>
      <SectionHeader
        subtitle="Case Studies"
        title="Results That Speak for Themselves"
        description="See how we've helped purpose-driven brands achieve remarkable growth through ethical marketing strategies."
      />
      <CaseStudyGrid caseStudies={caseStudies} />
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/case-studies">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
