import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowLeft, Code, Rocket, Target, TrendingUp } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // This is a template - in production, you'd fetch based on ID
  const caseStudy = {
    title: "Reporting Engine Automation",
    meta: "Mid-market Wealth Manager (Confidential)",
    hero: "Transforming 2 hours of manual work into 5 minutes of automated excellence.",
    
    problem: {
      title: "The Problem",
      content: [
        "A mid-market wealth management firm was spending 2+ hours per analyst per day on report generation.",
        "The process involved manual data extraction from Excel, copying to Word templates, formatting, converting to PDF, and individual email sends.",
        "Errors were common—misaligned tables, inconsistent formatting, missed client emails.",
        "The team needed to scale client reporting without adding headcount.",
      ],
    },
    
    constraints: {
      title: "Constraints",
      items: [
        "SEBI/AMFI compliance requirements for client communications",
        "Existing Excel templates couldn't be completely redesigned",
        "Integration with existing email system required",
        "Zero tolerance for data errors or security breaches",
      ],
    },
    
    build: {
      title: "The Build",
      content: [
        "Built a custom ingestion pipeline that reads standardized Excel exports and validates data integrity.",
        "Created dynamic PDF templates with the firm's branding, responsive layouts, and automatic table formatting.",
        "Integrated with their email system for scheduled distribution with personalized messages.",
        "Added a review interface for quick QA before automated sends.",
      ],
    },
    
    stack: {
      title: "Stack",
      items: ["Python", "Pandas", "ReportLab", "SendGrid API", "PostgreSQL", "React Dashboard"],
    },
    
    rollout: {
      title: "Rollout",
      phases: [
        { phase: "Phase 1", description: "Pilot with 2 RMs, 50 clients" },
        { phase: "Phase 2", description: "Expanded to full team, 300+ clients" },
        { phase: "Phase 3", description: "Added custom report types and templates" },
      ],
    },
    
    impact: {
      title: "Impact",
      stats: [
        { label: "Time Saved", value: "70%", detail: "From 2 hours to 20 minutes per batch" },
        { label: "Error Rate", value: "0%", detail: "Zero formatting or distribution errors" },
        { label: "Reports/Month", value: "500+", detail: "Automated across all RMs" },
        { label: "ROI", value: "4x", detail: "Payback in less than 3 months" },
      ],
    },
    
    next: {
      title: "What's Next",
      content: "The firm is now exploring portfolio review automation and CRM integration for complete workflow automation.",
    },
  };

  return (
    <div className="min-h-screen">
      <SectionContainer>
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/case-studies">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-2">{caseStudy.meta}</p>
            <h1 className="mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground">{caseStudy.hero}</p>
          </div>

          {/* Problem */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-destructive" />
              <h2>{caseStudy.problem.title}</h2>
            </div>
            <div className="space-y-3">
              {caseStudy.problem.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>
          </Card>

          {/* Constraints */}
          <Card className="p-8 mb-8 bg-muted/30">
            <h3 className="mb-4">{caseStudy.constraints.title}</h3>
            <ul className="space-y-2">
              {caseStudy.constraints.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Build */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary" />
              <h2>{caseStudy.build.title}</h2>
            </div>
            <div className="space-y-3">
              {caseStudy.build.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph}</p>
              ))}
            </div>
          </Card>

          {/* Stack */}
          <Card className="p-8 mb-8 bg-card">
            <h3 className="mb-4">{caseStudy.stack.title}</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.items.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Rollout */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-primary" />
              <h2>{caseStudy.rollout.title}</h2>
            </div>
            <div className="space-y-4">
              {caseStudy.rollout.phases.map((phase, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded font-semibold text-sm">
                    {phase.phase}
                  </div>
                  <p className="text-muted-foreground flex-1">{phase.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Impact */}
          <Card className="p-8 mb-8 bg-primary text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6" />
              <h2>{caseStudy.impact.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.impact.stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-lg font-semibold mb-1 opacity-90">{stat.label}</div>
                  <div className="text-sm opacity-75">{stat.detail}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Next */}
          <Card className="p-8 mb-12">
            <h3 className="mb-4">{caseStudy.next.title}</h3>
            <p className="text-muted-foreground">{caseStudy.next.content}</p>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h3 className="mb-4">Ready to Automate Your Workflows?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book Intro Call
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CaseStudyDetail;
