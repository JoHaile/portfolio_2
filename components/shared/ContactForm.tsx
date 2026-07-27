"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function ContactForm() {
  return (
    <Card variant="cream" className="p-8 sm:p-10">
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-cream-foreground/60"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="h-11 rounded-xl border border-cream-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-cream-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium text-cream-foreground/60"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-xl border border-cream-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-cream-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="subject"
            className="text-xs font-medium text-cream-foreground/60"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What's this about?"
            className="h-11 rounded-xl border border-cream-foreground/10 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-cream-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs font-medium text-cream-foreground/60"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project, timeline, and goals..."
            className="resize-none rounded-xl border border-cream-foreground/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-cream-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <Button variant="default" size="lg" className="group mt-2 w-full">
          Send Message
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </form>
    </Card>
  )
}

export { ContactForm }
