import { profile } from "@/data/profile"
import { ProfileForm } from "@/components/dashboard/ProfileForm"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          Edit your personal information and bio.
        </p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  )
}
