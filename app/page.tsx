"use client"

import { useState, useEffect } from "react"
import { CosmicIntro } from "@/components/cosmic-intro"
import { LandingPage } from "@/components/pages/landing-page"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("x-host-intro-seen")
    if (hasSeenIntro) {
      setIntroComplete(true)
      return
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem("x-host-intro-seen", "true")
    setIntroComplete(true)
  }

  if (introComplete) {
    return <LandingPage />
  }

  return <CosmicIntro onComplete={handleIntroComplete} />
}