"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000000]">
            About Vortexx Irrigation Tires
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="history">
              <AccordionTrigger className="text-lg font-semibold text-left">
                A History of Irrigation Tires
              </AccordionTrigger>
              <AccordionContent className="text-[#343434] leading-relaxed">
                <p>
                  Center-pivot irrigation has been around since the 1940s as a way to improve water
                  distribution to fields. Nebraska is the largest irrigator in the United States with
                  the most center pivot irrigation systems estimated at about 55,000. Rubber tires have
                  been used in irrigation since the 60s with the development of electric drive pivots.
                  The tire commonly used for irrigation in this period was the bias tire.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="radials">
              <AccordionTrigger className="text-lg font-semibold text-left">
                Why don&apos;t farmers use radial tires on pivots?
              </AccordionTrigger>
              <AccordionContent className="text-[#343434] leading-relaxed">
                <p>
                  &quot;Why don&apos;t farmers use radial tires on pivots? They already understand the benefits
                  of radials on their other equipment.&quot; We asked ourselves. The obvious answer was price.
                </p>
                <p className="mt-4">
                  In 2014, Dawson Tire & Wheel, a Nebraska based company, built a radial pivot tire to
                  take advantage of modern tire technology. Radial pivot tires offer a number of benefits
                  that help offset the price difference, including better flotation and less compaction,
                  since radial tires have a wider, flatter profile than comparably sized bias-ply tires.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vortexx">
              <AccordionTrigger className="text-lg font-semibold text-left">
                What makes the Vortexx tire so special?
              </AccordionTrigger>
              <AccordionContent className="text-[#343434] leading-relaxed">
                <p>
                  The Vortexx Non-Directional Tire&apos;s maximized UV protection stands up to intense
                  hot, dry conditions. With a 10-ply rating, the Vortexx non-directional tread results in
                  less soil disturbance along with improved self-cleaning versus directional tires.
                </p>
                <p className="mt-4">
                  There is no need to stock forward and reverse assemblies; the Non-directional tire takes
                  care of both, as well as being able to interchange with regular 11.2-38&apos;s on a tower.
                </p>
                <p className="mt-4">
                  Easy replacement of the tire, tube, & wheel assembly. Available sizes: 11.2×38, 11.2×24,
                  14.9×24. Your choice of single center or reinforced center rim. 5-year warranty. The
                  custom solution for you.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
