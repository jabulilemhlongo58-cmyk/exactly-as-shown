import { ArrowRight, Briefcase, CheckCircle2, Check, Download, FileText, FolderKanban, GraduationCap, Lightbulb, ListChecks, MessageSquare, Microscope, Palette, Rocket, Search, Sparkles, Star, LayoutTemplate, Users, Wand2, BarChart3, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "./Navbar";

function Heading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-semibold ${light ? "text-navy-foreground/60" : "text-primary"}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

const products = [
  { icon: Wand2, name: "Smart Generator", title: "Turn ideas into polished work.", text: "Generate, rewrite, summarize, brainstorm, and create documents.", href: "#generator" },
  { icon: ListChecks, name: "AI Task Planner", title: "Turn goals into action.", text: "Convert objectives into tasks, priorities, deadlines, and project plans.", href: "#planner" },
  { icon: Search, name: "AI Research Assistant", title: "Research smarter, not longer.", text: "Explore topics, summarize information, organize sources, and identify insights.", href: "#research" },
];

export function Overview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <Heading eyebrow="Three tools, one workspace" title="Everything you need to move work forward" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <a key={p.name} href={p.href} className="group rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
            <span className="grid size-12 place-items-center rounded-2xl bg-brand text-primary-foreground"><p.icon className="size-6" /></span>
            <p className="mt-6 text-sm font-semibold text-primary">{p.name}</p>
            <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground">{p.text}</p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold">Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Tell AI what you need", "Describe a goal, question, or idea in plain language."],
    ["Let AI organize the work", "Get research, a structured plan, and first drafts in seconds."],
    ["Review, refine, and complete", "Edit, improve, and export — you stay in control."],
  ];
  return (
    <section id="how" className="scroll-mt-20 border-y border-border bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="How it works" title="From idea to done in three steps" />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative rounded-3xl bg-card p-8 shadow-card">
              <span className="text-5xl font-extrabold text-brand">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Workflow() {
  const flow = [
    { icon: Search, label: "Research", text: "Research a topic" },
    { icon: Lightbulb, label: "Insights", text: "AI extracts insights" },
    { icon: ListChecks, label: "Plan", text: "Task Planner builds the action plan" },
    { icon: Wand2, label: "Create", text: "Smart Generator creates the output" },
    { icon: CheckCircle2, label: "Complete", text: "Ship finished work" },
  ];
  return (
    <section className="bg-navy py-24 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <Heading light eyebrow="Connected workflow" title="Research → Plan → Create → Complete" text="Each tool hands its work to the next, so nothing gets lost between tabs." />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 animate-flow md:block" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--primary) 0 20px, transparent 20px 40px)" }} aria-hidden />
          <ol className="relative grid gap-8 md:grid-cols-5">
            {flow.map((f, i) => (
              <li key={f.label} className="flex items-center gap-4 md:flex-col md:text-center">
                <span className={`grid size-16 shrink-0 place-items-center rounded-2xl ring-8 ring-navy ${i === 4 ? "bg-success" : "bg-brand"} text-primary-foreground shadow-elevated`}>
                  <f.icon className="size-7" />
                </span>
                <div>
                  <p className="font-bold">{f.label}</p>
                  <p className="mt-1 text-sm text-navy-foreground/65">{f.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  const cases = [
    { icon: GraduationCap, who: "Students", text: "Research assignments, outline essays, and plan study schedules around deadlines." },
    { icon: Microscope, who: "Researchers", text: "Summarize literature, organize sources, and surface key findings faster." },
    { icon: Rocket, who: "Entrepreneurs", text: "Validate ideas, plan launches, and draft pitches without a full team." },
    { icon: Briefcase, who: "Professionals", text: "Turn meetings into action items and write reports in minutes." },
    { icon: Palette, who: "Creators", text: "Brainstorm concepts, plan content calendars, and write scripts." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <Heading eyebrow="Use cases" title="Built for people who get things done" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {cases.map((c) => (
          <div key={c.who} className="rounded-2xl border border-border p-6 transition hover:border-primary/40 hover:shadow-card">
            <c.icon className="size-6 text-primary" />
            <h3 className="mt-4 font-bold">{c.who}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const f = [
    [Wand2, "AI content generation"], [ListChecks, "AI task planning"], [Search, "AI research"], [LayoutTemplate, "Templates"],
    [FileText, "Document creation"], [BookOpen, "Research summaries"], [FolderKanban, "Project organization"], [Sparkles, "AI suggestions"],
    [BarChart3, "Progress tracking"], [Download, "Exporting"], [Users, "Collaboration"], [MessageSquare, "Custom prompts"],
  ] as const;
  return (
    <section className="border-y border-border bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="Features" title="Powerful features, simple to use" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {f.map(([Icon, l]) => (
            <div key={l} className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-card">
              <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground"><Icon className="size-5" /></span>
              <span className="font-semibold">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const quotes = [
    ["“I went from a messy research doc to a full project plan in one afternoon.”", "Sample testimonial", "Graduate student"],
    ["“Having research, planning, and writing in one place saves me hours every week.”", "Sample testimonial", "Freelance consultant"],
    ["“Our launch checklist practically wrote itself.”", "Sample testimonial", "Small business owner"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <p className="text-center text-sm font-medium text-muted-foreground">Placeholder logos — your customers here</p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xl font-bold text-muted-foreground/50">
        {["Northwind", "Acme Co", "Lumen", "Brightpath", "Orbit"].map((l) => <span key={l}>{l}</span>)}
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {quotes.map(([q, n, r]) => (
          <figure key={r} className="rounded-3xl border border-border p-8">
            <div className="flex gap-0.5 text-warning">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
            <blockquote className="mt-4 text-lg">{q}</blockquote>
            <figcaption className="mt-6 text-sm"><span className="font-semibold">{n}</span> · <span className="text-muted-foreground">{r}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    { name: "Free", price: "$0", desc: "Basic AI generation, planning, and research.", items: ["Limited monthly generations", "3 projects", "Basic research summaries", "Core templates"], cta: "Get Started Free" },
    { name: "Pro", price: "$19", desc: "Advanced AI features, higher limits, more projects, and premium tools.", items: ["Higher generation limits", "Unlimited projects", "Advanced research & sources", "Premium templates", "Export to docs"], cta: "Start Pro", featured: true },
    { name: "Team", price: "$49", desc: "Everything in Pro plus collaboration and team management.", items: ["Everything in Pro", "Shared projects", "Team management", "Collaboration tools"], cta: "Start Team" },
  ];
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-border bg-muted py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="Pricing" title="Start free. Upgrade when you're ready." text="Placeholder pricing — final plans coming soon." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-3xl p-8 ${p.featured ? "bg-navy text-navy-foreground shadow-elevated lg:-translate-y-3" : "bg-card shadow-card"}`}>
              {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Most popular</span>}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-4"><span className="text-5xl font-extrabold">{p.price}</span><span className="opacity-60">/month</span></p>
              <p className={`mt-3 text-sm ${p.featured ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="size-4 shrink-0 text-primary" />{i}</li>)}
              </ul>
              <Button variant={p.featured ? "brand" : "outline"} size="lg" className="mt-8 w-full">{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["What is Smart Generator?", "Smart Generator is an AI productivity workspace that combines content creation, task planning, and research in one place."],
  ["How do the three AI tools work together?", "The Research Assistant gathers and summarizes information, the Task Planner turns insights into an action plan, and Smart Generator produces the final content — all within the same project."],
  ["What's the difference between Free and paid plans?", "Free covers the basics with usage limits. Pro raises limits and adds premium tools; Team adds shared projects and team management."],
  ["How does AI research work?", "Ask a question and the assistant explores the topic, summarizes key findings, and lists sources so you can review them yourself. Always verify important information."],
  ["Can I use custom prompts?", "Yes. You can write your own prompts or start from templates and save the ones you use often."],
  ["What are projects?", "Projects keep related research, tasks, and documents together so you can pick up exactly where you left off."],
  ["How is my data handled?", "Please review our Privacy Policy for details on how your information is collected, used, and stored."],
  ["Can I upgrade or downgrade anytime?", "Yes, you can change your plan whenever your needs change."],
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 py-24">
      <Heading eyebrow="FAQ" title="Frequently asked questions" />
      <Accordion type="single" collapsible className="mt-12">
        {faqs.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-5 pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-brand px-6 py-20 text-center text-primary-foreground shadow-elevated">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Turn your next idea into progress.</h2>
        <p className="mt-4 text-lg opacity-85">Create smarter. Plan better. Research faster.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="light" size="lg">Get Started Free <ArrowRight /></Button>
          <Button variant="ghostLight" size="lg" asChild><a href="#generator">Explore the Platform</a></Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = {
    Product: ["Smart Generator", "AI Task Planner", "AI Research Assistant", "Pricing"],
    Resources: ["Blog", "Guides", "Templates", "Help Center"],
    Company: ["About", "Contact", "Careers"],
    Legal: ["Privacy", "Terms", "Security"],
  };
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-6">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">One intelligent workspace for creating, planning, and researching.</p>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h}>
            <p className="text-sm font-semibold">{h}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {items.map((i) => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Smart Generator. All rights reserved.</p>
    </footer>
  );
}
