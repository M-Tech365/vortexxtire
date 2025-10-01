import { NavigationHeader } from "@/components/navigation-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ProductsSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  )
}