import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-medium uppercase tracking-widest text-leaf-deep">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground sm:text-7xl">
            {title} {highlight && <span className="italic text-gradient-hero">{highlight}</span>}
          </h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
