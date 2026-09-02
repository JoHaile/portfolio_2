"use client"

import { useState, useActionState, useEffect } from "react"
import {
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  type TestimonialState,
} from "@/app/dashboard/actions/testimonials"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil, Quote } from "lucide-react"
import type { Testimonial } from "@/data/testimonials"

interface TestimonialsFormProps {
  testimonials: Testimonial[]
}

const initialAddState: TestimonialState = {
  success: false,
  error: null,
  data: null,
}

function TestimonialFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: Testimonial
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={`quote-${defaultValues?.authorName ?? "new"}`}>
          Quote
          <span className="ml-2 text-xs text-muted-foreground">
            - The testimonial text shown on the card
          </span>
        </Label>
        <Textarea id={`quote-${defaultValues?.authorName ?? "new"}`} name="quote" defaultValue={defaultValues?.quote} rows={3} />
        <FormError>{errors?.quote}</FormError>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor={`authorName-${defaultValues?.authorName ?? "new"}`}>
            Author Name
            <span className="ml-2 text-xs text-muted-foreground">
              - Person&apos;s name shown below the quote
            </span>
          </Label>
          <Input id={`authorName-${defaultValues?.authorName ?? "new"}`} name="authorName" defaultValue={defaultValues?.authorName} />
          <FormError>{errors?.authorName}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`authorRole-${defaultValues?.authorName ?? "new"}`}>
            Author Role
            <span className="ml-2 text-xs text-muted-foreground">
              - Job title shown below the name
            </span>
          </Label>
          <Input id={`authorRole-${defaultValues?.authorName ?? "new"}`} name="authorRole" defaultValue={defaultValues?.authorRole} />
          <FormError>{errors?.authorRole}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`authorCompany-${defaultValues?.authorName ?? "new"}`}>
            Author Company
            <span className="ml-2 text-xs text-muted-foreground">
              - Company name shown on the card
            </span>
          </Label>
          <Input id={`authorCompany-${defaultValues?.authorName ?? "new"}`} name="authorCompany" defaultValue={defaultValues?.authorCompany} />
          <FormError>{errors?.authorCompany}</FormError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`avatarSrc-${defaultValues?.authorName ?? "new"}`}>
            Avatar Image URL
            <span className="ml-2 text-xs text-muted-foreground">
              - Profile picture shown on the testimonial card
            </span>
          </Label>
          <Input id={`avatarSrc-${defaultValues?.authorName ?? "new"}`} name="avatarSrc" type="url" defaultValue={defaultValues?.avatarSrc} />
          <FormError>{errors?.avatarSrc}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`avatarAlt-${defaultValues?.authorName ?? "new"}`}>
            Avatar Alt Text
            <span className="ml-2 text-xs text-muted-foreground">
              - Accessibility text for the avatar image
            </span>
          </Label>
          <Input id={`avatarAlt-${defaultValues?.authorName ?? "new"}`} name="avatarAlt" defaultValue={defaultValues?.avatarAlt} />
          <FormError>{errors?.avatarAlt}</FormError>
        </div>
      </div>
    </>
  )
}

function EditableTestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: TestimonialState, formData: FormData) => updateTestimonial(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Testimonial updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this testimonial?")) return
    const result = await deleteTestimonial(index)
    if (result.success) {
      toast.success("Testimonial deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Quote className="h-5 w-5 text-muted-foreground mt-1" />
            <div>
              <CardTitle className="text-base">{testimonial.authorName}</CardTitle>
              <CardDescription>
                {testimonial.authorRole} at {testimonial.authorCompany}
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(!isEditing)}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDelete}>
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <form action={formAction} className="space-y-4">
            <TestimonialFormFields defaultValues={testimonial} errors={state.errors} />
            <div className="flex gap-2">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export function TestimonialsForm({ testimonials }: TestimonialsFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addTestimonial, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Testimonial added successfully!")
      setShowAddForm(false)
    }
    if (addState.error) {
      toast.error(addState.error)
    }
  }, [addState.success, addState.error])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage client testimonials. These appear as cards in the testimonials section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Testimonial</CardTitle>
            <CardDescription>Add a new client testimonial.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <TestimonialFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Testimonial"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {testimonials.map((testimonial, index) => (
        <EditableTestimonialCard key={index} testimonial={testimonial} index={index} />
      ))}
    </div>
  )
}
