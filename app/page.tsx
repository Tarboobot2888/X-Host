"use client"

import { useState, useEffect, useCallback } from "react"
import { CosmicIntro } from "@/components/cosmic-intro"
import { MainUniverse } from "@/components/main-universe"
import { useUIStore } from "@/stores/ui-store"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const introKey = "x-host-intro-seen:v2"
  const setIntroSeenVersion = useUIStore((state) => state.setIntroSeenVersion)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(introKey)
    if (hasSeenIntro) {
      setIntroComplete(true)
      return
    }
  }, [introKey])

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(introKey, "true")
    setIntroSeenVersion(introKey)
    setIntroComplete(true)
  }, [introKey, setIntroSeenVersion])

  if (introComplete) {
    return <MainUniverse />
  }

  return <CosmicIntro onComplete={handleIntroComplete} />
}
