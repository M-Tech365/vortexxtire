import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#188296]/5 to-[#E9D342]/5" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#188296]/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#188296]/10 text-[#188296] px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-[#188296] rounded-full animate-pulse" />
                Industry Leading Innovation
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                DRIVING
                <span className="text-[#188296] block">IRRIGATION</span>
                <span className="text-[#E9D342]">FORWARD</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Revolutionary tire technology engineered specifically for center pivot irrigation systems.
                Maximum traction, minimal rutting, exceptional durability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#E9D342] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#d4c03a] transition-all hover:scale-105 group"
              >
                Explore Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#188296] hover:text-[#188296] transition-all group">
                <Play className="h-5 w-5" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#188296]">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#188296]">50%</div>
                <div className="text-sm text-gray-600">Less Rutting</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#188296]">3x</div>
                <div className="text-sm text-gray-600">Longer Lasting</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#188296]/10 to-[#E9D342]/10 rounded-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden">
              <Image
                src="/VortexOnSprayer.jpg"
                alt="Vortexx Tire on Irrigation Sprayer"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}