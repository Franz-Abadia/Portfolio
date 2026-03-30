"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const timelineNodes = [
  { label: "1. Website Copy", pos: "top" },
  { label: "2. Ad Scripts & Creative", pos: "bottom" },
  { label: "3. Email Copy", pos: "top" },
  { label: "4. Brand Messaging", pos: "bottom" },
  { label: "5. Copy Audits", pos: "top" },
];

export function CopySecret() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-28 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/60">
              The Process
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light italic text-white"
              style={{ lineHeight: 1.1 }}
            >
              What's The <span className="text-gradient">Secret</span> To Great Copy?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-slate-400 md:text-lg">
              Mastering a process of precision.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative w-full mt-16 mb-6 px-4 md:px-10 lg:px-20">
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10 z-0" />
            
            <div className="relative flex justify-between items-center w-full z-10">
            {timelineNodes.map((node, i) => (
              <ScrollReveal delay={i * 100} key={i}>
                <div className="relative flex flex-col items-center">
                  
                  {/* Top Label */}
                  <div 
                    className={`absolute bottom-full mb-4 w-32 text-center text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white/90 leading-tight transition-opacity ${
                      node.pos === 'top' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {node.label}
                  </div>
                  
                  {/* Outer glow/container for the dot to cut the line cleanly */}
                  <div className="bg-[#0a0f1e] p-1.5 rounded-full">
                    {/* The Dot */}
                    <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                  </div>
                  
                  {/* Bottom Label */}
                  <div 
                    className={`absolute top-full mt-4 w-32 text-center text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white/90 leading-tight transition-opacity ${
                      node.pos === 'bottom' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {node.label}
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
        
        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex justify-center mt-12 w-full px-4 mb-8">
          <div className="relative w-max max-w-full">
            {/* The vertical line */}
            <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-white/10 z-0" />
            
            <div className="flex flex-col space-y-8 relative z-10">
              {timelineNodes.map((node, i) => (
                <ScrollReveal delay={i * 100} key={i}>
                  <div className="relative pl-12 pr-2 flex items-center min-h-[48px]">
                    
                    {/* Outer wrapper to cleanly cut the line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0a0f1e] p-1.5 rounded-full z-10">
                      {/* The Dot */}
                      <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                    </div>
                    
                    {/* Label */}
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 leading-relaxed text-left max-w-[240px]">
                      {node.label}
                    </div>
                    
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
