import { useRef, useEffect, useState } from "react";
import FluidBackground from "./FluidBackground";

interface ScrollPhase {
  header: string;
  subtextWords: string[];
  boldWords?: string[];
}

const phases: ScrollPhase[] = [
  {
    header: "Today's processes are fragmented and inefficient.",
    subtextWords: "Research, reporting, client follow-ups, and compliance workflows live across different people, tools, and spreadsheets. As firms grow, this fragmentation slows teams down and increases dependency on individuals.".split(" "),
  },
  {
    header: "A unified system that fits the way you already work.",
    subtextWords: "Instead of adding another tool, we bring existing workflows together into one connected structure — designed around how your firm already operates.".split(" "),
    boldWords: ["existing", "workflows"],
  },
  {
    header: "See your firm's work — clearly, in one place.",
    subtextWords: "Research, operations, and client activity are visible, connected, and auditable — enabling faster decisions and smoother execution across teams.".split(" "),
  },
];

// Role icons as abstract SVG paths (line-based, single-color, institutional)
const roleIcons: Record<string, React.ReactNode> = {
  Operations: (
    // Checklist / stacked lines
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 10h12M4 14h14M4 18h10" strokeLinecap="round" />
    </svg>
  ),
  Research: (
    // Grid / document layers
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M4 14h16M9 4v16M14 4v16" />
    </svg>
  ),
  Sales: (
    // Directional arrow / pipeline
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Client Servicing": (
    // Connected dots / conversation
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="12" cy="6" r="2" />
      <path d="M7.5 10.5L10.5 7.5M13.5 7.5L16.5 10.5M8 12h8" />
    </svg>
  ),
  "Relationship Management": (
    // Network / linked nodes
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M9.5 10L6.5 7.5M14.5 10L17.5 7.5M9.5 14L6.5 16.5M14.5 14L17.5 16.5" />
    </svg>
  ),
};

const departmentTiles = [
  { label: "Operations", startX: -220, startY: -140, color: "#151838" },
  { label: "Research", startX: 200, startY: -120, color: "#312a6a" },
  { label: "Sales", startX: -240, startY: 60, color: "#1f2e65" },
  { label: "Client Servicing", startX: 220, startY: 80, color: "#2f1e45" },
  { label: "Relationship Management", startX: 0, startY: 160, color: "#353c4f" },
];

const navItems = [
  "AUM",
  "SIPs",
  "Transactions",
  "Investment Plans",
  "Meetings",
  "Process Notes",
  "Research",
];

const ScrollNarrativeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPhase = scrollProgress < 0.3 ? 0 : scrollProgress < 0.6 ? 1 : 2;

  // Calculate text reveal progress within each phase - word by word
  const getTextRevealProgress = (phaseIndex: number, totalWords: number) => {
    const phaseStarts = [0, 0.3, 0.6];
    const phaseDurations = [0.3, 0.3, 0.4];
    
    if (currentPhase !== phaseIndex) return { headerProgress: 0, wordsVisible: 0 };
    
    const phaseProgress = (scrollProgress - phaseStarts[phaseIndex]) / phaseDurations[phaseIndex];
    const headerProgress = Math.min(1, phaseProgress * 4); // Header reveals quickly
    // Words reveal progressively after header
    const wordRevealStart = 0.15;
    const wordProgress = Math.max(0, (phaseProgress - wordRevealStart) / (1 - wordRevealStart));
    const wordsVisible = Math.floor(wordProgress * totalWords);
    
    return { headerProgress, wordsVisible };
  };

  const getTileTransform = (
    startX: number,
    startY: number,
    index: number
  ) => {
    const phase2Start = 0.3;
    const phase3Start = 0.6;

    if (scrollProgress < phase2Start) {
      return {
        x: startX,
        y: startY,
        opacity: 1,
        scale: 1,
      };
    } else if (scrollProgress < phase3Start) {
      const phase2Progress = (scrollProgress - phase2Start) / (phase3Start - phase2Start);
      const easedProgress = 1 - Math.pow(1 - phase2Progress, 3);
      return {
        x: startX * (1 - easedProgress * 0.85),
        y: startY * (1 - easedProgress * 0.85),
        opacity: 1 - easedProgress * 0.3,
        scale: 1 - easedProgress * 0.2,
      };
    } else {
      const phase3Progress = (scrollProgress - phase3Start) / (1 - phase3Start);
      return {
        x: startX * 0.15,
        y: startY * 0.15,
        opacity: Math.max(0, 0.7 - phase3Progress * 1.5),
        scale: 0.8,
      };
    }
  };

  // Calculate line progress from tiles to center
  const getLineProgress = () => {
    const lineStart = 0.25;
    const lineEnd = 0.55;
    if (scrollProgress < lineStart) return 0;
    if (scrollProgress > lineEnd) return 1;
    return (scrollProgress - lineStart) / (lineEnd - lineStart);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const centralContainerOpacity =
    scrollProgress < 0.3 ? 0 : scrollProgress < 0.45 ? (scrollProgress - 0.3) / 0.15 : 1;

  const uiLayoutOpacity =
    scrollProgress < 0.6 ? 0 : (scrollProgress - 0.6) / 0.4;

  const lineProgress = getLineProgress();

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left Side - Visual Animation (60%) */}
        <div className="w-[60%] relative flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* SVG Lines from tiles to center */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {departmentTiles.map((tile, index) => {
                const transform = getTileTransform(tile.startX, tile.startY, index);
                const centerX = window.innerWidth * 0.3;
                const centerY = window.innerHeight * 0.5;
                const tileX = centerX + transform.x;
                const tileY = centerY + transform.y;
                
                // Calculate line endpoint based on progress
                const endX = tileX + (centerX - tileX) * lineProgress;
                const endY = tileY + (centerY - tileY) * lineProgress;
                
                return (
                  <line
                    key={`line-${index}`}
                    x1={tileX}
                    y1={tileY}
                    x2={endX}
                    y2={endY}
                    stroke={tile.color}
                    strokeWidth="2"
                    strokeOpacity={lineProgress > 0 ? 0.6 : 0}
                    strokeDasharray="6 4"
                    className="transition-all duration-700"
                  />
                );
              })}
            </svg>

            {/* Role Nodes - Abstract, institutional */}
            {departmentTiles.map((tile, index) => {
              const transform = getTileTransform(tile.startX, tile.startY, index);
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-2 transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                    opacity: transform.opacity,
                    zIndex: 10,
                  }}
                >
                  {/* Abstract Role Node */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center border border-white/15 text-white/70"
                    style={{ 
                      backgroundColor: tile.color,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {roleIcons[tile.label]}
                  </div>
                  {/* Role Label - More prominent than icon */}
                  <div 
                    className="px-3 py-1.5 rounded-md border border-white/10"
                    style={{ backgroundColor: tile.color }}
                  >
                    <span className="text-xs font-medium text-white/90 whitespace-nowrap tracking-wide">
                      {tile.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* "A Unified System" Label - moves up in phase 3 */}
            <div
              className="absolute transition-all duration-1000 z-30"
              style={{
                opacity: scrollProgress > 0.35 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.6 ? -200 : 0}px)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className="relative rounded-2xl overflow-hidden px-8 py-4 shadow-xl"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="absolute inset-0 -z-10">
                  <FluidBackground mousePosition={mousePosition} isHovered={isHovered} />
                </div>
                <span className="relative z-10 text-xl font-semibold text-white drop-shadow-lg">
                  A Unified System
                </span>
              </div>
            </div>

            {/* Central CRM Container */}
            <div
              className="absolute rounded-2xl border-2 border-border/50 overflow-hidden transition-all duration-1000 flex items-center justify-center"
              style={{
                width: "420px",
                height: "340px",
                opacity: uiLayoutOpacity,
                transform: `translateY(${scrollProgress > 0.7 ? 40 : 0}px) scale(${uiLayoutOpacity > 0 ? 1 : 0.9})`,
                zIndex: 20,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Abstract UI Layout - Phase 3 */}
              <div
                className="absolute inset-0 bg-background"
              >
                <div className="w-full h-full flex rounded-lg overflow-hidden border border-border/40">
                  {/* Sidebar Navigation - Dark Blue */}
                  <div className="w-28 py-4 px-2 bg-[#171839]">
                    {navItems.map((item, i) => (
                      <div
                        key={i}
                        className={`text-xs py-2.5 px-3 rounded-md mb-1 transition-all cursor-pointer ${
                          i === 0
                            ? "bg-white/20 text-white font-medium"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                        style={{
                          opacity: uiLayoutOpacity,
                          transform: `translateX(${(1 - uiLayoutOpacity) * -15}px)`,
                          transitionDelay: `${i * 60}ms`,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main Panel - Abstract */}
                  <div className="flex-1 p-4 bg-background">
                    <div className="h-4 w-28 bg-muted/70 rounded mb-4" />
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="h-16 bg-muted/50 rounded-lg border border-border/40 flex flex-col items-center justify-center gap-1"
                        >
                          <div className="w-6 h-6 rounded-full bg-muted/80" />
                          <div className="w-10 h-2 bg-muted/60 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2.5">
                      <div className="h-2.5 w-full bg-muted/40 rounded" />
                      <div className="h-2.5 w-4/5 bg-muted/40 rounded" />
                      <div className="h-2.5 w-11/12 bg-muted/40 rounded" />
                      <div className="h-2.5 w-3/4 bg-muted/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div className="w-px bg-[#171839] self-stretch my-16" />

        {/* Right Side - Text Content (40%) */}
        <div className="w-[40%] flex items-center justify-center px-12 lg:px-16">
          <div className="max-w-md relative">
            {phases.map((phase, index) => {
              const { headerProgress, wordsVisible } = getTextRevealProgress(index, phase.subtextWords.length);
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${currentPhase === index ? '' : 'absolute top-0 left-0'}`}
                  style={{
                    opacity: currentPhase === index ? 1 : 0,
                    transform: `translateY(${currentPhase === index ? 0 : 30}px)`,
                    pointerEvents: currentPhase === index ? "auto" : "none",
                  }}
                >
                  <h3 
                    className="text-2xl lg:text-3xl font-semibold leading-tight mb-6 text-foreground transition-all duration-500"
                    style={{
                      opacity: headerProgress,
                      transform: `translateY(${(1 - headerProgress) * 20}px)`,
                    }}
                  >
                    {phase.header}
                  </h3>
                  <p className="text-base lg:text-lg leading-relaxed">
                    {phase.subtextWords.map((word, wordIndex) => {
                      const isVisible = wordIndex < wordsVisible;
                      const isBold = phase.boldWords?.includes(word.replace(/[^a-zA-Z]/g, ''));
                      return (
                        <span
                          key={wordIndex}
                          className={`transition-all duration-300 ${isBold ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                          style={{
                            opacity: isVisible ? 1 : 0.15,
                          }}
                        >
                          {word}{' '}
                        </span>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollNarrativeSection;
