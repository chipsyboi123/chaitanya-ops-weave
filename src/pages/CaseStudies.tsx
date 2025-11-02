import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Clock, TrendingUp, CheckCircle2 } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      id: "reporting-engine",
      title: "Reporting Engine Automation",
      meta: "Mid-market WM (Confidential)",
      problem: "Manual report prep consuming 2h/day per analyst",
      solution: "Excel ingestion → templating → PDF → scheduled mail",
      impact: "70% time saved, zero formatting errors",
      stats: [
        { label: "Time Saved", value: "70%" },
        { label: "Errors", value: "0" },
        { label: "Reports/Month", value: "500+" },
      ],
    },
    {
      id: "review-pack",
      title: "Client Review Pack Generator",
      meta: "Boutique Wealth Advisor",
      problem: "Inconsistent review prep across team",
      solution: "Holdings → insights → one-click deck",
      impact: "90% faster prep, deeper conversations",
      stats: [
        { label: "Prep Time", value: "90% faster" },
        { label: "Consistency", value: "100%" },
        { label: "Client Satisfaction", value: "+35%" },
      ],
    },
    {
      id: "compliance-rag",
      title: "RAG for Compliance Enablement",
      meta: "Multi-family Office",
      problem: "Slow answers from policy docs",
      solution: "Private doc index + Q&A with citations",
      impact: "Decisions in minutes, not hours",
      stats: [
        { label: "Query Time", value: "95% faster" },
        { label: "Accuracy", value: "99%" },
        { label: "Documents Indexed", value: "1000+" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-6">Case Studies</h1>
          <p className="text-xl text-muted-foreground">
            Real implementations. Real outcomes. Real impact on wealth management operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover:shadow-elevated transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">{caseStudy.meta}</p>
                <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
              </div>

              <div className="space-y-4 mb-6 flex-1">
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <Clock className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Problem</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Solution</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Impact</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.impact}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {caseStudy.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to={`/case-studies/${caseStudy.id}`}>
                    Read the Build <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 lg:p-12 bg-card border-border">
          <div className="text-center">
            <h2 className="mb-4">Ready to Build Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every implementation starts with understanding your unique workflow. Let's discuss what automation could unlock for your team.
            </p>
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
        </Card>
      </SectionContainer>
    </div>
  );
};

export default CaseStudies;
