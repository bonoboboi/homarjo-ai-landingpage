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
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you within 24 hours to schedule your consultation.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="booking" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-array-wide-bold text-3xl md:text-4xl lg:text-5xl">Schedule Your Consultation</h2>
          <p className="font-bespoke-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your legal practice with custom AI systems? Book a consultation with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-array-semibold text-2xl">Get in Touch</CardTitle>
                <CardDescription className="font-bespoke-serif">
                  Speak with our AI specialists about your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-array-semibold">Phone</p>
                    <p className="font-bespoke-serif text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-array-semibold">Email</p>
                    <p className="font-bespoke-serif text-muted-foreground">contact@ailegalsystems.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-array-semibold">Availability</p>
                    <p className="font-bespoke-serif text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-array-semibold">Response Time</p>
                    <p className="font-bespoke-serif text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="font-array-semibold text-lg mb-4">What to Expect</h3>
              <ul className="font-bespoke-serif space-y-2 text-sm">
                <li>• 30-minute consultation call</li>
                <li>• Assessment of your current workflows</li>
                <li>• Custom AI solution recommendations</li>
                <li>• Implementation timeline and pricing</li>
                <li>• Next steps for your AI transformation</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-array-semibold text-2xl">Book Your Consultation</CardTitle>
              <CardDescription className="font-bespoke-serif">
                Fill out the form below and we'll schedule your personalized consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-array-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="font-bespoke-serif"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-array-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="font-bespoke-serif"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-array-semibold">
                      Company/Firm *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                      className="font-bespoke-serif"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-array-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="font-bespoke-serif"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="font-array-semibold">
                      Preferred Date
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      className="font-bespoke-serif"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="font-array-semibold">
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                      <SelectTrigger className="font-bespoke-serif">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                        <SelectItem value="4pm">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-array-semibold">
                    Tell us about your needs
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your current challenges, team size, and what you hope to achieve with AI systems..."
                    className="font-bespoke-serif min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-array-semibold text-lg">
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
