import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, CheckCircle, X } from "lucide-react";

const About = () => {
  const philosophy = [
    { title: "Precision Over Volume", desc: "Every automation must be exact. In financial workflows, there is no room for approximation." },
    { title: "Domain-First Design", desc: "Understanding the workflow comes before building the solution." },
    { title: "Discretion as Default", desc: "Security and compliance are built into architecture, not bolted on." },
    { title: "Systems, Not Band-Aids", desc: "We build infrastructure that compounds in value—not quick fixes." },
  ];

  const willNot = [
    "No black-box bots without explainability",
    "No unsafe data handling",
    "No generic templates without workflow mapping",
    "No hype-driven implementations",
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">About</p>
            <h1 className="mb-6">EnableWealth</h1>
            <p className="text-lg text-muted-foreground">
              Building institutional-grade systems for the next generation of Indian wealth management.
            </p>
          </div>

          <Card className="p-8 border border-border/50 bg-card/80 mb-12">
            <h2 className="text-2xl font-serif mb-6">Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {philosophy.map((item, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-5">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 border border-border/50 bg-card/80 mb-12">
            <h3 className="text-lg font-semibold mb-6">What We Will Not Do</h3>
            <div className="space-y-3">
              {willNot.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center py-12 border-y border-border/50 mb-12">
            <h2 className="text-2xl font-serif mb-4">Vision</h2>
            <p className="text-lg font-serif italic text-foreground/90 max-w-2xl mx-auto">
              "To build the operational and technological infrastructure that enables Indian wealth advisors to serve their clients with the sophistication those clients deserve."
            </p>
          </div>

          <div className="text-center">
            <h3 className="mb-6">Let's Discuss Your Practice</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary/20 text-secondary hover:bg-secondary/5">
                <Link to="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default About;
