import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionContainer from "@/components/SectionContainer";
import { Mail, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I work with WM founders & consulting partners. For demos, mention which Lab interests you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your firm name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your automation or digital presence needs..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Quick Actions & Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Book a Call</h3>
                    <p className="mb-4 opacity-90">
                      Prefer to talk? Schedule a 30-minute intro call to discuss your needs.
                    </p>
                    <Button variant="secondary" size="sm" asChild>
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        View Calendar
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Request a Demo</h3>
                    <p className="text-muted-foreground mb-3">
                      Interested in seeing a Lab demo? Mention which one in your message:
                    </p>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>→ RAG Compliance Assistant</li>
                      <li>→ Excel→PDF Report Engine</li>
                      <li>→ Client Review Generator</li>
                      <li>→ RM Efficiency Toolkit</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                    <p className="text-muted-foreground">
                      I typically respond within 24 hours on weekdays. For urgent inquiries, please mention that in your message.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-3">Who I Work With</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Wealth management founders scaling operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Mid-sized consulting partners seeking technical execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Financial advisors modernizing client experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Family offices automating compliance workflows</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;
