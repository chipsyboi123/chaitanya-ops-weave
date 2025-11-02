import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-dark overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
              CP
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modernizing wealth management through automation and digital presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["Services", "Labs", "Case Studies", "Writing"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-2"
              >
                <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-2"
              >
                <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                Contact
              </Link>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors group inline-flex items-center gap-2"
              >
                <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                Book a Call
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-foreground uppercase tracking-wider">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-card/50 border-border/50 focus:border-primary transition-colors backdrop-blur-sm"
              />
              <Button 
                size="sm" 
                type="submit" 
                className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-glow-gold transition-all"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chaitanya Pandit. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
