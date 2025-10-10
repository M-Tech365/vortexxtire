"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ContactFormDialog } from "@/components/contact-section"

export function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: Array<{ label: string; href: string; external?: boolean; isDialog?: boolean }> = [
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Axon Store", href: "https://dealer.axontire.com/irrigation_assemblies/brand=vortexx/", external: true },
    { label: "Contact", href: "#contact", isDialog: true }
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/VortexxLogo.svg"
              alt="Vortexx"
              width={150}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isDialog ? (
                <ContactFormDialog key={item.label}>
                  <button className="text-gray-700 hover:text-[#188296] transition-colors font-medium">
                    {item.label}
                  </button>
                </ContactFormDialog>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#188296] transition-colors font-medium"
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              item.isDialog ? (
                <ContactFormDialog key={item.label}>
                  <button
                    className="block w-full text-left py-3 text-gray-700 hover:text-[#188296] transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </button>
                </ContactFormDialog>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-[#188296] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}