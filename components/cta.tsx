"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-green-500 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Ready to Accelerate Your Sales?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of companies using our platform to generate high-quality B2B leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://salescentri.com/get-started/free-trial"
              className="bg-black text-white hover:bg-slate-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="https://salescentri.com/get-started/book-demo"
              className="bg-white text-black hover:bg-slate-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
