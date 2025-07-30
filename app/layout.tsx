import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GDPRBanner } from "@/components/gdpr-banner"
import { CrispChat } from "@/components/crisp-chat"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thesuburbsdesign Solutions - B2B Lead Generation Agency",
  description:
    "Fuel your funnel with high-intent B2B leads. We deliver targeted, AI-validated prospects to drive your revenue.",
  keywords: "b2b lead generation, targeted prospecting, sales acceleration, lead generation agency",
  authors: [{ name: "Thesuburbsdesign Solutions" }],
  openGraph: {
    title: "Thesuburbsdesign Solutions - B2B Lead Generation Agency",
    description:
      "Fuel your funnel with high-intent B2B leads. We deliver targeted, AI-validated prospects to drive your revenue.",
    url: "https://thesuburbsdesign.com",
    siteName: "Thesuburbsdesign Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thesuburbsdesign Solutions - B2B Lead Generation Agency",
    description:
      "Fuel your funnel with high-intent B2B leads. We deliver targeted, AI-validated prospects to drive your revenue.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Thesuburbsdesign Solutions",
              url: "https://thesuburbsdesign.com",
              description: "B2B Lead Generation Agency specializing in targeted prospecting and sales acceleration",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buffalo",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <GDPRBanner />
          <CrispChat />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
