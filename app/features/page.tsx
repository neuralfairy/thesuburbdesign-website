"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Database, Mail, FolderSyncIcon as Sync, BarChart3, Target, Shield, Zap, Users } from "lucide-react"

export default function FeaturesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Database,
      title: "Advanced Data Sourcing",
      description: "Access over 250M verified B2B contacts from premium data sources worldwide.",
      details: ["Real-time data updates", "GDPR compliant", "95% accuracy guarantee"],
    },
    {
      icon: Mail,
      title: "Email Verification",
      description: "Industry-leading email validation with 95%+ deliverability rates.",
      details: ["Syntax validation", "Domain verification", "Mailbox confirmation"],
    },
    {
      icon: Sync,
      title: "CRM Integration",
      description: "Seamless sync with Salesforce, HubSpot, Pipedrive, and 50+ CRMs.",
      details: ["One-click setup", "Bi-directional sync", "Custom field mapping"],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive dashboards with actionable insights and ROI tracking.",
      details: ["Real-time metrics", "Custom reports", "A/B testing tools"],
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered prospect identification based on your ideal customer profile.",
      details: ["Lookalike modeling", "Intent data signals", "Behavioral scoring"],
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance and encryption.",
      details: ["256-bit encryption", "SOC 2 certified", "GDPR compliant"],
    },
    {
      icon: Zap,
      title: "Automation Tools",
      description: "Streamline your outreach with intelligent automation workflows.",
      details: ["Smart sequences", "Follow-up automation", "Response tracking"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for sales teams to collaborate and share insights.",
      details: ["Shared workspaces", "Lead assignment", "Performance tracking"],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Powerful Features for Modern Sales Teams
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Everything you need to identify, engage, and convert high-quality B2B prospects into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://salescentri.com/solutions/use-case-navigator/demo"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interactive Demo
              </Link>
              <Link
                href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Custom Recommendations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                    <feature.icon size={32} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl text-slate-300 mb-8">
              See how our platform can transform your lead generation process.
            </p>
            <Link
              href="https://salescentri.com/solutions/use-case-navigator"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use Case Navigator
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
