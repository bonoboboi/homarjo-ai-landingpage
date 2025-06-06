import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Server, Cpu, Lock, Zap, Users } from "lucide-react"

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

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-array-wide-bold text-3xl md:text-4xl lg:text-5xl">Why Choose Our AI Systems</h2>
          <p className="font-bespoke-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Built specifically for the unique requirements of legal professionals handling confidential data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-array-semibold text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-bespoke-serif text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
