import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/services", label: "Solutions", hasDropdown: true },
    { path: "/work", label: "Case Studies", hasDropdown: false },
    { path: "/writing", label: "Insights", hasDropdown: false },
    { path: "/about", label: "About", hasDropdown: false },
  ];

  const solutionsDropdown = [
    {
      path: "/services#automation",
      title: "Automation & Internal Systems",
      subtitle: "Logic-driven automation for wealth and asset management operations"
    },
    {
      path: "/services#digital",
      title: "Brand & Digital Systems",
      subtitle: "Positioning, websites, and digital foundations for financial firms"
    },
    {
      path: "/labs",
      title: "Labs",
      subtitle: "Interactive demos and proof-of-concept tools built from real workflows"
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-4">
        {/* Navbar with gradient background */}
        <div 
          className={`relative mx-auto max-w-[1200px] rounded-2xl transition-all duration-300 overflow-hidden ${
            scrolled ? 'shadow-lg shadow-black/30' : ''
          }`}
        >
          {/* Gradient background layer */}
          <div 
            className="absolute inset-0 opacity-95"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse 60% 50% at 80% 60%, rgba(236, 72, 153, 0.35) 0%, transparent 50%),
                radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 40%),
                linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #1f2937 100%)
              `
            }}
          />
          {/* Subtle inner glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)'
            }}
          />
          {/* Border glow effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
          
          <div className="relative flex items-center justify-between h-14 lg:h-16 px-5 lg:px-8">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl lg:text-2xl font-medium tracking-tight text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              EnableWealth
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setSolutionsOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setSolutionsOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg ${
                      location.pathname === item.path 
                        ? "text-white" 
                        : "text-white hover:text-white/80 hover:bg-white/10"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button 
                asChild 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-200 rounded-full px-5 h-9 text-[14px] font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <Link to="/contact">Let's Talk</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="relative md:hidden py-4 px-5 border-t border-white/10">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-[15px] font-medium transition-colors py-3 px-3 rounded-lg ${
                      location.pathname === item.path 
                        ? "text-white bg-white/10" 
                        : "text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 mt-2 border-t border-white/10">
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full bg-white/10 text-white border-white/20 hover:bg-white hover:text-slate-900 rounded-full h-10 text-[14px] font-medium"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Let's Talk</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mega Menu Dropdown - Full Width Panel */}
      <div 
        className={`fixed top-[88px] left-0 right-0 z-40 px-4 lg:px-6 transition-all duration-300 ${
          solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
        onMouseEnter={() => setSolutionsOpen(true)}
        onMouseLeave={() => setSolutionsOpen(false)}
      >
        <div className="relative mx-auto max-w-[1200px] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Gradient background layer for mega menu */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 50% at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse 60% 60% at 70% 70%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
                radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                linear-gradient(145deg, #0f172a 0%, #1e1b4b 40%, #1f2937 100%)
              `
            }}
          />
          {/* Inner glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 60%)'
            }}
          />
          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
          
          <div className="relative p-8">
            {/* Header */}
            <div className="mb-6">
              <h3 
                className="text-xl font-medium text-white mb-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                What We Build
              </h3>
              <p 
                className="text-white/60 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Systems tailored for financial services
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solutionsDropdown.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.path}
                  onClick={() => setSolutionsOpen(false)}
                  className="group block p-5 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20"
                >
                  <div 
                    className="text-base font-medium text-white mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {solution.title}
                  </div>
                  <div 
                    className="text-[15px] text-white/70 leading-relaxed group-hover:text-white/80 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {solution.subtitle}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;