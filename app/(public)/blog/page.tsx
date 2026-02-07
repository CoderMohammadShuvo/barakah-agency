import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/global";
import { BlogCard, BlogFilter, BlogHero } from "@/components/blog";
import { CustomPagination } from "@/components/custom-pagination";
import { getBlogs, getBlogCategories } from "@/server/queries";

export const metadata: Metadata = {
  title: "Ethical Marketing Blog",
  description:
    "Insights, strategies, and resources on ethical marketing, branding, and business growth.",
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

async function BlogList({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  const { data: blogs, totalPages } = await getBlogs({
    page,
    pageSize: 9,
    published: true,
    category,
  });

  const categories = await getBlogCategories();

  if (blogs.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">
          No articles found. Check back soon for new content!
        </p>
      </div>
    );
  }

  return (
    <>
      <BlogFilter categories={categories} currentCategory={category} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            featured={index === 0 && page === 1 && !category}
            className={
              index === 0 && page === 1 && !category
                ? "md:col-span-2 lg:col-span-2"
                : ""
            }
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <CustomPagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/blog"
            searchParams={category ? { category } : undefined}
          />
        </div>
      )}
    </>
  );
}

function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="rounded-lg bg-muted animate-pulse h-80" />
      ))}
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const category = params.category;

  return (
    <>
      <BlogHero />

      <Section>
        <Suspense fallback={<BlogSkeleton />}>
          <BlogList page={page} category={category} />
        </Suspense>
      </Section>
    </>
  );
}
