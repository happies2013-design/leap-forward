import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Plus, LogOut, Trash2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Leap" },
      { name: "description", content: "Your Leap workspace." },
    ],
  }),
  component: Dashboard,
});

type Project = {
  id: string;
  name: string;
  description: string | null;
  prompt: string | null;
  created_at: string;
};

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session?.user) {
        navigate({ to: "/login" });
      } else {
        setUser(session.user);
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session?.user) {
        navigate({ to: "/login" });
      } else {
        setUser(data.session.user);
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    void loadProjects();
  }, [user]);

  async function loadProjects() {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setProjects(data ?? []);
    setLoading(false);
  }

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !name.trim()) return;
    setCreating(true);
    const { error } = await supabase
      .from("projects")
      .insert({ user_id: user.id, name: name.trim(), prompt: prompt.trim() || null });
    setCreating(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Project created");
    setName("");
    setPrompt("");
    void loadProjects();
  }

  async function deleteProject(id: string) {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      setProjects((p) => p.filter((x) => x.id !== id));
      toast.success("Deleted");
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-1.5">
            <span className="text-xl font-semibold tracking-tight text-foreground">LEAP</span>
            <div className="grid grid-cols-2 gap-[2px]">
              <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
              <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
              <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
              <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
            </div>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-muted-foreground sm:inline">{user.email}</span>
            <button
              onClick={logout}
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-sm font-medium text-foreground hover:bg-secondary"
            >
              <LogOut className="h-4 w-4" /> Log out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Your <span className="italic text-gradient-hero">workspace</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Spin up a new app or pick up where you left off.</p>
        </motion.div>

        <motion.form
          onSubmit={createProject}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="leaf-glow mt-8 rounded-2xl bg-card p-5"
        >
          <div className="flex items-center gap-2 text-sm text-leaf-deep">
            <Sparkles className="h-4 w-4" /> New project
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Project name"
            className="mt-3 h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:border-leaf focus:outline-none"
          />
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={2}
            placeholder="Describe what you want to build…"
            className="mt-3 w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-leaf focus:outline-none"
          />
          <button
            type="submit"
            disabled={creating}
            className="mt-3 inline-flex h-10 items-center gap-1.5 rounded-md bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" /> {creating ? "Creating…" : "Create project"}
          </button>
        </motion.form>

        <div className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          {loading ? (
            <p className="mt-6 text-sm text-muted-foreground">Loading…</p>
          ) : projects.length === 0 ? (
            <p className="mt-6 text-sm text-muted-foreground">No projects yet. Create your first one above.</p>
          ) : (
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              <AnimatePresence>
                {projects.map((p) => (
                  <motion.li
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-2xl border border-border bg-card p-5 hover:border-leaf"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-display text-xl text-foreground">{p.name}</h3>
                        {p.prompt && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.prompt}</p>}
                        <p className="mt-3 text-xs text-muted-foreground">
                          {new Date(p.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteProject(p.id)}
                        className="text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
