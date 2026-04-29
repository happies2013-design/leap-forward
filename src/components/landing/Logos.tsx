export function Logos() {
  const companies = ["Google", "Microsoft", "NVIDIA", "Spotify", "Meta", "Airbnb"];
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Chosen by professionals from
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((c) => (
            <span
              key={c}
              className="text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
