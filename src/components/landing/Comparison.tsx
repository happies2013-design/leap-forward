import { Check, X } from "lucide-react";

const features = [
  "AI Code Generation",
  "Builds Frontend for UI",
  "Builds Backends for Advanced Features",
  "Built-in PostgreSQL databases",
  "Deploys to Your Cloud",
  "Microservices & Event-Driven",
];

const tools = [
  { name: "Leap", values: [true, true, true, true, true, true], highlight: true },
  { name: "Bolt", values: [true, true, false, false, false, false] },
  { name: "v0", values: [true, true, false, false, false, false] },
  { name: "Lovable", values: [true, true, true, true, false, false] },
];

export function Comparison() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-4xl text-foreground sm:text-5xl">
          Why Builders Choose <span className="italic text-gradient-hero">Leap</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Compare Leap with other tools and see why it's the best choice for building full-stack applications.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 ${
                t.highlight
                  ? "border-leaf bg-card leaf-glow"
                  : "border-border bg-card/60"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
              <ul className="mt-5 space-y-3">
                {features.map((f, i) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    {t.values[i] ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    )}
                    <span className={t.values[i] ? "text-foreground" : "text-muted-foreground line-through"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
