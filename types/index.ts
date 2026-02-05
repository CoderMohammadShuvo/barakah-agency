export interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string | null
  category: string
  tags: string[] | null
  published: boolean
  author_id: string | null
  meta_title: string | null
  meta_description: string | null
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string
  cover_image: string | null
  gallery: string[] | null
  testimonial: string | null
  testimonial_author: string | null
  published: boolean
  featured: boolean
  metrics: Record<string, string> | null
  created_at: string
  updated_at: string
}

export interface ContactLead {
  id: string
  name: string
  email: string
  company: string | null
  phone: string | null
  message: string
  service: string | null
  status: "new" | "contacted" | "converted" | "closed"
  created_at: string
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  features: string[] | null
  icon: string | null
  order_index: number
  created_at: string
}

export interface PaginatedResult<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
