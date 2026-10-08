import { useState } from "react";
import { ChevronDown, Menu, Sparkles, X, Wand2, ListChecks, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
      <span className="grid size-8 place-items-center rounded-lg bg-brand text-primary-foreground">
        <Sparkles className="size-4" />
      </span>
      Smart Generator
    </a>
  );
}

const products = [
  { icon: Wand2, name: "Smart Generator", desc: "Create content & documents", href: "#generator" },
  { icon: ListChecks, name: "AI Task Planner", desc: "Turn goals into plans", href: "#planner" },
  { icon: Search, name: "AI Research Assistant", desc: "Research & summarize", href: "#research" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-1 text-sm font-medium text-muted-foreground lg:flex">
          <li className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 hover:text-foreground focus-visible:text-foreground">
              Product <ChevronDown className="size-3.5 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-2xl border border-border bg-popover p-2 opacity-0 shadow-card transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {products.map((p) => (
                <a key={p.name} href={p.href} className="flex gap-3 rounded-xl p-3 hover:bg-muted">
                  <p.icon className="mt-0.5 size-5 text-primary" />
                  <span>
                    <span className="block text-foreground">{p.name}</span>
                    <span className="text-xs">{p.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </li>
          {products.map((p) => (
            <li key={p.name}><a href={p.href} className="rounded-md px-3 py-2 hover:text-foreground">{p.name}</a></li>
          ))}
          <li><a href="#pricing" className="rounded-md px-3 py-2 hover:text-foreground">Pricing</a></li>
          <li><a href="#faq" className="rounded-md px-3 py-2 hover:text-foreground">Resources</a></li>
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost">Log In</Button>
          <Button variant="brand">Get Started Free</Button>
        </div>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {[...products.map((p) => [p.name, p.href]), ["Pricing", "#pricing"], ["Resources", "#faq"]].map(([n, h]) => (
            <a key={n} href={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium">{n}</a>
          ))}
          <div className="mt-3 grid gap-2">
            <Button variant="outline">Log In</Button>
            <Button variant="brand">Get Started Free</Button>
          </div>
        </div>
      )}
    </header>
  );
}
