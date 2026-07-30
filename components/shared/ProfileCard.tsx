import { Globe, Zap } from "lucide-react";
import { Card } from "../ui/card";
import type { ProfileData } from "@/data/profile";

function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <div className="flex items-center gap-3.5">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
          {profile.initials}
        </div>
        <div>
          <p className="text-base font-bold text-foreground">{profile.name}</p>
          <p className="text-xs text-muted-foreground">{profile.role}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Globe className="size-3.5 shrink-0" />
          <span className="font-medium text-foreground/80">Based in:</span>{" "}
          {profile.basedIn}
        </div>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Zap className="size-3.5 shrink-0 mt-0.5" />
          <span>
            <span className="font-medium text-foreground/80">Best at:</span>{" "}
            {profile.bestAt}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
