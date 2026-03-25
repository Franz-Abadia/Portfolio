"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PainPointCard } from "@/components/ui/PainPointCard";
import { painPoints } from "@/data/painPoints";

export function PainPoints() {
  return (
    <section id="pain-points" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Sound Familiar?
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-7xl">
            Great products fail with
            <span className="text-gradient"> weak copy</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            If any of these hit home, we should talk.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.id} delay={i * 100}>
              <PainPointCard painPoint={point} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
