"use client"

import { profile } from "@/types"
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded">
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          <div
            className="w-32 h-32 border-2 border-gray-600 border-t-white border-l-white flex items-center justify-center flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
            style={{
              backgroundImage: `url('/profile.jpeg?height=128&width=128')`,
            }}
          >
            {/* Fallback icon if image doesn't load */}
            {/* <FaUser className="text-4xl text-white drop-shadow-lg opacity-50" /> */}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">{profile.full_name}</h1>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-600" />
                <span className="text-gray-700">{profile.city + ", " + profile.country}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-600" />
                <span className="text-gray-700">{profile.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-blue-800">System Information</h2>
        <div className="space-y-2 text-sm font-mono">
          <div className="text-gray-700">{"Role: " + profile.headline}</div>
          <div className="text-gray-700">Experience: 3+ years</div>
          <div className="text-gray-700">Specialization: React Javascript, Springboot Java, Python </div>
          <div className="text-gray-700">Status: Available for opportunities</div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-blue-800">Bio</h2>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700">{profile.summary}</div>
      </div>

      <div className="bg-white border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-blue-800">Connect</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => window.open(profile.linkedin_url, "_blank")}
            className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-blue-200 to-blue-400 border-2 border-blue-500 border-t-blue-100 border-l-blue-100 hover:from-blue-300 hover:to-blue-500 transition-all duration-150 rounded shadow-sm"
          >
            <FaLinkedin className="text-blue-700" />
            <span className="text-sm font-semibold text-blue-900">LinkedIn</span>
          </button>
          <button
            onClick={() => window.open(profile.github_url, "_blank")}
            className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-gray-200 to-gray-400 border-2 border-gray-500 border-t-gray-100 border-l-gray-100 hover:from-gray-300 hover:to-gray-500 transition-all duration-150 rounded shadow-sm"
          >
            <FaGithub className="text-gray-800" />
            <span className="text-sm font-semibold text-gray-900">GitHub</span>
          </button>
          <button
            onClick={() => (window.location.href = "mailto:" + profile.email)}
            className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-red-200 to-red-400 border-2 border-red-500 border-t-red-100 border-l-red-100 hover:from-red-300 hover:to-red-500 transition-all duration-150 rounded shadow-sm"
          >
            <FaEnvelope className="text-red-700" />
            <span className="text-sm font-semibold text-red-900">Email</span>
          </button>
        </div>
      </div>
    </div>
  )
}
