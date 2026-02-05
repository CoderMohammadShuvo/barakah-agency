"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/config"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()


  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-serif text-2xl lg:text-3xl font-bold text-primary tracking-tight"
          >
            <Image src="/logo.jpg" alt="Logo" width={200} height={28} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">


            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-3 bg-primary text-[#3D1D0F] hover:bg-primary/90 transition-all rounded-full pl-6 pr-1.5 py-1.5 font-bold shadow-lg shadow-primary/20"
            >
              <span className="text-lg">Grow with Barakah</span>
              <div className="bg-white rounded-full p-2 h-10 w-10 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col py-4 space-y-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button asChild className="w-full">
                  <Link href="/contact">Grow with Barakah</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
