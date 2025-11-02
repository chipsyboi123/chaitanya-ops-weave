import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { CheckCircle2, ArrowRight, Palette, Globe, FileText, Users } from "lucide-react";
import automationVisual from "@/assets/automation-visual.jpg";
import digitalPresence from "@/assets/digital-presence.jpg";

const Services = () => {
  const automationFeatures = [
    "Client reporting workflows (Excel→PDF→Email)",
    "Review packs & meeting notes",
    "CRM task orchestration & follow-ups",
    "Client onboarding digitization",
    "Compliance knowledge via RAG prototypes",
  ];

  const whyItMatters = [
    "Save 2–3 analyst hours per RM per day",
    "Standardize output & reduce errors",
    "Free teams for actual client work",
  ];

  const engagementSteps = [
    { number: "01", title: "Audit", duration: "1–2 weeks" },
    { number: "02", title: "Prototype", duration: "1–2 weeks" },
    { number: "03", title: "Build", duration: "2–6 weeks" },
    { number: "04", title: "Integrate", duration: "Ongoing" },
    { number: "05", title: "Handoff + Support", duration: "As needed" },
  ];

  const digitalServices = [
    "Website redesign (SEBI/AMFI-aware)",
    "Brand language & narrative",
    "Presentation/deck system",
    "Client-journey UX",
  ];

  const templates = [
    { name: "Home", icon: Globe },
    { name: "Services", icon: FileText },
    { name: "Case Study", icon: CheckCircle2 },
    { name: "Writing", icon: FileText },
    { name: "Contact", icon: Users },
    { name: "Dashboard", icon: Palette },
  ];

  return (
    <div className="min-h-screen">
      {/* Automation Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="mb-6">Automation for Wealth Firms</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform manual, time-consuming workflows into intelligent, automated systems that scale with your business.
            </p>
            <img
              src={automationVisual}
              alt="Automation visualization"
              className="rounded-lg shadow-elevated"
            />
          </div>

          <div>
            <h3 className="mb-4">What We Automate</h3>
            <div className="space-y-3 mb-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="mb-4">Why It Matters</h3>
            <div className="space-y-3">
              {whyItMatters.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Model */}
        <div className="mb-12">
          <h2 className="text-center mb-12">Engagement Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {engagementSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative">
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.duration}</p>
                {index < engagementSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted-foreground" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Outcome Snapshot */}
        <Card className="p-8 bg-card border-border mb-8">
          <h3 className="text-center mb-8">Outcome Snapshot</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-sm text-muted-foreground">Time Saved on Reports</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <p className="text-sm text-muted-foreground">Formatting Errors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2-3hr</div>
              <p className="text-sm text-muted-foreground">Saved per RM Daily</p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">Request Automation Audit</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Digital Presence Section */}
      <SectionContainer className="bg-card">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <h3 className="mb-4">What We Deliver</h3>
            <div className="space-y-3 mb-8">
              {digitalServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{service}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-background border-border">
              <h4 className="font-semibold mb-4">Before/After Impact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Clarity</span>
                  <span className="text-primary font-semibold">3x improvement</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Speed</span>
                  <span className="text-primary font-semibold">2x faster load</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trust</span>
                  <span className="text-primary font-semibold">Professional polish</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="mb-6">Digital Presence</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Elevate your brand with modern, compliance-aware websites and client-facing materials that build trust and credibility.
            </p>
            <img
              src={digitalPresence}
              alt="Digital presence showcase"
              className="rounded-lg shadow-elevated"
            />
          </div>
        </div>

        {/* Templates Gallery */}
        <div className="mb-8">
          <h3 className="text-center mb-8">Templates Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-elevated transition-all hover:-translate-y-1 cursor-pointer">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{template.name}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">See Templates</Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Services;
