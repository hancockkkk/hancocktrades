export function CurriculumSection() {
  const topics = [
    "CRT foundations + candle-range logic",
    "Time-based execution (specific candles/times)",
    "Expansion vs failure (turtle soup logic)",
    "HTF → LTF alignment (compression)",
    "Backtesting process and methodology",
    "Trade review + execution refinement",
    "Confidence via structure, not prediction",
  ]

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight text-center mb-12">
          What We Work On
        </h2>
        <ul className="space-y-4 mb-8">
          {topics.map((topic, i) => (
            <li key={i} className="flex items-center gap-4 text-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        <p className="text-center text-muted-foreground text-sm border-t border-border pt-8">
          No indicators. No randomness. No opinion trading.
        </p>
      </div>
    </section>
  )
}
