import { ProcessStepData } from "@/types";

export const processSteps: ProcessStepData[] = [
  {
    id: 1,
    number: "01",
    title: "Website Copy",
    description:
      "Clear messaging for homepages, service pages, landing pages, and offer pages.",
    icon: "discovery",
    tags: ["Homepages", "Landing Pages", "Offers"],
  },
  {
    id: 2,
    number: "02",
    title: "Ad Scripts & Creative Copy",
    description:
      "Short-form video scripts, hooks, ad angles, and social copy built to stop scroll and drive action.",
    icon: "research",
    tags: ["Video Scripts", "Social Angles", "Hooks"],
  },
  {
    id: 3,
    number: "03",
    title: "Email Copy",
    description:
      "Launch emails, promo sequences, nurture flows, and direct-response campaigns.",
    icon: "strategy",
    tags: ["Promo Sequences", "Nurture Flows"],
  },
  {
    id: 4,
    number: "04",
    title: "Brand Messaging",
    description:
      "Positioning, offer clarity, voice direction, and message structure for brands that sound messy or generic.",
    icon: "copywriting",
    tags: ["Positioning", "Voice Direction"],
  },
  {
    id: 5,
    number: "05",
    title: "Copy Audits",
    description:
      "If your current copy feels weak, confusing, or flat, I break down what is not working and what to fix.",
    icon: "optimization",
    tags: ["Breakdowns", "Actionable Fixes"],
  },
];
