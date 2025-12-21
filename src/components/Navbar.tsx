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
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-4">
      <div 
        className={`mx-auto max-w-[1200px] bg-[#0A0A0A] rounded-2xl transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/20' : ''
        }`}
      >
        <div className="flex items-center justify-between h-14 lg:h-16 px-5 lg:px-8">
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
                      : "text-white/70 hover:text-white hover:bg-white/5"
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

                {/* Solutions Dropdown */}
                {item.hasDropdown && solutionsOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[380px] bg-[#0A0A0A] rounded-xl border border-white/10 shadow-xl shadow-black/30 overflow-hidden z-50"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <div className="p-2">
                      {solutionsDropdown.map((solution, index) => (
                        <Link
                          key={index}
                          to={solution.path}
                          className="block p-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
                        >
                          <div 
                            className="text-[15px] font-medium text-white mb-1"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {solution.title}
                          </div>
                          <div 
                            className="text-[13px] text-white/50 leading-relaxed"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {solution.subtitle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              asChild 
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-200 rounded-full px-5 h-9 text-[14px] font-medium"
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
          <div className="md:hidden py-4 px-5 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-[15px] font-medium transition-colors py-3 px-3 rounded-lg ${
                    location.pathname === item.path 
                      ? "text-white bg-white/5" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
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
                  className="w-full bg-transparent text-white border-white/20 hover:bg-white hover:text-black rounded-full h-10 text-[14px] font-medium"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Let's Talk</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;