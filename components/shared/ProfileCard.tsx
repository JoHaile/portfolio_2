import { Globe, Zap } from "lucide-react";
import { Card } from "../ui/card";
import type { ProfileData } from "@/data/profile";

function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <Card className="flex flex-col gap-4 p-5">
      <div className="flex items-center gap-3.5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
          {profile.initials}
        </div>
        <div>
          <p className="text-base font-bold text-foreground">{profile.name}</p>
          <p className="text-xs font-medium text-primary">{profile.role}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1 border-t border-border/60">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Globe className="size-3.5 shrink-0 text-primary" />
          <span className="font-semibold text-foreground/80">Location:</span>{" "}
          {profile.basedIn}
        </div>
        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Zap className="size-3.5 shrink-0 mt-0.5 text-primary" />
          <span>
            <span className="font-semibold text-foreground/80">Focus:</span>{" "}
            {profile.bestAt}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
