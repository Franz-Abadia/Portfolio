"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export function TypewriterText({ words, className }: TypewriterTextProps) {
  const { text } = useTypewriter({ words });

  return (
    <span className={className}>
      {text}
      <span className="cursor-blink text-accent">|</span>
    </span>
  );
}
