import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CustomPaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  searchParams?: Record<string, string>
}

export function CustomPagination({
  currentPage,
  totalPages,
  baseUrl,
  searchParams = {},
}: CustomPaginationProps) {
  const createUrl = (page: number) => {
    const params = new URLSearchParams(searchParams)
    if (page > 1) {
      params.set("page", String(page))
    } else {
      params.delete("page")
    }
    const queryString = params.toString()
    return queryString ? `${baseUrl}?${queryString}` : baseUrl
  }

  const pages = generatePages(currentPage, totalPages)

  return (
    <nav className="flex items-center gap-1" aria-label="Pagination">
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage <= 1}
        className={cn(currentPage <= 1 && "pointer-events-none opacity-50")}
      >
        <Link href={createUrl(currentPage - 1)} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>

      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-2 text-muted-foreground"
            >
              ...
            </span>
          )
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={createUrl(page as number)}>{page}</Link>
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage >= totalPages}
        className={cn(
          currentPage >= totalPages && "pointer-events-none opacity-50"
        )}
      >
        <Link href={createUrl(currentPage + 1)} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </nav>
  )
}

function generatePages(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | "...")[] = []

  if (current <= 3) {
    pages.push(1, 2, 3, 4, "...", total)
  } else if (current >= total - 2) {
    pages.push(1, "...", total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, "...", current - 1, current, current + 1, "...", total)
  }

  return pages
}
