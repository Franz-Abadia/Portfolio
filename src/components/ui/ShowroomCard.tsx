import { ShowroomItem } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ShowroomCardProps {
  item: ShowroomItem;
}

export function ShowroomCard({ item }: ShowroomCardProps) {
  const content = (
    <>
      {/* Image placeholder */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 90vw, 460px"
        />
        <div className="absolute inset-0 bg-linear-to-br from-accent/20 via-accent/5 to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
            View PDF →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {item.category}
        </p>
        <h3 className="text-lg font-semibold text-card-foreground">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full bg-accent-soft px-3 py-0.5 text-xs font-medium text-accent"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-border bg-card hover-lift"
        aria-label={`Open ${item.title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card hover-lift">
      {content}
    </div>
  );
}
