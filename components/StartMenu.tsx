"use client"

import { profile } from "@/types"
import { motion } from "framer-motion"
import { FaTerminal, FaUser, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"

interface StartMenuProps {
  onClose: () => void
  onTerminalClick: () => void
}

export default function StartMenu({ onClose, onTerminalClick }: StartMenuProps) {
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-12 left-2 w-80 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 shadow-2xl z-50 rounded-lg"
      >
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-3 py-2 text-sm font-bold rounded-t-lg">
          {profile.first_name+"OS Menu"}
        </div>

        {/* Profile Section */}
        <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 border-b border-gray-300">
          <div className="flex items-center space-x-3">
           <div
            className="w-12 h-12 border-2 border-gray-600 border-t-white border-l-white flex items-center justify-center flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
            style={{
              backgroundImage: `url('/profile.jpeg?height=128&width=128')`,
            }}
          >
              {/* <FaUser className="text-lg text-white" /> */}
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm text-gray-800">{profile.full_name}</div>
              <div className="text-xs text-gray-600">{profile.headline}</div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center space-x-2 text-xs text-gray-700">
              <FaMapMarkerAlt className="w-3" />
              <span>{profile.city + "," + profile.country}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-700">
              <FaEnvelope className="w-3" />
              <span>{profile.email}</span>
            </div>
          </div>

          <div className="flex space-x-2 mt-3">
            <button
              onClick={() => window.open(profile.linkedin_url, "_blank")}
              className="flex-1 px-2 py-1 bg-gradient-to-b from-blue-200 to-blue-400 border border-blue-500 border-t-blue-100 border-l-blue-100 hover:from-blue-300 hover:to-blue-500 transition-all duration-150 text-xs flex items-center justify-center space-x-1 rounded shadow-sm"
            >
              <FaLinkedin className="text-blue-700" />
              <span className="text-blue-900 font-semibold">LinkedIn</span>
            </button>
            <button
              onClick={() => window.open(profile.github_url, "_blank")}
              className="flex-1 px-2 py-1 bg-gradient-to-b from-gray-200 to-gray-400 border border-gray-500 border-t-gray-100 border-l-gray-100 hover:from-gray-300 hover:to-gray-500 transition-all duration-150 text-xs flex items-center justify-center space-x-1 rounded shadow-sm"
            >
              <FaGithub className="text-gray-800" />
              <span className="text-gray-900 font-semibold">GitHub</span>
            </button>
          </div>
        </div>

        <div className="py-2">
          <button
            onClick={onTerminalClick}
            className="w-full px-4 py-2 text-left hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:text-white flex items-center space-x-3 transition-all duration-150"
          >
            <FaTerminal className="text-sm" />
            <span className="text-sm font-semibold">cmd.exe</span>
          </button>
        </div>
      </motion.div>
    </>
  )
}
