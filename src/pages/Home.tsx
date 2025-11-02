import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Zap, Palette, Shield, FileSpreadsheet, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Full screen with cinematic feel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 z-10 text-center pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Modernizing India's Wealth Industry</span>
          </div>
          
          <h1 className="mb-8 animate-fade-in-up leading-none" style={{ animationDelay: "0.1s" }}>
            Modernizing
            <br />
            Wealth Managers
          </h1>
          
          <p className="text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: "0.3s" }}>
            I help wealth firms replace manual workflows with intelligent automation, and pair it with modern digital presence—so teams move faster and clients feel the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button 
              size="lg" 
              asChild 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-500 group"
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
              className="text-lg px-8 py-6 border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10 hover:shadow-glow-violet transition-all duration-500 group backdrop-blur-sm"
            >
              <Link to="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <SectionContainer className="bg-gradient-to-b from-card/50 to-transparent border-y border-border/30 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            "3 years across research, client delivery, ops, automation and design in a boutique WM firm.",
            "SEBI/AMFI-aware delivery, not agency guesswork.",
            "Outcome-first: hours saved, error reduced, experience upgraded."
          ].map((text, i) => (
            <div 
              key={i} 
              className="text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4 group-hover:via-secondary transition-colors" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Two Pillars - Premium cards */}
      <SectionContainer>
        <h2 className="text-center mb-16 animate-fade-in-up">Core Offerings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              icon: Zap,
              title: "Automation for Wealth Ops",
              description: "Reporting, Excel→PDF engines, CRM flows, onboarding, compliance RAGs.",
              cta: "Request Automation Audit",
              gradient: "from-secondary/20 to-transparent",
              glow: "shadow-glow-violet"
            },
            {
              icon: Palette,
              title: "Digital Presence",
              description: "Websites, messaging, decks, client-journey UX.",
              cta: "See Templates",
              gradient: "from-primary/20 to-transparent",
              glow: "shadow-glow-gold"
            }
          ].map((item, i) => (
            <Card 
              key={i}
              className={`p-8 lg:p-12 bg-gradient-to-br ${item.gradient} border-border/50 hover:border-border hover:${item.glow} transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm relative overflow-hidden`}
            >
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 bg-card/50 rounded-2xl border border-border/50 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{item.description}</p>
                <Button 
                  variant="outline" 
                  asChild 
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group/btn"
                >
                  <Link to={i === 0 ? "/contact" : "/services"}>
                    {item.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Mini Demos - Product shelf aesthetic */}
      <SectionContainer className="bg-gradient-to-b from-card/30 to-transparent">
        <h2 className="text-center mb-16 animate-fade-in-up">Live Demonstrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "RAG Compliance Q&A", desc: "Ask SEBI/AMFI-style questions." },
            { icon: FileSpreadsheet, title: "Excel→PDF Report Engine", desc: "Upload Excel → formatted PDF → mailer." },
            { icon: MessageSquare, title: "Client Review Generator", desc: "Holdings in, insights out." }
          ].map((demo, i) => (
            <Card 
              key={i}
              className="p-8 hover:shadow-glow-violet transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <demo.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{demo.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{demo.desc}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild 
                  className="text-primary hover:text-secondary transition-colors group/btn"
                >
                  <Link to="/labs">
                    Try Demo 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Founder Note */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 lg:p-16 bg-gradient-to-br from-card/80 to-card/40 border-border/50 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8" />
              <blockquote className="text-3xl lg:text-5xl font-light italic text-foreground mb-8 leading-tight">
                "India's wealth industry scales when operations become systems. I build those systems."
              </blockquote>
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="w-12 h-px bg-muted-foreground" />
                Chaitanya Pandit
              </p>
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* Final CTA Strip - Bold and magnetic */}
      <SectionContainer className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
        
        <div className="text-center relative z-10">
          <h2 className="mb-8">Ready to Modernize Your Operations?</h2>
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
              className="text-lg px-10 py-7 border-2 border-foreground/30 hover:border-foreground bg-background/50 hover:bg-background backdrop-blur-sm transition-all duration-500 group"
            >
              <Link to="/contact">
                Request Automation Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
