"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import {
  contactFormSchema,
  blogSchema,
  caseStudySchema,
  type ContactFormData,
  type BlogFormData,
  type CaseStudyFormData,
} from "@/lib/validations"

// Contact form submission
export async function submitContactForm(data: ContactFormData) {
  const validated = contactFormSchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const supabase = await createClient()
  const { error } = await supabase.from("contact_leads").insert({
    name: validated.data.name,
    email: validated.data.email,
    company: validated.data.company || null,
    phone: validated.data.phone || null,
    message: validated.data.message,
    service: validated.data.service || null,
    status: "new",
  })

  if (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit form. Please try again." }
  }

  return { success: true }
}

// Admin actions for blogs
export async function createBlog(data: BlogFormData) {
  const validated = blogSchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const supabase = await createClient()
  
  // Check admin access
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const tags = validated.data.tags 
    ? validated.data.tags.split(",").map(t => t.trim()).filter(Boolean)
    : null

  const { error } = await supabase.from("blogs").insert({
    title: validated.data.title,
    slug: validated.data.slug,
    excerpt: validated.data.excerpt,
    content: validated.data.content,
    cover_image: validated.data.cover_image || null,
    category: validated.data.category,
    tags,
    published: validated.data.published,
    meta_title: validated.data.meta_title || null,
    meta_description: validated.data.meta_description || null,
    author_id: user.id,
  })

  if (error) {
    console.error("Error creating blog:", error)
    return { success: false, error: "Failed to create blog. Please try again." }
  }

  revalidatePath("/blog", "page")
  revalidatePath("/admin/blogs", "page")
  return { success: true }
}

export async function updateBlog(id: string, data: BlogFormData) {
  const validated = blogSchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const tags = validated.data.tags 
    ? validated.data.tags.split(",").map(t => t.trim()).filter(Boolean)
    : null

  const { error } = await supabase
    .from("blogs")
    .update({
      title: validated.data.title,
      slug: validated.data.slug,
      excerpt: validated.data.excerpt,
      content: validated.data.content,
      cover_image: validated.data.cover_image || null,
      category: validated.data.category,
      tags,
      published: validated.data.published,
      meta_title: validated.data.meta_title || null,
      meta_description: validated.data.meta_description || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    console.error("Error updating blog:", error)
    return { success: false, error: "Failed to update blog. Please try again." }
  }

  revalidatePath("/blog", "page")
  revalidatePath(`/blog/${validated.data.slug}`, "page")
  revalidatePath("/admin/blogs", "page")
  return { success: true }
}

export async function deleteBlog(id: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const { error } = await supabase.from("blogs").delete().eq("id", id)

  if (error) {
    console.error("Error deleting blog:", error)
    return { success: false, error: "Failed to delete blog." }
  }

  revalidatePath("/blog", "page")
  revalidatePath("/admin/blogs", "page")
  return { success: true }
}

// Admin actions for case studies
export async function createCaseStudy(data: CaseStudyFormData) {
  const validated = caseStudySchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const metrics = validated.data.metrics 
    ? JSON.parse(validated.data.metrics)
    : null

  const { error } = await supabase.from("case_studies").insert({
    title: validated.data.title,
    slug: validated.data.slug,
    client: validated.data.client,
    industry: validated.data.industry,
    challenge: validated.data.challenge,
    solution: validated.data.solution,
    results: validated.data.results,
    cover_image: validated.data.cover_image || null,
    gallery: validated.data.gallery || null,
    testimonial: validated.data.testimonial || null,
    testimonial_author: validated.data.testimonial_author || null,
    published: validated.data.published,
    featured: validated.data.featured,
    metrics,
  })

  if (error) {
    console.error("Error creating case study:", error)
    return { success: false, error: "Failed to create case study." }
  }

  revalidatePath("/case-studies", "page")
  revalidatePath("/admin/case-studies", "page")
  return { success: true }
}

export async function updateCaseStudy(id: string, data: CaseStudyFormData) {
  const validated = caseStudySchema.safeParse(data)
  if (!validated.success) {
    return { success: false, error: validated.error.flatten().fieldErrors }
  }

  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const metrics = validated.data.metrics 
    ? JSON.parse(validated.data.metrics)
    : null

  const { error } = await supabase
    .from("case_studies")
    .update({
      title: validated.data.title,
      slug: validated.data.slug,
      client: validated.data.client,
      industry: validated.data.industry,
      challenge: validated.data.challenge,
      solution: validated.data.solution,
      results: validated.data.results,
      cover_image: validated.data.cover_image || null,
      gallery: validated.data.gallery || null,
      testimonial: validated.data.testimonial || null,
      testimonial_author: validated.data.testimonial_author || null,
      published: validated.data.published,
      featured: validated.data.featured,
      metrics,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    console.error("Error updating case study:", error)
    return { success: false, error: "Failed to update case study." }
  }

  revalidatePath("/case-studies", "page")
  revalidatePath(`/case-studies/${validated.data.slug}`, "page")
  revalidatePath("/admin/case-studies", "page")
  return { success: true }
}

export async function deleteCaseStudy(id: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const { error } = await supabase.from("case_studies").delete().eq("id", id)

  if (error) {
    console.error("Error deleting case study:", error)
    return { success: false, error: "Failed to delete case study." }
  }

  revalidatePath("/case-studies", "page")
  revalidatePath("/admin/case-studies", "page")
  return { success: true }
}

// Update lead status
export async function updateLeadStatus(id: string, status: string) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { success: false, error: "Unauthorized" }
  }

  const { error } = await supabase
    .from("contact_leads")
    .update({ status })
    .eq("id", id)

  if (error) {
    console.error("Error updating lead status:", error)
    return { success: false, error: "Failed to update status." }
  }

  revalidatePath("/admin/leads", "page")
  return { success: true }
}
