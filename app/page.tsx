import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FramingSection } from "@/components/framing-section"
import { WhoSection } from "@/components/who-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <FramingSection />
        <WhoSection />
        <CurriculumSection />
        <ProcessSection />
        <TestimonialsSection />
        <ApplicationForm />
        <Footer />
      </div>
    </main>
  )
}
