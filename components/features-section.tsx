import { Shield, Zap, Droplets, Gauge, Wrench, Leaf } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Maximum Durability",
    description: "Built to withstand the toughest field conditions with reinforced sidewalls and advanced rubber compounds.",
    color: "text-[#188296]",
    bgColor: "bg-[#188296]/10"
  },
  {
    icon: Zap,
    title: "Superior Traction",
    description: "Innovative tread patterns provide exceptional grip in wet conditions while minimizing soil compaction.",
    color: "text-[#E9D342]",
    bgColor: "bg-[#E9D342]/10"
  },
  {
    icon: Droplets,
    title: "Water Management",
    description: "Self-cleaning design prevents mud buildup and ensures consistent performance in all weather conditions.",
    color: "text-[#188296]",
    bgColor: "bg-[#188296]/10"
  },
  {
    icon: Gauge,
    title: "Radials",
    description: "Engineered for optimal performance at lower pressures, reducing rutting and improving flotation.",
    color: "text-[#E9D342]",
    bgColor: "bg-[#E9D342]/10"
  },
  {
    icon: Wrench,
    title: "Easy Installation",
    description: "Our full range of tire and wheel assemblies fit all major irrigation systems. Quick installation gets your pivot back to work fast, reducing costly downtime.",
    color: "text-[#188296]",
    bgColor: "bg-[#188296]/10"
  },
  {
    icon: Leaf,
    title: "Soil Friendly",
    description: "Designed to minimize soil compaction and protect field health. Gentle on your land, tough on the job.",
    color: "text-[#E9D342]",
    bgColor: "bg-[#E9D342]/10"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#188296]/10 text-[#188296] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Vortexx
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Engineered for <span className="text-[#188296]">Performance</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our tire and wheel assemblies combine cutting-edge technology with decades of agricultural expertise to deliver
            unmatched reliability in the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className={`${feature.bgColor} ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}