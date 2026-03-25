import { GlassCard } from "./GlassCard";
import { PainPoint } from "@/types";

interface PainPointCardProps {
  painPoint: PainPoint;
}

export function PainPointCard({ painPoint }: PainPointCardProps) {
  return (
    <GlassCard>
      <span className="text-4xl">{painPoint.icon}</span>
      <h3 className="mt-4 text-xl font-semibold text-card-foreground">
        {painPoint.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {painPoint.description}
      </p>
    </GlassCard>
  );
}
