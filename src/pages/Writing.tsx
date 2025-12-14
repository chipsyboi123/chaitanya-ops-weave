import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

const Writing = () => {
  const categories = ["Reporting & Review Design", "Automation Playbooks", "Compliance & Auditability", "AI in Ops (practical)"];
  
  const posts = [
    { id: "practical-automation-guide", title: "A Practical Guide to Automation in Wealth Firms", abstract: "Where to start, what to avoid, and how to measure success.", date: "2024-01-20", readTime: "10 min", pinned: true },
    { id: "rag-explained", title: "RAG, Simply Explained for Wealth Managers", abstract: "How Retrieval-Augmented Generation transforms compliance queries.", date: "2024-01-15", readTime: "5 min" },
    { id: "excel-pdf-email", title: "Excel→PDF→Email: The Hidden Time Sink", abstract: "Manual report workflows are costing 10+ hours per week.", date: "2024-01-08", readTime: "7 min" },
    { id: "client-review-journey", title: "Designing the Client Review Journey", abstract: "Moving from ad-hoc to systematic, insight-driven conversations.", date: "2023-12-20", readTime: "6 min" },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="eyebrow mb-4">Insights</p>
          <h1 className="mb-6">Writing</h1>
          <p className="text-lg text-muted-foreground">
            Practical essays on automation, compliance, and operational design for wealth firms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <span key={i} className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground border border-border/50">
              {cat}
            </span>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, i) => (
            <Card key={i} className={`p-6 border ${post.pinned ? 'border-primary/30 bg-primary/5' : 'border-border/50 bg-card/80'} hover:border-primary/30 transition-all group`}>
              <Link to={`/writing/${post.id}`} className="block">
                {post.pinned && <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2 block">Start Here</span>}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.abstract}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-muted/30">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-6">Apply These Insights to Your Firm</h2>
          <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
            <Link to="/contact">Schedule a Discussion <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Writing;
