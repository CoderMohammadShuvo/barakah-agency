'use client'

import React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogPaginationProps {
    currentPage: number
    totalPages: number
    baseUrl: string
    searchParams?: Record<string, string>
}

export function BlogPagination({
    currentPage,
    totalPages,
    baseUrl,
    searchParams = {},
}: BlogPaginationProps) {
    const getPageUrl = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", page.toString())
        return `${baseUrl}?${params.toString()}`
    }

    const renderPageLink = (page: number) => (
        <Link
            key={page}
            href={getPageUrl(page)}
            className={cn(
                "w-10 h-10 flex items-center justify-center border font-bold transition-all",
                currentPage === page
                    ? "bg-[#E76F3D] text-white border-[#E76F3D]"
                    : "bg-white text-[#5c4033] border-[#F0EBE8] hover:border-[#E76F3D] hover:text-[#E76F3D]"
            )}
        >
            {page}
        </Link>
    )

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="flex items-center gap-2">
            {/* Previous Arrow */}
            {currentPage > 1 ? (
                <Link
                    href={getPageUrl(currentPage - 1)}
                    className="w-10 h-10 flex items-center justify-center border border-[#F0EBE8] bg-white text-[#5c4033] hover:border-[#E76F3D] hover:text-[#E76F3D] transition-all"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Link>
            ) : (
                <div className="w-10 h-10 flex items-center justify-center border border-[#F0EBE8] bg-[#F5F5F5] text-[#D1D1D1] cursor-not-allowed">
                    <ChevronLeft className="h-5 w-5" />
                </div>
            )}

            {/* Page Numbers */}
            {pages.map(renderPageLink)}

            {/* Next Arrow */}
            {currentPage < totalPages ? (
                <Link
                    href={getPageUrl(currentPage + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-[#F0EBE8] bg-white text-[#5c4033] hover:border-[#E76F3D] hover:text-[#E76F3D] transition-all"
                >
                    <ChevronRight className="h-5 w-5" />
                </Link>
            ) : (
                <div className="w-10 h-10 flex items-center justify-center border border-[#F0EBE8] bg-[#F5F5F5] text-[#D1D1D1] cursor-not-allowed">
                    <ChevronRight className="h-5 w-5" />
                </div>
            )}
        </div>
    )
}
