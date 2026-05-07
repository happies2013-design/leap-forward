import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Leap" },
      { name: "description", content: "Log in to your Leap workspace." },
    ],
  }),
  component: () => <AuthForm mode="login" />,
});
