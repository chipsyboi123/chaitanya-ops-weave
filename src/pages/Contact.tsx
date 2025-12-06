import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionContainer from "@/components/SectionContainer";
import { Mail, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary mb-6 font-medium">Contact</p>
            <h1 className="mb-8">Let's Discuss Your Requirements</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're exploring modernization or ready to begin, I welcome the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border border-border/50 bg-card/50">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="mt-2 bg-background border-border/50 h-12 focus:border-primary/50" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm text-muted-foreground">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-2 bg-background border-border/50 h-12 focus:border-primary/50" 
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm text-muted-foreground">Firm / Organization</Label>
                  <Input 
                    id="company" 
                    placeholder="Your firm name" 
                    className="mt-2 bg-background border-border/50 h-12 focus:border-primary/50" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm text-muted-foreground">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your requirements or areas of interest..." 
                    rows={5} 
                    className="mt-2 bg-background border-border/50 focus:border-primary/50" 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base py-6 bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/20"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="space-y-6">
              <Card className="p-8 border border-primary/20 bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-primary/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold mb-2">Schedule a Consultation</h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Prefer a direct conversation? Schedule a 30-minute introductory call to discuss your requirements.
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      asChild
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                        View Calendar
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-border/50 bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-border/50 rounded-lg">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I typically respond within 24 hours on business days. For time-sensitive matters, please indicate urgency in your message.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border border-border/50 bg-card/50">
                <h4 className="text-base font-semibold mb-4">Common Inquiries</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Automation feasibility assessment",
                    "System architecture consultation",
                    "AI/ML implementation guidance",
                    "Digital transformation strategy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
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
