"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HiArrowRight, HiArrowLeft, HiXMark } from "react-icons/hi2";

const slideImages = [
  "/images/results/result1.png",
  "/images/results/result2.png",
  "/images/results/result3.png",
  "/images/results/result4.png",
  "/images/results/result5.png",
  "/images/results/Metaresults.png",
  "/images/results/Metaresults2.png",
];

export function ShowroomBento() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-20">
        
        {/* 1. MAIN CARD (Left) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-12 rounded-2xl border border-white/5 bg-[#0a0f1e] shadow-2xl relative overflow-hidden group min-h-[400px] lg:min-h-[550px] hover:border-gold/30 transition-all duration-500">
          <div className="space-y-4 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/90">MACA EXPRESS TRAVEL</span>
            <h3 className="font-display text-7xl sm:text-8xl mt-4 lg:text-[7.5rem] tracking-tighter text-white leading-none">3,543</h3>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gold/90">NEW INQUIRIES</p>
          </div>
          <div className="mt-12 relative z-10">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground/90 max-w-xs">
              Targeted ad structures generated lower cost per conversation and a <span className="text-white font-medium">+31% jump</span> in purchases in 30 days.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px] rounded-full pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />
        </div>

        {/* RIGHT COLUMN WRAPPER */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          
          {/* 2. VISUAL SLIDESHOW CARD */}
          <div 
            className="sm:col-span-2 relative aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/5 shadow-xl group hover:border-gold/30 transition-all cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            {slideImages.map((src, idx) => (
              <div 
                key={src}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-500",
                  currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <img 
                  src={src}
                  alt={`Result slide ${idx + 1}`}
                  className="w-full h-full object-contain p-4 md:p-8"
                />
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Previous image"
              >
                <HiArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Next image"
              >
                <HiArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Image Counter Label */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 hidden sm:block">
              <p className="text-[10px] font-bold text-white/90 tracking-widest uppercase">
                Slide {currentSlide + 1} of {slideImages.length}
              </p>
            </div>
          </div>

          {/* 3. MULTIPLIER CARD */}
          <div className="flex flex-col justify-center p-8 rounded-2xl border border-white/5 bg-[#0a0f1e] shadow-xl group hover:border-gold/30 transition-all min-h-[220px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold/90 mb-4 block">JUHAYDAH SOUVENIR</span>
            <h3 className="font-display text-5xl md:text-6xl tracking-tight text-white mb-2">₱85K</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold/60 mb-4">REVENUE TRACKED</p>
            <p className="text-xs md:text-sm leading-relaxed text-muted-foreground/90">
              Transformed <span className="text-white font-medium">₱2,562</span> of spend into massive returns.
            </p>
          </div>

          {/* 4. REVENUE CARD */}
          <div className="flex flex-col justify-center p-8 rounded-2xl border border-white/5 bg-[#0a0f1e] shadow-xl group hover:border-gold/30 transition-all min-h-[220px]">
             <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold/90 mb-4 block">VILLA CRISTINA RESORT</span>
             <h3 className="font-display text-5xl md:text-6xl tracking-tight text-white mb-2">10x</h3>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gold/60 mb-4">MORE CONVERSATIONS</p>
             <p className="text-xs md:text-sm leading-relaxed text-muted-foreground/90">
                <span className="text-white font-medium">₱158K</span> generated in 3 days via high-intent conversation funnels.
             </p>
          </div>
          
        </div>
      </div>

      {/* LIGHTBOX POP-UP */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm px-4">
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
            aria-label="Close lightbox"
          >
            <HiXMark className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-10 w-12 h-12 rounded-full bg-white/10 hidden sm:flex items-center justify-center text-white hover:bg-gold/20 hover:text-gold transition-all z-50"
            aria-label="Previous image"
          >
            <HiArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-10 w-12 h-12 rounded-full bg-white/10 hidden sm:flex items-center justify-center text-white hover:bg-gold/20 hover:text-gold transition-all z-50"
            aria-label="Next image"
          >
            <HiArrowRight className="w-6 h-6" />
          </button>

          <img 
            src={slideImages[currentSlide]} 
            alt="Expanded view" 
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl relative z-40"
          />
          
          {/* Mobile Arrows in Lightbox */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 sm:hidden z-50">
             <button 
               onClick={handlePrev}
               className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white"
             >
               <HiArrowLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={handleNext}
               className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white"
             >
               <HiArrowRight className="w-6 h-6" />
             </button>
          </div>
        </div>
      )}
    </>
  );
}
