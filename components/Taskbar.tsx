"use client"

import { useState, useEffect } from "react"
import { FaWindows, FaBatteryFull, FaWifi } from "react-icons/fa"
import { useWindows } from "@/contexts/WindowContext"
import StartMenu from "./StartMenu"
import Terminal from "./Terminal"

export default function Taskbar() {
  const { windows, toggleMinimize, openWindow } = useWindows()
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleStartClick = () => {
    setShowStartMenu(!showStartMenu)
  }

  const handleTerminalClick = () => {
    openWindow({
      id: "terminal",
      title: "cmd.exe",
      component: Terminal,
      route: "/terminal",
    })
    setShowStartMenu(false)
  }

  return (
    <>
      {showStartMenu && <StartMenu onClose={() => setShowStartMenu(false)} onTerminalClick={handleTerminalClick} />}

      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-blue-400 to-blue-600 border-t-2 border-blue-300 flex items-center px-2 z-30 shadow-lg">
        {/* Start Button */}
        <button
          onClick={handleStartClick}
          className={`h-8 px-3 bg-gradient-to-b ${
            showStartMenu
              ? "from-green-400 to-green-600 border-green-700 shadow-inner"
              : "from-green-500 to-green-700 border-green-800 shadow-md"
          } border-2 border-t-green-300 border-l-green-300 rounded flex items-center space-x-2 hover:from-green-400 hover:to-green-600 transition-all duration-150`}
        >
          <FaWindows className="text-sm text-white" />
          <span className="text-sm font-bold text-white hidden sm:inline">Start</span>
        </button>

        {/* Window Buttons */}
        <div className="flex-1 flex space-x-1 ml-2 overflow-x-auto">
          {windows.map((window) => (
            <button
              key={window.id}
              onClick={() => toggleMinimize(window.id)}
              className={`h-8 px-3 min-w-0 flex-shrink-0 bg-gradient-to-b ${
                window.isFocused && !window.isMinimized
                  ? "from-blue-300 to-blue-500 border-blue-600 shadow-inner"
                  : "from-blue-200 to-blue-400 border-blue-500 shadow-md"
              } border-2 border-t-blue-100 border-l-blue-100 rounded flex items-center space-x-2 hover:from-blue-300 hover:to-blue-500 transition-all duration-150 max-w-32`}
            >
              <div className="w-3 h-3 bg-blue-800 flex-shrink-0 rounded-sm"></div>
              <span className="text-xs truncate text-white font-semibold">{window.title}</span>
            </button>
          ))}
        </div>

        {/* System Tray */}
        <div className="flex items-center space-x-2 ml-2">
          <div className="flex items-center space-x-1 px-2">
            <FaWifi className="text-xs text-white" />
            <FaBatteryFull className="text-xs text-green-300" />
          </div>
          <div className="text-xs font-bold bg-gradient-to-b from-blue-200 to-blue-300 text-blue-900 px-2 py-1 border border-blue-400 border-t-blue-100 border-l-blue-100 rounded shadow-inner">
            {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </div>
        </div>
      </div>
    </>
  )
}
