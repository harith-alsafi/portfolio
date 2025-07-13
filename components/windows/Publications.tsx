"use client"

import { FaFileAlt, FaDownload, FaExternalLinkAlt, FaCalendar } from "react-icons/fa"
import { getDateTimeString, profile, type Publication } from "@/types"


export default function Publications() {
  return (
    <div className="space-y-4">
      {/* Notepad Header */}
      <div className="bg-gray-300 border-2 border-gray-600 border-t-white border-l-white p-3">
        <div className="flex items-center space-x-2">
          <FaFileAlt className="text-blue-800" />
          <span className="font-bold">Publications - Notepad</span>
        </div>
        <div className="text-xs text-gray-600 mt-1">File Edit Format View Help</div>
      </div>

      {/* Publications List */}
      <div className="bg-white border-2 border-gray-600 border-t-white border-l-white p-4 font-mono text-sm">
        <div className="space-y-6">
          {profile.accomplishment_publications.map((pub, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-blue-800 flex-1">{pub.name}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-600 ml-4">
                  <span>{pub.publisher}</span>
                  <FaCalendar />
                  <span>{getDateTimeString(null, pub.published_on)}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 leading-relaxed">{pub.description}</p>

              <div className="flex flex-wrap gap-2">
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 px-2 py-1 bg-gray-300 border border-gray-600 hover:bg-gray-400 transition-colors text-xs"
                  >
                    <FaExternalLinkAlt />
                    <span>Read Online</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Notepad Footer */}
        <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-600">
          Total publications: {profile.accomplishment_publications.length}
        </div>
      </div>
    </div>
  )
}
