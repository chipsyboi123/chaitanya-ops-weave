import { useRef, useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate progress: 0 when section top hits viewport bottom, 1 when section bottom leaves viewport top
      const scrollableDistance = sectionHeight - viewportHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current phase (0, 1, or 2)
  const currentPhase = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  // Calculate element positions based on scroll progress
  const getElementTransform = (
    startX: number,
    startY: number,
    index: number
  ) => {
    // Phase 1: scattered
    // Phase 2: moving toward center
    // Phase 3: resolved into UI

    const phase2Start = 0.33;
    const phase3Start = 0.66;

    if (scrollProgress < phase2Start) {
      // Phase 1: Scattered with slight floating
      const floatOffset = Math.sin(Date.now() / 2000 + index) * 5;
      return {
        x: startX,
        y: startY + floatOffset,
        opacity: 1,
        scale: 1,
      };
    } else if (scrollProgress < phase3Start) {
      // Phase 2: Moving toward center
      const phase2Progress = (scrollProgress - phase2Start) / (phase3Start - phase2Start);
      const easedProgress = 1 - Math.pow(1 - phase2Progress, 3); // ease-out cubic
      return {
        x: startX * (1 - easedProgress * 0.7),
        y: startY * (1 - easedProgress * 0.7),
        opacity: 1,
        scale: 1 - easedProgress * 0.1,
      };
    } else {
      // Phase 3: Fade out scattered elements
      const phase3Progress = (scrollProgress - phase3Start) / (1 - phase3Start);
      return {
        x: startX * 0.3,
        y: startY * 0.3,
        opacity: Math.max(0, 1 - phase3Progress * 2),
        scale: 0.9,
      };
    }
  };

  // Scattered elements - people and task nodes
  const scatteredElements = [
    { type: "person", startX: -180, startY: -120 },
    { type: "person", startX: 160, startY: -100 },
    { type: "person", startX: -140, startY: 80 },
    { type: "task", startX: 180, startY: 60 },
    { type: "task", startX: -200, startY: -20 },
    { type: "doc", startX: 120, startY: -140 },
    { type: "doc", startX: -100, startY: 140 },
    { type: "note", startX: 200, startY: 120 },
    { type: "note", startX: -220, startY: 40 },
  ];

  const renderScatteredElement = (
    element: { type: string; startX: number; startY: number },
    index: number
  ) => {
    const transform = getElementTransform(element.startX, element.startY, index);

    const baseClasses =
      "absolute transition-all duration-300 ease-out rounded-lg border";

    if (element.type === "person") {
      return (
        <div
          key={index}
          className={`${baseClasses} w-12 h-12 bg-muted/60 border-border/40 flex items-center justify-center`}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            opacity: transform.opacity,
          }}
        >
          <div className="w-6 h-6 rounded-full bg-border/60" />
        </div>
      );
    }

    if (element.type === "task") {
      return (
        <div
          key={index}
          className={`${baseClasses} w-16 h-10 bg-muted/50 border-border/40 flex items-center gap-1 px-2`}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            opacity: transform.opacity,
          }}
        >
          <div className="w-3 h-3 rounded-sm bg-border/60" />
          <div className="flex-1 h-2 bg-border/40 rounded" />
        </div>
      );
    }

    if (element.type === "doc") {
      return (
        <div
          key={index}
          className={`${baseClasses} w-14 h-16 bg-muted/50 border-border/40 p-2 flex flex-col gap-1`}
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            opacity: transform.opacity,
          }}
        >
          <div className="w-full h-1.5 bg-border/60 rounded" />
          <div className="w-3/4 h-1.5 bg-border/40 rounded" />
          <div className="w-full h-1.5 bg-border/40 rounded" />
        </div>
      );
    }

    return (
      <div
        key={index}
        className={`${baseClasses} w-10 h-10 bg-muted/40 border-border/30 p-1.5`}
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          opacity: transform.opacity,
        }}
      >
        <div className="w-full h-1 bg-border/50 rounded mb-1" />
        <div className="w-2/3 h-1 bg-border/40 rounded" />
      </div>
    );
  };

  // Central container visibility
  const centralContainerOpacity =
    scrollProgress < 0.33 ? 0 : scrollProgress < 0.5 ? (scrollProgress - 0.33) / 0.17 : 1;

  // UI layout visibility (phase 3)
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
          {/* Scattered Elements */}
          <div className="relative w-full h-full flex items-center justify-center">
            {scatteredElements.map((el, i) => renderScatteredElement(el, i))}

            {/* Central Container - appears in phase 2 */}
            <div
              className="absolute rounded-2xl border-2 border-border/50 bg-muted/20 transition-all duration-500 flex items-center justify-center"
              style={{
                width: scrollProgress > 0.66 ? "320px" : "180px",
                height: scrollProgress > 0.66 ? "280px" : "120px",
                opacity: centralContainerOpacity,
                transform: `scale(${centralContainerOpacity > 0 ? 1 : 0.8})`,
              }}
            >
              {/* "A Unified System" label */}
              <span
                className="text-sm font-medium text-muted-foreground transition-opacity duration-300"
                style={{
                  opacity: scrollProgress > 0.5 && scrollProgress < 0.7 ? 1 : 0,
                }}
              >
                A Unified System
              </span>

              {/* Abstract UI Layout - Phase 3 */}
              <div
                className="absolute inset-0 p-4 transition-opacity duration-500"
                style={{ opacity: uiLayoutOpacity }}
              >
                <div className="w-full h-full flex rounded-lg overflow-hidden border border-border/40 bg-background">
                  {/* Sidebar Navigation */}
                  <div className="w-24 border-r border-border/40 py-3 px-2 bg-muted/30">
                    {navItems.map((item, i) => (
                      <div
                        key={i}
                        className={`text-[9px] py-1.5 px-2 rounded mb-0.5 transition-all ${
                          i === 0
                            ? "bg-primary/10 text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                        style={{
                          opacity: uiLayoutOpacity,
                          transform: `translateX(${(1 - uiLayoutOpacity) * -10}px)`,
                          transitionDelay: `${i * 30}ms`,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main Panel - Abstract */}
                  <div className="flex-1 p-3 bg-background">
                    <div className="h-3 w-20 bg-muted/60 rounded mb-3" />
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[1, 2, 3].map((n) => (
                        <div
                          key={n}
                          className="h-12 bg-muted/40 rounded border border-border/30"
                        />
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-muted/30 rounded" />
                      <div className="h-2 w-3/4 bg-muted/30 rounded" />
                      <div className="h-2 w-5/6 bg-muted/30 rounded" />
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
