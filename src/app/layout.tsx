import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LAL STUDIO - Professional Photography & Videography",
  description:
    "Professional photography and videography services for weddings, events, portraits, and commercial projects. Capturing your perfect moments with creativity and expertise.",
  keywords:
    "photography, videography, wedding photography, event coverage, portrait photography, commercial photography, music videos, graphic design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
