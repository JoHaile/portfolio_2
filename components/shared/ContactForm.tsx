"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const inputClass = "h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
const labelClass = "text-xs font-medium text-muted-foreground"

function ContactForm() {
  return (
    <Card variant="default" className="p-8 sm:p-10">
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className={labelClass}>Name</label>
            <input id="name" type="text" placeholder="Your name" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" type="email" placeholder="you@example.com" className={inputClass} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className={labelClass}>Subject</label>
          <input id="subject" type="text" placeholder="What's this about?" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project, timeline, and goals..."
            className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 hover:border-foreground/15 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
