"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

interface BlogFilterProps {
  categories: string[]
  currentCategory?: string
}

export function BlogFilter({ categories, currentCategory }: BlogFilterProps) {
  const pathname = usePathname()

  if (categories.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <Link
        href={pathname}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-full transition-colors",
          !currentCategory
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:text-foreground"
        )}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`${pathname}?category=${encodeURIComponent(category)}`}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-colors",
            currentCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}
