import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Section } from "@/components/landing/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Leap" },
      { name: "description", content: "Simple, usage-based pricing. Start free. Upgrade when you ship to production." },
      { property: "og:title", content: "Pricing — Leap" },
      { property: "og:description", content: "Free to start. Pro and Enterprise plans for production teams." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    cadence: "forever",
    desc: "For individuals exploring what Leap can build.",
    features: ["3 projects", "Community support", "Shared infrastructure", "10 builds / day"],
    cta: "Start free",
    to: "/signup" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    cadence: "per user / month",
    desc: "For teams shipping real products to real users.",
    features: ["Unlimited projects", "Priority support", "Custom domains", "Team collaboration", "Audit logs"],
    cta: "Start trial",
    to: "/signup" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    desc: "BYOC, SOC 2, SSO and dedicated support.",
    features: ["Bring Your Own Cloud", "SSO & SCIM", "Dedicated CSM", "Custom SLA", "Procurement support"],
    cta: "Talk to sales",
    to: "/enterprise" as const,
    highlight: false,
  },
];

function PricingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Pricing"
        title="Pay as you"
        highlight="scale"
        description="Start free, no credit card. Upgrade when your app is ready for production traffic."
      />
      <Section>
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.1}>
          {tiers.map((t) => (
            <StaggerItem
              key={t.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                t.highlight ? "border-leaf bg-card leaf-glow" : "border-border bg-card/60"
              }`}
            >
              <h3 className="font-display text-2xl text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl text-foreground">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={t.to}
                className={`mt-8 inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium ${
                  t.highlight
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                {t.cta}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </PageLayout>
  );
}
