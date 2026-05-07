import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Section } from "@/components/landing/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Leap" },
      { name: "description", content: "Engineering deep dives, product updates and stories from teams shipping with Leap." },
      { property: "og:title", content: "Blog — Leap" },
      { property: "og:description", content: "How teams build full-stack apps with AI." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Engineering", title: "How Leap generates production-grade microservices", date: "May 2, 2026", excerpt: "A look inside the planner, the type system, and the deployment pipeline." },
  { tag: "Product", title: "Bring Your Own Cloud is now generally available", date: "Apr 18, 2026", excerpt: "Deploy AI-generated apps directly into your AWS or GCP account." },
  { tag: "Customer", title: "How Northwind ships internal tools 10× faster", date: "Apr 4, 2026", excerpt: "Replacing months of backlog with prompt-driven development." },
  { tag: "Engineering", title: "Type-safe RPC for AI-generated backends", date: "Mar 21, 2026", excerpt: "End-to-end types from your database to your React components." },
  { tag: "Security", title: "What SOC 2 Type II means for AI dev tools", date: "Mar 7, 2026", excerpt: "Our auditor walks through the controls that matter for AI codegen." },
  { tag: "Product", title: "Real Git workflows for AI-built apps", date: "Feb 14, 2026", excerpt: "Branches, reviews and CI for code an LLM wrote." },
];

function BlogPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog"
        title="Notes from"
        highlight="the build"
        description="Product launches, engineering deep dives and stories from teams shipping with Leap."
      />
      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {posts.map((p) => (
            <StaggerItem
              key={p.title}
              className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-leaf hover:leaf-glow"
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                {p.tag}
              </span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-foreground">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{p.date}</span>
                <span className="inline-flex items-center gap-1 text-foreground">
                  Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </PageLayout>
  );
}
