"use client"

import Image from "next/image"

export function Header() {
  const scrollToForm = () => {
    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="https://t.me/+IdawY0-DdEg1MjNh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/hancock-logo.png"
            alt="Hancock"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </a>
        <button
          onClick={scrollToForm}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Apply Now
        </button>
      </div>
    </header>
  )
}
