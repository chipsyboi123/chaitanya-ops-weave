import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import FeatureCard from "@/components/FeatureCard";
import { Zap, Palette, MessageSquare, FileSpreadsheet, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import automationVisual from "@/assets/automation-visual.jpg";
import digitalPresence from "@/assets/digital-presence.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 z-10 text-center">
          <h1 className="mb-6 animate-fade-in-up">
            Modernizing Wealth Managers
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            I help wealth firms replace manual workflows with intelligent automation, and pair it with modern digital presence—so teams move faster and clients feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Intro Call
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <SectionContainer className="bg-card border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              3 years across research, client delivery, ops, automation and design in a boutique WM firm.
            </p>
          </div>
          <div className="text-center md:border-x border-border">
            <p className="text-sm text-muted-foreground">
              SEBI/AMFI-aware delivery, not agency guesswork.
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Outcome-first: hours saved, error reduced, experience upgraded.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Two Pillars */}
      <SectionContainer>
        <h2 className="text-center mb-12">Core Offerings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeatureCard
            icon={Zap}
            title="Automation for Wealth Ops"
            description="Reporting, Excel→PDF engines, CRM flows, onboarding, compliance RAGs."
          >
            <Button variant="secondary" asChild className="mt-4">
              <Link to="/contact">Request Automation Audit</Link>
            </Button>
          </FeatureCard>

          <FeatureCard
            icon={Palette}
            title="Digital Presence"
            description="Websites, messaging, decks, client-journey UX."
          >
            <Button variant="secondary" asChild className="mt-4">
              <Link to="/services">See Templates</Link>
            </Button>
          </FeatureCard>
        </div>
      </SectionContainer>

      {/* Mini Demos */}
      <SectionContainer className="bg-card">
        <h2 className="text-center mb-12">Live Demonstrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">RAG Compliance Q&A</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ask SEBI/AMFI-style questions.
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/labs">Try Demo →</Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="mb-4">
              <FileSpreadsheet className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Excel→PDF Report Engine</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload Excel → formatted PDF → mailer.
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/labs">Try Demo →</Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-elevated transition-all hover:-translate-y-1">
            <div className="mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Client Review Generator</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Holdings in, insights out.
            </p>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/labs">Try Demo →</Link>
            </Button>
          </Card>
        </div>
      </SectionContainer>

      {/* Founder Note */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl lg:text-2xl font-light italic text-muted-foreground border-l-4 border-primary pl-6 mb-6">
            "India's wealth industry scales when operations become systems. I build those systems."
          </blockquote>
          <p className="text-sm text-muted-foreground">— Chaitanya Pandit</p>
        </div>
      </SectionContainer>

      {/* Final CTA Strip */}
      <SectionContainer className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="mb-6">Ready to Modernize Your Operations?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Intro Call
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Request Automation Audit</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
