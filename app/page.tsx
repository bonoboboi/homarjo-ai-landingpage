import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI Legal Systems",
    description: "Artificial Intelligence Systems for Law Firms and Legal Departments",
    url: "https://example.com",
    logo: "https://example.com/images/logo1.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: ["https://linkedin.com/company/ai-legal-systems", "https://twitter.com/ailegalsystems"],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  )
}
