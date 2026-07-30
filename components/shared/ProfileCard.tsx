import { MapPin, Briefcase, Code, GraduationCap } from "lucide-react";
import { Card } from "../ui/card";

function ProfileCard() {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <div className="flex items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
          YH
        </div>
        <div>
          <p className="text-base font-bold text-foreground">Yohannes Haile</p>
          <p className="text-xs text-muted-foreground">
            Senior Full Stack Engineer
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" />
        Addis Ababa, Ethiopia
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary">
          <Briefcase className="size-3" />
          Open to Work
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-[10px] font-medium text-muted-foreground">
          <Code className="size-3" />
          8+ Years
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-[10px] font-medium text-muted-foreground">
          <GraduationCap className="size-3" />
          50+ Projects
        </span>
      </div>
    </Card>
  );
}

export default ProfileCard;
