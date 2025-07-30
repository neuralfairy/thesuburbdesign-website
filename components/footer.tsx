"use client"

import Link from "next/link"

export function Footer() {
  const footerLinks = {
    Services: [
      { name: "Lead Generation", href: "/features" },
      { name: "Data Sourcing", href: "/features" },
      { name: "Email Verification", href: "/features" },
      { name: "CRM Integration", href: "/features" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Thesuburbsdesign</span>
            </Link>
            <p className="text-slate-400 mb-4">
              Accelerating B2B growth with high-intent lead generation and AI-powered prospecting.
            </p>
            <p className="text-slate-400 text-sm">Based in Buffalo, NY</p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-green-500 transition-colors"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Thesuburbsdesign Solutions. All rights reserved.
            </p>
            <div className="text-slate-400 text-sm">
              <Link
                href="https://salescentri.com?utm_source=thesuburbsdesign.com&utm_medium=footer&utm_campaign=partner_network"
                className="hover:text-green-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
