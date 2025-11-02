import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { ArrowRight, Calendar } from "lucide-react";

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
    <div className="min-h-screen">
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-6">Writing</h1>
          <p className="text-xl text-muted-foreground">
            Short essays that explain automation, RAGs, client-journey design, and pragmatic implementation inside WM firms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 hover:shadow-elevated transition-all hover:-translate-y-1"
            >
              <Link to={`/writing/${post.id}`} className="block">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.abstract}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <span className="text-sm font-medium mr-2">Read more</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 lg:p-12 bg-card border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="mb-4">Want These Insights Applied to Your Firm?</h3>
            <p className="text-muted-foreground mb-6">
              These articles come from real implementations. Let's discuss how the same principles can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  Schedule a Discussion
                </button>
              </Link>
            </div>
          </div>
        </Card>
      </SectionContainer>
    </div>
  );
};

export default Writing;
