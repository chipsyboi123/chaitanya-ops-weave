import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import PillarCard from "@/components/PillarCard";
import ProgramTimeline from "@/components/ProgramTimeline";
import { ArrowRight, Workflow, LineChart, Settings, CheckCircle, ArrowLeft } from "lucide-react";

const RoughWork = () => {
  const pillars = [
    {
      icon: Workflow,
      title: "Automation & Workflow Systems",
      bullets: [
        "RMs: query tracking + response routing",
        "Meeting prep copilots + note generation",
        "Document pipelines: intake → extract → action",
      ],
      outcome: "Reduce response lag, eliminate repetitive admin.",
    },
    {
      icon: LineChart,
      title: "Research & Portfolio Intelligence",
      bullets: [
        "Multi-asset allocation models",
        "Risk monitoring dashboards",
        "Market intelligence aggregation",
      ],
      outcome: "Make decisions with consistent, explainable systems.",
    },
    {
      icon: Settings,
      title: "Operations & Client Experience",
      bullets: [
        "CRM architecture + onboarding flows",
        "Reporting pipeline automation",
        "Task/commitment tracking",
      ],
      outcome: "Faster cycles, fewer misses, premium client experience.",
    },
  ];

  const programPhases = [
    {
      phase: "01",
      title: "Discovery",
      duration: "1–2 weeks",
      description: "Map workflows, pain points, and compliance constraints.",
    },
    {
      phase: "02",
      title: "Architecture",
      duration: "1 week",
      description: "System blueprint, access model, and acceptance criteria.",
    },
    {
      phase: "03",
      title: "Build",
      duration: "2–6 weeks",
      description: "Iterative delivery with weekly demos.",
    },
    {
      phase: "04",
      title: "Integration",
      duration: "1–2 weeks",
      description: "Deployment + team onboarding + SOPs.",
    },
    {
      phase: "05",
      title: "Support",
      duration: "Ongoing",
      description: "Maintenance, monitoring, and upgrades.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Back Link */}
      <div className="container mx-auto px-4 lg:px-6 mb-8">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <SectionContainer>
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Work in Progress</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Rough Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internal documentation and work-in-progress content.
          </p>
        </div>
      </SectionContainer>

      {/* THREE PILLARS */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars of systems that reduce manual work and compound in value over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </SectionContainer>

      {/* IMPLEMENTATION PROGRAM */}
      <SectionContainer>
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Delivery Model</p>
          <h2 className="mb-4">The EnableWealth Implementation Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach that de-risks delivery in regulated environments.
          </p>
        </div>

        <ProgramTimeline phases={programPhases} />

        <Card className="mt-10 p-6 border border-border/50 bg-card/50 max-w-2xl mx-auto">
          <h4 className="text-sm font-semibold mb-4">What You Get</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            {[
              "Workflow map",
              "Blueprint doc",
              "Working system",
              "Documentation",
              "Team onboarding",
              "Ongoing support",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center">
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <Link to="/">
              Return to Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default RoughWork;
