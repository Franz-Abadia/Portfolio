import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricBadge({ value, label, className }: MetricBadgeProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl font-bold text-gradient font-display md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
