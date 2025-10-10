"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, RotateCcw } from "lucide-react"

const products = [
  {
    name: "Bi-Directional Radial",
    category: "Premium Performance",
    description: "Low soil compaction with forward or reverse traction for maximum versatility.",
    features: [
      "Low soil compaction / low rutting",
      "Forward or reverse traction"
    ],
    sizes: ["380/85R24", "290/85R38"],
    highlighted: true,
    color: "border-[#E9D342]",
    image: "/Vortexx_BiDirectionalRadial_090925.png"
  },
  {
    name: "Radial",
    category: "Enhanced Traction",
    description: "Increased footprint design delivering superior grip and stability.",
    features: [
      "Increased footprint",
      "Good traction"
    ],
    sizes: ["280/85R24", "380/85R24", "320/85R38"],
    highlighted: false,
    color: "border-[#188296]",
    image: "/Vortexx_Radial_090925.png"
  },
  {
    name: "Non-Directional",
    category: "Versatile Solution",
    description: "Reduces downtime and combats ruts with bi-directional capability.",
    features: [
      "Reduces downtime / combats ruts",
      "Forward or reverse traction"
    ],
    sizes: ["11.2x24", "14.9x24", "11.2x38"],
    highlighted: false,
    color: "border-[#188296]",
    image: "/Vortexx_Non-Directional_090925.png"
  },
  {
    name: "Bias",
    category: "Value Option",
    description: "Cost-effective solution without compromising on quality.",
    features: [
      "Cost effective"
    ],
    sizes: ["11.2x24", "14.9x24", "11.2x38"],
    highlighted: false,
    color: "border-gray-200",
    image: "/Vortexx_Bias.png"
  }
]

export function ProductsSection() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E9D342]/10 text-[#E9D342] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Product Lines
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Right Tire for Your <span className="text-[#E9D342]">Needs</span>
          </h2>
          <p className="text-xl text-gray-600">
            From bi-directional radials to cost-effective bias tires, Vortexx has the perfect solution for your irrigation system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const isFlipped = flippedCards.includes(index)
            return (
              <div
                key={index}
                className={`relative ${
                  product.highlighted ? 'lg:scale-105' : ''
                } [perspective:1000px] h-[550px]`}
              >
                {product.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-[#E9D342] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div
                      className={`bg-white rounded-2xl border-2 ${product.color} p-8 h-full flex flex-col cursor-pointer transition-all hover:shadow-2xl`}
                      onClick={() => toggleFlip(index)}
                    >
                      <div className="space-y-6 flex flex-col flex-grow">
                        <div>
                          <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {product.name}
                          </h3>
                          <p className="text-gray-600">
                            {product.description}
                          </p>
                        </div>

                        <div className="space-y-3 flex-grow min-h-[80px]">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-[#188296] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-gray-100 mt-auto">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.sizes.map((size, sizeIndex) => (
                                <span key={sizeIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium min-w-[100px] text-center">
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <RotateCcw className="h-4 w-4" />
                            Click to view tire
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div
                      className={`bg-white rounded-2xl border-2 ${product.color} p-8 h-full flex flex-col cursor-pointer transition-all hover:shadow-2xl`}
                      onClick={() => toggleFlip(index)}
                    >
                      <div className="flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                          {product.name}
                        </h3>
                        <div className="relative h-[300px] rounded-xl overflow-hidden bg-gray-100">
                          {!loadedImages.has(index) && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 border-4 border-[#188296] border-t-transparent rounded-full animate-spin"></div>
                            </div>
                          )}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority
                            loading="eager"
                            onLoad={() => handleImageLoad(index)}
                          />
                        </div>
                        <Link
                          href="#contact"
                          className={`mt-auto w-full inline-flex items-center justify-center gap-2 ${
                            product.highlighted
                              ? 'bg-[#E9D342] text-gray-900 hover:bg-[#d4c03a]'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          } px-6 py-3 rounded-full font-semibold transition-colors group`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-3">
                          <RotateCcw className="h-4 w-4" />
                          Click to see details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Preload images */}
        <div className="hidden">
          {products.map((product, index) => (
            <Image
              key={`preload-${index}`}
              src={product.image}
              alt=""
              width={1}
              height={1}
              priority
              onLoad={() => handleImageLoad(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}