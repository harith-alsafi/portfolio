"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import type { WindowState } from "@/types"

interface WindowContextType {
  windows: WindowState[]
  openWindow: (window: Omit<WindowState, "isOpen" | "isMinimized" | "isFocused">) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  focusWindow: (id: string) => void
  toggleMinimize: (id: string) => void
}

const WindowContext = createContext<WindowContextType | undefined>(undefined)

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([])

  const openWindow = useCallback((windowData: Omit<WindowState, "isOpen" | "isMinimized" | "isFocused">) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === windowData.id)
      if (existing) {
        // Minimize all other windows and focus this one
        return prev.map((w) => ({
          ...w,
          isFocused: w.id === windowData.id,
          isMinimized: w.id === windowData.id ? false : true,
        }))
      }
      // Minimize all existing windows and add new focused window
      return [
        ...prev.map((w) => ({ ...w, isFocused: false, isMinimized: true })),
        { ...windowData, isOpen: true, isMinimized: false, isFocused: true },
      ]
    })
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true, isFocused: false } : w)))
  }, [])

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        isFocused: w.id === id,
        isMinimized: w.id === id ? false : w.isMinimized,
      })),
    )
  }, [])

  const toggleMinimize = useCallback((id: string) => {
    setWindows((prev) => {
      const targetWindow = prev.find((w) => w.id === id)
      if (!targetWindow) return prev

      if (targetWindow.isMinimized) {
        // If target window is minimized, restore it and minimize all others
        return prev.map((w) => ({
          ...w,
          isFocused: w.id === id,
          isMinimized: w.id === id ? false : true,
        }))
      } else {
        // If target window is visible, just minimize it
        return prev.map((w) => (w.id === id ? { ...w, isMinimized: true, isFocused: false } : w))
      }
    })
  }, [])

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        toggleMinimize,
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error("useWindows must be used within a WindowProvider")
  }
  return context
}
