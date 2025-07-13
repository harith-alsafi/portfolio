"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { WindowProvider, useWindows } from "@/contexts/WindowContext"
import BootSequence from "@/components/BootSequence"
import Desktop from "@/components/Desktop"
import Taskbar from "@/components/Taskbar"
import WindowWrapper from "@/components/WindowWrapper"

function MainContent() {
  const { windows } = useWindows()

  return (
    <div className="h-screen overflow-hidden">
      <Desktop />

      {/* Windows */}
      <AnimatePresence>
        {windows.map((window) => (
          <WindowWrapper key={window.id} window={window} />
        ))}
      </AnimatePresence>

      <Taskbar />
    </div>
  )
}

export default function Home() {
  const [showBoot, setShowBoot] = useState(true)

  const handleBootComplete = () => {
    setShowBoot(false)
  }

  return (
    <WindowProvider>
      <AnimatePresence>{showBoot && <BootSequence onComplete={handleBootComplete} />}</AnimatePresence>

      {!showBoot && <MainContent />}
    </WindowProvider>
  )
}
