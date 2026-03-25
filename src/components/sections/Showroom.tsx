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
    <section id="showroom" className="relative py-32 px-6">
      

      <div className="mx-auto max-w-6xl">
         <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center px-4">  
        <ScrollReveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-9xl">
            The Copy
            <span className="text-gradient"> Showroom</span>
          </h2>
          <p className="mt-5 max-w-7xl text-lg text-muted-foreground">
            There's no better way to communicate my work than by showing you my craftsmanship. 
            Email content, Website Content, Social Media Copy -- whatever you think of, I may have already written it!
            Take a few moments to let your eyes linger in finding the content you need! 
          </p>
        </ScrollReveal>
      </div>
        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
