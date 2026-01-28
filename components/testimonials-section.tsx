import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Yanna",
    initials: "YA",
    rating: 5,
    text: "Hancock and his group is the most underrated GEM in the ICT community. If you're wanting to see what REAL live trading looks like, and insight that is new and fresh (not parroted and recycled from other \"mentors\"), then Hancock's Mentorship is your spot! I've been in at least a dozen other ICT groups, but nothing compares.",
  },
  {
    name: "Peter Van Westerop",
    initials: "PW",
    rating: 5,
    text: "On my journey to learn how to trade the markets (5 years) I did come across some other mentors like marketspyclub and the souproom, but the approach of Hancock was so different that I decided to give it a shot and it's clear, practical and effective. His Mentorship Masterclass gives us students a structured and fast result with clear actionable content focusing on risk... And then there are the 1 ON 1 WOW this is what makes Hancock different from all the other so called mentors. It's designed to be straightforward and leaving all the nonsense out that some mentors tell you.",
  },
  {
    name: "Dawan Driver",
    initials: "DD",
    rating: 5,
    text: "The mentorship completely changed my approach to trading. Hancock breaks down complex ICT concepts into simple, actionable steps. The 1-on-1 sessions were invaluable for addressing my specific weaknesses.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
            What Students Say
          </h2>
          <p className="text-muted-foreground">
            Real feedback from traders in the mentorship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 min-w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground shrink-0">
                    {testimonial.initials}
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </span>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
