"use client"

import { FaTrophy, FaCalendar, FaMedal, FaStar } from "react-icons/fa"
import { getDateTimeString, profile } from "@/types"

export default function Awards() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-yellow-400 border-t-yellow-200 border-l-yellow-200 p-4 rounded">
        <div className="flex items-center space-x-3">
          <FaTrophy className="text-2xl text-yellow-600" />
          <div>
            <h2 className="text-lg font-bold text-yellow-800">Awards & Honors</h2>
            <p className="text-sm text-yellow-700">Professional achievements and recognitions</p>
          </div>
        </div>
      </div>

      {/* Awards List */}
      <div className="space-y-4">
        {profile.accomplishment_honors_awards.map((award, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-white to-gray-50 border-2 border-gray-300 border-t-gray-100 border-l-gray-100 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Award Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-600 border-2 border-yellow-700 rounded-full flex items-center justify-center">
                    <FaMedal className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{award.title}</h3>
                    <p className="text-yellow-100 text-sm">{award.issuer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-yellow-100">
                    <FaCalendar className="text-xs" />
                    <span className="text-sm">{getDateTimeString(null, award.issued_on)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Award Content */}
            <div className="p-4">
              <div className="flex items-start space-x-3">
                <FaStar className="text-yellow-500 text-lg mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed text-sm">{award.description}</p>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-4 flex justify-end">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <FaTrophy className="text-xs" />
                  <span>Achievement Unlocked</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {profile.accomplishment_honors_awards.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FaTrophy className="text-4xl mx-auto mb-4 text-gray-300" />
          <p>No awards found in the profile data.</p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 mb-1">{profile.accomplishment_honors_awards.length}</div>
          <div className="text-sm text-gray-600">Total Awards Received</div>
        </div>
      </div>
    </div>
  )
}
