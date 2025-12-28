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

// Multi-layer system architecture
const systemLayers = [
  { id: "workflow", label: "Workflows", y: 25, opacity: 0.12 },
  { id: "knowledge", label: "Knowledge", y: 45, opacity: 0.10 },
  { id: "context", label: "Context", y: 65, opacity: 0.08 },
  { id: "activity", label: "Activity", y: 85, opacity: 0.06 },
];

// Core system nodes - structured and calm
const systemNodes = [
  { id: "core", x: 50, y: 50, size: 3, layer: "all" },
  // Workflow layer nodes
  { id: "w1", x: 22, y: 28, size: 1.8, layer: "workflow" },
  { id: "w2", x: 42, y: 22, size: 1.5, layer: "workflow" },
  { id: "w3", x: 58, y: 24, size: 1.6, layer: "workflow" },
  { id: "w4", x: 78, y: 26, size: 1.7, layer: "workflow" },
  // Knowledge layer nodes
  { id: "k1", x: 18, y: 44, size: 1.4, layer: "knowledge" },
  { id: "k2", x: 35, y: 48, size: 1.6, layer: "knowledge" },
  { id: "k3", x: 65, y: 46, size: 1.5, layer: "knowledge" },
  { id: "k4", x: 82, y: 42, size: 1.4, layer: "knowledge" },
  // Context layer nodes
  { id: "c1", x: 24, y: 64, size: 1.5, layer: "context" },
  { id: "c2", x: 45, y: 68, size: 1.7, layer: "context" },
  { id: "c3", x: 55, y: 62, size: 1.4, layer: "context" },
  { id: "c4", x: 76, y: 66, size: 1.6, layer: "context" },
  // Activity layer nodes
  { id: "a1", x: 20, y: 82, size: 1.3, layer: "activity" },
  { id: "a2", x: 38, y: 86, size: 1.5, layer: "activity" },
  { id: "a3", x: 62, y: 84, size: 1.4, layer: "activity" },
  { id: "a4", x: 80, y: 88, size: 1.3, layer: "activity" },
];

// Connection paths between nodes
const systemConnections = [
  // Core connections
  { from: "core", to: "w2", type: "primary" },
  { from: "core", to: "w3", type: "primary" },
  { from: "core", to: "k2", type: "primary" },
  { from: "core", to: "k3", type: "primary" },
  { from: "core", to: "c2", type: "secondary" },
  { from: "core", to: "c3", type: "secondary" },
  // Workflow layer
  { from: "w1", to: "w2", type: "layer" },
  { from: "w2", to: "w3", type: "layer" },
  { from: "w3", to: "w4", type: "layer" },
  // Knowledge layer  
  { from: "k1", to: "k2", type: "layer" },
  { from: "k2", to: "k3", type: "layer" },
  { from: "k3", to: "k4", type: "layer" },
  // Context layer
  { from: "c1", to: "c2", type: "layer" },
  { from: "c2", to: "c3", type: "layer" },
  { from: "c3", to: "c4", type: "layer" },
  // Activity layer
  { from: "a1", to: "a2", type: "layer" },
  { from: "a2", to: "a3", type: "layer" },
  { from: "a3", to: "a4", type: "layer" },
  // Cross-layer connections
  { from: "w1", to: "k1", type: "cross" },
  { from: "w4", to: "k4", type: "cross" },
  { from: "k1", to: "c1", type: "cross" },
  { from: "k4", to: "c4", type: "cross" },
  { from: "c1", to: "a1", type: "cross" },
  { from: "c4", to: "a4", type: "cross" },
  // Repetitive loops (for automation step)
  { from: "w2", to: "k2", type: "repetitive" },
  { from: "k2", to: "c2", type: "repetitive" },
  { from: "w3", to: "k3", type: "repetitive" },
  { from: "k3", to: "c3", type: "repetitive" },
];

// Constraint markers that appear in step 1
const constraintMarkers = [
  { x: 12, y: 36, label: "Compliance", width: 22 },
  { x: 88, y: 44, label: "Existing Tools", width: 26 },
  { x: 12, y: 72, label: "Team Ownership", width: 28 },
  { x: 88, y: 78, label: "Regulatory", width: 22 },
];

const ApproachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scanLinePosition, setScanLinePosition] = useState(0);
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

  // Animate scan lines for step 1
  useEffect(() => {
    if (scrollProgress >= 0.05 && scrollProgress < 0.25) {
      const interval = setInterval(() => {
        setScanLinePosition(prev => (prev + 1) % 100);
      }, 80);
      return () => clearInterval(interval);
    }
  }, [scrollProgress]);

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
    // Step 1: Instrumentation & Observation (0-25%)
    const step1Progress = scrollProgress < 0.05 ? 0 : 
      scrollProgress < 0.25 ? Math.min(1, (scrollProgress - 0.05) / 0.18) : 1;

    // Step 2: Behavioral Adaptation (25-50%)
    const step2Progress = scrollProgress < 0.25 ? 0 :
      scrollProgress < 0.50 ? (scrollProgress - 0.25) / 0.25 : 1;

    // Step 3: Selective Automation (50-75%)
    const step3Progress = scrollProgress < 0.50 ? 0 :
      scrollProgress < 0.75 ? (scrollProgress - 0.50) / 0.25 : 1;

    // Step 4: Continuity & Scale (75-100%)
    const step4Progress = scrollProgress < 0.75 ? 0 :
      (scrollProgress - 0.75) / 0.25;

    return { step1Progress, step2Progress, step3Progress, step4Progress };
  };

  const { step1Progress, step2Progress, step3Progress, step4Progress } = getStepAnimationState();

  // Calculate path adjustments for step 2 (behavioral adaptation)
  const getPathAdjustment = (index: number) => {
    const baseAdjust = step2Progress * 2;
    const xAdjust = (index % 3 === 0 ? 1 : index % 3 === 1 ? -0.5 : 0.3) * baseAdjust;
    const yAdjust = (index % 2 === 0 ? 0.5 : -0.3) * baseAdjust;
    return { xAdjust, yAdjust };
  };

  // Calculate line thickness for step 2 (high-frequency paths thicken)
  const getLineThickness = (conn: typeof systemConnections[0], index: number) => {
    const base = conn.type === "primary" ? 0.5 : conn.type === "layer" ? 0.35 : 0.25;
    const frequencyMultiplier = index % 4 === 0 ? 1.5 : index % 3 === 0 ? 0.7 : 1;
    return base * (1 + step2Progress * (frequencyMultiplier - 1) * 0.5);
  };

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
          <div className="h-[45%] relative flex items-center justify-center bg-background overflow-hidden">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full max-w-[300px] max-h-[300px]"
              style={{ opacity: 0.9 }}
            >
              {/* Layer backgrounds */}
              {systemLayers.map((layer) => (
                <rect
                  key={layer.id}
                  x="8"
                  y={layer.y - 8}
                  width="84"
                  height="16"
                  rx="2"
                  fill="hsl(var(--foreground))"
                  fillOpacity={layer.opacity * (0.6 + step4Progress * 0.4)}
                  className="transition-all duration-1000"
                />
              ))}

              {/* Connection lines */}
              {systemConnections.map((conn, index) => {
                const fromNode = getNodeById(conn.from);
                const toNode = getNodeById(conn.to);
                if (!fromNode || !toNode) return null;

                const { xAdjust, yAdjust } = getPathAdjustment(index);
                const thickness = getLineThickness(conn, index);
                const isRepetitive = conn.type === "repetitive";
                const opacity = isRepetitive && step3Progress > 0.3 
                  ? 0.15 + (1 - step3Progress) * 0.2 
                  : conn.type === "cross" ? 0.12 : 0.25;

                return (
                  <line
                    key={`conn-${index}`}
                    x1={fromNode.x + xAdjust}
                    y1={fromNode.y + yAdjust}
                    x2={toNode.x + xAdjust}
                    y2={toNode.y + yAdjust}
                    stroke="hsl(var(--foreground))"
                    strokeWidth={thickness}
                    strokeOpacity={opacity}
                    className="transition-all duration-1000"
                  />
                );
              })}

              {/* System nodes */}
              {systemNodes.map((node) => (
                <circle
                  key={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill="hsl(var(--foreground))"
                  fillOpacity={node.id === "core" ? 0.5 : 0.3}
                  className="transition-all duration-700"
                />
              ))}

              {/* Constraint markers (step 1) */}
              {constraintMarkers.slice(0, 3).map((marker, index) => (
                <g
                  key={`constraint-${index}`}
                  style={{
                    opacity: step1Progress * 0.7,
                    transition: "opacity 800ms ease-out",
                  }}
                >
                  <rect
                    x={marker.x - marker.width / 2}
                    y={marker.y - 2.5}
                    width={marker.width}
                    height="5"
                    rx="1"
                    fill="none"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="0.15"
                    strokeOpacity="0.5"
                    strokeDasharray="1 0.5"
                  />
                  <text
                    x={marker.x}
                    y={marker.y + 1}
                    textAnchor="middle"
                    fontSize="1.8"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity="0.6"
                    style={{ fontFamily: 'system-ui, sans-serif' }}
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
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">
              Our approach
            </span>

            <h2 className="text-xl font-semibold leading-tight mb-6 text-foreground tracking-tight">
              How we build systems that actually get used
            </h2>

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
                        style={{ opacity: isCurrent ? 1 : 0.5 }}
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
        {/* Left Side - Text Content (40%) */}
        <div 
          className="w-[40%] flex flex-col justify-center px-14 lg:px-20 relative"
          style={{ backgroundColor: 'hsl(var(--surface-narrative))' }}
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground/60 mb-4">
            Our approach
          </span>

          <h2 className="text-[2rem] lg:text-[2.25rem] font-semibold leading-[1.15] mb-10 text-foreground tracking-tight">
            How we build systems that actually get used
          </h2>

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
                      style={{ opacity: isCurrent ? 1 : 0.6 }}
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

        {/* Vertical Divider */}
        <div className="w-px bg-border/30" />

        {/* Right Side - Multi-Layer System Diagram (60%) */}
        <div className="w-[60%] relative flex items-center justify-center bg-background overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full max-w-[600px] max-h-[600px]"
            style={{ opacity: 0.92 }}
          >
            <defs>
              {/* Subtle grid pattern */}
              <pattern id="approachGrid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path
                  d="M 5 0 L 0 0 0 5"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.05"
                  strokeOpacity="0.25"
                />
              </pattern>
              
              {/* Gradient for automation glow */}
              <linearGradient id="automationGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Background grid */}
            <rect width="100" height="100" fill="url(#approachGrid)" />

            {/* Layer background zones - visible from start, subtle */}
            {systemLayers.map((layer) => (
              <g key={layer.id}>
                <rect
                  x="6"
                  y={layer.y - 9}
                  width="88"
                  height="18"
                  rx="3"
                  fill="hsl(var(--foreground))"
                  fillOpacity={layer.opacity * (0.5 + step4Progress * 0.5)}
                  className="transition-all duration-1500"
                />
                {/* Layer labels (appear in step 4) */}
                <text
                  x="95"
                  y={layer.y + 0.5}
                  textAnchor="end"
                  fontSize="2.2"
                  fill="hsl(var(--muted-foreground))"
                  fillOpacity={step4Progress * 0.4}
                  style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em' }}
                  className="transition-all duration-1000"
                >
                  {layer.label}
                </text>
              </g>
            ))}

            {/* STEP 1: Horizontal scan lines (instrumentation) */}
            {step1Progress > 0 && step1Progress < 1 && (
              <>
                <line
                  x1="5"
                  y1={scanLinePosition % 100}
                  x2="95"
                  y2={scanLinePosition % 100}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.15"
                  strokeOpacity={0.3 * (1 - step1Progress)}
                  className="transition-opacity duration-300"
                />
                <line
                  x1="5"
                  y1={(scanLinePosition + 33) % 100}
                  x2="95"
                  y2={(scanLinePosition + 33) % 100}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.1"
                  strokeOpacity={0.2 * (1 - step1Progress)}
                  className="transition-opacity duration-300"
                />
                <line
                  x1="5"
                  y1={(scanLinePosition + 66) % 100}
                  x2="95"
                  y2={(scanLinePosition + 66) % 100}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.1"
                  strokeOpacity={0.15 * (1 - step1Progress)}
                  className="transition-opacity duration-300"
                />
              </>
            )}

            {/* STEP 2: Ghost trails showing previous paths */}
            {step2Progress > 0 && systemConnections.map((conn, index) => {
              const fromNode = getNodeById(conn.from);
              const toNode = getNodeById(conn.to);
              if (!fromNode || !toNode) return null;
              if (conn.type === "repetitive" || conn.type === "cross") return null;

              return (
                <line
                  key={`ghost-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.15"
                  strokeOpacity={0.08 * step2Progress * (1 - step2Progress * 0.5)}
                  strokeDasharray="0.5 0.5"
                  className="transition-all duration-1500"
                />
              );
            })}

            {/* Main connection lines */}
            {systemConnections.map((conn, index) => {
              const fromNode = getNodeById(conn.from);
              const toNode = getNodeById(conn.to);
              if (!fromNode || !toNode) return null;

              const { xAdjust, yAdjust } = getPathAdjustment(index);
              const thickness = getLineThickness(conn, index);
              const isRepetitive = conn.type === "repetitive";
              
              // Opacity logic: repetitive paths fade in step 3
              let opacity = conn.type === "primary" ? 0.35 
                : conn.type === "layer" ? 0.25 
                : conn.type === "cross" ? 0.15 
                : 0.3;
              
              if (isRepetitive && step3Progress > 0.3) {
                opacity = 0.1 + (1 - step3Progress) * 0.2;
              }

              return (
                <line
                  key={`conn-${index}`}
                  x1={fromNode.x + xAdjust}
                  y1={fromNode.y + yAdjust}
                  x2={toNode.x + xAdjust}
                  y2={toNode.y + yAdjust}
                  stroke="hsl(var(--foreground))"
                  strokeWidth={thickness}
                  strokeOpacity={opacity}
                  className="transition-all duration-1200"
                />
              );
            })}

            {/* System nodes */}
            {systemNodes.map((node) => {
              const isCore = node.id === "core";
              const baseOpacity = isCore ? 0.55 : 0.35;
              
              return (
                <circle
                  key={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill="hsl(var(--foreground))"
                  fillOpacity={baseOpacity}
                  className="transition-all duration-800"
                />
              );
            })}

            {/* STEP 1: Constraint markers */}
            {constraintMarkers.map((marker, index) => (
              <g
                key={`constraint-${index}`}
                style={{
                  opacity: step1Progress * 0.85,
                  transition: "opacity 1000ms ease-out",
                }}
              >
                {/* Constraint boundary */}
                <rect
                  x={marker.x - marker.width / 2}
                  y={marker.y - 3.5}
                  width={marker.width}
                  height="7"
                  rx="1.5"
                  fill="none"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.18"
                  strokeOpacity="0.4"
                  strokeDasharray="1.5 0.8"
                />
                {/* Constraint label */}
                <text
                  x={marker.x}
                  y={marker.y + 1}
                  textAnchor="middle"
                  fontSize="2.2"
                  fill="hsl(var(--muted-foreground))"
                  fillOpacity="0.55"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {marker.label}
                </text>
              </g>
            ))}

            {/* STEP 3: Automation glyphs and energy flow */}
            {step3Progress > 0.2 && (
              <>
                {/* Automation glyph markers */}
                <circle
                  cx="40"
                  cy="48"
                  r={4 + step3Progress * 2}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.12"
                  strokeOpacity={step3Progress * 0.2}
                  strokeDasharray="1 0.5"
                  className="transition-all duration-800"
                />
                <circle
                  cx="60"
                  cy="46"
                  r={3.5 + step3Progress * 1.5}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.12"
                  strokeOpacity={step3Progress * 0.2}
                  strokeDasharray="1 0.5"
                  className="transition-all duration-800"
                />

                {/* Energy glow traveling along automated paths */}
                {step3Progress > 0.4 && step3Progress < 0.9 && (
                  <>
                    <circle
                      cx={42 + (step3Progress - 0.4) * 30}
                      cy={35 + (step3Progress - 0.4) * 26}
                      r="1.5"
                      fill="hsl(var(--primary))"
                      fillOpacity={(0.9 - step3Progress) * 0.5}
                      className="transition-all duration-200"
                    />
                    <circle
                      cx={58 + (step3Progress - 0.4) * 10}
                      cy={35 + (step3Progress - 0.4) * 26}
                      r="1.2"
                      fill="hsl(var(--primary))"
                      fillOpacity={(0.9 - step3Progress) * 0.4}
                      className="transition-all duration-200"
                    />
                  </>
                )}

                {/* Simplified path indicators */}
                <path
                  d={`M 42 26 Q 41 38 40 48`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.3"
                  strokeOpacity={step3Progress * 0.25}
                  className="transition-all duration-1000"
                />
                <path
                  d={`M 58 24 Q 59 36 60 46`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.25"
                  strokeOpacity={step3Progress * 0.2}
                  className="transition-all duration-1000"
                />
              </>
            )}

            {/* STEP 4: New elements attaching cleanly */}
            {step4Progress > 0 && (
              <>
                {/* New nodes attaching */}
                <circle
                  cx="10"
                  cy="55"
                  r={1.2 * step4Progress}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.3 * step4Progress}
                  className="transition-all duration-1200"
                />
                <line
                  x1="18"
                  y1="44"
                  x2={10 + 4 * (1 - step4Progress)}
                  y2={55 - 5 * (1 - step4Progress)}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.2"
                  strokeOpacity={0.2 * step4Progress}
                  className="transition-all duration-1200"
                />
                
                <circle
                  cx="90"
                  cy="60"
                  r={1 * step4Progress}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.25 * step4Progress}
                  className="transition-all duration-1200"
                />
                <line
                  x1="82"
                  y1="42"
                  x2={90 - 4 * (1 - step4Progress)}
                  y2={60 - 8 * (1 - step4Progress)}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.18"
                  strokeOpacity={0.18 * step4Progress}
                  className="transition-all duration-1200"
                />

                <circle
                  cx="50"
                  cy="95"
                  r={1.3 * step4Progress}
                  fill="hsl(var(--foreground))"
                  fillOpacity={0.28 * step4Progress}
                  className="transition-all duration-1200"
                />
                <line
                  x1="50"
                  y1="85"
                  x2="50"
                  y2={95 - 5 * (1 - step4Progress)}
                  stroke="hsl(var(--foreground))"
                  strokeWidth="0.2"
                  strokeOpacity={0.2 * step4Progress}
                  className="transition-all duration-1200"
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
