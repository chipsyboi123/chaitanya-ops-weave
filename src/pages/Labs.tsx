import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Brain, FileSpreadsheet, LineChart, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Labs = () => {
  const labs = [
    {
      number: "01",
      icon: Brain,
      title: "RAG Compliance Assistant",
      description: "Upload docs → Ask questions → Get clause-linked answers.",
      details: "Private document indexing with semantic search and citation. Perfect for SEBI, AMFI, and internal policy queries.",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      number: "02",
      icon: FileSpreadsheet,
      title: "Excel → PDF Report Engine",
      description: "Upload a standard Excel; get a branded PDF and scheduled mail.",
      details: "Automated template rendering with custom branding, data validation, and email distribution. Eliminate manual formatting forever.",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      number: "03",
      icon: LineChart,
      title: "Client Review Generator",
      description: "Holdings in → summary, insights, actions.",
      details: "AI-powered portfolio analysis that generates actionable insights, comparison metrics, and presentation-ready review packs.",
      gradient: "from-secondary/15 to-primary/10",
    },
    {
      number: "04",
      icon: Users,
      title: "RM Efficiency Toolkit",
      description: "Lead enrichment, agenda generator, call summaries, follow-ups → CRM tasks.",
      details: "End-to-end relationship management automation. From prospect research to meeting prep to automatic CRM updates.",
      gradient: "from-primary/15 to-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Interactive Product Demos</span>
          </div>
          
          <h1 className="mb-8">Labs</h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed">
            Proof-of-concept demos you can click and understand. Don't talk—show.
          </p>
        </div>

        {/* Product Shelf - 3D tiles */}
        <div className="space-y-8">
          {labs.map((lab, index) => {
            const Icon = lab.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${lab.gradient} border-border/50 hover:border-border hover:shadow-glow-violet transition-all duration-700 hover:-translate-y-2 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
                
                <div className="relative z-10 p-8 lg:p-16">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Number */}
                    <div className="lg:col-span-2 text-center lg:text-left">
                      <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-primary/30 to-secondary/30 bg-clip-text text-transparent group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-500">
                        {lab.number}
                      </div>
                    </div>

                    {/* Icon with 3D effect */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm">
                          <Icon className="w-12 h-12 text-primary group-hover:text-secondary transition-colors duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {lab.title}
                      </h2>
                      <p className="text-lg lg:text-xl text-muted-foreground mb-3 font-light">
                        {lab.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {lab.details}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-end">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild
                        className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow-gold transition-all duration-500 group/btn"
                      >
                        <Link to="/contact">
                          Request Demo
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Final CTA */}
        <Card className="mt-20 p-12 lg:p-16 bg-gradient-to-r from-primary/20 to-secondary/20 border-border/50 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="text-center relative z-10">
            <h2 className="mb-6">Want to See These in Action?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Book a demo call and I'll walk you through live implementations tailored to your use case.
            </p>
            <Button 
              size="lg" 
              asChild
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-500 group"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Demo Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </Card>
      </SectionContainer>
    </div>
  );
};

export default Labs;
