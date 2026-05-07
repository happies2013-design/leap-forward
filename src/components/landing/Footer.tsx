import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols: Array<{ title: string; links: Array<{ label: string; to: any }> }> = [
    {
      title: "Product",
      links: [
        { label: "Features", to: "/" },
        { label: "Pricing", to: "/pricing" },
        { label: "Enterprise", to: "/enterprise" },
        { label: "Changelog", to: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Docs", to: "/help" },
        { label: "Community", to: "/community" },
        { label: "Blog", to: "/blog" },
        { label: "Help Center", to: "/help" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/enterprise" },
        { label: "Contact", to: "/enterprise" },
        { label: "Login", to: "/login" },
        { label: "Sign up", to: "/signup" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-semibold tracking-tight text-foreground">LEAP</span>
              <div className="grid grid-cols-2 gap-[2px]">
                <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
                <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
                <span className="h-1.5 w-1.5 rounded-[1px] bg-leaf" />
                <span className="h-1.5 w-1.5 rounded-[1px] bg-foreground" />
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI that helps you build full-stack apps in your own cloud.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Leap. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Powered by Encore</p>
        </div>
      </div>
    </footer>
  );
}
