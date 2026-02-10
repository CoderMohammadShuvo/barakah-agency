'use client'

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TrendingTopicsProps {
    categories: string[]
    currentCategory?: string
}

export function TrendingTopics({ categories, currentCategory }: TrendingTopicsProps) {
    return (
        <div className="space-y-4 mb-12">
            <h3 className="text-2xl font-black text-[#381e11]">Trending Topics</h3>
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-bold border transition-all hover:scale-105",
                            currentCategory === category
                                ? "bg-[#E76F3D] text-white border-[#E76F3D]"
                                : "bg-[#FFF5F2] text-[#E76F3D] border-[#FFE2D9] hover:bg-[#FFE2D9]"
                        )}
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </div>
    )
}
