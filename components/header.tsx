"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo1.svg" alt="AI Legal Systems Logo" width={40} height={40} className="h-8 w-8" />
          <span className="font-array-wide-bold text-xl">AI Legal Systems</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="font-array text-sm hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link href="#faq" className="font-array text-sm hover:text-primary/80 transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="font-array text-sm hover:text-primary/80 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild className="font-array-semibold">
            <Link href="#booking">Schedule Demo</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="#features"
              className="block font-array text-sm hover:text-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="block font-array text-sm hover:text-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block font-array text-sm hover:text-primary/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full font-array-semibold">
              <Link href="#booking" onClick={() => setIsMenuOpen(false)}>
                Schedule Demo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
