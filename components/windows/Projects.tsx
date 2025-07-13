"use client"

import { useState } from "react"
import { FaFolder, FaHtml5, FaJs, FaReact, FaGithub, FaExternalLinkAlt, FaTimes, FaMobile, FaLaptop, FaGamepad, FaMicrochip, FaServer, FaDrawPolygon, FaRobot } from "react-icons/fa"
import { profile, type Project } from "@/types"

const getFileIcon = (type: string) => {
  switch (type) {
    case "web":
      return FaReact
    case "mobile":
      return FaMobile
    case "desktop":
      return FaLaptop
    case "library":
        return FaFolder
    case "game":
        return FaGamepad
    case "embedded":
        return FaMicrochip
    case "server":
        return FaServer
    case "cad":
        return FaDrawPolygon
    case "ai":
        return FaRobot
    default:
      return FaFolder
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 p-3 rounded">
        <h2 className="text-lg font-bold">Projects Directory</h2>
        <p className="text-sm text-gray-700">Click to open project details</p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profile.accomplishment_projects.map((project) => {
          const IconComponent = getFileIcon(project.type)
          return (
            <button
              key={project.title}
              onClick={() => openProject(project)} // Single click now
              className="p-4 bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-300 border-t-gray-100 border-l-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-150 group rounded shadow-sm"
            >
              <div className="flex flex-col items-center space-y-2">
                <IconComponent className="text-3xl text-blue-600 group-hover:text-blue-800 transition-colors" />
                <span className="text-xs text-center font-semibold leading-tight text-gray-800">{project.title}</span>
                <span className="text-xs text-gray-500">.{project.type}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
          <div className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 border-t-gray-200 border-l-gray-200 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-3 py-2 flex items-center justify-between rounded-t-lg">
              <span className="font-bold text-sm">{selectedProject.title} - Properties</span>
              <button
                onClick={closeModal}
                className="w-6 h-6 bg-gradient-to-b from-red-400 to-red-600 border border-red-700 border-t-red-300 border-l-red-300 rounded flex items-center justify-center hover:from-red-500 hover:to-red-700 transition-all duration-150"
              >
                <FaTimes className="text-xs text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{selectedProject.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-blue-800 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 text-xs font-mono rounded shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-b from-gray-200 to-gray-400 border-2 border-gray-500 border-t-gray-100 border-l-gray-100 hover:from-gray-300 hover:to-gray-500 transition-all duration-150 rounded shadow-sm"
                  >
                    <FaGithub />
                    <span className="text-sm font-semibold">GitHub</span>
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
