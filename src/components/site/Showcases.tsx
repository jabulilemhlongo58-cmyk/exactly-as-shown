import { useState } from "react";
import { ArrowRight, BookOpen, Calendar, CheckCircle2, Circle, Lightbulb, Link2, Loader2, RefreshCw, Save, Search, Sparkles, Wand2, ListChecks, Minimize2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function Section({ id, eyebrow, title, text, cta, reverse, children }: { id: string; eyebrow: string; title: string; text: string; cta: string; reverse?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto grid max-w-7xl scroll-mt-20 items-center gap-12 px-5 py-20 lg:grid-cols-[5fr_7fr]">
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{text}</p>
        <Button variant="brand" size="lg" className="mt-8">{cta} <ArrowRight /></Button>
      </div>
      <div className="rounded-3xl border border-border bg-card p-5 shadow-elevated md:p-6">{children}</div>
    </section>
  );
}

const outputs = [
  "Smart Generator is an AI workspace that helps you research, plan, and create in one place — so you spend less time switching tools and more time finishing work.",
  "Stop juggling tabs. Smart Generator brings research, planning, and writing together so every idea moves from first thought to finished work.",
  "One workspace for the whole job: research the topic, plan the steps, and generate the final draft — all with AI.",
];

export function GeneratorShowcase() {
  const [i, setI] = useState(0);
  const [loading, setLoading] = useState(false);
  const run = () => { setLoading(true); setTimeout(() => { setI((i + 1) % outputs.length); setLoading(false); }, 900); };
  return (
    <Section id="generator" eyebrow="Smart Generator" title="Turn ideas into polished work." text="Generate, rewrite, summarize, brainstorm, and create documents — from a blog post to a business proposal." cta="Start Generating">
      <div className="rounded-2xl border border-border bg-muted p-4">
        <p className="text-xs font-medium text-muted-foreground">Prompt</p>
        <p className="mt-1 text-sm">Write a short product description for an AI productivity workspace.</p>
      </div>
      <div className="mt-4 min-h-36 rounded-2xl border border-border p-4" aria-live="polite">
        <p className="mb-2 flex items-center gap-2 text-xs font-medium text-primary"><Sparkles className="size-3.5" /> Generated</p>
        {loading ? (
          <div className="space-y-2"><div className="h-3 w-full animate-pulse rounded bg-muted" /><div className="h-3 w-5/6 animate-pulse rounded bg-muted" /><div className="h-3 w-2/3 animate-pulse rounded bg-muted" /></div>
        ) : <p className="text-sm leading-relaxed">{outputs[i]}</p>}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[[Wand2, "Rewrite"], [TrendingUp, "Improve"], [Minimize2, "Summarize"], [RefreshCw, "Regenerate"]].map(([I, l]) => {
          const Icon = I as typeof Wand2;
          return <Button key={l as string} variant="outline" size="sm" onClick={run} disabled={loading}>{loading ? <Loader2 className="animate-spin" /> : <Icon />}{l as string}</Button>;
        })}
        <Button size="sm" className="ml-auto"><Save /> Save</Button>
      </div>
    </Section>
  );
}

const initialTasks = [
  { t: "Define audience & goals", p: "High", d: "Oct 10", done: true },
  { t: "Write homepage copy", p: "High", d: "Oct 14", done: true },
  { t: "Design key pages", p: "Medium", d: "Oct 18", done: false },
  { t: "Set up analytics", p: "Low", d: "Oct 21", done: false },
  { t: "Final QA & launch", p: "High", d: "Oct 25", done: false },
];

export function PlannerShowcase() {
  const [tasks, setTasks] = useState(initialTasks);
  const pct = Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100);
  return (
    <div className="bg-muted">
      <Section id="planner" reverse eyebrow="AI Task Planner" title="Turn goals into action." text="Convert objectives into tasks, priorities, deadlines, and project plans — and get recommendations on what to tackle next." cta="Plan My Next Project">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground">Project goal</p>
            <p className="text-lg font-semibold">Launch a new website</p>
          </div>
          <span className="text-2xl font-bold text-brand">{pct}%</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-muted" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <ul className="mt-5 divide-y divide-border">
          {tasks.map((task, idx) => (
            <li key={task.t}>
              <button className="flex w-full items-center gap-3 py-2.5 text-left text-sm" onClick={() => setTasks(tasks.map((x, j) => (j === idx ? { ...x, done: !x.done } : x)))}>
                {task.done ? <CheckCircle2 className="size-5 shrink-0 text-success" /> : <Circle className="size-5 shrink-0 text-muted-foreground" />}
                <span className={`flex-1 ${task.done ? "text-muted-foreground line-through" : ""}`}>{task.t}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${task.p === "High" ? "bg-destructive/10 text-destructive" : task.p === "Medium" ? "bg-warning/15 text-foreground" : "bg-muted text-muted-foreground"}`}>{task.p}</span>
                <span className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex"><Calendar className="size-3.5" />{task.d}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-3 rounded-2xl bg-accent p-4 text-sm text-accent-foreground">
          <Lightbulb className="size-5 shrink-0" />
          <p><span className="font-semibold">AI recommendation:</span> Start “Design key pages” today — it blocks QA and has the longest lead time.</p>
        </div>
      </Section>
    </div>
  );
}

export function ResearchShowcase() {
  return (
    <Section id="research" eyebrow="AI Research Assistant" title="Research smarter, not longer." text="Explore topics, summarize information, organize sources, and identify the insights that matter." cta="Start Researching">
      <div className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm">
        <Search className="size-4 text-muted-foreground" /> How are small businesses using AI in 2026?
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold"><Sparkles className="size-4 text-violet" /> Key findings</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Customer support and content are the most common uses</li>
            <li>• Time savings is the top reported benefit</li>
            <li>• Data privacy remains a key concern</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold"><BookOpen className="size-4 text-primary" /> Sources</p>
          {["Industry survey report", "Small business journal", "Market research brief"].map((s, i) => (
            <p key={s} className="flex items-center gap-2 py-1 text-sm text-muted-foreground"><Link2 className="size-3.5" /> [{i + 1}] {s}</p>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-muted p-4 text-sm">
        <p className="font-semibold">Summary</p>
        <p className="mt-1 text-muted-foreground">Adoption is growing fastest in everyday tasks where AI saves time without replacing core expertise.</p>
        <p className="mt-3 rounded-lg border-l-2 border-primary bg-background p-2 text-xs"><span className="font-semibold">Insight:</span> Start with repetitive, low-risk workflows.</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Which tools are most popular?", "What are the costs?", "How to get started?"].map((q) => (
          <span key={q} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary">{q}</span>
        ))}
      </div>
    </Section>
  );
}

export const icons = { Search, ListChecks, Wand2 };
