"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <span className="text-sm tracking-widest text-muted-foreground uppercase mb-6">
        For Serious Beginner–Intermediate Traders
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground max-w-4xl leading-tight text-balance">
        Apply For 1-on-1 CRT Trading Mentorship
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
        Learn how to trade with structure, timing, and clarity using ICT principles simplified through CRT—without overcomplicating your charts or chasing endless strategies.
      </p>
      <p className="mt-4 text-sm text-muted-foreground/80">
        Built for process, execution, and accountability—not signals.
      </p>
      <button
        onClick={scrollToForm}
        className="mt-10 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
      >
        Apply Now
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  )
}
