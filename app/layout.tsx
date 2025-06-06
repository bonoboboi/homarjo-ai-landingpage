import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Systems for Law Firms | Confidential Data Solutions",
  description:
    "Artificial Intelligence Systems Precisely Tailored and Architected to your Workflows at the Hardware Level. AI hosted at your premises for law firms and legal departments.",
  keywords:
    "AI systems, law firms, legal AI, confidential data, on-premises AI, legal technology, artificial intelligence",
  authors: [{ name: "AI Legal Systems" }],
  openGraph: {
    title: "AI Systems for Law Firms | Confidential Data Solutions",
    description:
      "Artificial Intelligence Systems Precisely Tailored and Architected to your Workflows at the Hardware Level.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Systems for Law Firms | Confidential Data Solutions",
    description: "AI hosted at your premises for law firms and legal departments.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/fonts/array.css" />
        <link rel="stylesheet" href="/fonts/bespoke-serif.css" />
      </head>
      <body className="min-h-screen bg-[#ffffe6] dark:bg-[#10100e] text-[#08167a] dark:text-[#ffffe6] transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
