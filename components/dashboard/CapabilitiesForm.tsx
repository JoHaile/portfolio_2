"use client"

import { useState, useActionState, useEffect } from "react"
import { addCapability, updateCapability, deleteCapability, type CapabilityState } from "@/app/dashboard/actions/capabilities"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { Capability } from "@/data/capabilities"

interface CapabilitiesFormProps {
  capabilities: Capability[]
}

const initialAddState: CapabilityState = {
  success: false,
  error: null,
  data: null,
}

function CapabilityFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: Capability
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={`title-${defaultValues?.title ?? "new"}`}>
          Capability Title
          <span className="ml-2 text-xs text-muted-foreground">
            - Heading shown on the capability card (e.g., &quot;Full-Stack Development&quot;)
          </span>
        </Label>
        <Input id={`title-${defaultValues?.title ?? "new"}`} name="title" defaultValue={defaultValues?.title} />
        <FormError>{errors?.title}</FormError>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`description-${defaultValues?.title ?? "new"}`}>
          Description
          <span className="ml-2 text-xs text-muted-foreground">
            - Brief explanation of what this capability includes, shown on the card
          </span>
        </Label>
        <Textarea id={`description-${defaultValues?.title ?? "new"}`} name="description" defaultValue={defaultValues?.description} rows={3} />
        <FormError>{errors?.description}</FormError>
      </div>
    </>
  )
}

function EditableCapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: CapabilityState, formData: FormData) => updateCapability(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Capability updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this capability?")) return
    const result = await deleteCapability(index)
    if (result.success) {
      toast.success("Capability deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{capability.title}</CardTitle>
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
            <CapabilityFormFields defaultValues={capability} errors={state.errors} />
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
          <p className="text-sm text-muted-foreground">{capability.description}</p>
        )}
      </CardContent>
    </Card>
  )
}

export function CapabilitiesForm({ capabilities }: CapabilitiesFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addCapability, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Capability added successfully!")
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
          <h1 className="text-3xl font-bold">Capabilities</h1>
          <p className="text-muted-foreground">
            Manage your core capabilities. These appear as cards in the capabilities section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Capability
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Capability</CardTitle>
            <CardDescription>Add a new capability card.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <CapabilityFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Capability"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {capabilities.map((cap, index) => (
        <EditableCapabilityCard key={index} capability={cap} index={index} />
      ))}
    </div>
  )
}
