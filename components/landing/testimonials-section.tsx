"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
    {
        id: 1,
        company: "GlowUp",
        rating: 5,
        text: "Professional, fast, and full of fresh ideas. Recha helped us launch a new product with a viral social campaign that exceeded all our expectations.",
        author: "Hassan Ahmed",
        role: "Brand Manager",
        avatar: "/placeholder-avatar-1.jpg"
    },
    {
        id: 2,
        company: "Blend Café",
        rating: 5,
        text: "Recha completely transformed our online presence. They helped us create content that finally connected with our audience. Our engagement skyrocketed within weeks.",
        author: "Sofia Khan",
        role: "Founder & Marketing Lead",
        avatar: "/placeholder-avatar-2.jpg"
    },
    {
        id: 3,
        company: "UrbanFrame Studios",
        rating: 5,
        text: "They made our brand sound and look alive. Working with Recha felt like having an in-house creative team that truly cared about our success.",
        author: "Elena Rossi",
        role: "Co-Founder",
        avatar: "/placeholder-avatar-3.jpg"
    },
    {
        id: 4,
        company: "TechFlow Solutions",
        rating: 5,
        text: "Outstanding results! The team understood our vision and delivered beyond expectations. Our conversion rates doubled in just three months.",
        author: "Michael Chen",
        role: "CEO",
        avatar: "/placeholder-avatar-4.jpg"
    },
    {
        id: 5,
        company: "Wellness Hub",
        rating: 5,
        text: "A truly transformative partnership. They brought strategic thinking and creative excellence that elevated our entire brand presence.",
        author: "Amira Patel",
        role: "Marketing Director",
        avatar: "/placeholder-avatar-5.jpg"
    }
]

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const cardsPerView = 3

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + cardsPerView >= testimonials.length ? 0 : prev + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, testimonials.length - cardsPerView) : prev - 1
        )
    }

    const visibleTestimonials = testimonials.slice(
        currentIndex,
        currentIndex + cardsPerView
    )

    // If we don't have enough cards to fill the view, loop from the beginning
    if (visibleTestimonials.length < cardsPerView) {
        const remaining = cardsPerView - visibleTestimonials.length
        visibleTestimonials.push(...testimonials.slice(0, remaining))
    }

    return (
        <section className="relative py-20 md:py-32 bg-[#E76F3D] overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-white/90 mb-2 font-lato">• Testimonials •</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-lato">
                        Trusted by Founders Building What Lasts
                    </h2>
                    <p className="text-white/90 text-lg max-w-3xl mx-auto font-lato">
                        We build enduring partnerships rooted in strategy, performance and trust.<br />
                        Here's how our clients describe the experience and the results.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mb-8">
                    <Button
                        onClick={prevSlide}
                        variant="secondary"
                        size="icon"
                        className="rounded-full w-12 h-12 bg-white hover:bg-white/90 text-[#f59e5f]"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        onClick={nextSlide}
                        variant="secondary"
                        size="icon"
                        className="rounded-full w-12 h-12 bg-white hover:bg-white/90 text-[#f59e5f]"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {visibleTestimonials.map((testimonial, idx) => (
                        <div
                            key={`${testimonial.id}-${idx}`}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Header with Company Name and Rating */}
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-[#381e11] font-lato">
                                    {testimonial.company}
                                </h3>
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-[#f59e5f] text-[#f59e5f]"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[#5c4033] leading-relaxed mb-8 flex-1 font-lato">
                                {testimonial.text}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e5f] to-[#f7a96a] flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div className="font-bold text-[#381e11] font-lato">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-[#5c4033] font-lato">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
