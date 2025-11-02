import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/SectionContainer";
import { Target, Zap, Shield, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every automation must be exact. No room for approximation in financial workflows.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast prototyping, faster deployment. Time is the only non-renewable resource.",
    },
    {
      icon: Shield,
      title: "Discretion",
      description: "Client data is sacred. Security and compliance are built in, not bolted on.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Systems that work when you need them. No surprises, no downtime.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6">Builder. Systems Thinker. Operator.</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          </div>

          {/* Bio */}
          <Card className="p-8 lg:p-12 mb-12">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
              I've spent the last three years across research, client delivery, ops automation and design inside a boutique wealth firm. 
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              I bridge domain logic with engineering—so teams stop wrestling spreadsheets and start shipping outcomes.
            </p>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-center mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-elevated transition-all">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Aspirational Line */}
          <Card className="p-8 lg:p-12 bg-primary text-primary-foreground text-center mb-12">
            <h2 className="mb-4">Vision</h2>
            <p className="text-xl lg:text-2xl font-light">
              I want to build the next era of wealth management.
            </p>
          </Card>

          {/* Background Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-card">
              <h3 className="mb-4">Experience</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>3 years in boutique wealth management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Research, client delivery, and operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Automation design and implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Digital presence and UX design</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card">
              <h3 className="mb-4">Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Domain-first: understand the workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Prototype fast, validate faster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Build with compliance in mind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>Handoff with documentation and training</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="mb-6">Let's Build Together</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a founder looking to scale operations or a consulting partner seeking technical execution, I'd love to discuss what's possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book Intro Call
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default About;
