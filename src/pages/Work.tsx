import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import CaseStudyCard from "@/components/CaseStudyCard";
import ArtifactCard from "@/components/ArtifactCard";
import { ArrowRight, FileText, BarChart3 } from "lucide-react";

const Work = () => {
  const caseStudies = [
    { title: "Reporting Engine Automation", problem: "20+ hours weekly on manual compilation", outcome: "Automated pipeline with branded outputs", metric: "70% time saved" },
    { title: "Client Review Pack Generator", problem: "Inconsistent, time-consuming prep", outcome: "AI-assisted, presentation-ready packs", metric: "90% faster prep" },
    { title: "Compliance Knowledge System", problem: "Slow, manual policy searching", outcome: "RAG-powered instant answers", metric: "95% faster resolution" },
    { title: "RM Query Tracker", problem: "Lost follow-ups via WhatsApp", outcome: "Centralized tracking dashboard", metric: "100% accountability" },
  ];

  const artifacts = [
    { tag: "Dashboard", title: "RM Query Tracker", replaces: "Ad-hoc WhatsApp follow-ups", impact: "Improved closure rate" },
    { tag: "Template", title: "Client Review Pack", replaces: "Manual slides", impact: "Consistent, premium format" },
    { tag: "Artifact", title: "Reporting Engine Output", replaces: "Excel stitching", impact: "Fewer errors, faster cycle" },
    { tag: "Dashboard", title: "Compliance Q&A (RAG)", replaces: "Manual searching", impact: "Faster, auditable answers" },
    { tag: "Template", title: "Onboarding Checklist + SOP", replaces: "Tribal knowledge", impact: "Repeatable onboarding" },
    { tag: "Artifact", title: "Meeting Prep Brief", replaces: "Scattered notes", impact: "Higher meeting quality" },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="eyebrow mb-4">Proof</p>
          <h1 className="mb-6">Evidence of Impact</h1>
          <p className="text-lg text-muted-foreground">
            Case studies, metrics, and redacted artifacts from real implementations.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-serif">Case Studies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={i} {...cs} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-5 h-5 text-primary" />
          <h2 className="text-2xl font-serif">Artifacts Gallery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, i) => (
            <ArtifactCard key={i} {...artifact} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <Link to="/contact?type=sample-pack">
              Request Sample Pack <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Ready to Build Your Proof?</h2>
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Work;
