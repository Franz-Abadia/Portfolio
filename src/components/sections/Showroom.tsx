"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShowroomCard } from "@/components/ui/ShowroomCard";
import { ShowroomBento } from "@/components/ui/ShowroomBento";
import { showroomItems } from "@/data/showroomItems";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(showroomItems.map((i) => i.category)))];

export function Showroom() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" 
    ? showroomItems 
    : showroomItems.filter((i) => i.category === active);

  return (
    <section id="showroom" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-background mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center mb-16 md:mb-20">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Selected Work</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light italic text-foreground">
              The Copy <span className="text-gradient"> Showroom</span>
            </h2>
            <p className="mt-5 max-w-prose mx-auto text-base md:text-lg text-muted-foreground">
              There&apos;s no better way to communicate my work than by showing you my craftsmanship. 
              Email, Web, Social—take a moment to let your eyes linger.
            </p>
          </ScrollReveal>
        </div>

        {/* --- BENTO GRID COMPONENT --- */}
        <ScrollReveal>
          <ShowroomBento />
        </ScrollReveal>

        {/* Archives Divider */}
        <div className="w-full max-w-2xl mx-auto border-t border-white/5 mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-background text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Portfolio Archives</div>
        </div>

        {/* Filter pills */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300",
                  active === cat
                    ? "border-accent bg-accent/10 text-accent ring-1 ring-accent/50"
                    : "border-white/10 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 50}>
              <ShowroomCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}