import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password — Leap" },
      { name: "description", content: "Set a new password for your Leap account." },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash.includes("type=recovery")) setReady(true);
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    navigate({ to: "/dashboard" });
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" aria-hidden />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">Reset password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {ready ? "Set a new password below." : "Open the link from your email to continue."}
          </p>
          <form onSubmit={handleSubmit} className="leaf-glow mt-8 space-y-4 rounded-2xl bg-card p-6">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">New password</label>
              <input
                type="password"
                required
                minLength={8}
                disabled={!ready}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-leaf focus:outline-none disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={!ready || loading}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-foreground text-sm font-medium text-background hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "…" : "Update password"}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
