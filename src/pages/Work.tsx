import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";

const Work = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero */}
      <SectionContainer className="text-center mb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            From interactive prototypes to full-scale builds. Explore what's possible.
          </p>
        </div>
      </SectionContainer>

      {/* Two Sections */}
      <SectionContainer className="space-y-32">
        {/* Labs Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-border/50">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Interactive Prototypes</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Labs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the future before it's built. Our Labs showcase interactive demos of cutting-edge automation concepts—from RAG-powered compliance Q&A to intelligent document processing engines.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each prototype is designed to give you hands-on experience with transformative technology tailored for wealth management operations.
            </p>
            <Button 
              asChild 
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-glow-violet transition-all duration-300 group"
            >
              <Link to="/labs">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Labs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
          </div>
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card via-card to-secondary/5 shadow-glow-violet p-12 group hover:shadow-glow-violet/80 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-50" />
            <div className="relative z-10 flex items-center justify-center h-64">
              <Sparkles className="w-32 h-32 text-secondary animate-float" />
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" />
          </Card>
        </div>

        {/* Case Studies Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card via-card to-primary/5 shadow-glow-gold p-12 group hover:shadow-glow-gold/80 transition-all duration-500 md:order-first">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="relative z-10 flex items-center justify-center h-64">
              <FileText className="w-32 h-32 text-primary animate-float" />
            </div>
            <div className="absolute top-4 left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
          </Card>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-border/50">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Real-World Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how we've transformed wealth management operations for real clients. Our case studies break down the problem, the solution architecture, and the measurable impact—from time saved to error reduction.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each build is a testament to thoughtful engineering and deep industry understanding.
            </p>
            <Button 
              asChild 
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-300 group"
            >
              <Link to="/case-studies">
                <span className="relative z-10 flex items-center gap-2">
                  View Case Studies
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Strip */}
      <SectionContainer className="mt-32">
        <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card via-secondary/5 to-primary/5 p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--secondary)/0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can transform your wealth management operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-300"
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-glow-pulse -z-10" />
        </Card>
      </SectionContainer>
    </div>
  );
};

export default Work;
