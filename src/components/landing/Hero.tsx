import { ArrowUp, Sparkles, Database, Paperclip } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-[88px]">
          AI that helps you build
          <br />
          <span className="text-gradient-hero italic">full-stack apps</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          From internal tools to new products, build apps that matter.
          <br className="hidden sm:block" />
          Secure, scalable, and always under your control in your own cloud.
        </p>

        <p className="mt-4 text-sm font-medium text-leaf-deep">No coding required</p>

        {/* Prompt box */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="leaf-glow rounded-2xl bg-card p-4 text-left">
            <div className="flex items-start gap-3">
              <textarea
                rows={3}
                placeholder="Build an Outbound Campaign"
                className="w-full resize-none bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                aria-label="Submit"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background transition-opacity hover:opacity-90"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary">
                  <Sparkles className="h-3.5 w-3.5 text-leaf-deep" />
                  Surprise me
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary">
                  <Database className="h-3.5 w-3.5" />
                  Connect Database
                </button>
              </div>
              <button className="text-muted-foreground hover:text-foreground" aria-label="Attach">
                <Paperclip className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Powered by Encore · <span className="font-medium text-foreground">10k+</span> on GitHub
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#why"
            className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            ▶ Watch demo
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground hover:bg-secondary"
          >
            How to prompt Leap
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Help Center
          </a>
        </div>
      </div>
    </section>
  );
}
