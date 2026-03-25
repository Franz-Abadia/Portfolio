import { ProcessStepData } from "@/types";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: ProcessStepData;
  isLast?: boolean;
}

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-5 md:gap-8">
      {/* Timeline line + circle */}
      <div className="flex flex-col items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-base font-bold text-accent">
          {step.number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-linear-to-b from-accent/40 to-border" />
        )}
      </div>

      {/* Content */}
      <div className={cn("pb-12", isLast && "pb-0")}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{step.icon}</span>
          <h3 className="text-xl font-semibold text-foreground">
            {step.title}
          </h3>
        </div>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </div>
  );
}
