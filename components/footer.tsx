"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-card border-t-2 border-primary/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/logo1.svg" alt="AI Legal Systems Logo" width={32} height={32} className="h-8 w-8" />
                <span className="font-array-bold-wide text-lg">AI Legal Systems</span>
              </Link>
            </motion.div>
            <p className="font-bespoke-serif text-sm text-muted-foreground leading-relaxed">
              Artificial Intelligence Systems Precisely Tailored for Legal Professionals and Confidential Data
              Environments.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 bg-secondary/50 rounded-full hover:bg-secondary"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{Icon === Linkedin ? "LinkedIn" : "Twitter"}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-array-bold-wide text-lg">Services</h3>
            <ul className="font-bespoke-serif space-y-2 text-sm">
              {[
                "On-Premises AI Systems",
                "Custom Hardware Integration",
                "Legal Workflow Optimization",
                "Document Analysis AI",
                "Compliance Solutions",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-array-bold-wide text-lg">Resources</h3>
            <ul className="font-bespoke-serif space-y-2 text-sm">
              {["Case Studies", "White Papers", "Implementation Guide", "Security Documentation", "Support Center"].map(
                (resource, index) => (
                  <motion.li
                    key={resource}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {resource}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-array-bold-wide text-lg">Contact</h3>
            <div className="font-bespoke-serif space-y-3 text-sm">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "contact@ailegalsystems.com" },
                { icon: MapPin, text: "123 Legal District\nNew York, NY 10001" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 transition-transform duration-200"
                >
                  <contact.icon className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground whitespace-pre-line">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t-2 border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="font-bespoke-serif text-sm text-muted-foreground">
            © 2025 AI Legal Systems. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
              <motion.div
                key={link}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href="#"
                  className="font-bespoke-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
