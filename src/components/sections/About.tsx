"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HiArrowRight } from "react-icons/hi2";

export function AboutSection() {
  return (
    <div className="relative overflow-hidden bg-background mx-auto">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center px-6 py-32 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="space-y-6 max-w-4xl mb-16">
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">The Digital Curator</span>
            <h1 className="mt-4 font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-9xl">
              Words are the <br className="hidden md:block"/><span className="text-gold">Soul</span> of Sales.
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              I bridge the gap between human emotion and digital precision. As an actor and copywriter, I don't just write scripts—I perform your brand's narrative.
            </p>
          </div>
        </ScrollReveal>

        {/* Wide Image Section */}
        <ScrollReveal delay={200} className="w-full">
          <div className="w-full max-w-6xl relative group mt-8">
            <div className="aspect-video md:aspect-[21/13] lg:aspect-[21/12] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 bg-surface-container-high relative">
              <Image
                src="/images/about/FranzAbout.png"
                alt="Franz Professional Portrait"
                fill
                priority
                className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-navy/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      </section>

      {/* Chapter 1: The Origin */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <ScrollReveal>
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">Chapter One</span>
            <h2 className="mt-4 font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-7xl">The First Letter</h2>
            <div className="mt-10 space-y-8">
              <p className="font-sans text-lg text-muted-foreground">
                At age five, after receiving a particularly memorable 'walloping' for a childhood transgression, I didn't hide. I picked up a crayon. I wrote a love letter to my mother—not just an apology, but a strategic appeal to her heart.
              </p>
              <p className="font-sans text-xl italic text-muted-foreground border-l-2 md:border-l-0 md:border-y border-gold/40 px-8 py-10">
                That was my first sale. I learned early on that the right words, delivered with sincerity, could transform any situation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 2: The Performer's Soul */}
      <section className="py-32 bg-surface-container-low/50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
          <ScrollReveal>
            <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">The Craft</span>
            <h2 className="mt-6 font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-9xl">The <span className="text-gradient">Actor-Writer</span> Synergy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left pt-16">
              <div className="space-y-4">
                <p className="font-sans text-lg text-muted-foreground">
                  High school was a blur of ink and spotlight. Between penning screenplays that challenged the status quo and stepping into characters on stage, I discovered that acting and writing are two sides of the same coin.
                </p>
              </div>
              <div className="space-y-6">
                <p className="font-sans text-lg text-muted-foreground">
                  When I write copy, I'm not just typing; I'm auditioning for your customer's attention. I inhabit their desires, their fears, and their dreams to craft a voice that resonates in the deep.
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-3 text-gold font-sans text-sm font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300 group">
                    Explore Films <HiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapter 3: The Pivot */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-20 rounded-2xl relative overflow-hidden border border-gold/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-navy/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 flex items-center">
                <h2 className="font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-7xl">From Debt to Digital <span className="text-gold">Dominance</span></h2>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <p className="font-sans text-xl text-muted-foreground">
                  The pandemic wasn't just a global pause; it was a personal reckoning. Faced with mounting family debt and the weight of uncertainty, the transition to Social Media Management wasn't a choice—it was a survival tactic.
                </p>
                <p className="font-sans text-lg text-muted-foreground/80">
                  I took that pressure and turned it into momentum. I realized that the same narrative power I used on stage could build digital empires. I traded the script for the scroll, and I haven't looked back.
                </p>
                <div className="flex flex-wrap gap-4 pt-6">
                  {["Resilience", "Growth", "Identity"].map((tag) => (
                    <span key={tag} className="px-4 py-1 rounded-full border border-gold/10 text-[0.7rem] uppercase tracking-widest text-muted-foreground bg-gold/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Chapter 4: The Partnership */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <ScrollReveal>
              <span className="text-gold font-sans text-sm font-semibold uppercase tracking-widest">The Turning Point</span>
              <h2 className="mt-4 font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-7xl">The Catalyst</h2>
              <div className="space-y-8">
                <p className="font-sans text-lg text-muted-foreground">
                  True mastery often requires a mentor. Meeting my transformational life coach changed everything. Under their guidance, I honed my raw talent into professional-grade precision.
                </p>
                <p className="font-sans text-lg text-muted-foreground">
                  Today, I operate as a multi-faceted creative: a copywriter, editor, and strategic VA. I don't just provide services; I build partnerships that elevate visions into realities.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative">
            <ScrollReveal delay={200}>
              <div className="aspect-video overflow-hidden border-[12px] border-surface-container-high shadow-2xl relative z-10 bg-surface-container-high scale-95 hover:scale-100 transition-transform duration-700">
                <Image
                  src="/images/about/Mentor.png"
                  alt="Franz and Client"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gold/5 blur-[120px] rounded-full"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chapter 5: The Present Vision */}
      <section className="py-40 bg-surface-container-low/30 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <ScrollReveal>
            <h2 className="font-display text-5xl font-light italic text-foreground md:text-7xl lg:text-9xl">Your Vision, <span className="text-gold">Echoed</span></h2>
            <p className="mt-12 font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              My mission is simple: to take the quiet whispers of your ambition and amplify them into a roar that echoes throughout the universe.
            </p>
            <div className="pt-20">
              <div className="w-px h-24 bg-linear-to-b from-gold/60 to-transparent mx-auto"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center space-y-16">
        <ScrollReveal>
          <h3 className="font-display text-4xl font-light italic text-foreground md:text-5xl lg:text-7xl">Let's collaborate on your next big success.</h3>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-10">
            <a href="mailto:abadiafrancisanthony@gmail.com" className="font-sans text-lg text-gold/80 underline underline-offset-8 decoration-gold/20 hover:decoration-gold transition-all duration-500 hover:text-gold tracking-wide">
              abadiafrancisanthony@gmail.com
            </a>
            <a href="/contact" className="btn-gold px-12 py-5 text-sm font-bold uppercase tracking-widest">
              Contact Me
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
