import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Clock, TrendingUp, Sparkles } from "lucide-react";

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
      gradient: "from-secondary/20 to-secondary/5",
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
      gradient: "from-primary/20 to-primary/5",
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
      gradient: "from-secondary/15 to-primary/10",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Real Implementations</span>
          </div>
          
          <h1 className="mb-8">Case Studies</h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed">
            Real implementations. Real outcomes. Real impact on wealth management operations.
          </p>
        </div>

        {/* Visual storytelling cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${caseStudy.gradient} border-border/50 hover:border-border hover:shadow-glow-violet transition-all duration-700 hover:-translate-y-3 backdrop-blur-sm flex flex-col`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-card/50 border border-border/50 rounded-full mb-4">
                    <p className="text-xs text-muted-foreground">{caseStudy.meta}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {caseStudy.title}
                  </h3>
                </div>

                <div className="space-y-6 mb-8 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-destructive/10 rounded-lg">
                      <Clock className="w-4 h-4 text-destructive flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-secondary/10 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-secondary flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground">{caseStudy.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-6 border-t border-border/50">
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {caseStudy.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/10" 
                    asChild
                  >
                    <Link to={`/case-studies/${caseStudy.id}`}>
                      Read the Build 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <Card className="p-12 lg:p-16 bg-gradient-to-br from-card/80 to-card/40 border-border/50 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="text-center relative z-10">
            <h2 className="mb-6">Ready to Build Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Every implementation starts with understanding your unique workflow. Let's discuss what automation could unlock for your team.
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
