"use client"

import { useEffect } from "react"

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
  callback: () => void
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[]) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      shortcuts.forEach((shortcut) => {
        const matches =
          e.key.toLowerCase() === shortcut.key.toLowerCase() &&
          e.ctrlKey === (shortcut.ctrlKey || false) &&
          e.shiftKey === (shortcut.shiftKey || false) &&
          e.altKey === (shortcut.altKey || false)

        if (matches) {
          e.preventDefault()
          shortcut.callback()
        }
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [shortcuts])
}
