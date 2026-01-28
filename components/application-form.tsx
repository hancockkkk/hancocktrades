"use client"

import React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    timezone: "",
    age: "",
    tradingExperience: "",
    ictExperience: "",
    biggestIssue: "",
    pastStrategies: "",
    whyCRT: "",
    simplicityMeaning: "",
    journaling: "",
    hoursPerWeek: "",
    financiallyPrepared: "",
    readyToInvest: "",
    whyGoodCandidate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <section id="application" className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card border border-border rounded-lg p-12">
            <h2 className="text-2xl font-medium text-foreground mb-4">Application Received</h2>
            <p className="text-muted-foreground">
              {"If it's a fit, you'll receive an email to book a call."}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="application" className="py-20 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-6">
            Application
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This mentorship is intentionally selective and designed for traders prepared to take trading seriously.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border rounded-lg p-6 md:p-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Your full name"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="your@email.com"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="timezone" className="text-foreground">Time Zone *</Label>
              <Input
                id="timezone"
                required
                value={formData.timezone}
                onChange={(e) => updateField("timezone", e.target.value)}
                placeholder="e.g., EST, PST, GMT+1"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <Label htmlFor="age" className="text-foreground">Age *</Label>
              <Input
                id="age"
                type="number"
                required
                min="18"
                value={formData.age}
                onChange={(e) => updateField("age", e.target.value)}
                placeholder="Your age"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Trading Experience */}
          <div className="space-y-6">
            <div>
              <Label className="text-foreground mb-4 block">How long have you been actively trading? *</Label>
              <RadioGroup
                required
                value={formData.tradingExperience}
                onValueChange={(value) => updateField("tradingExperience", value)}
                className="space-y-3"
              >
                {["Less than 6 months", "6–12 months", "1–3 years", "3+ years"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`exp-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`exp-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-foreground mb-4 block">Which best describes your experience with ICT concepts? *</Label>
              <RadioGroup
                required
                value={formData.ictExperience}
                onValueChange={(value) => updateField("ictExperience", value)}
                className="space-y-3"
              >
                {[
                  "Brand new to ICT",
                  "Understand basics but struggle to execute",
                  "Actively trade but lack consistency",
                  "Consistently profitable",
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`ict-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`ict-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Detailed Questions */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="biggestIssue" className="text-foreground">What is your biggest issue in trading right now? *</Label>
              <Textarea
                id="biggestIssue"
                required
                value={formData.biggestIssue}
                onChange={(e) => updateField("biggestIssue", e.target.value)}
                placeholder="Be specific about what's holding you back"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="pastStrategies" className="text-foreground">What strategies/models have you tried in the past? *</Label>
              <Textarea
                id="pastStrategies"
                required
                value={formData.pastStrategies}
                onChange={(e) => updateField("pastStrategies", e.target.value)}
                placeholder="List any strategies, indicators, or systems you've used"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="whyCRT" className="text-foreground">What specifically attracted you to CRT / my content? *</Label>
              <Textarea
                id="whyCRT"
                required
                value={formData.whyCRT}
                onChange={(e) => updateField("whyCRT", e.target.value)}
                placeholder="What resonated with you?"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
              />
            </div>

            <div>
              <Label htmlFor="simplicityMeaning" className="text-foreground">{"What does \"simplicity\" in trading mean to you? *"}</Label>
              <Textarea
                id="simplicityMeaning"
                required
                value={formData.simplicityMeaning}
                onChange={(e) => updateField("simplicityMeaning", e.target.value)}
                placeholder="Describe your perspective on simplicity"
                className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
              />
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Commitment Questions */}
          <div className="space-y-6">
            <div>
              <Label className="text-foreground mb-4 block">Are you currently journaling your trades consistently? *</Label>
              <RadioGroup
                required
                value={formData.journaling}
                onValueChange={(value) => updateField("journaling", value)}
                className="space-y-3"
              >
                {[
                  "Yes",
                  "No, but required",
                  "No, and not interested",
                ].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`journal-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`journal-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-foreground mb-4 block">Hours per week you can dedicate to trading + review? *</Label>
              <RadioGroup
                required
                value={formData.hoursPerWeek}
                onValueChange={(value) => updateField("hoursPerWeek", value)}
                className="space-y-3"
              >
                {["Less than 5 hours", "5–10 hours", "10–20 hours", "20+ hours"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`hours-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`hours-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-foreground mb-4 block">Are you financially prepared to invest in professional coaching if accepted? *</Label>
              <RadioGroup
                required
                value={formData.financiallyPrepared}
                onValueChange={(value) => updateField("financiallyPrepared", value)}
                className="space-y-3"
              >
                {["Yes", "No"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`financial-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`financial-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-foreground mb-4 block">If accepted, are you prepared to invest $5,000 in 1-on-1 CRT mentorship focused on execution, structure, and accountability? *</Label>
              <RadioGroup
                required
                value={formData.readyToInvest}
                onValueChange={(value) => updateField("readyToInvest", value)}
                className="space-y-3"
              >
                {["Yes", "No"].map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`invest-${option}`} className="border-border text-primary" />
                    <Label htmlFor={`invest-${option}`} className="text-muted-foreground font-normal cursor-pointer">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="border-t border-border" />

          <div>
            <Label htmlFor="whyGoodCandidate" className="text-foreground">Why are you a good candidate for 1-on-1 mentorship right now? *</Label>
            <Textarea
              id="whyGoodCandidate"
              required
              value={formData.whyGoodCandidate}
              onChange={(e) => updateField("whyGoodCandidate", e.target.value)}
              placeholder="What makes this the right time for you?"
              className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground min-h-[120px]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  )
}
