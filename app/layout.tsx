import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Share_Tech_Mono } from "next/font/google"
import "./globals.css"

// Configure the fonts
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '600', '700']
})

const sharetech = Share_Tech_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "HarithOS Portfolio - Harith Al-Safi",
  description: "A retro Windows 95-inspired developer portfolio showcasing my professional background",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${sharetech.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}