"use client"

import { useState, useEffect, useCallback } from "react"
import { CosmicIntro } from "@/components/cosmic-intro"
import { MainUniverse } from "@/components/main-universe"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("x-host-intro-seen")
    if (hasSeenIntro) {
      setIntroComplete(true)
      return
    }
  }, [])

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("x-host-intro-seen", "true")
    setIntroComplete(true)
  }, [])

  if (introComplete) {
    return <MainUniverse />
  }

  return <CosmicIntro onComplete={handleIntroComplete} />
}