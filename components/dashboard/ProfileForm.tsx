"use client"

import { useActionState, useEffect } from "react"
import { updateProfile, type ProfileState } from "@/app/dashboard/actions/profile"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import type { ProfileData } from "@/data/profile"

interface ProfileFormProps {
  profile: ProfileData
}

const initialState: ProfileState = {
  success: false,
  error: null,
  data: null,
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const [state, formAction, isPending] = useActionState(updateProfile, initialState)

  useEffect(() => {
    if (state.success) {
      toast.success("Profile updated successfully!")
    }
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.success, state.error])

  const errors = state.errors ?? {}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          This section controls the hero section, your name, role, and summary that appear at the top of the portfolio homepage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="initials">
                Initials
                <span className="ml-2 text-xs text-muted-foreground">
                  → Shows in the profile avatar circle
                </span>
              </Label>
              <Input
                id="initials"
                name="initials"
                defaultValue={profile.initials}
                maxLength={5}
              />
              <FormError>{errors.initials}</FormError>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name
                <span className="ml-2 text-xs text-muted-foreground">
                  → Displayed as the main heading
                </span>
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue={profile.name}
              />
              <FormError>{errors.name}</FormError>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">
              Role / Title
              <span className="ml-2 text-xs text-muted-foreground">
                → Shown below your name in the hero
                <br />
                e.g., &quot;Full-Stack Developer | Next.js, React &amp; TypeScript&quot;
              </span>
            </Label>
            <Input
              id="role"
              name="role"
              defaultValue={profile.role}
            />
            <FormError>{errors.role}</FormError>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="basedIn">
                Based In
                <span className="ml-2 text-xs text-muted-foreground">
                  → Location shown in hero section
                </span>
              </Label>
              <Input
                id="basedIn"
                name="basedIn"
                defaultValue={profile.basedIn}
              />
              <FormError>{errors.basedIn}</FormError>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bestAt">
                Best At
                <span className="ml-2 text-xs text-muted-foreground">
                  → Skills highlighted in hero
                  <br />
                  Separate with &quot;·&quot; (middle dot)
                </span>
              </Label>
              <Input
                id="bestAt"
                name="bestAt"
                defaultValue={profile.bestAt}
              />
              <FormError>{errors.bestAt}</FormError>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">
              Summary
              <span className="ml-2 text-xs text-muted-foreground">
                → Bio paragraph displayed below your role
              </span>
            </Label>
            <Textarea
              id="summary"
              name="summary"
              defaultValue={profile.summary}
              rows={4}
            />
            <FormError>{errors.summary}</FormError>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email
                <span className="ml-2 text-xs text-muted-foreground">
                  → Contact email in footer &amp; contact section
                </span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={profile.email}
              />
              <FormError>{errors.email}</FormError>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone
                <span className="ml-2 text-xs text-muted-foreground">
                  → Phone number in contact section
                </span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                defaultValue={profile.phone}
              />
              <FormError>{errors.phone}</FormError>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="github">
                GitHub URL
                <span className="ml-2 text-xs text-muted-foreground">
                  → Link in social icons &amp; footer
                </span>
              </Label>
              <Input
                id="github"
                name="github"
                type="url"
                defaultValue={profile.github}
                placeholder="https://github.com/username"
              />
              <FormError>{errors.github}</FormError>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin">
                LinkedIn URL
                <span className="ml-2 text-xs text-muted-foreground">
                  → Link in social icons &amp; footer
                </span>
              </Label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                defaultValue={profile.linkedin}
                placeholder="https://linkedin.com/in/username"
              />
              <FormError>{errors.linkedin}</FormError>
            </div>
          </div>

          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
