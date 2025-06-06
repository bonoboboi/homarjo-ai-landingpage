import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Server, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/horizsvg.svg" alt="" fill className="object-cover" aria-hidden="true" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-array-wide-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                AI Systems for Law Firms, Legal Departments and Anywhere with Confidential Data
              </h1>
              <h2 className="font-array text-xl md:text-2xl text-muted-foreground">
                Artificial Intelligence Hosted At Your Premises
              </h2>
            </div>

            <p className="font-bespoke-serif text-lg md:text-xl leading-relaxed max-w-2xl">
              Artificial Intelligence Systems Precisely Tailored and Architected to your Workflows at the Hardware
              Level, from the Ground up, Code and Metal Acting in Unison.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-array-semibold text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="font-array-semibold text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-array-semibold text-sm">Secure</h3>
                  <p className="font-bespoke-serif text-xs text-muted-foreground">On-premises hosting</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Server className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-array-semibold text-sm">Custom</h3>
                  <p className="font-bespoke-serif text-xs text-muted-foreground">Tailored workflows</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-array-semibold text-sm">Optimized</h3>
                  <p className="font-bespoke-serif text-xs text-muted-foreground">Hardware-level integration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              <Image
                src="/images/horizsvg.svg"
                alt="AI Systems Architecture Visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
