export function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-5xl leading-tight text-foreground sm:text-6xl">
          Ship the app <br />
          <span className="italic text-gradient-hero">your roadmap promised.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Start free. Bring your own cloud when you're ready to scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90">
            Start building →
          </button>
          <button className="inline-flex h-11 items-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-secondary">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}
