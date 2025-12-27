import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    title: "Understand constraints before proposing change",
    description: "We begin by understanding regulatory boundaries, team structures, and existing tools — before suggesting any system changes.",
  },
  {
    number: "02",
    title: "Design around existing behavior",
    description: "Systems are shaped around how people already work — not how tools expect them to work.",
  },
  {
    number: "03",
    title: "Introduce automation selectively",
    description: "Automation is applied only where it reduces effort without reducing control.",
  },
  {
    number: "04",
    title: "Build for continuity and scale",
    description: "We design systems that preserve context and continue to add value as teams, clients, and complexity grow.",
  },
];

// System diagram node positions (calm, already-structured)
const systemNodes = [
  { id: "core", x: 50, y: 50, size: 14 },
  { id: "n1", x: 25, y: 30, size: 6 },
  { id: "n2", x: 75, y: 25, size: 6 },
  { id: "n3", x: 20, y: 60, size: 5 },
  { id: "n4", x: 80, y: 55, size: 5 },
  { id: "n5", x: 35, y: 75, size: 5 },
  { id: "n6", x: 65, y: 78, size: 5 },
  { id: "n7", x: 50, y: 20, size: 4 },
  { id: "n8", x: 15, y: 45, size: 4 },
  { id: "n9", x: 85, y: 40, size: 4 },
];

// Connection paths between nodes
const systemConnections = [
  { from: "core", to: "n1" },
  { from: "core", to: "n2" },
  { from: "core", to: "n3" },
  { from: "core", to: "n4" },
  { from: "core", to: "n5" },
  { from: "core", to: "n6" },
  { from: "n1", to: "n7" },
  { from: "n2", to: "n7" },
  { from: "n1", to: "n8" },
  { from: "n3", to: "n8" },
  { from: "n2", to: "n9" },
  { from: "n4", to: "n9" },
];

// Constraint markers that appear in step 1
const constraintMarkers = [
  { x: 12, y: 35, label: "Compliance" },
  { x: 88, y: 32, label: "Existing Tools" },
  { x: 50, y: 88, label: "Team Ownership" },
];

const ApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  // Determine which step is active based on scroll progress
  const getActiveStep = () => {
    if (scrollProgress < 0.25) return 0;
    if (scrollProgress < 0.50) return 1;
    if (scrollProgress < 0.75) return 2;
    return 3;
  };

  const activeStep = getActiveStep();

  // Get node position by ID
  const getNodeById = (id: string) => systemNodes.find(n => n.id === id);

  // Calculate animation states for each step
  const getStepAnimationState = () => {
    // Step 1: Constraints appear (0-25%)
    const constraintOpacity = scrollProgress < 0.05 ? 0 : 
      scrollProgress < 0.25 ? Math.min(1, (scrollProgress - 0.05) / 0.15) : 1;

    // Step 2: Paths adapt (25-50%)
    const pathAdaptProgress = scrollProgress < 0.25 ? 0 :
      scrollProgress < 0.50 ? (scrollProgress - 0.25) / 0.25 : 1;

    // Step 3: Selective automation (50-75%)
    const automationProgress = scrollProgress < 0.50 ? 0 :
      scrollProgress < 0.75 ? (scrollProgress - 0.50) / 0.25 : 1;

    // Step 4: Stable scale (75-100%)
    const scaleProgress = scrollProgress < 0.75 ? 0 :
      (scrollProgress - 0.75) / 0.25;

    return { constraintOpacity, pathAdaptProgress, automationProgress, scaleProgress };
  };

  const { constraintOpacity, pathAdaptProgress, automationProgress, scaleProgress } = getStepAnimationState();

  // Mobile layout
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-background"
        style={{ height: "400vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Top - System Diagram (45%) */}
          <div className="h-[45%] relative flex items-center justify-center bg-background">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full max-w-[300px] max-h-[300px]"
              style={{ opacity: 0.9 }}
            >
              {/* Connection lines */}
              {systemConnections.map((conn, index) => {
                const fromNode = getNodeById(conn.from);
                const toNode = getNodeById(conn.to);
                if (!fromNode || !toNode) return null;

                // Determine if this is an "automated" path (simplified in step 3)
                const isAutomatedPath = index % 3 === 0;
                const lineOpacity = isAutomatedPath && automationProgress > 0 
                  ? 0.15 + (1 - automationProgress) * 0.15 
                  : 0.3;

                // Subtle path adjustment in step 2
                const adjustX = pathAdaptProgress * (index % 2 === 0 ? 1 : -1) * 0.5;
                const adjustY = pathAdaptProgress * (index % 3 === 0 ? 0.5 : -0.3);

                return (
                  <line
                    key={`conn-${index}`}
                    x1={fromNode.x + adjustX}
                    y1={fromNode.y + adjustY}
                    x2={toNode.x + adjustX}
                    y2={toNode.y + adjustY}
                    stroke="hsl(var(--foreground))"
                    strokeWidth="0.3"
                    strokeOpacity={lineOpacity}
                    className="transition-all duration-1000"
                  />
                );
              })}

              {/* System nodes */}
              {systemNodes.map((node, index) => {
                // New nodes attach cleanly in step 4
                const isNewNode = index > 7;
                const nodeOpacity = isNewNode ? 0.4 + scaleProgress * 0.4 : 0.6;
                const nodeScale = isNewNode ? 0.8 + scaleProgress * 0.2 : 1;

                return (
                  <circle
                    key={node.id}
                    cx={node.x}
                    cy={node.y}
                    r={node.size * 0.4 * nodeScale}
                    fill="hsl(var(--foreground))"
                    fillOpacity={nodeOpacity}
                    className="transition-all duration-1000"
                  />
                );
              })}

              {/* Constraint markers (step 1) */}
              {constraintMarkers.map((marker, index) => (
                <g
                  key={`constraint-${index}`}
                  style={{
                    opacity: constraintOpacity,
                    transition: "opacity 800ms ease-out",
                  }}
                >
                  <rect
                    x={marker.x - 12}
                    y={marker.y - 3}
                    width="24"
                    height="6"
                    rx="1"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.2"
                    strokeOpacity="0.4"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x={marker.x}
                    y={marker.y + 1}
                    textAnchor="middle"
                    fontSize="2"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity="0.5"
                    className="font-medium"
                  >
                    {marker.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Horizontal Divider */}
          <div className="h-px bg-border/30 mx-6" />

          {/* Bottom - Text Content (55%) */}
          <div 
            className="h-[55%] flex flex-col justify-start px-6 pt-6 pb-4 overflow-hidden"
            style={{ backgroundColor: 'hsl(var(--surface-narrative))' }}
          >
            {/* Eyebrow */}
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">
              Our approach
            </span>

            {/* Headline */}
            <h2 className="text-xl font-semibold leading-tight mb-6 text-foreground tracking-tight">
              How we build systems that actually get used
            </h2>

            {/* Approach Steps */}
            <div className="space-y-4">
              {approachSteps.map((step, index) => {
                const isActive = index <= activeStep;
                const isCurrent = index === activeStep;
                
                return (
                  <div
                    key={index}
                    className="transition-all duration-700"
                    style={{
                      opacity: isActive ? (isCurrent ? 1 : 0.5) : 0.2,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span 
                        className="text-[10px] font-medium text-muted-foreground/50 mt-0.5 transition-all duration-500"
                        style={{ 
                          opacity: isCurrent ? 1 : 0.5,
                        }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <h4 
                          className="text-sm font-medium text-foreground leading-snug mb-1 transition-all duration-500"
                          style={{
                            color: isCurrent ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                          }}
                        >
                          {step.title}
                        </h4>
                        <p 
                          className="text-xs text-muted-foreground/70 leading-relaxed transition-all duration-700"
                          style={{
                            opacity: isCurrent ? 1 : 0,
                            maxHeight: isCurrent ? '60px' : '0',
                            overflow: 'hidden',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - reversed (text left, diagram right)
  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left Side - Text Content (40%) with subtle narrative background */}
        <div 
          className="w-[40%] flex flex-col justify-center px-14 lg:px-20 relative"
          style={{ backgroundColor: 'hsl(var(--surface-narrative))' }}
        >
          {/* Eyebrow */}
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 mb-4">
            Our approach
          </span>

          {/* Section Headline - always visible */}
          <h2 className="text-[2rem] lg:text-[2.25rem] font-semibold leading-[1.15] mb-10 text-foreground tracking-tight">
            How we build systems that actually get used
          </h2>

          {/* Approach Steps - accumulate and stay visible */}
          <div className="space-y-6">
            {approachSteps.map((step, index) => {
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;
              
              return (
                <div
                  key={index}
                  className="transition-all duration-700"
                  style={{
                    opacity: isActive ? (isCurrent ? 1 : 0.45) : 0.15,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-[11px] font-medium text-muted-foreground/50 mt-1 transition-all duration-500 min-w-[20px]"
                      style={{ 
                        opacity: isCurrent ? 1 : 0.6,
                      }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h4 
                        className="text-base font-medium leading-snug mb-1.5 transition-all duration-500"
                        style={{
                          color: isCurrent ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                        }}
                      >
                        {step.title}
                      </h4>
                      <p 
                        className="text-[0.9375rem] text-muted-foreground/70 leading-[1.7] transition-all duration-700"
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          maxHeight: isCurrent ? '100px' : '0',
                          overflow: 'hidden',
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Divider - Subtle */}
        <div className="w-px bg-border/30" />

        {/* Right Side - System Diagram Animation (60%) */}
        <div className="w-[60%] relative flex items-center justify-center bg-background">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full max-w-[500px] max-h-[500px]"
            style={{ opacity: 0.85 }}
          >
            {/* Background grid - subtle structure */}
            <defs>
              <pattern id="approachGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.1"
                  strokeOpacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#approachGrid)" />

            {/* Connection lines */}
            {systemConnections.map((conn, index) => {
              const fromNode = getNodeById(conn.from);
              const toNode = getNodeById(conn.to);
              if (!fromNode || !toNode) return null;

              // Determine if this is an "automated" path (simplified in step 3)
              const isAutomatedPath = index % 3 === 0;
              const lineOpacity = isAutomatedPath && automationProgress > 0 
                ? 0.2 + (1 - automationProgress) * 0.15 
                : 0.35;

              // Subtle path adjustment in step 2 - paths adapt to existing behavior
              const adjustX = pathAdaptProgress * (index % 2 === 0 ? 1.5 : -1.5) * 0.3;
              const adjustY = pathAdaptProgress * (index % 3 === 0 ? 1 : -0.5) * 0.3;

              return (
                <line
                  key={`conn-${index}`}
                  x1={fromNode.x + adjustX}
                  y1={fromNode.y + adjustY}
                  x2={toNode.x + adjustX}
                  y2={toNode.y + adjustY}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.4"
                  strokeOpacity={lineOpacity}
                  className="transition-all duration-1000"
                />
              );
            })}

            {/* System nodes */}
            {systemNodes.map((node, index) => {
              // New nodes attach cleanly in step 4
              const isNewNode = index > 7;
              const nodeOpacity = isNewNode ? 0.3 + scaleProgress * 0.4 : 0.5;
              const nodeScale = isNewNode ? 0.7 + scaleProgress * 0.3 : 1;

              return (
                <circle
                  key={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={node.size * 0.35 * nodeScale}
                  fill="hsl(var(--foreground))"
                  fillOpacity={nodeOpacity}
                  className="transition-all duration-1000"
                />
              );
            })}

            {/* Constraint markers (step 1) - fade in subtly */}
            {constraintMarkers.map((marker, index) => (
              <g
                key={`constraint-${index}`}
                style={{
                  opacity: constraintOpacity,
                  transition: "opacity 1000ms ease-out",
                }}
              >
                <rect
                  x={marker.x - 14}
                  y={marker.y - 3.5}
                  width="28"
                  height="7"
                  rx="1.5"
                  fill="none"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.25"
                  strokeOpacity="0.35"
                  strokeDasharray="1.5 0.75"
                />
                <text
                  x={marker.x}
                  y={marker.y + 1.2}
                  textAnchor="middle"
                  fontSize="2.5"
                  fill="hsl(var(--muted-foreground))"
                  fillOpacity="0.5"
                  className="font-medium"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {marker.label}
                </text>
              </g>
            ))}

            {/* Automation indicators (step 3) - subtle lightening of specific paths */}
            {automationProgress > 0 && (
              <>
                <circle
                  cx="37"
                  cy="62"
                  r="8"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.15"
                  strokeOpacity={automationProgress * 0.25}
                  strokeDasharray="2 1"
                  className="transition-all duration-1000"
                />
                <circle
                  cx="63"
                  cy="38"
                  r="8"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.15"
                  strokeOpacity={automationProgress * 0.25}
                  strokeDasharray="2 1"
                  className="transition-all duration-1000"
                />
              </>
            )}

            {/* Scale indicators (step 4) - new elements attach cleanly */}
            {scaleProgress > 0 && (
              <>
                <circle
                  cx="10"
                  cy="70"
                  r={2 * scaleProgress}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.3 * scaleProgress}
                  className="transition-all duration-1000"
                />
                <line
                  x1="20"
                  y1="60"
                  x2={10 + 3 * scaleProgress}
                  y2={70 - 3 * scaleProgress}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.3"
                  strokeOpacity={0.25 * scaleProgress}
                  className="transition-all duration-1000"
                />
                <circle
                  cx="90"
                  cy="68"
                  r={1.5 * scaleProgress}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.25 * scaleProgress}
                  className="transition-all duration-1000"
                />
                <line
                  x1="80"
                  y1="55"
                  x2={90 - 3 * scaleProgress}
                  y2={68 - 4 * scaleProgress}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.3"
                  strokeOpacity={0.2 * scaleProgress}
                  className="transition-all duration-1000"
                />
              </>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
