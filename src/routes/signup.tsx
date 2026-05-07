import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — Leap" },
      { name: "description", content: "Create your free Leap account and start building full-stack apps." },
    ],
  }),
  component: () => <AuthForm mode="signup" />,
});
