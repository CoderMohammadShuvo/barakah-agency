"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Disc,
  Zap,
  LayoutGrid,
  PenTool,
  Brain,
  TrendingUp,
  BookOpen,
  Library,
  Megaphone,
} from "lucide-react";

const subMenuIcons: Record<string, any> = {
  "The Barakah Method": Disc,
  "The Barakah Ecosystem": Zap,
  "Our Solutions": LayoutGrid,
  "Branding & Identity": PenTool,
  "ZeroFrame™ Intelligence": Brain,
  "Performance Marketing": TrendingUp,
  Blog: BookOpen,
  "Topical Libraries": Library,
  "Ethical Marketing": Megaphone,
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  // Track which mobile accordion is open
  const [openMobileSub, setOpenMobileSub] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-8xl mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-serif text-2xl lg:text-3xl font-bold text-[#E76F3D] tracking-tight"
          >
            <Image src="/logo.jpg" alt="Logo" width={200} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {siteConfig.navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent font-medium text-[15px] data-[state=open]:text-[#E76F3D]">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="p-6 w-[400px] lg:w-[600px] grid grid-cols-2 gap-4 bg-[#FFF5F0]">
                            {item.items.map((sub, idx) => {
                              const Icon = subMenuIcons[sub.name] || Zap;
                              const isMethod =
                                sub.name === "The Barakah Method";
                              const isEcosystem =
                                sub.name === "The Barakah Ecosystem";
                              const isHero = idx === 0 && !isEcosystem;

                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className={cn(
                                    "group relative flex flex-col gap-2 p-4 rounded-xl transition-all border border-transparent hover:border-[#E76F3D]/20",
                                    isMethod
                                      ? "bg-[#FBD3C1] col-span-2"
                                      : isEcosystem
                                        ? "bg-white col-span-2 hover:bg-[#E76F3D] hover:text-white"
                                        : "bg-white",
                                  )}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={cn(
                                        "p-2 rounded-lg transition-colors",
                                        isMethod
                                          ? "bg-white text-[#E76F3D]"
                                          : isEcosystem
                                            ? "bg-[#FBD3C1]/30 text-[#E76F3D] group-hover:bg-white/20 group-hover:text-white"
                                            : "bg-[#FBD3C1]/30 text-[#E76F3D]",
                                      )}
                                    >
                                      <Icon className="h-5 w-5" />
                                    </div>
                                    <h4
                                      className={cn(
                                        "font-bold leading-none transition-colors",
                                        isEcosystem
                                          ? "text-[#3F1200] group-hover:text-white"
                                          : "text-[#3F1200]",
                                      )}
                                    >
                                      {sub.name}
                                    </h4>
                                  </div>
                                  <p
                                    className={cn(
                                      "text-sm line-clamp-2 leading-snug transition-colors",
                                      isEcosystem
                                        ? "text-[#5C4033] group-hover:text-white/90"
                                        : "text-[#5C4033]",
                                    )}
                                  >
                                    {sub.description}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-transparent focus:bg-transparent font-medium text-[15px]",
                            pathname === item.href
                              ? "text-[#E76F3D]"
                              : "text-[#5C4033]",
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* CTA Button */}
            <Link
              href="/contact"
              className="
    hidden sm:inline-flex items-center gap-3
    bg-[#E76F3D]
    text-black
    hover:bg-[#d46235]
    transition-all
    rounded-[56px]
    h-[52px]
    pl-[20px]
    pr-[6px]
    py-[6px]
    font-bold
    shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]
  "
            >
              <span className="text-lg text-black">Grow with Barakah</span>

              <div
                className="
                mt-1
      h-10 w-10
      flex items-center justify-center
    "
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1666_721)">
                    <circle cx="24" cy="20" r="20" fill="#F8FAFC" />
                    <path
                      d="M19.8333 24.1665L28.1666 15.8332M28.1666 15.8332H19.8333M28.1666 15.8332V24.1665"
                      stroke="black"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1666_721"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1666_721"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1666_721"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 text-[#3F1200]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#E76F3D]/10 bg-[#FFF5F0] max-h-[80vh] overflow-y-auto rounded-b-2xl shadow-xl">
            <div className="flex flex-col py-4 space-y-1">
              {siteConfig.navigation.map((item) => (
                <div key={item.name} className="px-2">
                  {item.items ? (
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          setOpenMobileSub(
                            openMobileSub === item.name ? null : item.name,
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-[#3F1200] rounded-xl hover:bg-white transition-colors"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openMobileSub === item.name && "rotate-180",
                          )}
                        />
                      </button>
                      {openMobileSub === item.name && (
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          {item.items.map((sub) => {
                            const Icon = subMenuIcons[sub.name] || Zap;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E76F3D]/5"
                              >
                                <div className="p-2 bg-[#FBD3C1]/30 rounded-lg text-[#E76F3D]">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <h5 className="font-bold text-[#3F1200] text-sm">
                                    {sub.name}
                                  </h5>
                                  <p className="text-xs text-[#5C4033] line-clamp-1">
                                    {sub.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-bold rounded-xl transition-colors block",
                        pathname === item.href
                          ? "text-[#E76F3D] bg-white"
                          : "text-[#3F1200] hover:bg-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-6 pb-4">
                <Button
                  asChild
                  className="
    w-[200px]
    h-[52px]
    bg-[#E76F3D]
    hover:bg-[#d46235]
    text-black
    rounded-[56px]
    font-bold
    text-lg
    flex
    items-center
    justify-center
    px-[20px]
    py-[6px]
    shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]
    transition-all
  "
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Grow with Barakah
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
