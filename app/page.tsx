import { Hero } from "@/components/hero"
import { Features } from "@/components/features-preview"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
    </>
  )
}
