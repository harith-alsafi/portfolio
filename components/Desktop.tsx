"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaFolder,
  FaFileAlt,
  FaCertificate,
  FaGithub,
  FaTrophy,
  FaHeart,
} from "react-icons/fa"
import { useWindows } from "@/contexts/WindowContext"
import type { DesktopIcon } from "@/types"
import AboutMe from "./windows/AboutMe"
import Experience from "./windows/Experience"
import Education from "./windows/Education"
import Publications from "./windows/Publications"
import Certificates from "./windows/Certificates"
import GithubProjects from "./windows/GithubProjects"
import Awards from "@/components/windows/Awards"
import Volunteering from "./windows/Volunteering"
import Projects from "@/components/windows/Projects"

const desktopIcons: DesktopIcon[] = [
  {
    id: "about",
    label: "about.sys",
    icon: FaUser,
    route: "/about",
    position: { x: 20, y: 30 },
  },
  {
    id: "experience",
    label: "experience.exe",
    icon: FaBriefcase,
    route: "/experience",
    position: { x: 20, y: 160 },
  },
  {
    id: "education",
    label: "school.ini",
    icon: FaGraduationCap,
    route: "/education",
    position: { x: 20, y: 290 },
  },
  {
    id: "github",
    label: "github.bat",
    icon: FaGithub,
    route: "/github",
    position: { x: 180, y: 30 },
  },
  {
    id: "publications",
    label: "pub.txt",
    icon: FaFileAlt,
    route: "/publications",
    position: { x: 180, y: 160 },
  },
  {
    id: "certificates",
    label: "certificates.reg",
    icon: FaCertificate,
    route: "/certificates",
    position: { x: 180, y: 290 },
  },
  {
    id: "project",
    label: "project.bat",
    icon: FaFolder,
    route: "/project",
    position: { x: 340, y: 30 },
  },
  {
    id: "awards",
    label: "awards.dll",
    icon: FaTrophy,
    route: "/awards",
    position: { x: 340, y: 160 },
  },
  {
    id: "volunteering",
    label: "volunteer.cmd",
    icon: FaHeart,
    route: "/volunteering",
    position: { x: 340, y: 290 },
  },
]

const windowComponents = {
  about: AboutMe,
  experience: Experience,
  education: Education,
  github: GithubProjects,
  publications: Publications,
  certificates: Certificates,
  project: Projects,
  awards: Awards,
  volunteering: Volunteering,
}

export default function Desktop() {
  const { openWindow } = useWindows()
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Preload the image
  useEffect(() => {
    const img = new window.Image()
    img.src = '/background.jpg'
    img.onload = () => setImageLoaded(true)
  }, [])

  const handleIconClick = (icon: DesktopIcon) => {
    const WindowComponent = windowComponents[icon.id as keyof typeof windowComponents]
    openWindow({
      id: icon.id,
      title: icon.label,
      component: WindowComponent,
      route: icon.route,
    })
  }

  const getMobilePosition = (index: number) => {
    const iconsPerRow = 2
    const iconWidth = 160 // w-40 = 160px
    const iconSpacing = 20
    const startX = 20
    const startY = 30
    const rowHeight = 130

    const row = Math.floor(index / iconsPerRow)
    const col = index % iconsPerRow

    return {
      x: startX + col * (iconWidth + iconSpacing),
      y: startY + row * rowHeight,
    }
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onClick={() => setSelectedIcon(null)}
    >
      {/* Fallback gradient background that shows immediately */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600" />
      
      {/* Optimized background image using Next.js Image component */}
      <Image
        src="/background.jpg"
        alt="Desktop background"
        fill
        className={`object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority
        quality={85}
        sizes="100vw"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Overlay for better icon visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-blue-600/30 z-10"></div>

      {desktopIcons.map((icon, index) => {
        const IconComponent = icon.icon
        const position = isMobile ? getMobilePosition(index) : icon.position

        return (
          <motion.div
            key={icon.id}
            className="absolute cursor-pointer select-none group z-20"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIcon(icon.id)
              handleIconClick(icon)
            }}
            onDoubleClick={() => handleIconClick(icon)}
          >
            <div className="flex flex-col items-center p-2 w-40">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-gray-100 to-gray-300 border-2 border-gray-400 border-t-white border-l-white flex items-center justify-center mb-2 rounded shadow-lg">
                <IconComponent className="text-lg md:text-xl text-gray-700" />
              </div>
              <div
                className={`w-full text-center px-2 py-1 rounded ${
                  selectedIcon === icon.id ? "bg-blue-800 bg-opacity-60" : "bg-black bg-opacity-30"
                }`}
              >
                <span className="text-xs md:text-sm text-white font-bold leading-tight drop-shadow-lg block">
                  {icon.label}
                </span>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}