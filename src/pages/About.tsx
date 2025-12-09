import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-primary mb-6 font-medium">About</p>
            <h1 className="mb-8">EnableWealth</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building institutional-grade systems for the next generation of Indian wealth management.
            </p>
          </div>

          {/* Portrait & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
            <div className="lg:col-span-1">
              <div className="aspect-square bg-card border border-border/50 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-serif text-primary">CP</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I've spent the last three years immersed in the operational realities of boutique wealth management—spanning research, client delivery, operations automation, and design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My background is an unusual intersection: multi-asset research and quant frameworks, combined with hands-on experience building AI systems and designing client experiences. I've worked with AIFs, PMS structures, and UHNI families, understanding both the investment logic and the operational complexity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This combination allows me to bridge domain logic with engineering—so teams stop wrestling spreadsheets and start shipping outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <Card className="p-8 lg:p-12 border border-primary/20 bg-card/50 mb-20">
            <h2 className="text-2xl font-serif mb-8">Philosophy of Consulting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Precision Over Volume",
                  description: "Every automation must be exact. In financial workflows, there is no room for approximation or 'good enough.'"
                },
                {
                  title: "Domain-First Design",
                  description: "Technology without context is noise. Understanding the workflow comes before building the solution."
                },
                {
                  title: "Discretion as Default",
                  description: "Client data is sacred. Security and compliance are built into architecture, not bolted on as afterthoughts."
                },
                {
                  title: "Systems, Not Band-Aids",
                  description: "We build infrastructure that compounds in value—not quick fixes that create technical debt."
                }
              ].map((item, i) => (
                <div key={i} className="border-l border-primary/20 pl-6">
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif mb-8">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border border-border/50">
                <h4 className="text-base font-semibold mb-4">Domains</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Multi-asset research & portfolio construction",
                    "AIF & PMS operational structures",
                    "UHNI family office advisory",
                    "Regulatory compliance (SEBI/AMFI)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="p-6 border border-border/50">
                <h4 className="text-base font-semibold mb-4">Capabilities</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "AI/ML systems & RAG architectures",
                    "Workflow automation & process design",
                    "Client experience & digital presence",
                    "Quantitative analysis & dashboards"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="text-center mb-20 py-16 border-y border-border/30">
            <h2 className="text-2xl font-serif mb-6">Vision</h2>
            <p className="text-xl lg:text-2xl font-serif text-foreground/90 max-w-3xl mx-auto leading-relaxed italic">
              "To build the operational and technological infrastructure that enables Indian wealth advisors to serve their clients with the sophistication those clients deserve."
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="mb-6">Let's Discuss Your Practice</h3>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're a founder looking to scale operations or a firm seeking technical transformation, I'd welcome the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10"
              >
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
