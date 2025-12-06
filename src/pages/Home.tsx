import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Brain, LineChart, Settings, TrendingUp, Clock, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Quiet power, no animations */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 z-10 text-center max-w-5xl">
          <h1 className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Precision Systems for<br />Modern Wealth Firms
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            AI-enabled operations, research intelligence, and institutional-grade workflows for teams that manage meaningful wealth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              asChild 
              className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20 transition-all duration-300"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Consultation
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Link to="/services">
                See Capabilities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Row */}
      <SectionContainer className="border-y border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            "Built for advisors managing HNI & UHNI families",
            "Institutional rigor, boutique attention",
            "AI systems designed for actual RM workflows"
          ].map((text, i) => (
            <div 
              key={i} 
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed font-serif italic">
                {text}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Founder's Insight Box */}
      <SectionContainer>
        <Card className="max-w-3xl mx-auto p-8 lg:p-12 border border-primary/20 bg-card/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs uppercase tracking-widest text-primary mb-6 font-medium">A Note From the Founder</p>
          <blockquote className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8 font-serif italic">
            "Technology in wealth management is no longer about efficiency — it is about survival. Clients expect clarity, speed, intelligence, and proactive communication. Our mission is to bring institutional-grade systems, AI, and operational architecture to advisors who want to scale with sophistication."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">CP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Chaitanya Pandit</p>
              <p className="text-xs text-muted-foreground">Founder</p>
            </div>
          </div>
        </Card>
      </SectionContainer>

      {/* Capabilities Overview - 3 Pillars */}
      <SectionContainer>
        <h2 className="text-center mb-4">Capabilities</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Three pillars of transformation for modern wealth practices
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI Systems & Automation",
              description: "RAG knowledge bases, workflow automation, RM copilots, query-tracking bots, automated client notes."
            },
            {
              icon: LineChart,
              title: "Research & Portfolio Intelligence",
              description: "Quant frameworks, multi-asset allocation systems, fund analytics, risk dashboards, derivative overlays."
            },
            {
              icon: Settings,
              title: "Operations & Client Experience",
              description: "CRM design, process automation, onboarding pipelines, communication standards, bespoke client reporting."
            }
          ].map((item, i) => (
            <Card 
              key={i}
              className="p-8 bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="mb-6 inline-flex p-3 border border-primary/20 rounded-lg group-hover:border-primary/40 transition-colors">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Editorial Section - Why Modern Wealth Requires Modern Systems */}
      <SectionContainer className="bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 font-serif">Why Modern Wealth Requires Modern Systems</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Client expectations have fundamentally shifted. Today's HNI and UHNI families demand clarity, speed, and proactive intelligence from their advisors—not just portfolio performance.
            </p>
            <p>
              Compliance pressure continues to mount. Regulatory complexity requires systems that can track, document, and report with institutional precision.
            </p>
            <p>
              The advisor of 2025 must be data-driven, operationally excellent, and deeply organized. Technology is leverage, not replacement—it amplifies the advisor's judgment and deepens client relationships.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Impact Examples */}
      <SectionContainer>
        <h2 className="text-center mb-4">Documented Impact</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Measurable outcomes from system implementations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, metric: "48hrs → 4hrs", label: "RM query response time" },
            { icon: TrendingUp, metric: "30-40%", label: "Faster reporting cycle" },
            { icon: Shield, metric: "3×", label: "More effective task tracking" },
            { icon: Brain, metric: "100%", label: "AI-assisted review meetings" }
          ].map((item, i) => (
            <Card key={i} className="p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300">
              <item.icon className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-2xl font-semibold text-foreground mb-2">{item.metric}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* About Chaitanya Section */}
      <SectionContainer className="bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-3xl font-serif text-primary">CP</span>
              </div>
            </div>
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="mb-4">Chaitanya Pandit</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Background in multi-asset research, having worked with AIFs, PMS structures, and UHNI families. A unique intersection of design thinking, technology, and quantitative finance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mission: to modernize Indian wealth advisory with systems that reflect the sophistication of the capital they manage.
              </p>
              <div className="mt-6">
                <Link to="/about" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
                  Read full biography
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Begin Your Transformation</h2>
          <p className="text-muted-foreground mb-10">
            Whether you're modernizing operations or building AI-enabled workflows, let's discuss what's possible for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Work With Me
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="text-base px-8 py-6 border border-primary/30 text-primary hover:bg-primary/10"
            >
              <Link to="/contact">
                Get Transformation Blueprint
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
