import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Brain, FileSpreadsheet, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Labs = () => {
  const labs = [
    {
      number: "01",
      icon: Brain,
      title: "RAG Compliance Assistant",
      description: "Upload docs → Ask questions → Get clause-linked answers.",
      details: "Private document indexing with semantic search and citation. Perfect for SEBI, AMFI, and internal policy queries.",
    },
    {
      number: "02",
      icon: FileSpreadsheet,
      title: "Excel → PDF Report Engine",
      description: "Upload a standard Excel; get a branded PDF and scheduled mail.",
      details: "Automated template rendering with custom branding, data validation, and email distribution. Eliminate manual formatting forever.",
    },
    {
      number: "03",
      icon: LineChart,
      title: "Client Review Generator",
      description: "Holdings in → summary, insights, actions.",
      details: "AI-powered portfolio analysis that generates actionable insights, comparison metrics, and presentation-ready review packs.",
    },
    {
      number: "04",
      icon: Users,
      title: "RM Efficiency Toolkit",
      description: "Lead enrichment, agenda generator, call summaries, follow-ups → CRM tasks.",
      details: "End-to-end relationship management automation. From prospect research to meeting prep to automatic CRM updates.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-6">Labs</h1>
          <p className="text-xl text-muted-foreground">
            Proof-of-concept demos you can click and understand. Don't talk—show.
          </p>
        </div>

        <div className="space-y-8">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <Card
                key={index}
                className="p-8 lg:p-12 hover:shadow-elevated transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="text-6xl font-bold text-primary/20">{lab.number}</div>
                  </div>

                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h2 className="text-2xl font-semibold mb-3">{lab.title}</h2>
                    <p className="text-lg text-muted-foreground mb-2">{lab.description}</p>
                    <p className="text-sm text-muted-foreground">{lab.details}</p>
                  </div>

                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-16 p-8 lg:p-12 bg-primary text-primary-foreground">
          <div className="text-center">
            <h2 className="mb-4">Want to See These in Action?</h2>
            <p className="text-lg mb-6 opacity-90">
              Book a demo call and I'll walk you through live implementations tailored to your use case.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Demo Call
              </a>
            </Button>
          </div>
        </Card>
      </SectionContainer>
    </div>
  );
};

export default Labs;
