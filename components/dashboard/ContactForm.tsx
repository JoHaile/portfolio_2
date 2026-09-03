"use client"

import { useActionState, useEffect } from "react"
import { updateContactInfo, updateSocialLinks, type ContactState } from "@/app/dashboard/actions/contact"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { FormError } from "@/components/dashboard/form-field"
import { toast } from "sonner"
import type { ContactInfo, SocialLink } from "@/data/contact"

interface ContactFormProps {
  contact: { contactInfo: ContactInfo[]; socialLinks: SocialLink[] }
}

const initialContactState: ContactState = {
  success: false,
  error: null,
  data: null,
}

export function ContactForm({ contact }: ContactFormProps) {
  const [contactState, contactFormAction, isContactPending] = useActionState(
    updateContactInfo,
    initialContactState
  )
  const [socialState, socialFormAction, isSocialPending] = useActionState(
    updateSocialLinks,
    initialContactState
  )

  useEffect(() => {
    if (contactState.success) {
      toast.success("Contact info updated successfully!")
    }
    if (contactState.error) toast.error(contactState.error)
    if (socialState.success) {
      toast.success("Social links updated successfully!")
    }
    if (socialState.error) toast.error(socialState.error)
  }, [contactState.success, contactState.error, socialState.success, socialState.error])

  const contactErrors = contactState.errors ?? {}
  const socialErrors = socialState.errors ?? {}

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted-foreground">
          Manage your contact information and social links. These appear in the contact section and footer.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            These values appear in the contact section with their respective icons.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={contactFormAction} className="space-y-6">
            {contact.contactInfo.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-xs text-muted-foreground">
                    ({item.icon} icon on the frontend)
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`label_${index}`}>
                      Label
                      <span className="ml-2 text-xs text-muted-foreground">
                        - The heading label for this contact item
                      </span>
                    </Label>
                    <Input
                      id={`label_${index}`}
                      name={`label_${index}`}
                      defaultValue={item.label}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`value_${index}`}>
                      Value
                      <span className="ml-2 text-xs text-muted-foreground">
                        - Text displayed next to the {item.label.toLowerCase()} icon
                      </span>
                    </Label>
                    <Input
                      id={`value_${index}`}
                      name={`value_${index}`}
                      defaultValue={item.value}
                    />
                    <FormError>{contactErrors[`value_${index}`]}</FormError>
                  </div>
                  {item.href !== undefined && (
                    <div className="space-y-2">
                      <Label htmlFor={`href_${index}`}>
                        Link URL
                        <span className="ml-2 text-xs text-muted-foreground">
                          - Where clicking this contact item takes the user
                        </span>
                      </Label>
                      <Input
                        id={`href_${index}`}
                        name={`href_${index}`}
                        defaultValue={item.href}
                        type="url"
                        placeholder={item.label === "Email" ? "mailto:" : item.label === "Phone" ? "tel:" : ""}
                      />
                    </div>
                  )}
                </div>
                {index < contact.contactInfo.length - 1 && <Separator />}
              </div>
            ))}
            <Button type="submit" disabled={isContactPending}>
              {isContactPending ? "Saving..." : "Save Contact Info"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Links</CardTitle>
          <CardDescription>
            These appear as icon buttons in the footer and contact section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={socialFormAction} className="space-y-6">
            {contact.socialLinks.map((link, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`href_${index}`}>
                  {link.label}
                  <span className="ml-2 text-xs text-muted-foreground">
                    - URL for the {link.label.toLowerCase()} icon button
                  </span>
                </Label>
                <Input
                  id={`href_${index}`}
                  name={`href_${index}`}
                  defaultValue={link.href}
                  type="url"
                />
                <FormError>{socialErrors[`href_${index}`]}</FormError>
              </div>
            ))}
            <Button type="submit" disabled={isSocialPending}>
              {isSocialPending ? "Saving..." : "Save Social Links"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
