"use client";

import { useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaGraduationCap,
  FaCalendar,
  FaStar,
} from "react-icons/fa";
import { getDateTimeString, profile, type EducationType } from "@/types";
import React from "react";

export default function EducationComponent() {
  const [expandedFolders, setExpandedFolders] = useState<Set<number>>(
    new Set([0, 1, 2])
  );

  const toggleFolder = (index: number) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-300 border-2 border-gray-600 border-t-white border-l-white p-3">
        <h2 className="text-lg font-bold flex items-center space-x-2">
          <FaGraduationCap className="text-blue-800" />
          <span>Education Directory</span>
        </h2>
      </div>

      <div className="space-y-2">
        {profile.education.map((edu, index) => (
          <div key={index} className="bg-white border border-gray-400">
            {/* Folder Header */}
            <button
              onClick={() => toggleFolder(index)}
              className="w-full p-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors"
            >
              {expandedFolders.has(index) ? (
                <FaFolderOpen className="text-yellow-600 text-lg" />
              ) : (
                <FaFolder className="text-yellow-600 text-lg" />
              )}
              <div className="flex-1 text-left">
                <div className="font-bold text-sm">{edu.school}</div>
                <div className="text-xs text-gray-600">{edu.degree_name}</div>
              </div>
              <div className="text-xs text-gray-500">
                {getDateTimeString(edu.starts_at, edu.ends_at)}
              </div>
            </button>

            {/* Folder Content */}
            {expandedFolders.has(index) && (
              <div className="px-6 pb-4 border-t border-gray-300 bg-gray-50">
                <div className="space-y-3 pt-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-blue-800 mb-1">
                        Institution
                      </div>
                      <div>{edu.school}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800 mb-1">
                        Duration
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaCalendar className="text-gray-600" />
                        <span>
                          {getDateTimeString(edu.starts_at, edu.ends_at)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-800 mb-1">
                        Degree
                      </div>
                      <div>{edu.degree_name}</div>
                    </div>
                    {edu.grade && (
                      <div>
                        <div className="font-semibold text-blue-800 mb-1">
                          GPA
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaStar className="text-yellow-500" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {edu.description && (
                    <div>
                      <div className="font-semibold text-blue-800 mb-2">
                        Description
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {edu.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
