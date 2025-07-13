"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { profile } from "@/types"

interface BootSequenceProps {
  onComplete: () => void
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [progress, setProgress] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const bootSteps = [
    "Initializing " + profile.first_name + "OS v1.0...",
    "Loading system files...",
    "Starting desktop environment...",
    "Welcome to " + profile.first_name + "OS!",
  ]

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 300)

    return () => clearInterval(cursorTimer)
  }, [])

  useEffect(() => {
    if (currentStep < bootSteps.length) {
      const text = bootSteps[currentStep]
      let charIndex = 0

      const typeText = () => {
        if (charIndex < text.length) {
          setCurrentText(text.slice(0, charIndex + 1))
          charIndex++
          setTimeout(typeText, 20 + Math.random() * 15) // Faster typing speed
        } else {
          // Move to next step after a shorter pause
          setTimeout(() => {
            if (currentStep < bootSteps.length - 1) {
              setCurrentStep(currentStep + 1)
              setCurrentText("")
              setProgress(((currentStep + 1) / bootSteps.length) * 100)
            } else {
              setTimeout(onComplete, 200) // Shorter final delay
            }
          }, 100) // Shorter pause between steps
        }
      }

      typeText()
    }
  }, [currentStep, onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black text-green-400 font-mono flex flex-col justify-center items-center z-50 p-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md">
        {/* Boot Box */}
        <div className="bg-gray-900 border-2 border-green-400 p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-xl md:text-2xl mb-2 text-green-300">{profile.first_name + "OS"}</div>
            <div className="text-xs text-gray-400">Professional Portfolio System</div>
          </div>

          {/* Boot Messages */}
          <div className="space-y-2 mb-4 min-h-[100px]">
            {bootSteps.slice(0, currentStep).map((step, index) => (
              <div key={index} className="text-xs md:text-sm text-green-300">
                ✓ {step}
              </div>
            ))}
            {currentStep < bootSteps.length && (
              <div className="text-xs md:text-sm text-green-400">
                ▶ {currentText}
                <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>_</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 border border-green-400 h-4 mb-2">
            <motion.div
              className="bg-gradient-to-r from-green-500 to-green-400 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-center text-gray-400">Loading... {Math.round(progress)}%</div>
        </div>

        {/* System Info */}
        <div className="text-center text-xs text-gray-500">
          <div>{profile.first_name + "Os Portfolio v1.0"}</div>
          <div>{"Copyright © 2024 " + profile.full_name}</div>
        </div>
      </div>
    </motion.div>
  )
}
