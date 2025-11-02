import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Target, Zap, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every automation must be exact. No room for approximation in financial workflows.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast prototyping, faster deployment. Time is the only non-renewable resource.",
    },
    {
      icon: Shield,
      title: "Discretion",
      description: "Client data is sacred. Security and compliance are built in, not bolted on.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Systems that work when you need them. No surprises, no downtime.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          {/* Header with split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Portrait placeholder */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative aspect-square bg-gradient-to-br from-card to-card/50 rounded-3xl border border-border/50 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                    CP
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-sm text-muted-foreground">Chaitanya Pandit</p>
                  <p className="text-xs text-muted-foreground/70">Builder · Systems Thinker · Operator</p>
                </div>
              </div>
            </div>

            {/* Right - Bio */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">About Me</span>
              </div>
              
              <h1 className="mb-8 text-5xl lg:text-7xl">
                Builder. Systems Thinker. Operator.
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-8" />
              
              <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I've spent the last three years across research, client delivery, ops automation and design inside a boutique wealth firm.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I bridge domain logic with engineering—so teams stop wrestling spreadsheets and start shipping outcomes.
                </p>
              </Card>
            </div>
          </div>

          {/* Values - Premium grid */}
          <div className="mb-20">
            <h2 className="text-center mb-16">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="group p-8 bg-gradient-to-br from-card/80 to-card/40 border-border/50 hover:border-border hover:shadow-glow-violet transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Vision Statement */}
          <Card className="p-12 lg:p-20 bg-gradient-to-r from-primary/20 to-secondary/20 border-border/50 text-center mb-16 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="mb-6">Vision</h2>
              <p className="text-3xl lg:text-5xl font-light leading-tight max-w-4xl mx-auto">
                I want to build the next era of wealth management.
              </p>
            </div>
          </Card>

          {/* Background Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
              <h3 className="mb-6">Experience</h3>
              <ul className="space-y-4">
                {[
                  "3 years in boutique wealth management",
                  "Research, client delivery, and operations",
                  "Automation design and implementation",
                  "Digital presence and UX design"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
              <h3 className="mb-6">Approach</h3>
              <ul className="space-y-4">
                {[
                  "Domain-first: understand the workflow",
                  "Prototype fast, validate faster",
                  "Build with compliance in mind",
                  "Handoff with documentation and training"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="mb-6">Let's Build Together</h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you're a founder looking to scale operations or a consulting partner seeking technical execution, I'd love to discuss what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                asChild
                className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-500 group"
              >
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book Intro Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="text-lg px-10 py-7 border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10 hover:shadow-glow-violet transition-all duration-500"
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
