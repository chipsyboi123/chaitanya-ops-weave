import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const Writing = () => {
  const posts = [
    {
      id: "rag-explained",
      title: "RAG, Simply Explained for Wealth Managers",
      abstract: "How Retrieval-Augmented Generation transforms compliance queries and policy lookups from hours to seconds.",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      id: "excel-pdf-email",
      title: "Excel→PDF→Email: The Hidden Time Sink You Can Fix in 2 Weeks",
      abstract: "Manual report workflows are costing your analysts 10+ hours per week. Here's how to automate the entire pipeline.",
      date: "2024-01-08",
      readTime: "7 min read",
    },
    {
      id: "client-review-journey",
      title: "Designing the Client Review Journey",
      abstract: "Moving from ad-hoc reviews to systematic, insight-driven conversations that clients actually value.",
      date: "2023-12-20",
      readTime: "6 min read",
    },
    {
      id: "ai-talk-ops-reality",
      title: "AI Talk vs. Ops Reality",
      abstract: "What actually works in wealth management automation, and what's just vendor hype. A practitioner's perspective.",
      date: "2023-12-10",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Insights & Essays</span>
          </div>
          
          <h1 className="mb-8">Writing</h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed">
            Short essays that explain automation, RAGs, client-journey design, and pragmatic implementation inside WM firms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 mb-20">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group p-8 lg:p-10 bg-gradient-to-br from-card/80 to-card/40 border-border/50 hover:border-border hover:shadow-glow-violet transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <Link to={`/writing/${post.id}`} className="block relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{post.abstract}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium mr-3">Read more</span>
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-secondary/10 transition-colors">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="p-12 lg:p-16 bg-gradient-to-br from-card/80 to-card/40 border-border/50 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h3 className="mb-6">Want These Insights Applied to Your Firm?</h3>
            <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
              These articles come from real implementations. Let's discuss how the same principles can transform your operations.
            </p>
            <Button 
              size="lg" 
              asChild
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all duration-500 group"
            >
              <Link to="/contact">
                Schedule a Discussion
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </Card>
      </SectionContainer>
    </div>
  );
};

export default Writing;
