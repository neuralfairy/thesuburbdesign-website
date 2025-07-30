"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function BlogPage() {
  useEffect(() => {
    // Redirect to Salescentri blog
    window.location.href = "https://salescentri.com/blog"
  }, [])

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Redirecting to Blog...</h1>
        <p className="text-slate-600">Taking you to our latest insights and resources.</p>
      </motion.div>
    </div>
  )
}
