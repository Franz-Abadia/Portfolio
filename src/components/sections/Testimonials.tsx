"use client";

import { useState, useCallback, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right, 0 initial
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  // Auto-advance every 7s
  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="testimonials-section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #080E1F 0%, #0C1630 40%, #0F1B3A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/70">
              The Voices of Impact
            </p>
            <h2
              className="font-display text-4xl font-light italic text-white md:text-5xl lg:text-7xl"
              style={{ lineHeight: 1.1 }}
            >
              People I Worked With
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel slide */}
        <div
          key={current}
          className="testimonial-slide grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"
          style={{
            animation: `testimonialSlide${direction >= 0 ? "Right" : "Left"} 0.55s cubic-bezier(0.16,1,0.3,1)`,
          }}
        >
          {/* Left – Quote Card */}
          <div className="order-2 lg:order-1">
            <div
              className="relative rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(15, 23, 42, 0.65)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(96, 165, 250, 0.10)",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Big quote mark */}
              <svg
                className="mb-5 h-10 w-10 md:h-12 md:w-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                  fill="url(#quoteGrad)"
                />
                <defs>
                  <linearGradient
                    id="quoteGrad"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                  >
                    <stop stopColor="#FCD34D" />
                    <stop offset="1" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Quote text */}
              <p className="mb-8 text-base leading-relaxed text-slate-300/90 md:text-lg md:leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="mb-6 h-px w-16"
                style={{
                  background:
                    "linear-gradient(90deg, #FCD34D, rgba(252,211,77,0.15))",
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-lg font-bold text-white md:text-xl">
                    {t.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{t.role}</p>
                  <p className="text-sm font-medium text-blue-400/80">
                    {t.company}
                  </p>
                </div>

                {/* Company logo placeholder */}
                {t.logo && (
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <img 
                    src={t.logo} 
                    alt={t.company} 
                    className="h-full w-full object-contain" 
                    onError={(e) => (e.currentTarget.style.display = 'none')} 
                  />
                </div>
              )}
              </div>

              {/* Socials */}
              {t.socials && t.socials.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.socials.map((s) => (
                    <span
                      key={s}
                      className="rounded-full px-3 py-1 text-xs text-slate-400/80"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right – Portrait Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute -inset-4 rounded-[2rem]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(59,130,246,0.12), transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              {/* Image container with arch shape */}
              {/* Image container with arch shape */}
            <div
              className="relative h-[340px] w-[280px] overflow-hidden md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[380px]"
              style={{
                borderRadius: "200px 200px 24px 24px",
                border: "2px solid rgba(96, 165, 250, 0.15)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.06)",
                background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
              }}
            >
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                /* Placeholder portrait with initials - Only shows if image is missing */
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div
                      className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full md:h-28 md:w-28"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.20), rgba(252,211,77,0.15))",
                        border: "2px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="text-3xl font-bold text-white/60 md:text-4xl">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{t.name}</p>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <ScrollReveal delay={200}>
          <div className="mt-12 flex items-center justify-center gap-6 md:mt-16">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-400"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background:
                      i === current
                        ? "linear-gradient(90deg, #FCD34D, #F59E0B)"
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-400"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes testimonialSlideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes testimonialSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
