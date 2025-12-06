import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Brain, LineChart, Settings, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI Systems & Automation",
      subtitle: "Intelligent infrastructure for modern advisory",
      features: [
        "RAG-based compliance knowledge systems",
        "Automated client note generation",
        "RM query-tracking and response bots",
        "Workflow automation pipelines",
        "Meeting preparation copilots",
        "Document processing and extraction"
      ],
      outcomes: [
        "48hr → 4hr query response",
        "Zero manual note-taking",
        "100% query accountability"
      ]
    },
    {
      icon: LineChart,
      title: "Research & Portfolio Intelligence",
      subtitle: "Quantitative frameworks for decision support",
      features: [
        "Multi-asset allocation models",
        "Fund screening and analytics",
        "Risk monitoring dashboards",
        "Derivative overlay strategies",
        "Performance attribution systems",
        "Market intelligence aggregation"
      ],
      outcomes: [
        "Systematic rebalancing",
        "Real-time risk visibility",
        "Data-driven decisions"
      ]
    },
    {
      icon: Settings,
      title: "Operations & Client Experience",
      subtitle: "Institutional processes, boutique delivery",
      features: [
        "CRM architecture and optimization",
        "Client onboarding digitization",
        "Reporting pipeline automation",
        "Communication standards",
        "Task and commitment tracking",
        "Bespoke client portal design"
      ],
      outcomes: [
        "30-40% faster reporting",
        "Zero missed commitments",
        "Premium client experience"
      ]
    }
  ];

  const engagementSteps = [
    { phase: "01", title: "Discovery", duration: "1-2 weeks", description: "Deep-dive into current workflows, pain points, and objectives" },
    { phase: "02", title: "Architecture", duration: "1 week", description: "System design and technical specification" },
    { phase: "03", title: "Build", duration: "2-6 weeks", description: "Iterative development with regular checkpoints" },
    { phase: "04", title: "Integration", duration: "1-2 weeks", description: "Deployment, testing, and team onboarding" },
    { phase: "05", title: "Support", duration: "Ongoing", description: "Maintenance, optimization, and scaling" }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-primary mb-6 font-medium">Capabilities</p>
          <h1 className="mb-8">Institutional-Grade Systems for Wealth Practices</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three integrated capability areas designed to modernize operations, enhance research, and elevate client experience.
          </p>
        </div>
      </SectionContainer>

      {/* Capability Cards */}
      {capabilities.map((capability, index) => (
        <SectionContainer key={index} className={index % 2 === 1 ? "bg-card/30" : ""}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex p-3 border border-primary/20 rounded-lg mb-6">
                  <capability.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-serif mb-2">{capability.title}</h2>
                <p className="text-muted-foreground mb-8">{capability.subtitle}</p>
                
                <div className="space-y-3 mb-8">
                  {capability.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-6 border border-primary/20 bg-card/50">
                <h4 className="text-sm uppercase tracking-wide text-primary mb-6 font-medium">Documented Outcomes</h4>
                <div className="space-y-4">
                  {capability.outcomes.map((outcome, i) => (
                    <div key={i} className="border-l-2 border-primary/40 pl-4">
                      <p className="text-lg font-medium text-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </SectionContainer>
      ))}

      {/* Engagement Model */}
      <SectionContainer className="bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif mb-4">Engagement Model</h2>
            <p className="text-muted-foreground">A structured approach from discovery to delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {engagementSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full border border-border/50 hover:border-primary/30 transition-all">
                  <p className="text-3xl font-serif text-primary/40 mb-3">{step.phase}</p>
                  <h4 className="text-base font-semibold mb-2">{step.title}</h4>
                  <p className="text-xs text-primary mb-3">{step.duration}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
                {index < engagementSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif mb-6">Discuss Your Requirements</h2>
          <p className="text-muted-foreground mb-10">
            Every engagement begins with understanding your specific context, challenges, and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Schedule Discovery Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10"
            >
              <Link to="/contact">Request Proposal</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Services;
