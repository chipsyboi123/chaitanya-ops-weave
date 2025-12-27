import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/SectionContainer";
import TrustStrip from "@/components/TrustStrip";
import RotatingText from "@/components/RotatingText";
import ScrollNarrativeSection from "@/components/ScrollNarrativeSection";
import { ArrowRight } from "lucide-react";
const Home = () => {
  const trustStatements = ["Designed for regulated workflows", "Discretion-first delivery", "Automation over headcount", "Systems that compound over time"];
  const rotatingPhrases = ["Advisors to communicate seamlessly.", "Operations teams to close loops faster.", "Research to surface insights instantly.", "Compliance to be searchable and auditable."];
  return <div className="min-h-screen relative">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <h1 style={{
            animationDelay: "0.2s"
          }} className="text-[48px] md:text-[64px] lg:text-[72px] font-semibold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in">
              Building Scalable Systems for Modern Wealth Firms.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 opacity-0 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>We replace manual operations with automation across portfolio reporting, RM workflows, compliance knowledge, and client experience—so teams move faster and clients feel the difference.</p>

            <div className="mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: "0.35s"
          }}>
              <RotatingText prefix="We enable" phrases={rotatingPhrases} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F] border border-transparent hover:border-primary/30 transition-all px-8">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Blueprint Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border border-secondary/20 text-secondary hover:bg-secondary/5 px-8">
                <Link to="/work">See Proof</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip statements={trustStatements} />

      {/* SCROLL-BASED NARRATIVE SECTION */}
      <ScrollNarrativeSection />

      {/* FINAL CTA */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-6">
            Ready to Modernize Operations Without Adding Headcount?
          </h2>
          <p className="text-muted-foreground mb-10">
            Let's discuss what's possible for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-[#0F0F0F] border border-transparent hover:border-primary/30 px-8">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Blueprint Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border border-secondary/20 text-secondary hover:bg-secondary/5 px-8">
              <Link to="/labs">See Labs</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>;
};
export default Home;