import { ProcessStepData } from "@/types";

export const processSteps: ProcessStepData[] = [
  {
    id: 1,
    number: "01",
    title: "Discovery",
    description:
      "The initial immersion. We unearth the core narrative through deep interrogation and brand audit.",
    icon: "discovery",
    tags: ["Stakeholder Audit", "Narrative Mapping"],
  },
  {
    id: 2,
    number: "02",
    title: "Research",
    description:
      'Analyzing market friction and cultural zeitgeist to find the "Silent Void" your project will fill.',
    icon: "research",
    tags: ["Cultural Trends", "UX Archetypes"],
  },
  {
    id: 3,
    number: "03",
    title: "Strategy",
    description:
      "Architecting the visual and cognitive framework. We define the constraints that invite true creativity.",
    icon: "strategy",
    tags: ["Visual DNA", "User Flow"],
  },
  {
    id: 4,
    number: "04",
    title: "Copywriting",
    description:
      "Precision-tuned language that creates emotional resonance and guides the user toward intent.",
    icon: "copywriting",
    tags: ["Microcopy", "Brand Voice"],
  },
  {
    id: 5,
    number: "05",
    title: "Optimization",
    description:
      "Polishing every pixel and interaction until the experience feels invisible yet indispensable.",
    icon: "optimization",
    tags: ["Perf Audit", "A/B Refinement"],
  },
];
