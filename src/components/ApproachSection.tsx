import { useRef, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ApproachStep {
  number: string;
  header: string;
  subtext: string;
}

const approachSteps: ApproachStep[] = [
  {
    number: "01",
    header: "Understanding how your firm already works.",
    subtext: "Every wealth firm has constraints — regulatory, operational, and human. Before we design anything, we study how work actually flows across teams, tools, and responsibilities.",
  },
  {
    number: "02",
    header: "Designing around behavior, not idealized workflows.",
    subtext: "Instead of forcing change, we map real processes and decision paths. The system is shaped around how your teams already operate — not how software expects them to.",
  },
  {
    number: "03",
    header: "Introducing automation — selectively.",
    subtext: "Automation is applied only where it reduces friction or risk. We avoid blanket automation in favor of deliberate, high-leverage improvements.",
  },
  {
    number: "04",
    header: "Building systems that scale with clarity.",
    subtext: "As your firm grows, the system compounds — preserving context, ownership, and control without increasing headcount.",
  },
];

// Layer definitions for the system canvas
const systemLayers = [
  { id: "compliance", label: "Compliance", y: 20 },
  { id: "client", label: "Client Context", y: 40 },
  { id: "workflows", label: "Workflows", y: 60 },
  { id: "knowledge", label: "Knowledge", y: 80 },
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

  // Calculate animation states for each step
  const getStepAnimationState = () => {
    // Step 1: Observe constraints (0-25%)
    const step1Progress = scrollProgress < 0.05 ? 0 : 
      scrollProgress < 0.25 ? Math.min(1, (scrollProgress - 0.05) / 0.18) : 1;

    // Step 2: Shape around behavior (25-50%)
    const step2Progress = scrollProgress < 0.25 ? 0 :
      scrollProgress < 0.50 ? (scrollProgress - 0.25) / 0.25 : 1;

    // Step 3: Apply automation selectively (50-75%)
    const step3Progress = scrollProgress < 0.50 ? 0 :
      scrollProgress < 0.75 ? (scrollProgress - 0.50) / 0.25 : 1;

    // Step 4: Lock in clarity (75-100%)
    const step4Progress = scrollProgress < 0.75 ? 0 :
      (scrollProgress - 0.75) / 0.25;

    return { step1Progress, step2Progress, step3Progress, step4Progress };
  };

  const { step1Progress, step2Progress, step3Progress, step4Progress } = getStepAnimationState();

  // Scan line position for step 1
  const scanLineX = step1Progress * 100;

  // Mobile layout
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-background"
        style={{ height: "400vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Top - Layered System Canvas (45%) */}
          <div className="h-[45%] relative flex items-center justify-center bg-background overflow-hidden p-4">
            <div className="w-full max-w-[320px] h-full max-h-[280px] relative">
              {/* Main container frame */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-1000"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(260 20% 98%) 100%)',
                  boxShadow: step4Progress > 0.5 
                    ? '0 0 0 1px hsl(var(--border)/0.3)' 
                    : 'none',
                }}
              >
                {/* Horizontal layers */}
                {systemLayers.map((layer, index) => {
                  // Layer highlight during step 1 (sequential)
                  const layerHighlightDelay = index * 0.2;
                  const layerHighlight = step1Progress > layerHighlightDelay 
                    ? Math.min(1, (step1Progress - layerHighlightDelay) / 0.3) 
                    : 0;
                  
                  // Step 2: Directional gradients appear
                  const gradientOpacity = step2Progress * 0.15;
                  
                  // Step 4: Even alignment
                  const alignmentAdjust = step4Progress * 2;

                  return (
                    <div
                      key={layer.id}
                      className="absolute left-4 right-4 h-[18%] rounded-lg transition-all duration-1000"
                      style={{
                        top: `${layer.y - 8 + alignmentAdjust * (index % 2 === 0 ? -0.5 : 0.5)}%`,
                        background: `linear-gradient(90deg, 
                          hsl(260 30% 96% / ${0.4 + layerHighlight * 0.2}) 0%, 
                          hsl(260 25% 97% / ${0.3 + gradientOpacity}) 50%,
                          hsl(260 30% 96% / ${0.4 + layerHighlight * 0.2}) 100%)`,
                        opacity: 0.5 + step4Progress * 0.3,
                      }}
                    >
                      {/* Layer label */}
                      <span 
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-[8px] tracking-wide text-muted-foreground/40 transition-all duration-700"
                        style={{
                          opacity: step4Progress > 0.3 ? 0.6 : 0.3,
                        }}
                      >
                        {layer.label}
                      </span>

                      {/* Step 2: Flow paths within layer */}
                      {step2Progress > 0 && (
                        <div 
                          className="absolute inset-y-2 left-[20%] right-[10%] transition-all duration-1000"
                          style={{ opacity: step2Progress * 0.4 }}
                        >
                          <div 
                            className="h-px w-full absolute top-1/2 -translate-y-1/2"
                            style={{
                              background: `linear-gradient(90deg, 
                                transparent 0%, 
                                hsl(260 30% 70% / 0.25) ${20 + index * 10}%, 
                                hsl(260 30% 70% / 0.4) 50%,
                                hsl(260 30% 70% / 0.25) ${80 - index * 10}%, 
                                transparent 100%)`,
                            }}
                          />
                        </div>
                      )}

                      {/* Step 3: Automation indicator (only on Workflows layer) */}
                      {layer.id === "workflows" && step3Progress > 0.3 && (
                        <div 
                          className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 transition-all duration-700"
                          style={{ opacity: step3Progress * 0.7 }}
                        >
                          <div className="w-1 h-1 rounded-full bg-foreground/20" />
                          <div className="w-6 h-px bg-foreground/15" />
                          <div className="w-1 h-1 rounded-full bg-foreground/30" />
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Step 1: Vertical scan line */}
                {step1Progress > 0 && step1Progress < 1 && (
                  <div 
                    className="absolute top-4 bottom-4 w-px transition-all duration-100"
                    style={{
                      left: `${4 + scanLineX * 0.92}%`,
                      background: 'linear-gradient(180deg, transparent 0%, hsl(260 40% 70% / 0.3) 20%, hsl(260 40% 70% / 0.3) 80%, transparent 100%)',
                      opacity: 0.6,
                    }}
                  />
                )}

                {/* Step 1: Constraint callouts */}
                {step1Progress > 0.3 && (
                  <>
                    <div 
                      className="absolute -left-2 top-[15%] text-[7px] text-muted-foreground/50 transition-all duration-700"
                      style={{ opacity: step1Progress * 0.6 }}
                    >
                      Regulatory
                    </div>
                    <div 
                      className="absolute -right-2 top-[35%] text-[7px] text-muted-foreground/50 text-right transition-all duration-700"
                      style={{ opacity: step1Progress * 0.6 }}
                    >
                      Existing tools
                    </div>
                    <div 
                      className="absolute -left-2 bottom-[25%] text-[7px] text-muted-foreground/50 transition-all duration-700"
                      style={{ opacity: step1Progress * 0.6 }}
                    >
                      Team ownership
                    </div>
                  </>
                )}

                {/* Step 4: Outer stability frame */}
                {step4Progress > 0.5 && (
                  <div 
                    className="absolute -inset-2 rounded-3xl border border-border/20 transition-all duration-1000"
                    style={{ opacity: (step4Progress - 0.5) * 0.6 }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="h-px bg-border/20 mx-6" />

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
                          {step.header}
                        </h4>
                        <p 
                          className="text-xs text-muted-foreground/70 leading-relaxed transition-all duration-700"
                          style={{
                            opacity: isCurrent ? 1 : 0,
                            maxHeight: isCurrent ? '80px' : '0',
                            overflow: 'hidden',
                          }}
                        >
                          {step.subtext}
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

  // Desktop layout
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

          <h2 className="text-[1.875rem] lg:text-[2.125rem] font-semibold leading-[1.15] mb-10 text-foreground tracking-tight">
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
                        className="text-[0.9375rem] lg:text-base font-medium leading-snug mb-2 transition-all duration-500"
                        style={{
                          color: isCurrent ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                        }}
                      >
                        {step.header}
                      </h4>
                      <p 
                        className="text-[0.875rem] lg:text-[0.9375rem] text-muted-foreground/70 leading-[1.7] transition-all duration-700"
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          maxHeight: isCurrent ? '120px' : '0',
                          overflow: 'hidden',
                        }}
                      >
                        {step.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-border/20" />

        {/* Right Side - Layered System Canvas (60%) */}
        <div className="w-[60%] relative flex items-center justify-center bg-background overflow-hidden p-8 lg:p-12">
          <div className="w-full max-w-[560px] h-full max-h-[480px] relative">
            {/* Main canvas container */}
            <div 
              className="absolute inset-0 rounded-3xl transition-all duration-1000"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(260 15% 98.5%) 100%)',
                boxShadow: step4Progress > 0.5 
                  ? '0 0 0 1px hsl(var(--border)/0.25)' 
                  : 'none',
              }}
            >
              {/* Horizontal layers */}
              {systemLayers.map((layer, index) => {
                // Layer highlight during step 1 (sequential scan)
                const layerHighlightDelay = index * 0.18;
                const layerHighlight = step1Progress > layerHighlightDelay 
                  ? Math.min(1, (step1Progress - layerHighlightDelay) / 0.25) 
                  : 0;
                
                // Step 2: Directional flow gradients
                const gradientIntensity = step2Progress * 0.2;
                
                // Step 4: Refined alignment
                const alignmentAdjust = step4Progress * 1.5;

                return (
                  <div
                    key={layer.id}
                    className="absolute left-6 right-6 lg:left-10 lg:right-10 h-[16%] rounded-xl transition-all duration-1000 ease-out"
                    style={{
                      top: `${layer.y - 7 + alignmentAdjust * (index % 2 === 0 ? -0.3 : 0.3)}%`,
                      background: `linear-gradient(90deg, 
                        hsl(260 25% 96.5% / ${0.5 + layerHighlight * 0.25}) 0%, 
                        hsl(260 20% 97.5% / ${0.4 + gradientIntensity}) 50%,
                        hsl(260 25% 96.5% / ${0.5 + layerHighlight * 0.25}) 100%)`,
                      opacity: 0.6 + step4Progress * 0.25,
                    }}
                  >
                    {/* Layer label */}
                    <span 
                      className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-[9px] lg:text-[10px] tracking-wide text-muted-foreground/30 transition-all duration-1000"
                      style={{
                        opacity: step4Progress > 0.4 ? 0.7 : 0.35,
                      }}
                    >
                      {layer.label}
                    </span>

                    {/* Step 2: Flow emphasis paths */}
                    {step2Progress > 0 && (
                      <div 
                        className="absolute inset-y-3 left-[22%] right-[12%] transition-all duration-1000"
                        style={{ opacity: step2Progress * 0.5 }}
                      >
                        {/* Primary flow line */}
                        <div 
                          className="h-px w-full absolute top-1/2 -translate-y-1/2"
                          style={{
                            background: `linear-gradient(90deg, 
                              transparent 0%, 
                              hsl(260 25% 75% / 0.2) ${15 + index * 8}%, 
                              hsl(260 25% 70% / 0.35) 50%,
                              hsl(260 25% 75% / 0.2) ${85 - index * 8}%, 
                              transparent 100%)`,
                          }}
                        />
                        {/* High-frequency path indicator */}
                        {index === 2 && step2Progress > 0.5 && (
                          <div 
                            className="h-[2px] absolute top-1/2 -translate-y-1/2 left-[30%] right-[40%]"
                            style={{
                              background: `linear-gradient(90deg, 
                                transparent 0%, 
                                hsl(260 30% 65% / ${step2Progress * 0.25}) 30%,
                                hsl(260 30% 65% / ${step2Progress * 0.25}) 70%, 
                                transparent 100%)`,
                              opacity: (step2Progress - 0.5) * 2,
                            }}
                          />
                        )}
                      </div>
                    )}

                    {/* Step 3: Selective automation indicator (only on Workflows) */}
                    {layer.id === "workflows" && step3Progress > 0.2 && (
                      <div 
                        className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex items-center gap-2 transition-all duration-1000"
                        style={{ opacity: step3Progress * 0.65 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/15" />
                        <div className="w-8 h-px bg-foreground/10" />
                        <svg 
                          width="12" 
                          height="12" 
                          viewBox="0 0 12 12" 
                          className="text-foreground/25"
                          style={{ opacity: step3Progress > 0.5 ? 1 : 0 }}
                        >
                          <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <path d="M4 6 L5.5 7.5 L8 4.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Step 1: Vertical scan line animation */}
              {step1Progress > 0 && step1Progress < 1 && (
                <div 
                  className="absolute top-6 bottom-6 w-px transition-all duration-75 ease-linear"
                  style={{
                    left: `${6 + scanLineX * 0.88}%`,
                    background: 'linear-gradient(180deg, transparent 0%, hsl(260 35% 75% / 0.35) 15%, hsl(260 35% 75% / 0.35) 85%, transparent 100%)',
                  }}
                />
              )}

              {/* Step 1: Edge constraint callouts */}
              {step1Progress > 0.25 && (
                <>
                  <div 
                    className="absolute -left-4 lg:-left-6 top-[18%] flex items-center gap-2 transition-all duration-1000"
                    style={{ 
                      opacity: Math.min(1, (step1Progress - 0.25) / 0.3) * 0.55,
                      transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.25) / 0.3)) * -8}px)`,
                    }}
                  >
                    <span className="text-[9px] lg:text-[10px] text-muted-foreground/60 tracking-wide">
                      Regulatory
                    </span>
                    <div className="w-3 h-px bg-border/40" />
                  </div>
                  <div 
                    className="absolute -right-4 lg:-right-6 top-[38%] flex items-center gap-2 transition-all duration-1000"
                    style={{ 
                      opacity: Math.min(1, (step1Progress - 0.35) / 0.3) * 0.55,
                      transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.35) / 0.3)) * 8}px)`,
                    }}
                  >
                    <div className="w-3 h-px bg-border/40" />
                    <span className="text-[9px] lg:text-[10px] text-muted-foreground/60 tracking-wide">
                      Existing tools
                    </span>
                  </div>
                  <div 
                    className="absolute -left-4 lg:-left-6 bottom-[28%] flex items-center gap-2 transition-all duration-1000"
                    style={{ 
                      opacity: Math.min(1, (step1Progress - 0.45) / 0.3) * 0.55,
                      transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.45) / 0.3)) * -8}px)`,
                    }}
                  >
                    <span className="text-[9px] lg:text-[10px] text-muted-foreground/60 tracking-wide">
                      Team ownership
                    </span>
                    <div className="w-3 h-px bg-border/40" />
                  </div>
                </>
              )}

              {/* Step 4: Outer stability frame */}
              {step4Progress > 0.4 && (
                <div 
                  className="absolute -inset-3 lg:-inset-4 rounded-[28px] border transition-all duration-1000"
                  style={{ 
                    borderColor: `hsl(var(--border) / ${(step4Progress - 0.4) * 0.3})`,
                    opacity: (step4Progress - 0.4) * 0.8,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
