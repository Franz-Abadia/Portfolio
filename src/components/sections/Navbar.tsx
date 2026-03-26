"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-6 transition-all duration-500">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full px-8 py-3 transition-all duration-500",
          scrolled
            ? "bg-background/70 shadow-[0_20px_40px_rgba(5,41,122,0.2)] backdrop-blur-xl border border-white/5"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a 
          href="/" 
          className="font-display text-2xl italic tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Franz
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-sans text-[0.7rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300",
                  isActive 
                    ? "text-gold" 
                    : "text-muted-foreground hover:text-gold"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="rounded-full bg-gold px-7 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#3c2f00] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,195,62,0.5)]"
          >
            Inquire
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span 
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-300 ease-out",
                mobileOpen && "translate-y-2 rotate-45"
              )} 
            />
            <span 
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-300 ease-out",
                mobileOpen && "opacity-0 scale-x-0"
              )} 
            />
            <span 
              className={cn(
                "h-px w-6 bg-foreground transition-all duration-300 ease-out",
                mobileOpen && "-translate-y-2.5 -rotate-45"
              )} 
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-12 text-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-display text-4xl tracking-tight transition-all duration-300 hover:italic hover:text-gold",
                pathname === link.href ? "text-gold italic" : "text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 rounded-full bg-gold px-12 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#3c2f00] shadow-xl transition-transform hover:scale-105"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </header>
  );
}
