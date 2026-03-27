"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

import { sendEmail } from "@/app/actions/actions";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendEmail(formData);

    if (result.success) {
      setSent(true);
    } else {
      alert("Something went wrong. Please try again or email me directly.");
    }

    setIsSubmitting(false);
  }

  const socialLinks = [
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=%2B639433049913&text&type=phone_number&app_absent=0",
      icon: <FaWhatsapp className="h-4 w-4" />,
    },
    {
      label: "Telegram",
      href: "https://t.me/tonyfranz",
      icon: <FaTelegramPlane className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/franz-abadia-62240a239",
      icon: <FaLinkedin className="h-4 w-4" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #070C1E 0%, #0B1530 60%, #0E1A38 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 15% 25%, rgba(252,211,77,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          <ScrollReveal>
            <div className="flex flex-col justify-between gap-10">
              <div>
                <p
                  className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em]"
                  style={{
                    color: "rgba(252,211,77,0.7)",
                    border: "1px solid rgba(252,211,77,0.25)",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "4px",
                  }}
                >
                  A Legacy in Ink
                </p>

                <h2
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
                  style={{ lineHeight: 1.05 }}
                >
                  Let&apos;s write your story{" "}
                  <span className="font-light italic" style={{ color: "rgba(252,211,77,0.9)" }}>
                    for the centuries.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-base text-slate-400">
                  Are you ready to remove the burden of copywriting within your system?
                </p>
                <p
                  className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: "rgba(252,211,77,0.6)" }}
                >
                  I&apos;ll respond within 24 hours after receiving the message.
                </p>
              </div>

              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Let&apos;s Chat!
                </p>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B639433049913&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-amber-400 transition-colors group-hover:bg-amber-400/20"
                      style={{
                        background: "rgba(252,211,77,0.08)",
                        border: "1px solid rgba(252,211,77,0.18)",
                      }}
                    >
                      <FiPhone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Phone / WhatsApp</p>
                      <p className="text-sm font-medium text-white">+63 943 304 9913</p>
                    </div>
                  </a>

                  <a
                    href="mailto:franzabadiacopywriter@gmail.com"
                    className="group flex items-center gap-4"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-amber-400 transition-colors group-hover:bg-amber-400/20"
                      style={{
                        background: "rgba(252,211,77,0.08)",
                        border: "1px solid rgba(252,211,77,0.18)",
                      }}
                    >
                      <FiMail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Email</p>
                      <p className="text-sm font-medium text-white">abadiafrancisanthony@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div className="mt-8">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Connect Digitally
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-amber-400 transition-all hover:scale-110"
                        style={{
                          background: "rgba(252,211,77,0.08)",
                          border: "1px solid rgba(252,211,77,0.18)",
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right Column: Form ── */}
          <ScrollReveal delay={200}>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(13,19,40,0.72)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(96,165,250,0.08)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {sent ? (
                <div className="flex h-full min-h-[340px] flex-col items-center justify-center gap-4 text-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-amber-400"
                    style={{ background: "rgba(252,211,77,0.12)", border: "1px solid rgba(252,211,77,0.3)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-400">Your email has successfully been dispatched. I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* First / Last name row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Franz"
                        className="rounded-lg border bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:ring-1"
                        style={{
                          borderColor: "rgba(96,165,250,0.12)",
                          // @ts-ignore
                          "--tw-ring-color": "rgba(252,211,77,0.3)",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Abadia"
                        className="rounded-lg border bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:ring-1"
                        style={{ borderColor: "rgba(96,165,250,0.12)" }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="rounded-lg border bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:ring-1"
                      style={{ borderColor: "rgba(96,165,250,0.12)" }}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      className="resize-none rounded-lg border bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:ring-1"
                      style={{ borderColor: "rgba(96,165,250,0.12)" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold mt-2 w-full text-sm font-bold uppercase tracking-[0.15em] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}