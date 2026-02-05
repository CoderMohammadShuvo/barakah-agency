import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/types"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  className?: string
}

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          {caseStudy.cover_image ? (
            <Image
              src={caseStudy.cover_image || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full mb-3">
              {caseStudy.industry}
            </span>
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-1">
              {caseStudy.title}
            </h3>
            <p className="text-white/80 text-sm">{caseStudy.client}</p>
          </div>
          <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </div>
        </div>
      </Link>
    </article>
  )
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
  className?: string
}

export function CaseStudyGrid({ caseStudies, className }: CaseStudyGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
    >
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
      ))}
    </div>
  )
}
