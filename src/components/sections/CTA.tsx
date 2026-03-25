"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <div className="glass rounded-3xl p-12 md:p-20">
            {/* Background glow inside card */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Ready to grow?
              </p>
              <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Let&apos;s write copy that
                <br />
                <span className="text-gradient">prints money</span>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
                Tell me about your project and I&apos;ll send you a custom
                proposal within 48 hours — no obligations.
              </p>

              {/* CTA form placeholder — email input + button */}
              <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border border-border bg-card/50 px-6 py-3.5 text-base text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                />
                <button className="btn-gold whitespace-nowrap text-base">
                  Get a Proposal →
                </button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground/60">
                No spam. Just a conversation about your goals.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
