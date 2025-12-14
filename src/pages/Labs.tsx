import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Brain, FileSpreadsheet, LineChart, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Labs = () => {
  const demos = [
    { icon: Brain, title: "Compliance Assistant (RAG)", description: "Upload docs → Ask questions → Get clause-linked answers", replaces: "Manual policy searching", setup: "2–3 weeks", inputs: "PDF/Word policy docs" },
    { icon: FileSpreadsheet, title: "Excel → PDF Report Engine", description: "Upload Excel → Get branded PDF + scheduled mail", replaces: "Manual formatting", setup: "1–2 weeks", inputs: "Standard Excel template" },
    { icon: LineChart, title: "Client Review Generator", description: "Holdings in → Summary, insights, actions out", replaces: "Manual slide prep", setup: "2–4 weeks", inputs: "Portfolio data" },
    { icon: Users, title: "RM Efficiency Toolkit", description: "Lead enrichment, agenda, summaries → CRM tasks", replaces: "Scattered manual work", setup: "3–4 weeks", inputs: "CRM access" },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">Labs</p>
          <h1 className="mb-6">Interactive Demos</h1>
          <p className="text-lg text-muted-foreground">
            Built from real workflows. See what's possible before you commit.
          </p>
        </div>

        <div className="space-y-6">
          {demos.map((demo, i) => (
            <Card key={i} className="p-8 border border-border/50 hover:border-primary/30 transition-all bg-card/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <demo.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                  <p className="text-muted-foreground mb-3">{demo.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span><strong>Replaces:</strong> {demo.replaces}</span>
                    <span><strong>Setup:</strong> {demo.setup}</span>
                    <span><strong>Inputs:</strong> {demo.inputs}</span>
                  </div>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Button variant="outline" asChild className="border-secondary/20 text-secondary hover:bg-secondary/5">
                    <Link to="/contact">Request Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Discuss Your Workflow</h2>
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Demo Call <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Labs;
