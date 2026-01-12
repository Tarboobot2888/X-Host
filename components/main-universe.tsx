"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { CosmicNavbar } from "./cosmic-navbar"
import { HeroSection } from "./sections/hero-section"
import { ThemeProvider } from "./theme-provider"
import { StarField } from "./star-field"

const ServicesSection = lazy(() => import("./sections/services-section").then((m) => ({ default: m.ServicesSection })))
const PricingSection = lazy(() => import("./sections/pricing-section").then((m) => ({ default: m.PricingSection })))
const AboutSection = lazy(() => import("./sections/about-section").then((m) => ({ default: m.AboutSection })))
const ContactSection = lazy(() => import("./sections/contact-section").then((m) => ({ default: m.ContactSection })))
const CosmicFooter = lazy(() => import("./cosmic-footer").then((m) => ({ default: m.CosmicFooter })))
const BackToTop = lazy(() => import("./back-to-top").then((m) => ({ default: m.BackToTop })))
const FloatingCTA = lazy(() => import("./floating-cta").then((m) => ({ default: m.FloatingCTA })))

function SectionLoader() {
  return (
    <div className="min-h-[150px] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export function MainUniverse() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative min-h-screen"
      >
        <StarField />
        <CosmicNavbar />

        <main className="relative z-10">
          <HeroSection />

          <Suspense fallback={<SectionLoader />}>
            <ServicesSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <PricingSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <CosmicFooter />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <FloatingCTA />
          <BackToTop />
        </Suspense>
      </motion.div>
    </ThemeProvider>
  )
}
