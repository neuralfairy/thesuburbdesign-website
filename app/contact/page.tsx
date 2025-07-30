"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formType, setFormType] = useState("contact")

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@thesuburbsdesign.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9AM - 6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Buffalo, NY",
      description: "Schedule an appointment",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-600 mb-8">
              Ready to accelerate your B2B growth? Let's discuss your lead generation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section ref={ref} className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-lg text-slate-800 font-medium mb-1">{info.content}</p>
                <p className="text-slate-600">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-slate-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Send Us a Message</h2>
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setFormType("contact")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      formType === "contact" ? "bg-green-500 text-black" : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    General Contact
                  </button>
                  <button
                    onClick={() => setFormType("partnership")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      formType === "partnership"
                        ? "bg-green-500 text-black"
                        : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    Partnership
                  </button>
                  <button
                    onClick={() => setFormType("sales")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      formType === "sales" ? "bg-green-500 text-black" : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    Sales Inquiry
                  </button>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your lead generation needs..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Need Immediate Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://salescentri.com/get-started/contact"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Form
              </Link>
              <Link
                href="https://salescentri.com/contact/sales-inquiry"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sales Inquiry
              </Link>
              <Link
                href="https://salescentri.com/contact/support-request/submit-ticket"
                className="bg-white border-2 border-slate-300 text-slate-700 hover:border-green-500 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Ticket
              </Link>
              <Link
                href="https://salescentri.com/contact/support-request/live-chat"
                className="bg-green-100 text-green-700 hover:bg-green-200 font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
                Live Chat
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
