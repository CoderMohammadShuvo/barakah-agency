import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  service: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const blogSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with dashes"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  cover_image: z.string().url("Please enter a valid image URL").optional().or(z.literal("")),
  category: z.string().min(2, "Category is required"),
  author_name: z.string().transform(val => val === "" ? null : val).nullable(),
  tags: z.string().optional(),
  published: z.boolean().default(false),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
})

export type BlogFormData = z.infer<typeof blogSchema>

export const caseStudySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with dashes"),
  client: z.string().min(2, "Client name is required"),
  industry: z.string().min(2, "Industry is required"),
  challenge: z.string().min(20, "Challenge description must be at least 20 characters"),
  solution: z.string().min(20, "Solution description must be at least 20 characters"),
  results: z.string().min(20, "Results description must be at least 20 characters"),
  cover_image: z.string().url("Please enter a valid image URL").optional().or(z.literal("")),
  gallery: z.array(z.string().url()).optional(),
  testimonial: z.string().optional(),
  testimonial_author: z.string().optional(),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  metrics: z.string().optional(),
})

export type CaseStudyFormData = z.infer<typeof caseStudySchema>

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type LoginFormData = z.infer<typeof loginSchema>
