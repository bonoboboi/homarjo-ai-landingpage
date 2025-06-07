import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client-layout"

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
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'