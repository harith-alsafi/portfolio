"use client"

import { useState } from "react"
import { FaCertificate, FaCalendar, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import { getDateTimeString, profile, type Certificate } from "@/types"

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const openCertificate = (cert: Certificate) => {
    setSelectedCertificate(cert)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-300 border-2 border-gray-600 border-t-white border-l-white p-3">
        <h2 className="text-lg font-bold flex items-center space-x-2">
          <FaCertificate className="text-yellow-600" />
          <span>Professional Certificates</span>
        </h2>
        <p className="text-sm text-gray-700">Click on any certificate to view details</p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.certifications.map((cert, index) => (
          <button
            key={index}
            onClick={() => openCertificate(cert)}
            className="p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 border-4 border-yellow-600 hover:from-yellow-200 hover:to-yellow-300 transition-colors group relative"
            style={{
              borderStyle: "solid",
              borderImage: "linear-gradient(45deg, #d4af37, #ffd700, #d4af37) 1",
            }}
          >
            <div className="text-center space-y-2">
              <FaCertificate className="text-3xl text-yellow-700 mx-auto group-hover:text-yellow-800" />
              <h3 className="font-bold text-sm text-gray-800 leading-tight">{cert.name}</h3>
              <p className="text-xs text-gray-600">{cert.authority}</p>
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                <FaCalendar />
                <span>{getDateTimeString(cert.starts_at, cert.ends_at)}</span>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-600"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-600"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-600"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-600"></div>
          </button>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
          <div className="bg-gray-300 border-2 border-gray-600 border-t-white border-l-white w-full max-w-lg">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-2 flex items-center justify-between">
              <span className="font-bold text-sm">Certificate Details</span>
              <button
                onClick={closeModal}
                className="w-6 h-6 bg-gray-300 border border-gray-600 border-t-white border-l-white flex items-center justify-center hover:bg-red-400 transition-colors"
              >
                <FaTimes className="text-xs text-gray-800" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedCertificate.name}</h3>
                <p className="text-gray-600 mb-2">Issued by {selectedCertificate.authority}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <FaCalendar />
                  <span>Earned on {getDateTimeString(selectedCertificate.starts_at, selectedCertificate.ends_at)}</span>
                </div>
              </div>

              {selectedCertificate.url && (
                <div className="text-center">
                  <a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-400 border-2 border-gray-600 border-t-white border-l-white hover:bg-gray-500 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">View Credential</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
