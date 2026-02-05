import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/global"
import { BlogCard } from "@/components/blog/blog-card"
import { Button } from "@/components/ui/button"
import { getBlogs } from "@/server/queries"

export async function FeaturedBlogs() {
  const { data: blogs } = await getBlogs({
    published: true,
    pageSize: 3,
  })

  if (blogs.length === 0) {
    return null
  }

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        subtitle="From Our Blog"
        title="Insights & Resources"
        description="Stay informed with the latest insights on ethical marketing, branding strategies, and industry trends."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
            Read More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
