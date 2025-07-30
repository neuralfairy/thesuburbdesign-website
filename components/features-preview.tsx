"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Database, Mail, FolderSyncIcon as Sync, BarChart3 } from "lucide-react"

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Database,
      title: "Data Sourcing",
      description: "Access millions of verified B2B contacts from premium data sources.",
    },
    {
      icon: Mail,
      title: "Email Verification",
      description: "Real-time email validation ensures 95%+ deliverability rates.",
    },
    {
      icon: Sync,
      title: "CRM Syncing",
      description: "Seamless integration with your existing sales tools and workflows.",
    },
    {
      icon: BarChart3,
      title: "Performance Dashboards",
      description: "Track campaign performance with detailed analytics and insights.",
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Powerful Features for Lead Generation</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to accelerate your sales pipeline and close more deals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-slate-50 hover:bg-green-50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="/features" className="btn-primary inline-block">
            Explore All Features
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
