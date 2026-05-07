import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Section, SectionHeading } from "@/components/landing/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MessageCircle, Github, Twitter, Youtube } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Leap" },
      { name: "description", content: "Join thousands of builders shipping AI-generated full-stack apps with Leap." },
      { property: "og:title", content: "Community — Leap" },
      { property: "og:description", content: "Discord, GitHub, events and more." },
    ],
  }),
  component: CommunityPage,
});

const channels = [
  { icon: MessageCircle, title: "Discord", desc: "Chat with builders, get help and share what you ship.", cta: "Join Discord" },
  { icon: Github, title: "GitHub", desc: "Star the repo, file issues and contribute to Encore.", cta: "Open GitHub" },
  { icon: Twitter, title: "X / Twitter", desc: "Follow @leap for product updates and live demos.", cta: "Follow @leap" },
  { icon: Youtube, title: "YouTube", desc: "Watch tutorials, livestreams and build sessions.", cta: "Subscribe" },
];

const showcase = [
  { name: "OutboundOS", by: "Maya R.", desc: "Sales engagement platform built in 4 days." },
  { name: "OpsRoom", by: "Daniel K.", desc: "Internal incident-response cockpit for a 200-engineer org." },
  { name: "Lumen", by: "Priya S.", desc: "B2B analytics product shipped solo, deployed to AWS." },
];

function CommunityPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Community"
        title="Builders, find your"
        highlight="people"
        description="Tens of thousands of developers and product teams ship with Leap. Come hang out."
      />
      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {channels.map(({ icon: Icon, title, desc, cta }) => (
            <StaggerItem
              key={title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-leaf"
            >
              <Icon className="h-6 w-6 text-leaf-deep" />
              <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <button className="mt-5 text-sm font-medium text-foreground hover:underline">
                {cta} →
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Showcase"
          title="Built with"
          highlight="Leap"
          description="A few of our favorite apps shipped this month."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {showcase.map((s) => (
            <StaggerItem key={s.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-leaf/30 via-secondary to-background" />
              <h3 className="mt-5 font-display text-xl text-foreground">{s.name}</h3>
              <p className="text-xs text-muted-foreground">by {s.by}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </PageLayout>
  );
}
