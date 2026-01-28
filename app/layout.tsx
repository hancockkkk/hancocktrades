import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hancock's 1-on-1 CRT Trading Mentorship",
  description: "Apply for Hancock's exclusive 1-on-1 CRT Trading Mentorship. Learn to trade with structure, timing, and clarity using ICT principles simplified through CRT.",
  generator: 'v0.app',
  icons: {
    icon: '/hancock-logo.png',
    apple: '/hancock-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
