import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionContainer from "@/components/SectionContainer";
import { Mail, Calendar, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Let's Connect</span>
            </div>
            
            <h1 className="mb-8">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              I work with WM founders & consulting partners. For demos, mention which Lab interests you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-card/80 to-card/40 border-border/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your full name" className="mt-2 bg-background/50 border-border/50 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2 bg-background/50 border-border/50 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your firm name" className="mt-2 bg-background/50 border-border/50 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell me about your automation or digital presence needs..." rows={5} className="mt-2 bg-background/50 border-border/50" />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all group">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-border/50 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-glow-pulse" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-card/50 rounded-2xl"><Calendar className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                    <p className="mb-6 text-muted-foreground">Prefer to talk? Schedule a 30-minute intro call to discuss your needs.</p>
                    <Button size="sm" asChild className="bg-card hover:bg-card/80">
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">View Calendar</a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 border-border/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-2xl"><MessageSquare className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Request a Demo</h3>
                    <p className="text-muted-foreground mb-4">Interested in seeing a Lab demo? Mention which one:</p>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      {["RAG Compliance Assistant", "Excel→PDF Report Engine", "Client Review Generator", "RM Efficiency Toolkit"].map((lab, i) => (
                        <li key={i} className="flex items-center gap-2 group">
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                          {lab}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 border-border/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl"><Mail className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Response Time</h3>
                    <p className="text-muted-foreground">I typically respond within 24 hours on weekdays. For urgent inquiries, mention that in your message.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;
