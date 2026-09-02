"use client"

import { useState, useActionState, useEffect } from "react"
import { addProject, updateProject, deleteProject, type ProjectState } from "@/app/dashboard/actions/projects"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { SelectWithOther, MultiSelectWithOther, FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectPresets {
  categories: string[]
  statuses: string[]
  techOptions: string[]
}

interface ProjectsFormProps {
  projects: Project[]
  presets: ProjectPresets
}

const initialAddState: ProjectState = {
  success: false,
  error: null,
  data: null,
}

function ProjectFormFields({
  defaultValues,
  presets,
  errors,
}: {
  defaultValues?: Project
  presets: ProjectPresets
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`title-${defaultValues?.title ?? "new"}`}>
            Project Title
            <span className="ml-2 text-xs text-muted-foreground">
              - Main heading on the project card
            </span>
          </Label>
          <Input id={`title-${defaultValues?.title ?? "new"}`} name="title" defaultValue={defaultValues?.title} />
          <FormError>{errors?.title}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`subtitle-${defaultValues?.title ?? "new"}`}>
            Subtitle
            <span className="ml-2 text-xs text-muted-foreground">
              - Short tagline below the title
            </span>
          </Label>
          <Input id={`subtitle-${defaultValues?.title ?? "new"}`} name="subtitle" defaultValue={defaultValues?.subtitle} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectWithOther
          name="category"
          label={
            <span>
              Category
              <span className="ml-2 text-xs text-muted-foreground">
                - Badge shown on the project card
              </span>
            </span>
          }
          options={presets.categories}
          defaultValue={defaultValues?.category}
          placeholder="Select a category"
          error={errors?.category}
        />
        <SelectWithOther
          name="status"
          label={
            <span>
              Status
              <span className="ml-2 text-xs text-muted-foreground">
                - Status badge on the card
              </span>
            </span>
          }
          options={presets.statuses}
          defaultValue={defaultValues?.status}
          placeholder="Select a status"
          error={errors?.status}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`description-${defaultValues?.title ?? "new"}`}>
          Description
          <span className="ml-2 text-xs text-muted-foreground">
            - Full description paragraph shown when the project card is expanded
          </span>
        </Label>
        <Textarea id={`description-${defaultValues?.title ?? "new"}`} name="description" defaultValue={defaultValues?.description} rows={3} />
        <FormError>{errors?.description}</FormError>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`highlights-${defaultValues?.title ?? "new"}`}>
          Highlights (one per line)
          <span className="ml-2 text-xs text-muted-foreground">
            - Bullet points shown as feature highlights on the project card
          </span>
        </Label>
        <Textarea
          id={`highlights-${defaultValues?.title ?? "new"}`}
          name="highlights"
          defaultValue={defaultValues?.highlights?.join("\n")}
          rows={3}
          placeholder={"Highlight 1\nHighlight 2"}
        />
        <FormError>{errors?.highlights}</FormError>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`liveUrl-${defaultValues?.title ?? "new"}`}>
            Live Demo URL
            <span className="ml-2 text-xs text-muted-foreground">
              - The URL opened when users click &quot;Live Demo&quot; button
            </span>
          </Label>
          <Input
            id={`liveUrl-${defaultValues?.title ?? "new"}`}
            name="liveUrl"
            type="url"
            defaultValue={defaultValues?.liveUrl}
            placeholder="https://your-app.vercel.app"
          />
          <FormError>{errors?.liveUrl}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`sourceUrl-${defaultValues?.title ?? "new"}`}>
            Source Code URL
            <span className="ml-2 text-xs text-muted-foreground">
              - The URL opened when users click &quot;Source Code&quot; button
            </span>
          </Label>
          <Input
            id={`sourceUrl-${defaultValues?.title ?? "new"}`}
            name="sourceUrl"
            type="url"
            defaultValue={defaultValues?.sourceUrl}
            placeholder="https://github.com/username/repo"
          />
          <FormError>{errors?.sourceUrl}</FormError>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`imageSrc-${defaultValues?.title ?? "new"}`}>
            Image URL
            <span className="ml-2 text-xs text-muted-foreground">
              - Thumbnail image displayed on the project card
            </span>
          </Label>
          <Input id={`imageSrc-${defaultValues?.title ?? "new"}`} name="imageSrc" type="url" defaultValue={defaultValues?.imageSrc} />
          <FormError>{errors?.imageSrc}</FormError>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`imageAlt-${defaultValues?.title ?? "new"}`}>
            Image Alt Text
            <span className="ml-2 text-xs text-muted-foreground">
              - Accessibility text for the project image
            </span>
          </Label>
          <Input id={`imageAlt-${defaultValues?.title ?? "new"}`} name="imageAlt" defaultValue={defaultValues?.imageAlt} />
          <FormError>{errors?.imageAlt}</FormError>
        </div>
      </div>

      <MultiSelectWithOther
        name="techStack"
        label="Tech Stack"
        options={presets.techOptions}
        defaultValue={defaultValues?.techStack}
        placeholder="Select technologies"
        error={errors?.techStack}
        hint="- Technology badges shown on the project card. Add custom technologies with &quot;+ Other&quot;."
      />
    </>
  )
}

function EditableProjectCard({ project, index, presets }: { project: Project; index: number; presets: ProjectPresets }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: ProjectState, formData: FormData) => updateProject(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Project updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this project?")) return
    const result = await deleteProject(index)
    if (result.success) {
      toast.success("Project deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>{project.title}</CardTitle>
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.status}</Badge>
            </div>
            {project.subtitle && (
              <CardDescription className="mt-1">{project.subtitle}</CardDescription>
            )}
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
            <ProjectFormFields defaultValues={project} presets={presets} errors={state.errors} />
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
            <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.liveUrl && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  Live: <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{project.liveUrl}</a>
                </span>
              )}
              {project.sourceUrl && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  Source: <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{project.sourceUrl}</a>
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function ProjectsForm({ projects, presets }: ProjectsFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addProject, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Project added successfully!")
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
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            Manage your project cards. Each project shows as a card on the portfolio homepage.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Project</CardTitle>
            <CardDescription>
              Fill in the details for a new project card.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <ProjectFormFields presets={presets} errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Project"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {projects.map((project, index) => (
        <EditableProjectCard key={index} project={project} index={index} presets={presets} />
      ))}
    </div>
  )
}
