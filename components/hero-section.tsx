"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Server, Zap } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="font-array-bold-wide text-4xl md:text-5xl lg:text-6xl leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                AI Systems for Law Firms and Anywhere with Confidential Data
              </motion.h1>
              <motion.h2 variants={itemVariants} className="font-array text-xl md:text-2xl text-muted-foreground">
                Artificial Intelligence Hosted At Your Premises
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-bespoke-serif text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Artificial Intelligence Systems Precisely Tailored and Architected to your Workflows at the Hardware
              Level, from the Ground up, Code and Metal Acting in Unison.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  size="lg"
                  className="font-array-bold-wide text-lg px-8 py-6 shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  Schedule Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="font-array-bold-wide text-lg px-8 py-6 shadow-md hover:shadow-lg bg-background border-2 border-primary hover:bg-secondary transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Key Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Shield, title: "Secure", desc: "On-premises hosting" },
                { icon: Server, title: "Custom", desc: "Tailored workflows" },
                { icon: Zap, title: "Optimized", desc: "Hardware-level integration" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary/20 p-2 rounded-full"
                  >
                    <feature.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-array-bold-wide text-sm">{feature.title}</h3>
                    <p className="font-bespoke-serif text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[600px] aspect-square rounded-xl overflow-hidden shadow-2xl bg-card border border-primary/20"
            >
              <Image
                src="/images/fr_gr1.webp"
                alt="AI Legal Systems - Technology and Justice"
                fill
                className="object-contain p-4"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
