import { Link } from "@tanstack/react-router";

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

export function Navbar() {
  const links = [
    { label: "Enterprise", to: "/" },
    { label: "Help Center", to: "/" },
    { label: "Community", to: "/" },
    { label: "Blog", to: "/" },
    { label: "Pricing", to: "/" },
  ];

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
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden h-9 items-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex">
            Log in
          </button>
          <button className="inline-flex h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
