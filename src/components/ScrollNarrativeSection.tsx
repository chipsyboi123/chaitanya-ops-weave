import { useRef, useEffect, useState } from "react";
import FluidBackground from "./FluidBackground";

interface ScrollPhase {
  header: string;
  subtext: string;
}

const phases: ScrollPhase[] = [
  {
    header: "Today's processes are fragmented and inefficient.",
    subtext:
      "Research, reporting, client follow-ups, and compliance workflows live across different people, tools, and spreadsheets. As firms grow, this fragmentation slows teams down and increases dependency on individuals.",
  },
  {
    header: "A unified system that fits the way you already work.",
    subtext:
      "Instead of adding another tool, we bring existing workflows together into one connected structure — designed around how your firm already operates.",
  },
  {
    header: "See your firm's work — clearly, in one place.",
    subtext:
      "Research, operations, and client activity are visible, connected, and auditable — enabling faster decisions and smoother execution across teams.",
  },
];

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

  const currentPhase = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  const getTileTransform = (
    startX: number,
    startY: number,
    index: number
  ) => {
    const phase2Start = 0.33;
    const phase3Start = 0.66;

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const centralContainerOpacity =
    scrollProgress < 0.33 ? 0 : scrollProgress < 0.5 ? (scrollProgress - 0.33) / 0.17 : 1;

  const uiLayoutOpacity =
    scrollProgress < 0.66 ? 0 : (scrollProgress - 0.66) / 0.34;

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "180vh" }}
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left Side - Visual Animation (60%) */}
        <div className="w-[60%] relative flex items-center justify-center border-r border-border/30">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Department Tiles */}
            {departmentTiles.map((tile, index) => {
              const transform = getTileTransform(tile.startX, tile.startY, index);
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center gap-3 transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
                    opacity: transform.opacity,
                  }}
                >
                  {/* Person Circle */}
                  <div className="w-20 h-20 rounded-full bg-muted/80 border-2 border-border/60 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-10 h-10 text-muted-foreground/70"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  {/* Label */}
                  <div className="px-4 py-2 bg-muted/60 border border-border/50 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {tile.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Central Unified System Container */}
            <div
              className="absolute rounded-2xl border-2 border-border/50 overflow-hidden transition-all duration-700 flex items-center justify-center"
              style={{
                width: scrollProgress > 0.66 ? "420px" : "280px",
                height: scrollProgress > 0.66 ? "340px" : "160px",
                opacity: centralContainerOpacity,
                transform: `scale(${centralContainerOpacity > 0 ? 1 : 0.8})`,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Fluid Background - shows in phase 2 */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: scrollProgress > 0.33 && scrollProgress < 0.75 ? 1 : 0,
                }}
              >
                <FluidBackground mousePosition={mousePosition} isHovered={isHovered} />
              </div>

              {/* "A Unified System" label */}
              <span
                className="relative z-10 text-xl font-semibold text-white transition-opacity duration-500 drop-shadow-lg"
                style={{
                  opacity: scrollProgress > 0.4 && scrollProgress < 0.72 ? 1 : 0,
                }}
              >
                A Unified System
              </span>

              {/* Abstract UI Layout - Phase 3 */}
              <div
                className="absolute inset-0 transition-opacity duration-500 bg-background"
                style={{ opacity: uiLayoutOpacity }}
              >
                <div className="w-full h-full flex rounded-lg overflow-hidden border border-border/40">
                  {/* Sidebar Navigation - Dark Blue */}
                  <div className="w-28 py-4 px-2 bg-[#1e3a5f]">
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
                          transitionDelay: `${i * 40}ms`,
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

        {/* Right Side - Text Content (40%) */}
        <div className="w-[40%] flex items-center px-12 lg:px-16">
          <div className="max-w-md">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="absolute transition-all duration-500 max-w-md"
                style={{
                  opacity: currentPhase === index ? 1 : 0,
                  transform: `translateY(${currentPhase === index ? 0 : 20}px)`,
                  pointerEvents: currentPhase === index ? "auto" : "none",
                }}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold leading-tight mb-6 text-foreground">
                  {phase.header}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {phase.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollNarrativeSection;
