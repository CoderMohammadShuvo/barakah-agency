import React from "react"
import { cn } from "@/lib/utils"
import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  className?: string
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
  children,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "pt-24 lg:pt-32 pb-12 lg:pb-16 bg-muted/50",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-6" />}
        <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl text-pretty">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  )
}
