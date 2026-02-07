"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection({ buttonLabel = "Grow with Barakah" }: { buttonLabel?: string }) {
    return (
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#381e11] mb-6 font-lato leading-tight">
                        Your <span className="italic">Growth</span> Deserves Intention<br />
                        Let's Build It the <span className="italic">Right Way</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-[#5c4033] mb-10 max-w-3xl mx-auto font-lato leading-relaxed">
                        Growth is not something you rush into. It is something you design with clarity, trust, and purpose. Work with a team that aligns strategy, ethics, and performance into a system built to last.
                    </p>

                    {/* CTA Button */}
                    <Button
                        asChild
                        size="lg"
                        className="rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 font-lato"
                    >
                        <Link href="/contact">
                            {buttonLabel}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
