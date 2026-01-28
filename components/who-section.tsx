import { Check, X } from "lucide-react"

export function WhoSection() {
  const forYou = [
    "Understand basic ICT but feel overwhelmed applying it",
    "Struggle with execution, timing, or over-analysis",
    "Want a simple, repeatable model—not more theory",
    "Will journal trades, review charts, and be coached",
    "Value clarity and accountability over shortcuts",
  ]

  const notForYou = [
    "Looking for signals or trade alerts",
    "Hunting for shortcuts to quick profits",
    "Not willing to do focused, consistent work",
    "Expect guarantees or overnight success",
  ]

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight text-center mb-12">
          Is This Right For You?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-medium text-primary mb-6">This is for you if...</h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-medium text-foreground mb-6">This is not for you if...</h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
