"use client"

import { FaHeart, FaCalendar, FaHandsHelping, FaUsers, FaClock } from "react-icons/fa"
import { getDateTimeString, profile } from "@/types"

export default function Volunteering() {
  const getCauseIcon = (cause: string) => {
    switch (cause.toLowerCase()) {
      case "social services":
        return FaUsers
      case "science and technology":
        return FaClock
      default:
        return FaHandsHelping
    }
  }

  const getCauseColor = (cause: string) => {
    switch (cause.toLowerCase()) {
      case "social services":
        return "from-blue-400 to-blue-500"
      case "science and technology":
        return "from-green-400 to-green-500"
      default:
        return "from-purple-400 to-purple-500"
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-b from-red-100 to-red-200 border-2 border-red-400 border-t-red-200 border-l-red-200 p-4 rounded">
        <div className="flex items-center space-x-3">
          <FaHeart className="text-2xl text-red-600" />
          <div>
            <h2 className="text-lg font-bold text-red-800">Volunteer Work</h2>
            <p className="text-sm text-red-700">Community service and volunteer contributions</p>
          </div>
        </div>
      </div>

      {/* Volunteer Work List */}
      <div className="space-y-4">
        {profile.volunteer_work.map((work, index) => {
          const CauseIcon = getCauseIcon(work.cause)
          const causeColorClass = getCauseColor(work.cause)

          return (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-50 border-2 border-gray-300 border-t-gray-100 border-l-gray-100 rounded-lg shadow-sm overflow-hidden"
            >
              {/* Volunteer Header */}
              <div className={`bg-gradient-to-r ${causeColorClass} text-white px-4 py-3`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 border-2 border-white border-opacity-30 rounded-full flex items-center justify-center">
                      <CauseIcon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{work.title}</h3>
                      <p className="text-white text-opacity-90 text-sm">{work.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-white text-opacity-90">
                      <FaCalendar className="text-xs" />
                      <span className="text-sm">{getDateTimeString(work.starts_at, work.ends_at)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Volunteer Content */}
              <div className="p-4">
                <div className="mb-3">
                  <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    <FaHandsHelping className="text-xs" />
                    <span>{work.cause}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaHeart className="text-red-500 text-lg mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-sm">{work.description}</p>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mt-4 flex justify-end">
                  <div
                    className={`bg-gradient-to-r ${causeColorClass} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1`}
                  >
                    <FaHeart className="text-xs" />
                    <span>Community Impact</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {profile.volunteer_work.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <FaHeart className="text-4xl mx-auto mb-4 text-gray-300" />
          <p>No volunteer work found in the profile data.</p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-4 rounded">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-gray-800 mb-1">{profile.volunteer_work.length}</div>
            <div className="text-xs text-gray-600">Volunteer Roles</div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-800 mb-1">
              {new Set(profile.volunteer_work.map((w) => w.cause)).size}
            </div>
            <div className="text-xs text-gray-600">Causes Supported</div>
          </div>
        </div>
      </div>
    </div>
  )
}
