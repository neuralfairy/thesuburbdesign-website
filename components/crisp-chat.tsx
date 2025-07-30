"use client"

import { useEffect } from "react"

export function CrispChat() {
  useEffect(() => {
    // Crisp Chat integration
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "your-crisp-website-id"

    const script = document.createElement("script")
    script.src = "https://client.crisp.chat/l.js"
    script.async = true
    document.getElementsByTagName("head")[0].appendChild(script)
  }, [])

  return null
}
