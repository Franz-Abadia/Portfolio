"use client";

import Image from "next/image";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ScrollReveal } from "../ui/ScrollReveal";

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
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/10 blur-[140px]" />
      </div>

      {/* Blueprint Markings */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left blueprint-marking opacity-70">
        SYS.REQ.01 // FA 2026 // COPY MODULE
      </div>
      <div className="hidden md:block absolute right-8 bottom-12 blueprint-marking text-right opacity-70">
        COORD: 34.0522° N, 118.2437° W<br />
        FW:234.99.1A
      </div>
      <div className="hidden md:block absolute top-[15%] right-[10%] blueprint-marking opacity-70">
        FRAME X-1<br />
        <span className="opacity-50">INITIALIZING...</span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 pt-24 sm:pt-28 md:flex-row md:gap-16 md:pt-0 lg:gap-20 lg:px-8">

        {/* ─── Left: Portrait ─── */}
        {/* WE REMOVED ScrollReveal here so the picture shows up instantly */}
        <div className="flex w-full shrink-0 justify-center md:w-[42%] lg:w-[40%]">
          <div className="relative aspect-3/4 w-full max-w-[460px] overflow-hidden rounded-md border border-white/5 shadow-2xl">
            <Image
              src="/FranzHero.png"
              alt="Franz Abadia — Freelance Copywriter"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 460px"
            />
            {/* Subtle bottom fade into background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>

        {/* ─── Right: Copy ─── */}
        <div className="mt-10 flex flex-1 flex-col items-center text-center md:mt-0 md:items-start md:text-left">

          {/* We only wrap the text content inside ScrollReveal */}
          <ScrollReveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-gold md:text-base">
             If your offer is good but your words are not pulling their weight, I fix that.
            </p>

            <h1 className="font-display text-4xl sm:text-5xl font-regular leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl xl:text-[4.5rem]">
              I write copy that
              <br />
              <span className="relative block min-h-[3.3em] md:min-h-[2.2em]">
                <span className="text-gradient font-light italic">
                  {text}
                </span>
                {/* The cursor */}
                <span className="animate-pulse text-amber-500">|</span>
              </span>
            </h1>

            <p className="mt-3 max-w-prose text-base sm:text-lg leading-relaxed text-slate-300 md:text-xl">
              You <span className="font-semibold italic text-gold">VALUE</span> your time, and you{" "}
              <span className="font-semibold italic text-gold">NEED</span> a copywriter.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-5">
              <a href="/#showroom" className="btn-gold text-base">
                View Case Studies
              </a>
              <a
                href="/FranzAbadia-Resume.pdf"
                download
                className="rounded-full border border-white/10 px-7 py-3 text-base font-semibold text-slate-400 transition-all hover:border-amber-500/40 hover:text-white"
              >
                Download Resume ↓
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}