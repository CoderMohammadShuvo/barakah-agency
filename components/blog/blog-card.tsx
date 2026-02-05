import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Blog } from "@/types"

interface BlogCardProps {
  blog: Blog
  featured?: boolean
  className?: string
}

export function BlogCard({ blog, featured = false, className }: BlogCardProps) {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <article
      className={cn(
        "group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300",
        featured && "lg:grid lg:grid-cols-2",
        className
      )}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className={cn(
          "block relative overflow-hidden",
          featured ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[16/10]"
        )}
      >
        {blog.cover_image ? (
          <Image
            src={blog.cover_image || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">No image</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {blog.category}
          </span>
        </div>
      </Link>
      <div className={cn("p-5 lg:p-6", featured && "lg:p-8 lg:flex lg:flex-col lg:justify-center")}>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
        </div>
        <Link href={`/blog/${blog.slug}`}>
          <h3
            className={cn(
              "font-serif font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors",
              featured ? "text-2xl lg:text-3xl" : "text-xl"
            )}
          >
            {blog.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
          {blog.excerpt}
        </p>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
