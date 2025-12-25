import { useRef, useEffect, useState } from "react";
import FluidBackground from "./FluidBackground";

interface ScrollPhase {
  header: string;
  subtext: React.ReactNode;
}

const phases: ScrollPhase[] = [
  {
    header: "Today's processes are fragmented and inefficient.",
    subtext:
      "Research, reporting, client follow-ups, and compliance workflows live across different people, tools, and spreadsheets. As firms grow, this fragmentation slows teams down and increases dependency on individuals.",
  },
  {
    header: "A unified system that fits the way you already work.",
    subtext: (
      <>
        Instead of adding another tool, we bring <strong className="font-semibold text-foreground">existing workflows</strong> together into one connected structure — designed around how your firm already operates.
      </>
    ),
  },
  {
    header: "See your firm's work — clearly, in one place.",
    subtext:
      "Research, operations, and client activity are visible, connected, and auditable — enabling faster decisions and smoother execution across teams.",
  },
];

const departmentTiles = [
  { label: "Operations", startX: -220, startY: -140, color: "#151838", skin: "#E8C4A0", hair: "#2C1810" },
  { label: "Research", startX: 200, startY: -120, color: "#312a6a", skin: "#D4A574", hair: "#1A1A2E" },
  { label: "Sales", startX: -240, startY: 60, color: "#1f2e65", skin: "#F5D0C5", hair: "#4A3728" },
  { label: "Client Servicing", startX: 220, startY: 80, color: "#2f1e45", skin: "#C4956A", hair: "#0D0D0D" },
  { label: "Relationship Management", startX: 0, startY: 160, color: "#353c4f", skin: "#E0B89A", hair: "#3D2314" },
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

  const currentPhase = scrollProgress < 0.35 ? 0 : scrollProgress < 0.65 ? 1 : 2;

  // Calculate text reveal progress within each phase - slower, more gradual
  const getTextRevealProgress = (phaseIndex: number) => {
    const phaseStarts = [0, 0.35, 0.65];
    const phaseDurations = [0.35, 0.3, 0.35];
    
    if (currentPhase !== phaseIndex) return { headerProgress: 0, subtextProgress: 0 };
    
    const phaseProgress = (scrollProgress - phaseStarts[phaseIndex]) / phaseDurations[phaseIndex];
    const headerProgress = Math.min(1, phaseProgress * 2.5); // Header reveals more gradually
    const subtextProgress = Math.max(0, Math.min(1, (phaseProgress - 0.15) * 1.5)); // Subtext reveals slower
    
    return { headerProgress, subtextProgress };
  };

  const getTileTransform = (
    startX: number,
    startY: number,
    index: number
  ) => {
    const phase2Start = 0.35;
    const phase3Start = 0.65;

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
    scrollProgress < 0.35 ? 0 : scrollProgress < 0.5 ? (scrollProgress - 0.35) / 0.15 : 1;

  const uiLayoutOpacity =
    scrollProgress < 0.65 ? 0 : (scrollProgress - 0.65) / 0.35;

  const lineProgress = getLineProgress();

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "280vh" }}
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

            {/* Department Tiles */}
            {departmentTiles.map((tile, index) => {
              const transform = getTileTransform(tile.startX, tile.startY, index);
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-3 transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                    opacity: transform.opacity,
                    zIndex: 10,
                  }}
                >
                  {/* Person Circle with Face */}
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 overflow-hidden"
                    style={{ backgroundColor: tile.color }}
                  >
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      {/* Head/Face */}
                      <ellipse cx="40" cy="38" rx="22" ry="24" fill={tile.skin} />
                      
                      {/* Hair - different styles per person */}
                      {index === 0 && (
                        <>
                          <ellipse cx="40" cy="22" rx="20" ry="14" fill={tile.hair} />
                          <rect x="20" y="18" width="40" height="8" fill={tile.hair} />
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <ellipse cx="40" cy="20" rx="22" ry="12" fill={tile.hair} />
                          <path d="M18 28 Q20 40 22 50 L18 50 L16 30 Z" fill={tile.hair} />
                          <path d="M62 28 Q60 40 58 50 L62 50 L64 30 Z" fill={tile.hair} />
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <ellipse cx="40" cy="18" rx="18" ry="10" fill={tile.hair} />
                          <path d="M22 22 Q18 35 20 48 L24 48 Q26 35 24 22 Z" fill={tile.hair} />
                          <path d="M58 22 Q62 35 60 48 L56 48 Q54 35 56 22 Z" fill={tile.hair} />
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <ellipse cx="40" cy="20" rx="19" ry="11" fill={tile.hair} />
                          <rect x="21" y="16" width="38" height="6" rx="3" fill={tile.hair} />
                        </>
                      )}
                      {index === 4 && (
                        <>
                          <ellipse cx="40" cy="19" rx="20" ry="12" fill={tile.hair} />
                          <path d="M20 24 L22 36 L18 36 Z" fill={tile.hair} />
                          <path d="M60 24 L58 36 L62 36 Z" fill={tile.hair} />
                        </>
                      )}
                      
                      {/* Eyes */}
                      <ellipse cx="32" cy="38" rx="4" ry="3" fill="white" />
                      <ellipse cx="48" cy="38" rx="4" ry="3" fill="white" />
                      <circle cx="33" cy="38" r="2" fill="#2C1810" />
                      <circle cx="49" cy="38" r="2" fill="#2C1810" />
                      <circle cx="33.5" cy="37.5" r="0.8" fill="white" />
                      <circle cx="49.5" cy="37.5" r="0.8" fill="white" />
                      
                      {/* Eyebrows */}
                      <path d="M28 33 Q32 31 36 33" stroke="#4A3728" strokeWidth="1.5" fill="none" />
                      <path d="M44 33 Q48 31 52 33" stroke="#4A3728" strokeWidth="1.5" fill="none" />
                      
                      {/* Nose */}
                      <path d="M40 40 L38 48 L42 48 Z" fill={tile.skin} opacity="0.6" />
                      
                      {/* Mouth */}
                      <path d="M35 52 Q40 56 45 52" stroke="#B87A6A" strokeWidth="2" fill="none" strokeLinecap="round" />
                      
                      {/* Ears */}
                      <ellipse cx="18" cy="40" rx="3" ry="5" fill={tile.skin} />
                      <ellipse cx="62" cy="40" rx="3" ry="5" fill={tile.skin} />
                    </svg>
                  </div>
                  {/* Label with matching color */}
                  <div 
                    className="px-4 py-2 rounded-lg shadow-md border border-white/20"
                    style={{ backgroundColor: tile.color }}
                  >
                    <span className="text-sm font-medium text-white whitespace-nowrap">
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
                opacity: scrollProgress > 0.4 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.65 ? -200 : 0}px)`,
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
              const { headerProgress, subtextProgress } = getTextRevealProgress(index);
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
                    className="text-2xl lg:text-3xl font-semibold leading-tight mb-6 text-foreground transition-all duration-700"
                    style={{
                      opacity: headerProgress,
                      transform: `translateY(${(1 - headerProgress) * 20}px)`,
                    }}
                  >
                    {phase.header}
                  </h3>
                  <p 
                    className="text-base lg:text-lg text-muted-foreground leading-relaxed transition-all duration-700"
                    style={{
                      opacity: subtextProgress,
                      transform: `translateY(${(1 - subtextProgress) * 15}px)`,
                    }}
                  >
                    {phase.subtext}
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
