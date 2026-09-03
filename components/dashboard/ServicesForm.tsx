"use client"

import { useState, useActionState, useEffect } from "react"
import { addService, updateService, deleteService, type ServiceState } from "@/app/dashboard/actions/services"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { SelectWithOther, FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import { Plus, Trash2, Pencil } from "lucide-react"
import type { Service } from "@/data/services"

interface ServicesFormProps {
  services: Service[]
}

const initialAddState: ServiceState = {
  success: false,
  error: null,
  data: null,
}

const ICON_OPTIONS = [
  "Code2", "Server", "ShieldCheck", "Brain", "Database", "Users",
  "Globe", "Smartphone", "Monitor", "Cloud", "Lock", "Key",
  "Cpu", "Network", "Workflow", "GitBranch",
]

function ServiceFormFields({
  defaultValues,
  errors,
}: {
  defaultValues?: Service
  errors?: Record<string, string>
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`title-${defaultValues?.title ?? "new"}`}>
            Service Title
            <span className="ml-2 text-xs text-muted-foreground">
              - Heading shown on the service card (e.g., &quot;Full-Stack Development&quot;)
            </span>
          </Label>
          <Input id={`title-${defaultValues?.title ?? "new"}`} name="title" defaultValue={defaultValues?.title} />
          <FormError>{errors?.title}</FormError>
        </div>
        <div className="space-y-2">
          <SelectWithOther
            name="icon"
            label="Icon (Lucide name)"
            options={ICON_OPTIONS}
            defaultValue={defaultValues?.icon}
            placeholder="Select an icon"
            error={errors?.icon}
            hint={`- Icon displayed on the service card. Options: ${ICON_OPTIONS.join(", ")}`}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`description-${defaultValues?.title ?? "new"}`}>
          Description
          <span className="ml-2 text-xs text-muted-foreground">
            - Brief explanation of the service, shown on the card
          </span>
        </Label>
        <Textarea id={`description-${defaultValues?.title ?? "new"}`} name="description" defaultValue={defaultValues?.description} rows={3} />
        <FormError>{errors?.description}</FormError>
      </div>
    </>
  )
}

function EditableServiceCard({ service, index }: { service: Service; index: number }) {
  const [isEditing, setIsEditing] = useState(false)
  const [state, formAction, isPending] = useActionState(
    (prevState: ServiceState, formData: FormData) => updateService(index, prevState, formData),
    initialAddState
  )

  useEffect(() => {
    if (state.success) {
      toast.success("Service updated successfully!")
      setIsEditing(false)
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  async function handleDelete() {
    if (!confirm("Delete this service?")) return
    const result = await deleteService(index)
    if (result.success) {
      toast.success("Service deleted!")
    } else {
      toast.error(result.error || "Failed to delete")
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>
              <Badge variant="outline" className="mt-1">{service.icon}</Badge>
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
            <ServiceFormFields defaultValues={service} errors={state.errors} />
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
          <p className="text-sm text-muted-foreground">{service.description}</p>
        )}
      </CardContent>
    </Card>
  )
}

export function ServicesForm({ services }: ServicesFormProps) {
  const [showAddForm, setShowAddForm] = useState(false)
  const [addState, addFormAction, isAddPending] = useActionState(addService, initialAddState)

  useEffect(() => {
    if (addState.success) {
      toast.success("Service added successfully!")
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
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted-foreground">
            Manage your services. These appear as cards in the services section.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {showAddForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>New Service</CardTitle>
            <CardDescription>Add a new service card.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addFormAction} className="space-y-4">
              <ServiceFormFields errors={addState.errors} />
              <div className="flex gap-2">
                <Button type="submit" disabled={isAddPending}>
                  {isAddPending ? "Adding..." : "Add Service"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {services.map((service, index) => (
        <EditableServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  )
}
