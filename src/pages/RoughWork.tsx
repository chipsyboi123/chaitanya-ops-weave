import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import PillarCard from "@/components/PillarCard";
import ProgramTimeline from "@/components/ProgramTimeline";
import CaseStudyCard from "@/components/CaseStudyCard";
import ArtifactCard from "@/components/ArtifactCard";
import FAQAccordion from "@/components/FAQAccordion";
import FounderNote from "@/components/FounderNote";
import { ArrowRight, Workflow, LineChart, Settings, CheckCircle, ArrowLeft, Shield, Lock, FileText, Users } from "lucide-react";

const RoughWork = () => {
  const pillars = [
    {
      icon: Workflow,
      title: "Automation & Workflow Systems",
      bullets: [
        "RMs: query tracking + response routing",
        "Meeting prep copilots + note generation",
        "Document pipelines: intake → extract → action",
      ],
      outcome: "Reduce response lag, eliminate repetitive admin.",
    },
    {
      icon: LineChart,
      title: "Research & Portfolio Intelligence",
      bullets: [
        "Multi-asset allocation models",
        "Risk monitoring dashboards",
        "Market intelligence aggregation",
      ],
      outcome: "Make decisions with consistent, explainable systems.",
    },
    {
      icon: Settings,
      title: "Operations & Client Experience",
      bullets: [
        "CRM architecture + onboarding flows",
        "Reporting pipeline automation",
        "Task/commitment tracking",
      ],
      outcome: "Faster cycles, fewer misses, premium client experience.",
    },
  ];

  const programPhases = [
    {
      phase: "01",
      title: "Discovery",
      duration: "1–2 weeks",
      description: "Map workflows, pain points, and compliance constraints.",
    },
    {
      phase: "02",
      title: "Architecture",
      duration: "1 week",
      description: "System blueprint, access model, and acceptance criteria.",
    },
    {
      phase: "03",
      title: "Build",
      duration: "2–6 weeks",
      description: "Iterative delivery with weekly demos.",
    },
    {
      phase: "04",
      title: "Integration",
      duration: "1–2 weeks",
      description: "Deployment + team onboarding + SOPs.",
    },
    {
      phase: "05",
      title: "Support",
      duration: "Ongoing",
      description: "Maintenance, monitoring, and upgrades.",
    },
  ];

  const artifacts = [
    {
      tag: "Dashboard",
      title: "RM Query Tracker",
      replaces: "Ad-hoc WhatsApp follow-ups",
      impact: "Improved closure rate",
    },
    {
      tag: "Template",
      title: "Client Review Pack",
      replaces: "Manual slides",
      impact: "Consistent, premium format",
    },
    {
      tag: "Artifact",
      title: "Reporting Engine Output",
      replaces: "Excel stitching",
      impact: "Fewer errors, faster cycle",
    },
    {
      tag: "Dashboard",
      title: "Compliance Q&A (RAG)",
      replaces: "Manual searching",
      impact: "Faster, auditable answers",
    },
    {
      tag: "Template",
      title: "Onboarding Checklist + SOP",
      replaces: "Tribal knowledge",
      impact: "Repeatable onboarding",
    },
    {
      tag: "Artifact",
      title: "Meeting Prep Brief",
      replaces: "Scattered notes",
      impact: "Higher meeting quality",
    },
  ];

  const faqItems = [
    {
      question: "How do you access our data safely?",
      answer:
        "We implement role-based access with scoped credentials. Your data stays isolated—no cross-client mixing. We can work within your existing security framework or on-prem environments.",
    },
    {
      question: "Do we need to change our existing CRM?",
      answer:
        "No. We build on top of your existing systems. Whether you use Salesforce, HubSpot, or custom solutions, we integrate with your current stack.",
    },
    {
      question: "What's a typical first automation to start with?",
      answer:
        "Most firms start with either RM query tracking, automated reporting, or compliance knowledge systems. We recommend starting where you feel the most pain.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish baseline metrics before building, then track improvements in cycle time, error rates, and team capacity. Outcomes vary by workflow maturity.",
    },
    {
      question: "Can you work with our compliance team?",
      answer:
        "Absolutely. We align to your firm's compliance and security expectations and can work alongside your compliance officer or IT partner.",
    },
    {
      question: "Do you build on our stack or bring yours?",
      answer:
        "Flexible. We can extend your existing tools or implement purpose-built solutions depending on your constraints and preferences.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Back Link */}
      <div className="container mx-auto px-4 lg:px-6 mb-8">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <SectionContainer>
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Work in Progress</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Rough Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internal documentation and work-in-progress content.
          </p>
        </div>
      </SectionContainer>

      {/* THREE PILLARS */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Core Capabilities</p>
          <h2 className="mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three pillars of systems that reduce manual work and compound in value over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </SectionContainer>

      {/* IMPLEMENTATION PROGRAM */}
      <SectionContainer>
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Delivery Model</p>
          <h2 className="mb-4">The EnableWealth Implementation Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach that de-risks delivery in regulated environments.
          </p>
        </div>

        <ProgramTimeline phases={programPhases} />

        <Card className="mt-10 p-6 border border-border/50 bg-card/50 max-w-2xl mx-auto">
          <h4 className="text-sm font-semibold mb-4">What You Get</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            {[
              "Workflow map",
              "Blueprint doc",
              "Working system",
              "Documentation",
              "Team onboarding",
              "Ongoing support",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </SectionContainer>

      {/* PROOF SECTION */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Evidence</p>
          <h2 className="mb-4">Proof of Work</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case Studies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Featured Case Studies</h3>
            <div className="space-y-4">
              <CaseStudyCard
                title="Reporting Engine Automation"
                problem="Manual compilation consuming 20+ hours weekly"
                outcome="Automated pipeline with branded outputs"
                metric="70% time saved"
              />
              <CaseStudyCard
                title="Client Review Pack Generator"
                problem="Inconsistent, time-consuming prep"
                outcome="AI-assisted, presentation-ready packs"
                metric="90% faster prep"
              />
              <CaseStudyCard
                title="Compliance Knowledge System"
                problem="Slow, manual policy searching"
                outcome="RAG-powered instant answers"
                metric="95% faster resolution"
              />
            </div>
          </div>

          {/* Artifacts Teaser */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Redacted Artifacts</h3>
            <Card className="p-6 border border-border/50 bg-card/80">
              <p className="text-muted-foreground mb-6">
                See redacted samples: review packs, reporting outputs, SOP
                snapshots.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["Query Tracker", "Review Pack", "Report Engine", "Compliance Q&A"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground text-center border border-border/30"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full border-secondary/20 text-secondary hover:bg-secondary/5"
              >
                <Link to="/work">
                  View Proof
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* SECURITY & DISCRETION */}
      <SectionContainer id="security">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Trust Layer</p>
            <h2 className="mb-4">Security & Discretion</h2>
            <p className="text-muted-foreground">Designed in, not added later.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Data isolation by default",
                desc: "Client data stays client-specific; no cross-client mixing.",
              },
              {
                icon: Lock,
                title: "Least-privilege access",
                desc: "Role-based access and scoped credentials.",
              },
              {
                icon: FileText,
                title: "No training on your data",
                desc: "We do not use your confidential materials to train public models.",
              },
              {
                icon: CheckCircle,
                title: "Audit-friendly workflows",
                desc: "Clear logs, repeatable steps, and documented SOPs.",
              },
              {
                icon: Settings,
                title: "Secure delivery patterns",
                desc: "Option for on-prem / VPC / controlled cloud.",
              },
              {
                icon: Users,
                title: "Redaction-first demos",
                desc: "Samples shown are anonymized and sanitized.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-5 border border-border/50 bg-card/80 flex gap-4"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            We align to your firm's compliance and security expectations; we can
            work alongside your compliance officer / IT partner.
          </p>
        </div>
      </SectionContainer>

      {/* ARTIFACT GALLERY */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Sample Outputs</p>
          <h2 className="mb-4">Proof You Can See</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Redacted artifacts from real implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={index} {...artifact} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F] border border-transparent hover:border-primary/30"
          >
            <Link to="/contact?type=sample-pack">
              Request a Redacted Sample Pack
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* DIGITAL PRESENCE BLOCK */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border border-primary/20 bg-card/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="eyebrow mb-4">New</p>
                <h3 className="text-2xl font-serif mb-4">
                  A Digital Presence That Builds Trust
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your website is your first diligence check. We build compliant
                  digital presences that convert.
                </p>
                <ul className="space-y-3">
                  {[
                    "Compliance-aware copy structure",
                    "Credible proof (artifacts, case studies)",
                    "Lead intake that respects discretion",
                    "Content engine for long-term authority",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 text-center border border-border/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Website + Compliant Digital Presence
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="mb-4">Reduce Buyer Anxiety</h2>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </SectionContainer>

      {/* FOUNDER NOTE */}
      <SectionContainer>
        <FounderNote
          quote="Technology in wealth management is no longer about efficiency — it is about survival. Clients expect clarity, speed, intelligence, and proactive communication. EnableWealth brings institutional-grade systems and automation to firms that want to scale with sophistication—without sacrificing discretion."
          name="Chaitanya Pandit"
          title="Founder"
        />
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-muted/30">
        <div className="text-center">
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <Link to="/">
              Return to Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default RoughWork;