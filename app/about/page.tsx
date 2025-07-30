"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { MapPin, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B sales.",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Ex-Google engineer specializing in AI and machine learning applications.",
    },
    {
      name: "Mike Chen",
      role: "Head of Sales Strategy",
      bio: "Sales methodology expert who has trained over 1,000 sales professionals.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your success. Every strategy is designed to deliver measurable ROI.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your goals become our goals. We work as an extension of your sales team.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We prioritize quality over quantity in every lead we deliver.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={24} className="text-green-500" />
              <span className="text-slate-600">Based in Buffalo, NY</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Accelerating B2B Growth Since 2020</h1>
            <p className="text-xl text-slate-600 mb-8">
              We're a Buffalo-based B2B lead generation agency dedicated to helping companies fuel their sales funnels
              with high-intent prospects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To empower B2B companies with the highest quality leads and most effective sales strategies, enabling them
              to achieve sustainable growth and exceed their revenue goals. We believe that every business deserves
              access to premium lead generation tools and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">Meet the experts behind your success</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-green-500 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-slate-300 mb-8">Let's discuss how we can help accelerate your B2B growth.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://salescentri.com/company/about-us"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </Link>
              <Link
                href="https://salescentri.com/company/about-us/leadership-team"
                className="bg-white text-black hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leadership Team
              </Link>
              <Link
                href="https://salescentri.com/company/careers"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
