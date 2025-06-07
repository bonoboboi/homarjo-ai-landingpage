"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundPattern } from "@/components/background-pattern"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/array.css" as="style" />
        <link rel="preload" href="/fonts/bespoke-serif.css" as="style" />
        <link rel="stylesheet" href="/fonts/array.css" />
        <link rel="stylesheet" href="/fonts/bespoke-serif.css" />
      </head>
      <body className="min-h-screen text-[#08167a] dark:text-[#ffffe6] transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="ai-legal-theme"
        >
          <BackgroundPattern />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
