"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useWindows } from "@/contexts/WindowContext"
import AboutMe from "./windows/AboutMe"
import Experience from "./windows/Experience"
import Education from "./windows/Education"
import Projects from "./windows/GithubProjects"
import Publications from "./windows/Publications"
import Certificates from "./windows/Certificates"

const commands = {
  help: `Available commands:
┌─────────────────────────────────────────────┐
│ COMMAND      │ DESCRIPTION                  │
├─────────────────────────────────────────────┤
│ about        │ View personal information    │
│ experience   │ Show work experience         │
│ education    │ Display education background │
│ projects     │ Browse project portfolio     │
│ publications │ Read published articles      │
│ certificates │ View certifications         │
│ whoami       │ Display current user info    │
│ date         │ Show current date and time   │
│ clear        │ Clear terminal screen        │
│ exit         │ Close terminal window        │
└─────────────────────────────────────────────┘`,
  about: "about",
  experience: "experience",
  education: "education",
  projects: "projects",
  publications: "publications",
  certificates: "certificates",
  whoami: "john.developer@retroos ~ Full Stack Developer",
  date: new Date().toString(),
  clear: "clear",
  exit: "exit",
}

const windowComponents = {
  about: { component: AboutMe, title: "about.sys" },
  experience: { component: Experience, title: "experience.exe" },
  education: { component: Education, title: "school.ini" },
  projects: { component: Projects, title: "projects.bat" },
  publications: { component: Publications, title: "pub.txt" },
  certificates: { component: Certificates, title: "certificates.reg" },
}

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const { openWindow, minimizeWindow } = useWindows()

  useEffect(() => {
    // Initialize terminal with welcome message
    const initTerminal = () => {
      setHistory([
        "╔════════════════════════════════════════╗",
        "║          RetroOS Terminal v1.0         ║",
        "║                                        ║",
        "║  Welcome to the RetroOS command line   ║",
        "║  interface!                            ║",
        "║                                        ║",
        "║  Type 'help' to see available          ║",
        "║  commands.                             ║",
        "╚════════════════════════════════════════╝",
        "",
      ])
      setIsInitialized(true)
    }

    const timer = setTimeout(initTerminal, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()
    const newHistory = [...history, `user@retroos:~$ ${command}`]

    if (cmd === "clear") {
      setHistory([
        "╔════════════════════════════════════════╗",
        "║          RetroOS Terminal v1.0         ║",
        "║                                        ║",
        "║  Welcome to the RetroOS command line   ║",
        "║  interface!                            ║",
        "║                                        ║",
        "║  Type 'help' to see available          ║",
        "║  commands.                             ║",
        "╚════════════════════════════════════════╝",
        "",
      ])
      return
    }

    if (cmd === "exit") {
      minimizeWindow("terminal")
      return
    }

    if (cmd === "help") {
      newHistory.push("", commands.help, "")
    } else if (cmd === "whoami") {
      newHistory.push("", `💻 ${commands.whoami}`, "")
    } else if (cmd === "date") {
      newHistory.push("", `📅 ${new Date().toString()}`, "")
    } else if (cmd in windowComponents) {
      const windowData = windowComponents[cmd as keyof typeof windowComponents]
      openWindow({
        id: cmd,
        title: windowData.title,
        component: windowData.component,
        route: `/${cmd}`,
      })
      minimizeWindow("terminal")
      newHistory.push("", `🚀 Opening ${windowData.title}...`, "✅ Window launched successfully!", "")
    } else if (cmd === "") {
      newHistory.push("")
    } else {
      newHistory.push(
        "",
        `❌ Error: '${command}' is not recognized as a valid command.`,
        "💡 Tip: Type 'help' to see available commands.",
        "",
      )
    }

    setHistory(newHistory)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentInput)
      setCurrentInput("")
    }
  }

  if (!isInitialized) {
    return <div className="h-full bg-black"></div>
  }

  return (
    <div className="h-full bg-black text-green-400 font-mono overflow-hidden flex flex-col">
      {/* Terminal Header */}
      <div className="bg-green-400 text-black px-3 py-1 text-xs font-bold border-b-2 border-green-500 flex-shrink-0">
        RetroOS Terminal v1.0
      </div>

      {/* Terminal Content */}
      <div
        className="flex-1 p-3 md:p-4 overflow-y-auto cursor-text text-xs md:text-sm leading-relaxed"
        onClick={() => inputRef.current?.focus()}
        ref={terminalRef}
      >
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap break-all">
            {line}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-start mt-2">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-cyan-400">user@retroos</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
          </div>
          <div className="flex-1 min-w-0 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-green-400 w-full"
              autoFocus
              style={{ fontSize: "inherit" }}
            />
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-green-400 ml-1`}>█</span>
          </div>
        </div>
      </div>
    </div>
  )
}
