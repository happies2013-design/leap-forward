import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Section, SectionHeading } from "@/components/landing/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, BookOpen, Rocket, Database, Cloud, Lock } from "lucide-react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center — Leap" },
      { name: "description", content: "Guides, tutorials and answers to common questions about building with Leap." },
      { property: "og:title", content: "Help Center — Leap" },
      { property: "og:description", content: "Documentation and FAQs for Leap." },
    ],
  }),
  component: HelpPage,
});

const topics = [
  { icon: Rocket, title: "Getting started", count: 12 },
  { icon: BookOpen, title: "Prompting guide", count: 18 },
  { icon: Database, title: "Databases", count: 9 },
  { icon: Cloud, title: "Deployment", count: 14 },
  { icon: Lock, title: "Security", count: 7 },
  { icon: BookOpen, title: "Billing", count: 5 },
];

const faqs = [
  { q: "Do I need to know how to code?", a: "No. Leap generates production-ready frontend, backend, database and infrastructure from natural-language prompts. You can review the code, but you don't have to write it." },
  { q: "Where is my app deployed?", a: "By default, Leap-managed cloud. On Pro and Enterprise plans you can bring your own AWS or GCP account so your data never leaves your perimeter." },
  { q: "Can I export my code?", a: "Yes. Every Leap project is real code in a real Git repo. You own it, you can clone it, you can leave any time." },
  { q: "What about secrets and environment variables?", a: "Secrets are stored encrypted and only injected at runtime in your environment. They never appear in source." },
  { q: "Is Leap SOC 2 compliant?", a: "Yes — SOC 2 Type II. Audit reports are available under NDA on the Enterprise plan." },
];

function HelpPage() {
  const [query, setQuery] = useState("");
  return (
    <PageLayout>
      <PageHero
        eyebrow="Help Center"
        title="How can we"
        highlight="help?"
        description="Search the docs, browse topics, or reach out — we usually reply within an hour."
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 leaf-glow">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the docs…"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
        </div>

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.06}>
          {topics.map(({ icon: Icon, title, count }) => (
            <StaggerItem
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-leaf"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Icon className="h-5 w-5 text-leaf-deep" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground">{count} articles</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading align="center" title="Frequently asked" highlight="questions" />
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </PageLayout>
  );
}
