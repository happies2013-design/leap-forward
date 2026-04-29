export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Enterprise", "Changelog"] },
    { title: "Resources", links: ["Docs", "How to prompt", "Community", "Blog"] },
    { title: "Company", links: ["About", "Careers", "Contact", "Brand"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
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
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                      {l}
                    </a>
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
