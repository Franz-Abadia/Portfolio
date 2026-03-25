"use client";

import { processSteps } from "@/data/processSteps";
import type { ProcessStepData } from "@/types";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── SVG icons keyed by step.icon ── */
function StepIcon({ name }: { name: string }) {
  const shared = "w-5 h-5";
  switch (name) {
    case "discovery":
      return (
        <svg className={shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      );
    case "research":
      return (
        <svg className={shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      );
    case "strategy":
      return (
        <svg className={shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "copywriting":
      return (
        <svg className={shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );
    case "optimization":
      return (
        <svg className={shared} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Individual card ── */
function ProcessCard({ step, index }: { step: ProcessStepData; index: number }) {
  const isEven = index % 2 === 1;
  return (
    <div
      className="process-card relative flex flex-col"
      style={{
        /* stagger: even-index cards push down */
        marginTop: isEven ? 64 : 0,
      }}
    >
      {/* Icon chip — floats above the card */}
      <div
        className="relative z-10 mb-[-20px] ml-5 flex h-11 w-11 items-center justify-center self-start rounded-xl text-amber-400"
        style={{
          background: "rgba(10, 16, 34, 0.92)",
          border: "1px solid rgba(252, 211, 77, 0.22)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <StepIcon name={step.icon} />
      </div>

      {/* Card body */}
      <div
        className="flex flex-1 flex-col rounded-2xl p-7 pt-9"
        style={{
          background: "rgba(13, 19, 40, 0.72)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(96, 165, 250, 0.08)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Label */}
        <p
          className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: "rgba(252, 211, 77, 0.7)" }}
        >
          {step.number} / Sequence
        </p>

        {/* Title */}
        <h3 className="mb-3 font-display text-xl font-bold text-white">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
          {step.description}
        </p>

        {/* Divider */}
        <div
          className="mb-4 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(96,165,250,0.12), transparent)",
          }}
        />

        {/* Tags */}
        <ul className="flex flex-col gap-1.5">
          {step.tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500"
            >
              <span
                className="inline-block h-1 w-1 rounded-full"
                style={{ background: "rgba(252,211,77,0.55)" }}
              />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Main section ── */
export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #070C1E 0%, #0B1530 50%, #0E1A38 100%)",
      }}
    >
      {/* Subtle ambient wave texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(252,211,77,0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 text-center md:mb-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/60">
              How I Work
            </p>
            <h2
              className="font-display text-4xl font-light italic text-white md:text-5xl lg:text-7xl"
              style={{ lineHeight: 1.1 }}
            >
              From Brief to{" "}
              <span className="text-gradient">Bottom Line</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
              A proven five-step sequence that turns strategy into measurable results.
            </p>
          </div>
        </ScrollReveal>

        {/* Card grid — horizontal on lg, wraps on smaller screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 120}>
              <ProcessCard step={step} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
