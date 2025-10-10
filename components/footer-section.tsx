import Image from "next/image"
import Link from "next/link"

export function FooterSection() {
  const footerLinks = {
    Products: [
      { label: "Bi-Directional Radial", href: "#products" },
      { label: "Radial", href: "#products" },
      { label: "Non-Directional", href: "#products" },
      { label: "Bias", href: "#products" }
    ],
    Company: [
      { label: "About Us", href: "https://www.cfisolutionsgroup.com/", external: true },
      { label: "Careers", href: "https://ats.rippling.com/cfi-solutions/jobs", external: true },
      { label: "Dealers", href: "#dealers" },
      { label: "News", href: "#news" }
    ]
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Image
              src="/VortexxLogo.svg"
              alt="Vortexx"
              width={150}
              height={45}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm">
              Industry-leading irrigation tire solutions. Engineered for performance,
              built to last.
            </p>
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
                      {...('external' in link && link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Vortexx Tire Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-[#E9D342] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#E9D342] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#E9D342] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}