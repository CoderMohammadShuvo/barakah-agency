import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, Share2, Twitter, Linkedin } from "lucide-react"
import { PageHeader, Breadcrumbs } from "@/components/global"
import { Section } from "@/components/global"
import { Button } from "@/components/ui/button"
import { getBlogBySlug, getBlogs } from "@/server/queries"
import { BlogCard } from "@/components/blog/blog-card"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return { title: "Blog Not Found" }
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.cover_image ? [blog.cover_image] : undefined,
    },
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const { data: relatedBlogs } = await getBlogs({
    published: true,
    category: blog.category,
    pageSize: 3,
  })

  const filteredRelated = relatedBlogs.filter((b) => b.id !== blog.id).slice(0, 2)

  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <>
      {/* Header */}
      <div className="pt-24 lg:pt-32 pb-8 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: blog.title },
            ]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 text-balance">
              {blog.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{blog.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {blog.cover_image && (
        <div className="container mx-auto px-4 lg:px-8 -mt-0">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-muted">
            <Image
              src={blog.cover_image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">
                Share this article:
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://barakahagency.com/blog/${blog.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://barakahagency.com/blog/${blog.slug}`)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Back to Blog */}
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              {/* Related Articles */}
              {filteredRelated.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {filteredRelated.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {related.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 bg-primary/10 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">
                  Need Marketing Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how we can help your brand grow with integrity.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
