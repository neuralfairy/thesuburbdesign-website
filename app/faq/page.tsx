"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does your lead generation process work?",
      answer:
        "We use AI-powered tools to identify high-intent prospects based on your ideal customer profile. Our process includes data sourcing, email verification, and CRM integration to deliver qualified leads directly to your sales team.",
    },
    {
      question: "What makes your leads high-quality?",
      answer:
        "Our leads are validated through multiple verification processes including email validation, company verification, and intent data analysis. We guarantee 95%+ accuracy and only deliver prospects that match your specific criteria.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most clients see their first qualified leads within 48-72 hours of campaign launch. Full campaign optimization typically occurs within the first 2 weeks.",
    },
    {
      question: "Do you integrate with my existing CRM?",
      answer:
        "Yes, we integrate with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, and more. Setup is typically completed within 24 hours.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve B2B companies across all industries including SaaS, manufacturing, professional services, healthcare, and more. Our AI-powered approach adapts to any industry vertical.",
    },
    {
      question: "Is there a minimum contract length?",
      answer:
        "No, we offer month-to-month plans with no long-term commitments. You can cancel or modify your plan at any time.",
    },
    {
      question: "How do you ensure GDPR compliance?",
      answer:
        "All our data collection and processing practices are fully GDPR compliant. We only use verified, opt-in data sources and provide clear opt-out mechanisms for all prospects.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including dedicated account management, training sessions, and 24/7 technical support. Our team works as an extension of your sales organization.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600 mb-8">
              Everything you need to know about our B2B lead generation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={ref} className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-800">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp size={24} className="text-green-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team is here to help you understand how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://salescentri.com/docs/user-guide"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs - User Guide
              </Link>
              <Link
                href="https://salescentri.com/docs/api-reference"
                className="bg-white text-black hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Reference
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
