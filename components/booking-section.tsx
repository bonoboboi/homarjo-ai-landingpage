"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you within 24 hours to schedule your consultation.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="booking" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-array-bold-wide text-3xl md:text-4xl lg:text-5xl">Schedule Your Consultation</h2>
          <p className="font-bespoke-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your legal practice with custom AI systems? Book a consultation with our experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card className="bg-card border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-array-bold-wide text-2xl">Get in Touch</CardTitle>
                  <CardDescription className="font-bespoke-serif">
                    Speak with our AI specialists about your specific needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                    { icon: Mail, label: "Email", value: "contact@ailegalsystems.com" },
                    { icon: Calendar, label: "Availability", value: "Monday - Friday, 9 AM - 6 PM EST" },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300"
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-array-bold-wide">{item.label}</p>
                        <p className="font-bespoke-serif text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-card p-6 rounded-lg border-2 border-primary/20 shadow-md"
            >
              <h3 className="font-array-bold-wide text-lg mb-4">What to Expect</h3>
              <ul className="font-bespoke-serif space-y-2 text-sm">
                {[
                  "30-minute consultation call",
                  "Assessment of your current workflows",
                  "Custom AI solution recommendations",
                  "Implementation timeline and pricing",
                  "Next steps for your AI transformation",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="transition-transform duration-200"
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card className="bg-card border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-array-bold-wide text-2xl">Book Your Consultation</CardTitle>
                  <CardDescription className="font-bespoke-serif">
                    Fill out the form below and we'll schedule your personalized consultation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="font-array-bold-wide">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email" className="font-array-bold-wide">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="company" className="font-array-bold-wide">
                          Company/Firm *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          required
                          className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone" className="font-array-bold-wide">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="preferredDate" className="font-array-bold-wide">
                          Preferred Date
                        </Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleChange("preferredDate", e.target.value)}
                          className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary"
                        />
                      </motion.div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="font-array-bold-wide">
                          Preferred Time
                        </Label>
                        <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                          <SelectTrigger className="font-bespoke-serif bg-background border-2 border-primary/20 focus:border-primary">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border-2 border-primary/20">
                            {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map(
                              (time) => (
                                <SelectItem key={time} value={time.toLowerCase().replace(/[:\s]/g, "")}>
                                  {time}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="font-array-bold-wide">
                        Tell us about your needs
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Describe your current challenges, team size, and what you hope to achieve with AI systems..."
                        className="font-bespoke-serif min-h-[120px] bg-background border-2 border-primary/20 focus:border-primary"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-array-bold-wide text-lg shadow-lg hover:shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300"
                      >
                        Schedule Consultation
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
