import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

export function FooterSection() {
  const footerLinks = {
    Products: [
      { label: "Center Pivot", href: "#pivot" },
      { label: "Linear Move", href: "#linear" },
      { label: "Towable Systems", href: "#towable" },
      { label: "Accessories", href: "#accessories" }
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Dealers", href: "#dealers" },
      { label: "News", href: "#news" }
    ],
    Support: [
      { label: "Contact", href: "#contact" },
      { label: "Technical Specs", href: "#specs" },
      { label: "Warranty", href: "#warranty" },
      { label: "FAQ", href: "#faq" }
    ],
    Resources: [
      { label: "Installation Guide", href: "#guide" },
      { label: "Maintenance Tips", href: "#maintenance" },
      { label: "Case Studies", href: "#cases" },
      { label: "Blog", href: "#blog" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Image
              src="/VortexxLogo.svg"
              alt="Vortexx"
              width={150}
              height={45}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm mb-6">
              Industry-leading irrigation tire solutions. Engineered for performance,
              built to last.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E9D342] hover:text-gray-900 transition-all"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[#E9D342] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-sm">
                Get the latest news, product updates, and exclusive offers.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#E9D342]"
              />
              <button
                type="submit"
                className="bg-[#E9D342] text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#d4c03a] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Vortexx Tire Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#privacy" className="hover:text-[#E9D342] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-[#E9D342] transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:text-[#E9D342] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}