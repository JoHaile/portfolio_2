"use client"

import { useState, useActionState, useEffect } from "react"
import { addEducation, updateEducation, deleteEducation, type EducationState } from "@/app/dashboard/actions/education"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { EducationEntry } from "@/data/education"

interface EducationFormProps {
  entries: EducationEntry[]
}

const initialAddState: EducationState = {
  success: false,
  error: null,
  data: null,
}

function EducationFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: EducationEntry
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`degree-${defaultValues?.degree ?? "new"}`}>
            Degree / Program
            <span className="ml-2 text-xs text-muted-foreground">
              - Main title shown on the education card
            </span>
          </Label>
          <Input id={`degree-${defaultValues?.degree ?? "new"}`} name="degree" defaultValue={defaultValues?.degree} />
          <FormError>{errors?.degree}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`institution-${defaultValues?.degree ?? "new"}`}>
            Institution
            <span className="ml-2 text-xs text-muted-foreground">
              - School/company name shown below the degree
            </span>
          </Label>
          <Input id={`institution-${defaultValues?.degree ?? "new"}`} name="institution" defaultValue={defaultValues?.institution} />
          <FormError>{errors?.institution}</FormError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`location-${defaultValues?.degree ?? "new"}`}>
            Location
            <span className="ml-2 text-xs text-muted-foreground">
              - City/country or &quot;Online&quot;, &quot;Professional Training&quot;
            </span>
          </Label>
          <Input id={`location-${defaultValues?.degree ?? "new"}`} name="location" defaultValue={defaultValues?.location} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`year-${defaultValues?.degree ?? "new"}`}>
            Year / Period
            <span className="ml-2 text-xs text-muted-foreground">
              - Date range shown on the card (e.g., &quot;2022 - 2026&quot;)
            </span>
          </Label>
          <Input id={`year-${defaultValues?.degree ?? "new"}`} name="year" defaultValue={defaultValues?.year} />
          <FormError>{errors?.year}</FormError>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`description-${defaultValues?.degree ?? "new"}`}>
          Description
          <span className="ml-2 text-xs text-muted-foreground">
            - Summary of what you studied or learned
          </span>
        </Label>
        <Textarea id={`description-${defaultValues?.degree ?? "new"}`} name="description" defaultValue={defaultValues?.description} rows={3} />
        <FormError>{errors?.description}</FormError>
      </div>
    </>
  )
}

function EditableEducationCard({ entry, index }: { entry: EducationEntry; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: EducationState, formData: FormData) => updateEducation(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Education updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this education entry?")) return
    const result = await deleteEducation(index)
    if (result.success) {
      toast.success("Education deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{entry.degree}</CardTitle>
            <CardDescription>
              {entry.institution} {entry.location ? `- ${entry.location}` : ""} - {entry.year}
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
            <EducationFormFields defaultValues={entry} errors={state.errors} />
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
          <p className="text-sm text-muted-foreground">{entry.description}</p>
        )}
      </CardContent>
    </Card>
  )
}

export function EducationForm({ entries }: EducationFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addEducation, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Education added successfully!")
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
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text-muted-foreground">
            Manage your education entries. These appear as cards in the education section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Education
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Education</CardTitle>
            <CardDescription>Add a new education entry.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <EducationFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Education"}
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
        <EditableEducationCard key={index} entry={entry} index={index} />
      ))}
    </div>
  )
}
