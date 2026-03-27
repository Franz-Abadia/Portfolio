"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShowroomCard } from "@/components/ui/ShowroomCard";
import { showroomItems } from "@/data/showroomItems";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(showroomItems.map((i) => i.category)))];

export function Showroom() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? showroomItems
      : showroomItems.filter((i) => i.category === active);

  return (
    <section id="showroom" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-background mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Selected Work
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light italic text-foreground">
              The Copy
              <span className="text-gradient"> Showroom</span>
            </h2>
            <p className="mt-4 md:mt-5 max-w-prose mx-auto text-base md:text-lg text-muted-foreground">
              There's no better way to communicate my work than by showing you my craftsmanship.
              Email content, Website Content, Social Media Copy -- whatever you think of, I may have already written it!
              Take a few moments to let your eyes linger in finding the content you need!
            </p>
          </ScrollReveal>
        </div>
        {/* Filter pills */}
        <ScrollReveal>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all",
                  active === cat
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
        {/* Grid */}
        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <ShowroomCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
