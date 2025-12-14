import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionContainer from "@/components/SectionContainer";
import { Mail, Calendar, ArrowRight, Clock } from "lucide-react";

const Contact = () => {
  const inquiryTypes = [
    "Reporting automation",
    "RM workflow automation",
    "Compliance knowledge system",
    "Review pack redesign",
    "Website + compliant digital presence",
    "Not sure — help me choose",
  ];

  return (
    <div className="min-h-screen pt-32">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="mb-6">Let's Discuss Your Requirements</h1>
            <p className="text-lg text-muted-foreground">
              Whether you're exploring modernization or ready to begin, we welcome the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border border-border/50 bg-card/80">
              <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground">Name *</Label>
                  <Input id="name" placeholder="Your full name" className="mt-2 bg-background border-border/50 h-11" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm text-muted-foreground">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2 bg-background border-border/50 h-11" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm text-muted-foreground">Firm / Organization</Label>
                  <Input id="company" placeholder="Your firm name" className="mt-2 bg-background border-border/50 h-11" />
                </div>
                <div>
                  <Label htmlFor="inquiry" className="text-sm text-muted-foreground">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-background border-border/50 h-11">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {inquiryTypes.map((type, i) => (
                        <SelectItem key={i} value={type.toLowerCase().replace(/\s+/g, '-')}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm text-muted-foreground">Message *</Label>
                  <Textarea id="message" placeholder="Describe your requirements..." rows={4} className="mt-2 bg-background border-border/50" />
                </div>
                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-[#0F0F0F]">
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border border-primary/20 bg-card/80">
                <div className="flex gap-4">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Book a Blueprint Call</h4>
                    <p className="text-sm text-muted-foreground mb-4">30-minute introductory call to discuss requirements.</p>
                    <Button size="sm" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/10">
                      <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">View Calendar</a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 bg-card/80">
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Response Time</h4>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours on business days.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border/50 bg-card/80">
                <h4 className="font-semibold mb-4">Common Inquiries</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {["Reporting automation assessment", "RM workflow optimization", "Compliance system implementation", "Digital presence redesign"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
