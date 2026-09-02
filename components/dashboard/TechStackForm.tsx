"use client"

import { useState, useActionState, useEffect } from "react"
import {
  addTechStackCategory,
  updateTechStackCategory,
  deleteTechStackCategory,
  type TechStackState,
} from "@/app/dashboard/actions/techStack"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { StackCategory } from "@/data/techStack"

interface TechStackFormProps {
  categories: StackCategory[]
}

const initialAddState: TechStackState = {
  success: false,
  error: null,
  data: null,
}

function TechStackFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: StackCategory
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`name-${defaultValues?.name ?? "new"}`}>
            Category Name
            <span className="ml-2 text-xs text-muted-foreground">
              - Tab name in the tech stack section (e.g., &quot;Frontend&quot;, &quot;Backend&quot;)
            </span>
          </Label>
          <Input id={`name-${defaultValues?.name ?? "new"}`} name="name" defaultValue={defaultValues?.name} />
          <FormError>{errors?.name}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`label-${defaultValues?.name ?? "new"}`}>
            Category Label
            <span className="ml-2 text-xs text-muted-foreground">
              - Subtitle shown below the category name (e.g., &quot;Client-Side &amp; Architecture&quot;)
            </span>
          </Label>
          <Input id={`label-${defaultValues?.name ?? "new"}`} name="label" defaultValue={defaultValues?.label} />
          <FormError>{errors?.label}</FormError>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`items-${defaultValues?.name ?? "new"}`}>
          Technologies (comma-separated)
          <span className="ml-2 text-xs text-muted-foreground">
            - Individual technology badges shown in this category
          </span>
        </Label>
        <Input
          id={`items-${defaultValues?.name ?? "new"}`}
          name="items"
          defaultValue={defaultValues?.items?.join(", ")}
          placeholder="Next.js, React, TypeScript"
        />
        <FormError>{errors?.items}</FormError>
      </div>
    </>
  )
}

function EditableCategoryCard({ category, index }: { category: StackCategory; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: TechStackState, formData: FormData) => updateTechStackCategory(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Category updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this category?")) return
    const result = await deleteTechStackCategory(index)
    if (result.success) {
      toast.success("Category deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{category.name}</CardTitle>
            <CardDescription>{category.label}</CardDescription>
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
            <TechStackFormFields defaultValues={category} errors={state.errors} />
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
          <div className="flex flex-wrap gap-1">
            {category.items.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function TechStackForm({ categories }: TechStackFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addTechStackCategory, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Category added successfully!")
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
          <h1 className="text-3xl font-bold">Tech Stack</h1>
          <p className="text-muted-foreground">
            Manage your technology categories. Each category appears as a tab in the tech stack section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Category</CardTitle>
            <CardDescription>Add a new technology category.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <TechStackFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Category"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {categories.map((cat, index) => (
        <EditableCategoryCard key={index} category={cat} index={index} />
      ))}
    </div>
  )
}
