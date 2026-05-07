import { Cloud, Cpu, Database, GitBranch, Lock, Zap } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const items = [
  { icon: Cpu, title: "AI-native architecture", desc: "Microservices & event-driven systems built right, generated from a single prompt." },
  { icon: Database, title: "Built-in PostgreSQL", desc: "Production-grade databases provisioned automatically — no setup, no glue code." },
  { icon: Cloud, title: "Deploy to your own cloud", desc: "AWS or GCP, your account, your control. Your data never leaves your perimeter." },
  { icon: GitBranch, title: "Real Git workflows", desc: "Every change is real code in a real repo. Review, branch, ship like a team." },
  { icon: Lock, title: "Enterprise-grade security", desc: "SOC 2, IAM, audit logs and secrets that stay in your environment." },
  { icon: Zap, title: "From prompt to prod", desc: "Backend, frontend, infra and CI — all generated and deployed in minutes." },
];

export function Features() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="The platform"
        title="One prompt."
        highlight="A full stack."
        description="Leap doesn't just write components — it ships entire systems with the architecture, infrastructure and observability your team would build by hand."
      />
      <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <StaggerItem key={title} className="bg-card p-7 transition-colors hover:bg-background">
            <Icon className="h-6 w-6 text-leaf-deep" />
            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
