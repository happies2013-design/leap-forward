import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-widest text-leaf-deep">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
        {title} {highlight && <span className="italic text-gradient-hero">{highlight}</span>}
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
