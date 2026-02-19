"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/types";
import { SocialShare } from "./social-share";
import { formatDate } from "@/lib/utils";

interface BlogDetailSidebarProps {
  relatedBlogs: Blog[];
}

export function BlogDetailSidebar({ relatedBlogs }: BlogDetailSidebarProps) {
  return (
    <aside className="space-y-12">
      <SocialShare />

      <div className="space-y-8">
        <h3 className="text-2xl font-black text-[#3F1200]">Related Blogs</h3>
        <div className="space-y-6">
          {relatedBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="relative aspect-[1.8] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={blog.cover_image || "/placeholder-blog.jpg"}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#5c4033]/60 uppercase tracking-wider">
                  <span>by Ziad Itani</span>
                  <span className="w-1 h-1 rounded-full bg-[#E76F3D]/40" />
                  <span>{formatDate(blog.created_at)}</span>
                </div>
                <h4 className="text-lg font-black text-[#3F1200] leading-tight transition-colors group-hover:text-[#E76F3D]">
                  {blog.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
