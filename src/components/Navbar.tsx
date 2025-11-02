import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/labs", label: "Labs" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/writing", label: "Writing" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'w-[95%] lg:w-[90%]' : 'w-[98%] lg:w-[95%]'
      }`}
    >
      <div 
        className={`backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl transition-all duration-500 ${
          scrolled ? 'shadow-elevated' : 'shadow-soft'
        }`}
        style={{
          background: scrolled 
            ? 'linear-gradient(135deg, hsl(var(--card) / 0.6), hsl(var(--card) / 0.4))'
            : 'linear-gradient(135deg, hsl(var(--card) / 0.4), hsl(var(--card) / 0.3))',
        }}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors relative group"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">
                CP
              </span>
              <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    item.path === "/contact"
                      ? "text-primary bg-gradient-to-r from-primary/10 to-secondary/10 shadow-glow-gold"
                      : location.pathname === item.path 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-glow-pulse" />
                  )}
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-all rounded-lg ${
                      item.path === "/contact"
                        ? "text-primary bg-gradient-to-r from-primary/10 to-secondary/10 shadow-glow-gold"
                        : location.pathname === item.path 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
