"use client"

import { useState, useActionState, useEffect } from "react"
import { addExperience, updateExperience, deleteExperience, type ExperienceState } from "@/app/dashboard/actions/experience"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { ExperienceEntry } from "@/data/experience"

interface ExperienceFormProps {
  entries: ExperienceEntry[]
}

const initialAddState: ExperienceState = {
  success: false,
  error: null,
  data: null,
}

function ExperienceFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: ExperienceEntry
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`company-${defaultValues?.company ?? "new"}`}>
            Company Name
            <span className="ml-2 text-xs text-muted-foreground">
              - Displayed as the main heading on the experience card
            </span>
          </Label>
          <Input id={`company-${defaultValues?.company ?? "new"}`} name="company" defaultValue={defaultValues?.company} />
          <FormError>{errors?.company}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`role-${defaultValues?.company ?? "new"}`}>
            Job Title / Role
            <span className="ml-2 text-xs text-muted-foreground">
              - Shown below the company name
            </span>
          </Label>
          <Input id={`role-${defaultValues?.company ?? "new"}`} name="role" defaultValue={defaultValues?.role} />
          <FormError>{errors?.role}</FormError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`location-${defaultValues?.company ?? "new"}`}>
            Location
            <span className="ml-2 text-xs text-muted-foreground">
              - City/country shown on the experience card
            </span>
          </Label>
          <Input id={`location-${defaultValues?.company ?? "new"}`} name="location" defaultValue={defaultValues?.location} />
          <FormError>{errors?.location}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`period-${defaultValues?.company ?? "new"}`}>
            Time Period
            <span className="ml-2 text-xs text-muted-foreground">
              - Date range shown on the card (e.g., &quot;Jan 2024 - Present&quot;)
            </span>
          </Label>
          <Input id={`period-${defaultValues?.company ?? "new"}`} name="period" defaultValue={defaultValues?.period} />
          <FormError>{errors?.period}</FormError>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`highlights-${defaultValues?.company ?? "new"}`}>
          Highlights (one per line)
          <span className="ml-2 text-xs text-muted-foreground">
            - Key achievements shown as bullet points on the experience card
          </span>
        </Label>
        <Textarea
          id={`highlights-${defaultValues?.company ?? "new"}`}
          name="highlights"
          defaultValue={defaultValues?.highlights?.join("\n")}
          rows={4}
          placeholder={"Achievement 1\nAchievement 2\nAchievement 3"}
        />
        <FormError>{errors?.highlights}</FormError>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`tags-${defaultValues?.company ?? "new"}`}>
          Tags (comma-separated)
          <span className="ml-2 text-xs text-muted-foreground">
            - Technology badges shown on the experience card
          </span>
        </Label>
        <Input
          id={`tags-${defaultValues?.company ?? "new"}`}
          name="tags"
          defaultValue={defaultValues?.tags?.join(", ")}
          placeholder="Next.js, TypeScript, Prisma"
        />
      </div>
    </>
  )
}

function EditableExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: ExperienceState, formData: FormData) => updateExperience(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Experience updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this experience entry?")) return
    const result = await deleteExperience(index)
    if (result.success) {
      toast.success("Experience deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{entry.company}</CardTitle>
            <CardDescription>
              {entry.role} - {entry.location} - {entry.period}
            </CardDescription>
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
            <ExperienceFormFields defaultValues={entry} errors={state.errors} />
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
          <div className="space-y-3">
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {entry.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {entry.tags && (
              <div className="flex flex-wrap gap-1">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function ExperienceForm({ entries }: ExperienceFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addExperience, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Experience added successfully!")
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
          <h1 className="text-3xl font-bold">Experience</h1>
          <p className="text-muted-foreground">
            Manage your work experience. These appear as cards on the timeline section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Experience
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Experience</CardTitle>
            <CardDescription>Add a new work experience entry.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <ExperienceFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Experience"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {entries.map((entry, index) => (
        <EditableExperienceCard key={index} entry={entry} index={index} />
      ))}
    </div>
  )
}
