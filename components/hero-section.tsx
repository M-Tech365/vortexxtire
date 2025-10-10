"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DealerFormDialog } from "@/components/dealer-form-section"
import { ContactFormDialog } from "@/components/contact-section"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const carouselImages = [
  { src: "/carousel_1.jpg", alt: "Vortexx Irrigation Tire 1" },
  { src: "/carousel_2.jpg", alt: "Vortexx Irrigation Tire 2" },
  { src: "/carousel_3.jpg", alt: "Vortexx Irrigation Tire 3" },
  { src: "/carousel_4.jpg", alt: "Vortexx Irrigation Tire 4" },
]

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [hasAutoRotated, setHasAutoRotated] = useState(false)

  useEffect(() => {
    if (!api) return

    // Update current slide
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    // Auto-rotate once through all images
    if (!hasAutoRotated) {
      const interval = setInterval(() => {
        const currentIndex = api.selectedScrollSnap()
        const nextIndex = (currentIndex + 1) % carouselImages.length

        if (nextIndex === 0 && currentIndex === carouselImages.length - 1) {
          // We've completed one full rotation
          setHasAutoRotated(true)
          clearInterval(interval)
        } else {
          api.scrollTo(nextIndex)
        }
      }, 3000) // Change image every 3 seconds

      return () => clearInterval(interval)
    }
  }, [api, hasAutoRotated])

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
              <ContactFormDialog>
                <button className="inline-flex items-center justify-center gap-2 bg-[#E9D342] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#d4c03a] transition-all hover:scale-105 group">
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </ContactFormDialog>
              <DealerFormDialog>
                <button className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#188296] hover:text-[#188296] transition-all group">
                  Become a Dealer
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </DealerFormDialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-2xl">
              <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
                <div className="text-4xl font-bold text-[#188296]">25+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
                <div className="text-4xl font-bold text-[#188296]">40K+</div>
                <div className="text-sm text-gray-600 font-medium">Vortexx Tires Sold</div>
              </div>
              <div className="flex flex-col items-center sm:items-start space-y-3 text-center sm:text-left">
                <div className="text-4xl font-bold text-[#188296]">5</div>
                <div className="text-sm text-gray-600 font-medium">Year Warranty</div>
              </div>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#188296]/10 to-[#E9D342]/10 rounded-3xl" />
            <Carousel
              className="relative h-full rounded-3xl overflow-hidden"
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-3xl"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      current === index
                        ? "bg-[#E9D342] w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}