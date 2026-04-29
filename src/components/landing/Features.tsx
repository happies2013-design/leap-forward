import { Cloud, Cpu, Database, GitBranch, Lock, Zap } from "lucide-react";

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
    <section className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-leaf-deep">The platform</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            One prompt. <span className="italic text-gradient-hero">A full stack.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Leap doesn't just write components — it ships entire systems with the architecture, infrastructure and observability your team would build by hand.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-7 transition-colors hover:bg-background">
              <Icon className="h-6 w-6 text-leaf-deep" />
              <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
