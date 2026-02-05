"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { submitContactForm } from "@/server/actions"

const services = [
  { value: "branding", label: "Branding" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "strategy", label: "Strategy Consulting" },
  { value: "content", label: "Content Marketing" },
  { value: "digital", label: "Digital Presence" },
  { value: "other", label: "Other" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setError(null)

    const result = await submitContactForm(data)

    if (result.success) {
      setIsSuccess(true)
      reset()
    } else {
      setError(typeof result.error === "string" ? result.error : "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your company"
            {...register("company")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
