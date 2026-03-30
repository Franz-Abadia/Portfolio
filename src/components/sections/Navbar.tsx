"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
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

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-2xl py-4 px-4 sm:px-6 lg:px-8"
          : "bg-transparent py-4 md:py-6 px-4 sm:px-6 lg:px-8"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between transition-all duration-500">
        {/* Left: Logo */}
        <Link
          href="/"
          className="font-display text-3xl italic tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Tony
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors",
                  isActive ? "text-gold" : "text-slate-300 hover:text-gold"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-gold px-8 py-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.15em] text-black transition-all hover:scale-105 hover:brightness-110 md:block"
          >
            Inquire
          </Link>

          {/* Clean Hamburger Animation */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <span className={cn(
              "h-px w-6 bg-white transition-all duration-300 ease-in-out",
              mobileOpen && "translate-y-[7.5px] rotate-45"
            )} />
            <span className={cn(
              "h-px w-6 bg-white transition-all duration-200",
              mobileOpen && "opacity-0"
            )} />
            <span className={cn(
              "h-px w-6 bg-white transition-all duration-300 ease-in-out",
              mobileOpen && "-translate-y-[7px] -rotate-45"
            )} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070C1E] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-10 text-center">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-display text-5xl tracking-tight transition-all duration-500",
                pathname === link.href ? "text-gold italic" : "text-white/60",
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "mt-8 rounded-full bg-gold px-12 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-500",
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}