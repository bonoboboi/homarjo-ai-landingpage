"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-background border-b border-primary/20 shadow-sm"
    >
      <div className="container flex h-32 items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-full border-2 border-primary/30 bg-background p-1"
            >
              <Image src="/images/logo1.svg" alt="AI Legal Systems Logo" width={64} height={64} className="h-16 w-16" />
            </motion.div>
            <motion.span
              className="font-array-bold-wide text-5xl md:text-6xl lg:text-7xl relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full"
              whileHover={{ color: "var(--primary)" }}
              transition={{ duration: 0.3 }}
            >
              homarjo
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center space-x-6"
        >
          {["Features", "FAQ", "Contact"].map((item, index) => (
            <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="font-array text-sm hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md bg-secondary/50 hover:bg-secondary"
              >
                {item}
              </Link>
            </motion.div>
          ))}

          <ThemeToggle />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              asChild
              className="font-array-bold-wide shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <Link href="#booking">Schedule Demo</Link>
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <motion.div whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Button
              variant="default"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="shadow-md hover:shadow-lg bg-primary hover:bg-primary/90"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t bg-background shadow-lg"
          >
            <nav className="container py-6 space-y-4">
              {["Features", "FAQ", "Contact"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block font-array text-base p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild className="w-full font-array-bold-wide shadow-lg bg-primary hover:bg-primary/90 mt-4">
                  <Link href="#booking" onClick={() => setIsMenuOpen(false)}>
                    Schedule Demo
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
