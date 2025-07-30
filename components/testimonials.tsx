"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content:
        "Thesuburbsdesign transformed our lead generation process. We saw a 300% increase in qualified leads within the first month.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content:
        "The quality of leads is exceptional. Their AI validation process ensures we only get prospects who are ready to buy.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "Best ROI we've ever seen from a lead generation service. The team is responsive and the results speak for themselves.",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600">Join hundreds of companies accelerating their growth</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-slate-800">{testimonial.name}</div>
                <div className="text-slate-500 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
