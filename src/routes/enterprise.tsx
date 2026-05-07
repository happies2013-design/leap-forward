import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/landing/PageLayout";
import { PageHero } from "@/components/landing/PageHero";
import { Section, SectionHeading } from "@/components/landing/Section";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Shield, Building2, Users, Lock, Headphones, Server } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise — Leap" },
      { name: "description", content: "Deploy AI-built apps to your own cloud with SOC 2 controls, SSO, audit logs and dedicated support." },
      { property: "og:title", content: "Enterprise — Leap" },
      { property: "og:description", content: "Bring Leap to your enterprise: SOC 2, SSO, BYOC and dedicated support." },
    ],
  }),
  component: EnterprisePage,
});

const features = [
  { icon: Shield, title: "SOC 2 Type II", desc: "Independently audited security controls covering availability, confidentiality and integrity." },
  { icon: Server, title: "Bring Your Own Cloud", desc: "Deploy into your AWS or GCP account. Your data, your network, your perimeter." },
  { icon: Lock, title: "SSO & SCIM", desc: "Okta, Azure AD, Google Workspace. Provision and de-provision users automatically." },
  { icon: Users, title: "Role-based access", desc: "Granular permissions across orgs, projects and environments." },
  { icon: Building2, title: "Procurement-ready", desc: "MSAs, DPAs, custom invoicing and security reviews — handled." },
  { icon: Headphones, title: "Dedicated support", desc: "Slack-connected support, named CSM and 24/7 incident response." },
];

function EnterprisePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Enterprise"
        title="Built for"
        highlight="serious teams"
        description="Ship AI-generated full-stack apps with the controls, compliance and cloud isolation your security team requires."
      />
      <Section>
        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="bg-card p-7">
              <Icon className="h-6 w-6 text-leaf-deep" />
              <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          align="center"
          title="Talk to"
          highlight="our team"
          description="Tell us about your stack, your cloud and your constraints. We'll show you how Leap fits."
        />
        <Reveal>
          <div className="mx-auto mt-10 max-w-md text-center">
            <Link
              to="/signup"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background hover:opacity-90"
            >
              Request a demo →
            </Link>
          </div>
        </Reveal>
      </Section>
    </PageLayout>
  );
}
