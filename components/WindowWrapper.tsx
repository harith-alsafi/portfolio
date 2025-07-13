"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaMinus } from "react-icons/fa"
import { useWindows } from "@/contexts/WindowContext"
import type { WindowState } from "@/types"

interface WindowWrapperProps {
  window: WindowState
}

export default function WindowWrapper({ window }: WindowWrapperProps) {
  const { closeWindow, minimizeWindow } = useWindows()
  const WindowComponent = window.component

  if (window.isMinimized) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className={`fixed inset-4 md:inset-8 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 shadow-2xl z-40 rounded-lg ${
          window.isFocused ? "z-50" : "z-40"
        }`}
        style={{ bottom: "60px" }}
      >
        {/* Title Bar */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-3 py-2 flex items-center justify-between border-b border-blue-700 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-500 rounded-sm"></div>
            <span className="text-sm font-bold truncate">{window.title}</span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => minimizeWindow(window.id)}
              className="w-6 h-6 bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-500 border-t-gray-100 border-l-gray-100 rounded flex items-center justify-center hover:from-gray-300 hover:to-gray-500 transition-all duration-150"
            >
              <FaMinus className="text-xs text-gray-800" />
            </button>
            <button
              onClick={() => closeWindow(window.id)}
              className="w-6 h-6 bg-gradient-to-b from-red-400 to-red-600 border border-red-700 border-t-red-300 border-l-red-300 rounded flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-150"
            >
              <FaTimes className="text-xs text-white" />
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div
          className="h-full overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 p-4 rounded-b-lg"
          style={{ height: "calc(100% - 40px)" }}
        >
          <WindowComponent />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
