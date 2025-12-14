import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import ProgramTimeline from "@/components/ProgramTimeline";
import { Workflow, LineChart, Settings, ArrowRight, Check, CheckCircle } from "lucide-react";

const Services = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Reporting & Review Systems",
      description: "Automated reporting pipelines that replace manual Excel stitching with branded, error-free outputs.",
      features: ["Client review pack generation", "Automated PDF reports", "Scheduled distributions", "Template management"],
    },
    {
      icon: Settings,
      title: "RM Operations & Client Communication",
      description: "Query tracking, response routing, and meeting prep systems that reduce response lag.",
      features: ["Query tracking dashboard", "Meeting prep copilots", "Automated note generation", "CRM integration"],
    },
    {
      icon: LineChart,
      title: "Compliance Knowledge & Documentation",
      description: "RAG-powered knowledge systems for instant, auditable compliance answers.",
      features: ["SEBI/AMFI policy lookup", "Internal SOP search", "Audit trail logging", "Document indexing"],
    },
    {
      icon: Settings,
      title: "Research Intelligence & Dashboards",
      description: "Portfolio analytics, risk monitoring, and market intelligence aggregation.",
      features: ["Multi-asset allocation", "Risk dashboards", "Fund screening", "Performance attribution"],
    },
  ];

  const phases = [
    { phase: "01", title: "Discovery", duration: "1–2 weeks", description: "Map workflows, pain points, and compliance constraints." },
    { phase: "02", title: "Architecture", duration: "1 week", description: "System blueprint, access model, and acceptance criteria." },
    { phase: "03", title: "Build", duration: "2–6 weeks", description: "Iterative delivery with weekly demos." },
    { phase: "04", title: "Integration", duration: "1–2 weeks", description: "Deployment + team onboarding + SOPs." },
    { phase: "05", title: "Support", duration: "Ongoing", description: "Maintenance, monitoring, and upgrades." },
  ];

  const integrations = ["Excel", "Google Workspace / M365", "CRM systems", "WhatsApp (approved methods)", "PDF pipelines", "Custom APIs"];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">Solutions</p>
          <h1 className="mb-6">Systems You Can Implement</h1>
          <p className="text-lg text-muted-foreground">
            Organized by workflow, not by technology. We build what you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {solutions.map((solution, i) => (
            <Card key={i} className="p-8 border border-border/50 hover:border-primary/30 transition-all bg-card/80">
              <solution.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Delivery</p>
          <h2 className="mb-4">Engagement Model</h2>
        </div>
        <ProgramTimeline phases={phases} />
      </SectionContainer>

      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-center">Integrations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground border border-border/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6">Discuss Your Requirements</h2>
          <p className="text-muted-foreground mb-8">Every engagement begins with understanding your specific context.</p>
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Blueprint Call <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Services;
