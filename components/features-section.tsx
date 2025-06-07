"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Server, Cpu, Lock, Zap, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Shield,
    title: "On-Premises Security",
    description:
      "Your data never leaves your infrastructure. Complete control over sensitive legal information with enterprise-grade security protocols.",
  },
  {
    icon: Server,
    title: "Custom Hardware Integration",
    description:
      "AI systems built from the ground up, optimized for your specific hardware configuration and performance requirements.",
  },
  {
    icon: Cpu,
    title: "Workflow Optimization",
    description:
      "Precisely tailored to your legal processes, from document review to case analysis, maximizing efficiency and accuracy.",
  },
  {
    icon: Lock,
    title: "Confidentiality Guaranteed",
    description:
      "Attorney-client privilege maintained with air-gapped systems and zero external data transmission capabilities.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Hardware-level optimization ensures lightning-fast processing of large document sets and complex legal queries.",
  },
  {
    icon: Users,
    title: "Team Integration",
    description:
      "Seamlessly integrates with existing legal team workflows and case management systems for enhanced collaboration.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-array-bold-wide text-3xl md:text-4xl lg:text-5xl">Why Choose Our AI Systems</h2>
          <p className="font-bespoke-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for the unique requirements of legal professionals handling confidential data
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-2 border-primary/20 bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-primary/10 p-3 rounded-full w-fit mb-4"
                    >
                      <feature.icon className="h-12 w-12 text-primary" />
                    </motion.div>
                    <CardTitle className="font-array-bold-wide text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-bespoke-serif text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
