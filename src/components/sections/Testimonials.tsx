"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 left, 1 right, 0 initial
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
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

  // Auto-advance every 7s - Paused when video modal is open
  useEffect(() => {
    if (selectedVideo) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next, selectedVideo]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedVideo]);

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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/70">
              The Voices of Impact
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light italic text-white"
              style={{ lineHeight: 1.1 }}
            >
              People I Worked With
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel slide container - Stable fixed height on large screens */}
        <div className="mx-auto max-w-5xl">
          <div
            className="grid items-center gap-8 md:gap-14 lg:items-end lg:grid-cols-[1fr_400px] lg:gap-0 lg:h-[500px]"
          >
            {/* Left – Quote Card */}
            <div 
              key={`text-${current}`}
              className="order-2 lg:order-1 flex flex-col lg:h-full lg:justify-end"
              style={{
                animation: `testimonialFade 0.7s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div
                className="relative rounded-2xl p-8 md:p-12 lg:h-[420px] flex flex-col justify-between z-10 lg:-mr-px"
                style={{
                  background: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(96, 165, 250, 0.10)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div>
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
                  <p className="mb-8 text-base leading-relaxed text-slate-300/90 md:text-lg md:leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div>
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
                      <p className="mt-1 text-sm text-slate-400 line-clamp-1">{t.role}</p>
                      <p className="text-sm font-medium text-blue-400/80">
                        {t.company}
                      </p>
                    </div>

                    {/* Company logo placeholder */}
                    {t.logo && (
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl overflow-hidden bg-white/5 border border-white/10"
                      >
                        <img
                          src={t.logo}
                          alt={t.company}
                          className="h-full w-full object-contain p-1"
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
                          className="rounded-full px-3 py-1 text-[10px] text-slate-400/80 bg-white/5 border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right – Portrait Image */}
            <div 
              key={`img-${current}`}
              className="order-1 flex justify-center lg:order-2 lg:justify-start lg:h-full"
              style={{
                animation: `testimonialFade 0.7s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="relative group/portrait lg:h-full lg:w-full max-w-[400px]">
                {/* Glow behind image */}
                <div
                  className="absolute -inset-4 rounded-[2rem] opacity-40 group-hover/portrait:opacity-70 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(59,130,246,0.2), transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />
                
                <div
                  onClick={() => t.videoPlaybackId && setSelectedVideo(t.videoPlaybackId)}
                  className={`relative h-full w-full max-w-[300px] md:max-w-[340px] lg:max-w-none lg:w-full overflow-hidden border-2 border-blue-400/15 lg:border-l-0 ${
                    t.videoPlaybackId ? "cursor-pointer group/arch" : ""
                  }`}
                  style={{
                    borderRadius: "200px 200px 24px 24px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                    aspectRatio: "9/16",
                    maxHeight: "500px",
                  }}
                >
                  {t.videoPlaybackId ? (
                    <>
                      <img
                        src={`https://image.mux.com/${t.videoPlaybackId}/thumbnail.jpg?width=600&height=1067&fit_mode=smartcrop&time=0`}
                        alt={t.name}
                        className="h-full w-full object-cover grayscale-[0.2] group-hover/arch:grayscale-0 group-hover/arch:scale-105 transition-all duration-700"
                      />
                      {/* Play Icon Overlay - Refined design */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/arch:bg-black/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transform scale-90 group-hover/arch:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                          <svg
                            className="w-7 h-7 text-white/90 translate-x-0.5 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <div
                          className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full md:h-28 md:w-28 bg-linear-to-br from-blue-500/20 to-amber-500/10 border border-white/10"
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
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-6 md:mt-16 relative z-20">
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
      </div>
      
      {/* Video Modal Player - Consistent with Video section */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-[500px] max-h-[90vh] aspect-9/16 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors border border-white/10 shadow-lg"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <MuxPlayer
              playbackId={selectedVideo}
              metadataVideoTitle="Client Testimonial"
              className="h-full w-full object-cover shadow-2xl"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              autoPlay
              accentColor="#60a5fa"
            />
          </div>
        </div>
      )}


      {/* Keyframes */}
      <style jsx>{`
        @keyframes testimonialFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
