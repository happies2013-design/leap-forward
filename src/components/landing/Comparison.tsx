import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

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
    <Section id="why">
      <SectionHeading
        align="center"
        title="Why Builders Choose"
        highlight="Leap"
        description="Compare Leap with other tools and see why it's the best choice for building full-stack applications."
      />
      <Stagger className="mt-14 grid gap-4 md:grid-cols-4" stagger={0.1}>
        {tools.map((t) => (
          <StaggerItem
            key={t.name}
            className={`rounded-2xl border p-6 ${
              t.highlight ? "border-leaf bg-card leaf-glow" : "border-border bg-card/60"
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
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
