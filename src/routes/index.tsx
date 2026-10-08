import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { GeneratorShowcase, PlannerShowcase, ResearchShowcase } from "@/components/site/Showcases";
import { Overview, HowItWorks, Workflow, UseCases, Features, SocialProof, Pricing, FAQ, FinalCTA, Footer } from "@/components/site/Sections";

const title = "Smart Generator — AI Workspace for Creating, Planning & Research";
const description = "Create content, plan projects, and research smarter with one powerful AI productivity workspace.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <HowItWorks />
        <GeneratorShowcase />
        <PlannerShowcase />
        <ResearchShowcase />
        <Workflow />
        <UseCases />
        <Features />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
