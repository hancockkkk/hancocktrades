export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Complete the application form below. Be honest and thorough.",
    },
    {
      number: "02",
      title: "Review",
      description: "If accepted, you'll receive an email to book a call.",
    },
    {
      number: "03",
      title: "Enroll",
      description: "If we agree it's a fit, enroll and start your mentorship.",
    },
  ]

  const includes = [
    "Weekly 1-on-1 calls",
    "Live chart review",
    "Personalized feedback",
    "Accountability check-ins",
    "Limited spots available",
  ]

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <span className="text-primary text-sm font-mono">{step.number}</span>
              <h3 className="text-xl font-medium text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-medium text-foreground text-center mb-6">Mentorship Includes</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {includes.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
