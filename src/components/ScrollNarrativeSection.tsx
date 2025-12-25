import { useRef, useEffect, useState } from "react";
import FluidBackground from "./FluidBackground";
import { useIsMobile } from "@/hooks/use-mobile";

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

// Unified color for all role nodes (reinforcing system > individuals)
const ROLE_NODE_COLOR = "#1e2347";

// Role icons as abstract SVG paths (line-based, single-color, institutional)
const roleIcons: Record<string, React.ReactNode> = {
  Operations: (
    // Checklist / stacked lines
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 10h12M4 14h14M4 18h10" strokeLinecap="round" />
    </svg>
  ),
  Research: (
    // Grid / document layers
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M4 14h16M9 4v16M14 4v16" />
    </svg>
  ),
  Sales: (
    // Directional arrow / pipeline
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Client Servicing": (
    // Connected dots / conversation
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="12" cy="6" r="2" />
      <path d="M7.5 10.5L10.5 7.5M13.5 7.5L16.5 10.5M8 12h8" />
    </svg>
  ),
  "Relationship Management": (
    // Network / linked nodes
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
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
  { label: "Operations", startX: -220, startY: -140 },
  { label: "Research", startX: 200, startY: -120 },
  { label: "Sales", startX: -240, startY: 60 },
  { label: "Client Servicing", startX: 220, startY: 80 },
  { label: "Relationship Management", startX: 0, startY: 160 },
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
  const isMobile = useIsMobile();

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

  // Balanced phase timing: 33/33/34 split
  const currentPhase = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  // Calculate text reveal progress within each phase - word by word with upward motion
  const getTextRevealProgress = (phaseIndex: number, totalWords: number) => {
    const phaseStarts = [0, 0.33, 0.66];
    const phaseDurations = [0.33, 0.33, 0.34];
    
    if (currentPhase !== phaseIndex) return { headerProgress: 0, wordsVisible: 0 };
    
    const phaseProgress = (scrollProgress - phaseStarts[phaseIndex]) / phaseDurations[phaseIndex];
    const headerProgress = Math.min(1, phaseProgress * 4); // Header reveals quickly
    // Words reveal progressively after header
    const wordRevealStart = 0.12;
    const wordProgress = Math.max(0, (phaseProgress - wordRevealStart) / (1 - wordRevealStart));
    const wordsVisible = Math.floor(wordProgress * totalWords);
    
    return { headerProgress, wordsVisible };
  };

  const getTileTransform = (
    startX: number,
    startY: number,
    index: number
  ) => {
    const phase2Start = 0.33;
    const phase3Start = 0.66;

    // Mobile: reduce starting positions
    const mobileScale = isMobile ? 0.5 : 1;
    const adjStartX = startX * mobileScale;
    const adjStartY = startY * mobileScale;

    if (scrollProgress < phase2Start) {
      return {
        x: adjStartX,
        y: adjStartY,
        opacity: 1,
        scale: 1,
      };
    } else if (scrollProgress < phase3Start) {
      const phase2Progress = (scrollProgress - phase2Start) / (phase3Start - phase2Start);
      const easedProgress = 1 - Math.pow(1 - phase2Progress, 3);
      return {
        x: adjStartX * (1 - easedProgress * 0.85),
        y: adjStartY * (1 - easedProgress * 0.85),
        opacity: 1 - easedProgress * 0.4, // Increased fade during convergence
        scale: 1 - easedProgress * 0.25,
      };
    } else {
      const phase3Progress = (scrollProgress - phase3Start) / (1 - phase3Start);
      return {
        x: adjStartX * 0.15,
        y: adjStartY * 0.15,
        opacity: Math.max(0, 0.6 - phase3Progress * 1.5),
        scale: 0.75,
      };
    }
  };

  // Calculate line progress from tiles to center
  const getLineProgress = () => {
    const lineStart = 0.28;
    const lineEnd = 0.60;
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
    scrollProgress < 0.33 ? 0 : scrollProgress < 0.50 ? (scrollProgress - 0.33) / 0.17 : 1;

  // Scale animation for unified label
  const unifiedLabelScale = 
    scrollProgress < 0.40 ? 0.95 : 
    scrollProgress < 0.50 ? 0.95 + ((scrollProgress - 0.40) / 0.10) * 0.05 : 1;

  const uiLayoutOpacity =
    scrollProgress < 0.66 ? 0 : (scrollProgress - 0.66) / 0.34;

  const lineProgress = getLineProgress();

  // Mobile layout: stacked vertical
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-background"
        style={{ height: "350vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Top - Visual Animation (50%) */}
          <div className="h-[45%] relative flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center scale-75">
              {/* SVG Lines from tiles to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                {departmentTiles.map((tile, index) => {
                  const transform = getTileTransform(tile.startX, tile.startY, index);
                  const centerX = window.innerWidth * 0.5;
                  const centerY = window.innerHeight * 0.225;
                  const tileX = centerX + transform.x;
                  const tileY = centerY + transform.y;
                  
                  const endX = tileX + (centerX - tileX) * lineProgress;
                  const endY = tileY + (centerY - tileY) * lineProgress;
                  
                  return (
                    <line
                      key={`line-${index}`}
                      x1={tileX}
                      y1={tileY}
                      x2={endX}
                      y2={endY}
                      stroke={ROLE_NODE_COLOR}
                      strokeWidth="2.5"
                      strokeOpacity={lineProgress > 0 ? 0.7 : 0}
                      strokeDasharray="5 3"
                      className="transition-all duration-700"
                    />
                  );
                })}
              </svg>

              {/* Role Nodes */}
              {departmentTiles.map((tile, index) => {
                const transform = getTileTransform(tile.startX, tile.startY, index);
                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center gap-1 transition-all duration-700 ease-out"
                    style={{
                      transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                      opacity: transform.opacity,
                      zIndex: 10,
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/15 text-white/70"
                      style={{ 
                        backgroundColor: ROLE_NODE_COLOR,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {roleIcons[tile.label]}
                    </div>
                    <span className="text-[9px] font-medium text-white/90 whitespace-nowrap px-2 py-0.5 rounded bg-[#1e2347]/80">
                      {tile.label}
                    </span>
                  </div>
                );
              })}

              {/* Unified System Label */}
              <div
                className="absolute transition-all duration-1000 z-30"
                style={{
                  opacity: scrollProgress > 0.38 ? 1 : 0,
                  transform: `translateY(${scrollProgress > 0.66 ? -80 : 0}px) scale(${unifiedLabelScale})`,
                }}
              >
                <div 
                  className="relative rounded-xl overflow-hidden px-4 py-2 shadow-lg"
                  style={{
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                  }}
                >
                  <div className="absolute inset-0 -z-10">
                    <FluidBackground mousePosition={mousePosition} isHovered={isHovered} />
                  </div>
                  <span className="relative z-10 text-sm font-semibold text-white drop-shadow-lg">
                    A Unified System
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="h-px bg-[#2a2f4a] mx-8" />

          {/* Bottom - Text Content (55%) */}
          <div className="h-[55%] flex items-start justify-center px-6 pt-6 pb-4 overflow-hidden">
            <div className="max-w-sm relative">
              {phases.map((phase, index) => {
                const { headerProgress, wordsVisible } = getTextRevealProgress(index, phase.subtextWords.length);
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${currentPhase === index ? '' : 'absolute top-0 left-0'}`}
                    style={{
                      opacity: currentPhase === index ? 1 : 0,
                      transform: `translateY(${currentPhase === index ? 0 : 20}px)`,
                      pointerEvents: currentPhase === index ? "auto" : "none",
                    }}
                  >
                    <h3 
                      className="text-xl font-semibold leading-tight mb-4 text-foreground tracking-tight transition-all duration-500"
                      style={{
                        opacity: headerProgress,
                        transform: `translateY(${(1 - headerProgress) * 15}px)`,
                      }}
                    >
                      {phase.header}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {phase.subtextWords.map((word, wordIndex) => {
                        const isVisible = wordIndex < wordsVisible;
                        const isBold = phase.boldWords?.includes(word.replace(/[^a-zA-Z]/g, ''));
                        return (
                          <span
                            key={wordIndex}
                            className={`inline-block transition-all duration-300 mr-1 ${isBold ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                            style={{
                              opacity: isVisible ? 1 : 0.25,
                              transform: `translateY(${isVisible ? 0 : 4}px)`,
                            }}
                          >
                            {word}
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
  }

  // Desktop layout
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
            
            {/* SVG Lines from tiles to center - thicker and more visible */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {departmentTiles.map((tile, index) => {
                const transform = getTileTransform(tile.startX, tile.startY, index);
                const centerX = window.innerWidth * 0.3;
                const centerY = window.innerHeight * 0.5;
                const tileX = centerX + transform.x;
                const tileY = centerY + transform.y;
                
                const endX = tileX + (centerX - tileX) * lineProgress;
                const endY = tileY + (centerY - tileY) * lineProgress;
                
                return (
                  <line
                    key={`line-${index}`}
                    x1={tileX}
                    y1={tileY}
                    x2={endX}
                    y2={endY}
                    stroke={ROLE_NODE_COLOR}
                    strokeWidth="2.5"
                    strokeOpacity={lineProgress > 0 ? 0.7 : 0}
                    strokeDasharray="5 3"
                    className="transition-all duration-700"
                  />
                );
              })}
            </svg>

            {/* Role Nodes - Smaller, more uniform */}
            {departmentTiles.map((tile, index) => {
              const transform = getTileTransform(tile.startX, tile.startY, index);
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-1.5 transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                    opacity: transform.opacity,
                    zIndex: 10,
                  }}
                >
                  {/* Abstract Role Node - Smaller */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center border border-white/15 text-white/70"
                    style={{ 
                      backgroundColor: ROLE_NODE_COLOR,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {roleIcons[tile.label]}
                  </div>
                  {/* Role Label - Tighter gap, smaller text */}
                  <span 
                    className="text-[11px] font-medium text-white/90 whitespace-nowrap tracking-wide px-2.5 py-1 rounded-md border border-white/10"
                    style={{ backgroundColor: ROLE_NODE_COLOR }}
                  >
                    {tile.label}
                  </span>
                </div>
              );
            })}

            {/* "A Unified System" Label with scale animation */}
            <div
              className="absolute transition-all duration-1000 z-30"
              style={{
                opacity: scrollProgress > 0.38 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.66 ? -200 : 0}px) scale(${unifiedLabelScale})`,
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

            {/* Vertical connector between unified label and CRM */}
            <div 
              className="absolute w-px h-12 bg-gradient-to-b from-white/40 to-transparent transition-all duration-700"
              style={{
                opacity: scrollProgress > 0.62 && scrollProgress < 0.75 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.66 ? -140 : -160}px)`,
                zIndex: 25,
              }}
            />

            {/* Central CRM Container */}
            <div
              className="absolute rounded-2xl border-2 border-border/50 overflow-hidden transition-all duration-1000 flex items-center justify-center"
              style={{
                width: "420px",
                height: "340px",
                opacity: uiLayoutOpacity,
                transform: `translateY(${scrollProgress > 0.75 ? 40 : 0}px) scale(${uiLayoutOpacity > 0 ? 1 : 0.95})`,
                zIndex: 20,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Abstract UI Layout - Phase 3 */}
              <div className="absolute inset-0 bg-background">
                <div className="w-full h-full flex rounded-lg overflow-hidden border border-border/40">
                  {/* Sidebar Navigation - Dark Blue with better contrast */}
                  <div className="w-28 py-4 px-2 bg-[#171839]">
                    {navItems.map((item, i) => (
                      <div
                        key={i}
                        className={`text-xs py-2.5 px-3 rounded-md mb-1 transition-all cursor-pointer ${
                          i === 0
                            ? "bg-white/25 text-white font-medium"
                            : "text-white/90 hover:bg-white/15"
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

        {/* Vertical Divider Line - Better contrast */}
        <div className="w-px bg-[#2a2f4a] self-stretch my-16" />

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
                  {/* Larger headers with tighter letter-spacing */}
                  <h3 
                    className="text-3xl lg:text-4xl font-semibold leading-tight mb-6 text-foreground tracking-tight transition-all duration-500"
                    style={{
                      opacity: headerProgress,
                      transform: `translateY(${(1 - headerProgress) * 20}px)`,
                    }}
                  >
                    {phase.header}
                  </h3>
                  {/* Improved line height and word reveal with upward motion */}
                  <p className="text-base lg:text-lg leading-loose">
                    {phase.subtextWords.map((word, wordIndex) => {
                      const isVisible = wordIndex < wordsVisible;
                      const isBold = phase.boldWords?.includes(word.replace(/[^a-zA-Z]/g, ''));
                      return (
                        <span
                          key={wordIndex}
                          className={`inline-block transition-all duration-300 mr-1 ${isBold ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                          style={{
                            opacity: isVisible ? 1 : 0.25,
                            transform: `translateY(${isVisible ? 0 : 6}px)`,
                          }}
                        >
                          {word}
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
