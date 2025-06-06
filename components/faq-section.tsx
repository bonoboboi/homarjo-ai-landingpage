import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How secure is on-premises AI hosting?",
    answer:
      "Our on-premises AI systems provide the highest level of security by keeping all data within your infrastructure. No data is transmitted externally, ensuring complete confidentiality and compliance with legal industry standards.",
  },
  {
    question: "What makes your AI systems different from cloud-based solutions?",
    answer:
      "Unlike cloud solutions, our systems are built from the hardware level up, specifically for your workflows. This means better performance, complete data control, and customization that cloud services cannot match.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 4-8 weeks depending on your specific requirements and infrastructure. This includes hardware setup, software customization, team training, and full integration with your existing systems.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive support including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support to ensure your AI systems operate at peak efficiency.",
  },
  {
    question: "Can the system integrate with our existing case management software?",
    answer:
      "Absolutely. Our AI systems are designed to integrate seamlessly with popular legal case management platforms, document management systems, and other legal technology tools your firm already uses.",
  },
  {
    question: "What types of legal work can the AI assist with?",
    answer:
      "Our AI systems can assist with document review, contract analysis, legal research, case law analysis, compliance monitoring, and many other legal tasks while maintaining the highest standards of accuracy and confidentiality.",
  },
  {
    question: "How do you ensure compliance with legal industry regulations?",
    answer:
      "Our systems are built with legal industry compliance in mind, including attorney-client privilege protection, data retention policies, audit trails, and adherence to bar association guidelines for legal technology use.",
  },
  {
    question: "What is the ROI for implementing your AI systems?",
    answer:
      "Most clients see significant ROI within 6-12 months through increased efficiency, reduced manual work, faster document processing, and improved accuracy in legal analysis. We provide detailed ROI projections during consultation.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-array-wide-bold text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
          <p className="font-bespoke-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our AI systems for legal professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="font-array-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-bespoke-serif text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
