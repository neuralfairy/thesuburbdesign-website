"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie } from "lucide-react"

export function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("gdpr-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("gdpr-consent", "declined")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-lg z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cookie size={24} className="text-green-500 flex-shrink-0" />
              <p className="text-sm">
                We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you
                consent to our use of cookies.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={declineCookies}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Accept
              </button>
              <button onClick={() => setShowBanner(false)} className="text-slate-400 hover:text-white ml-2">
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
