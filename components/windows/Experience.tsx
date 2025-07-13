"use client";

import { useState } from "react";
import { FaBriefcase, FaCalendar, FaCode, FaTrophy } from "react-icons/fa";
import { getDateTimeString, profile, type ExperienceType } from "@/types";
import React from "react";

export default function ExperienceComponent() {
  const [activeTab, setActiveTab] = useState<
    "summary" | "stack" | "achievements"
  >("summary");

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row border-b-2 border-gray-600">
        {[
          { key: "summary", label: "Summary", icon: FaBriefcase },
          { key: "stack", label: "Stack", icon: FaCode },
          { key: "achievements", label: "Achievements", icon: FaTrophy },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            className={`px-3 py-2 border-2 border-b-0 sm:border-b-2 flex items-center justify-center sm:justify-start space-x-2 text-xs sm:text-sm ${
              activeTab === key
                ? "bg-white border-gray-600 border-t-white border-l-white -mb-0.5 sm:mb-0"
                : "bg-gray-300 border-gray-600 border-t-gray-600 border-l-gray-600"
            }`}
          >
            <Icon className="text-sm" />
            <span className="font-bold">{label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {profile.experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Line */}
            {index < profile.experiences.length - 1 && (
              <div className="absolute left-3.5 sm:left-6 top-8 sm:top-12 w-0.5 h-full bg-gray-600"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-2 sm:left-4 top-4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 border-2 border-white rounded-full"></div>

            {/* Content */}
            <div className="ml-8 sm:ml-12 bg-white border-2 border-gray-600 border-t-white border-l-white p-3 sm:p-4">
              <div className="flex flex-col space-y-2 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-blue-800">
                  {exp.title}
                </h3>
                <h4 className="text-sm sm:text-md font-semibold">
                  {exp.company}
                </h4>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                  <FaCalendar />
                  <span>{getDateTimeString(exp.starts_at, exp.ends_at)}</span>
                </div>
              </div>

              {activeTab === "summary" && (
                <p className="text-xs sm:text-sm text-gray-700">
                  {exp.summary}
                </p>
              )}

              {activeTab === "stack" && (
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {exp.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-300 border border-gray-600 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {activeTab === "achievements" && (
                <ul className="space-y-1 text-xs sm:text-sm">
                  {exp.description.split("\n").map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2">
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
