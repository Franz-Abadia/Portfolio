"use client";

import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Hero() {
  const { text } = useTypewriter({
    words: [
      "generates 7‑figure revenue.",
      "turns browsers into buyers.",
      "makes your competitors nervous.",
      "sells while you sleep.",
    ],
    typeSpeed: 70,
    deleteSpeed: 40,
    delayBetween: 2200,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Signature radial glow — per DESIGN.md §2 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--navy)/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-0 px-6 pt-28 md:flex-row md:gap-16 md:pt-0 lg:gap-20 lg:px-12">
        {/* ─── Left: Portrait ─── */}
        <div className="flex w-full shrink-0 justify-center md:w-[42%] lg:w-[40%]">
          <div className="relative aspect-3/4 w-full max-w-[460px] overflow-hidden rounded-md">
            <Image
              src="/FranzHero.png"
              alt="Franz Abadia — Freelance Copywriter"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 460px"
            />
            {/* Subtle bottom fade into background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
          </div>
        </div>

        {/* ─── Right: Copy ─── */}
        <div className="mt-10 flex flex-1 flex-col items-center text-center md:mt-0 md:items-start md:text-left">
          {/* Kicker */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold md:text-base">
            The one you&apos;re looking for!
          </p>

          <h1 className="font-display text-5xl font-regular leading-[1.1] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
            I write copy that
            <br />
            <span className="text-gradient font-light italic">{text}</span>
            <span className="animate-pulse text-accent">|</span>
          </h1>

          {/* Sub-copy — matching original site */}
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            You&apos;re possibly here for two reasons:
          </p>
          <p className="mt-3 text-lg leading-relaxed text-foreground md:text-xl">
            You <span className="font-semibold text-gold">VALUE</span> your time, and you{" "}
            <span className="font-semibold text-gold">NEED</span> a copywriter.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            In that case, I got you!
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#about"
              className="btn-gold text-base"
            >
              Read Franz&apos; Story
            </a>
            <a
              href="/FranzAbadia-Resume.pdf"
              download
              className="rounded-full border border-border px-7 py-3 text-base font-semibold text-muted-foreground transition-all hover:border-accent/40 hover:text-foreground"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
