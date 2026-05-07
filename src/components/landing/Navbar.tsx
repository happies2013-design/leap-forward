import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

function Logo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xl font-semibold tracking-tight text-foreground">LEAP</span>
      <div className="grid grid-cols-2 gap-[2px]">
        <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
        <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
        <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
        <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
      </div>
    </div>
  );
}

const links = [
  { label: "Enterprise", to: "/enterprise" as const },
  { label: "Help Center", to: "/help" as const },
  { label: "Community", to: "/community" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Pricing", to: "/pricing" as const },
];

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link to="/" aria-label="Leap home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {user ? (
            <Link
              to="/dashboard"
              className="inline-flex h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background hover:opacity-90"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden h-9 items-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground hover:bg-secondary sm:inline-flex"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background hover:opacity-90"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
