import Link from "next/link"
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#E9D342]/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-[#E9D342]">Upgrade</span> Your Irrigation?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of farmers who've improved their field performance with Vortexx tires.
            Get a custom quote for your irrigation system today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
              <Phone className="h-8 w-8 text-[#E9D342] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">1-800-VORTEXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
              <Mail className="h-8 w-8 text-[#E9D342] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">sales@vortexxtire.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white">
              <MessageSquare className="h-8 w-8 text-[#E9D342] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-300">Available 24/7</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E9D342] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#d4c03a] transition-all hover:scale-105 group"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}