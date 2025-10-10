import { Phone } from "lucide-react"

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
            Join thousands of farmers who&apos;ve improved their field performance with Vortexx tires.
            Get a custom quote for your irrigation system today.
          </p>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-white">
              <Phone className="h-12 w-12 text-[#E9D342] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:888-808-2398" className="text-2xl text-gray-300 hover:text-[#E9D342] transition-colors font-semibold">888-808-2398</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}