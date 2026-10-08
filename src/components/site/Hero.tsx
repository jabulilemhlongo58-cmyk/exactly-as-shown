import { ArrowRight, CheckCircle2, Circle, FileText, ListChecks, PlayCircle, Search, Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-soft-glow">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 text-center md:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
          <span className="size-1.5 rounded-full bg-success" /> Research → Plan → Create → Complete
        </span>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Create. Plan. Research. <span className="text-brand">All with AI.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          One intelligent workspace that helps you turn ideas into content, goals into action plans, and complex information into clear insights.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="brand" size="lg">Get Started Free <ArrowRight /></Button>
          <Button variant="outline" size="lg" asChild><a href="#how"><PlayCircle /> See How It Works</a></Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Free plan available · No credit card required</p>
        <Workspace />
      </div>
    </section>
  );
}

function Workspace() {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl text-left">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" /><span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 text-xs text-muted-foreground">Workspace · Website Launch</span>
        </div>
        <div className="grid md:grid-cols-[200px_1fr]">
          <aside className="hidden border-r border-border p-4 text-sm md:block">
            {[[Search, "Research", true], [ListChecks, "Planner", false], [Wand2, "Generator", false], [FileText, "Documents", false]].map(([I, l, a]) => {
              const Icon = I as typeof Search;
              return (
                <div key={l as string} className={`mb-1 flex items-center gap-2 rounded-lg px-3 py-2 ${a ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"}`}>
                  <Icon className="size-4" /> {l as string}
                </div>
              );
            })}
          </aside>
          <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            <Panel icon={Search} title="Research" tag="12 sources">
              <p className="text-xs text-muted-foreground">Q: What makes a landing page convert?</p>
              {["Clear value proposition above the fold", "Social proof near CTAs", "One primary action per section"].map((t) => (
                <div key={t} className="mt-2 rounded-lg bg-muted p-2 text-xs text-foreground">{t}</div>
              ))}
            </Panel>
            <Panel icon={ListChecks} title="Plan" tag="64% done">
              <div className="mb-3 h-1.5 rounded-full bg-muted"><div className="h-full w-[64%] rounded-full bg-brand" /></div>
              {[["Write hero copy", true], ["Design pricing", true], ["Collect testimonials", false], ["QA & launch", false]].map(([t, d]) => (
                <div key={t as string} className="flex items-center gap-2 py-1 text-xs">
                  {d ? <CheckCircle2 className="size-4 text-success" /> : <Circle className="size-4 text-muted-foreground" />}
                  <span className={d ? "text-muted-foreground line-through" : "text-foreground"}>{t as string}</span>
                </div>
              ))}
            </Panel>
            <Panel icon={Wand2} title="Create" tag="Drafting">
              <p className="text-xs leading-relaxed text-foreground">
                <span className="font-semibold">Hero headline:</span> Launch faster with a site that explains itself in five seconds…
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full animate-pulse rounded bg-muted" />
                <div className="h-2 w-4/5 animate-pulse rounded bg-muted" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {["Rewrite", "Improve", "Shorten"].map((a) => <span key={a} className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{a}</span>)}
              </div>
            </Panel>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 left-6 hidden animate-float items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card md:flex">
        <Sparkles className="size-4 text-violet" /> 3 insights turned into 4 tasks
      </div>
    </div>
  );
}

function Panel({ icon: Icon, title, tag, children }: { icon: typeof Search; title: string; tag: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-4 transition hover:shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold"><Icon className="size-4 text-primary" />{title}</span>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">{tag}</span>
      </div>
      {children}
    </div>
  );
}
