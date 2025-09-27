import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const products = [
  {
    name: "VORTEXX™ PIVOT",
    category: "Center Pivot Systems",
    description: "Our flagship tire designed specifically for center pivot irrigation systems.",
    features: [
      "Extra-wide footprint",
      "Deep lug pattern",
      "Reinforced bead construction",
      "UV resistant compound"
    ],
    price: "From $899",
    highlighted: true,
    color: "border-[#E9D342]"
  },
  {
    name: "VORTEXX™ LATERAL",
    category: "Linear Move Systems",
    description: "Optimized for lateral move irrigation with superior tracking and stability.",
    features: [
      "Directional tread design",
      "Self-cleaning grooves",
      "Extended wear warranty",
      "Low rolling resistance"
    ],
    price: "From $749",
    highlighted: false,
    color: "border-[#188296]"
  },
  {
    name: "VORTEXX™ TOWABLE",
    category: "Towable Pivots",
    description: "Versatile solution for towable pivot systems requiring frequent repositioning.",
    features: [
      "Highway-rated construction",
      "Dual-purpose tread",
      "Quick-release mounting",
      "All-weather performance"
    ],
    price: "From $649",
    highlighted: false,
    color: "border-gray-200"
  }
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E9D342]/10 text-[#E9D342] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for Every <span className="text-[#E9D342]">System</span>
          </h2>
          <p className="text-xl text-gray-600">
            Whatever your irrigation setup, we have the perfect tire solution engineered for optimal performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 ${product.color} p-8 transition-all hover:shadow-2xl hover:-translate-y-2 ${
                product.highlighted ? 'lg:scale-105 shadow-xl' : ''
              }`}
            >
              {product.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E9D342] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#188296] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <div className="text-3xl font-bold text-gray-900 mb-4">
                    {product.price}
                  </div>
                  <Link
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 ${
                      product.highlighted
                        ? 'bg-[#E9D342] text-gray-900 hover:bg-[#d4c03a]'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    } px-6 py-3 rounded-full font-semibold transition-colors group`}
                  >
                    Get Quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}