import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-serif text-foreground mb-4 inline-block">
              Chaitanya Pandit
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mt-4">
              Institutional-grade systems and AI-enabled operations for modern wealth practices.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium mb-6 text-muted-foreground uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["Work", "Services", "Writing", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-medium mb-6 text-muted-foreground uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Schedule a Call
              </a>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chaitanya Pandit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
