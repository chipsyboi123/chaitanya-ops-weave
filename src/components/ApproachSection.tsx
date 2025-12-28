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

// Layer definitions
const systemLayers = [
  { id: "compliance", label: "Compliance" },
  { id: "client", label: "Client Context" },
  { id: "workflows", label: "Workflows" },
  { id: "knowledge", label: "Knowledge" },
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

  const getActiveStep = () => {
    if (scrollProgress < 0.25) return 0;
    if (scrollProgress < 0.50) return 1;
    if (scrollProgress < 0.75) return 2;
    return 3;
  };

  const activeStep = getActiveStep();

  const getStepAnimationState = () => {
    const step1Progress = scrollProgress < 0.05 ? 0 : 
      scrollProgress < 0.25 ? Math.min(1, (scrollProgress - 0.05) / 0.18) : 1;
    const step2Progress = scrollProgress < 0.25 ? 0 :
      scrollProgress < 0.50 ? (scrollProgress - 0.25) / 0.25 : 1;
    const step3Progress = scrollProgress < 0.50 ? 0 :
      scrollProgress < 0.75 ? (scrollProgress - 0.50) / 0.25 : 1;
    const step4Progress = scrollProgress < 0.75 ? 0 :
      (scrollProgress - 0.75) / 0.25;

    return { step1Progress, step2Progress, step3Progress, step4Progress };
  };

  const { step1Progress, step2Progress, step3Progress, step4Progress } = getStepAnimationState();

  // Scan line position for step 1
  const scanLineX = step1Progress * 100;

  // Get layer state based on scroll
  const getLayerState = (layerIndex: number) => {
    // During step 1, layers highlight sequentially
    const highlightDelay = layerIndex * 0.2;
    const isHighlighted = step1Progress > highlightDelay && step1Progress < highlightDelay + 0.4;
    
    // Active layer for step 3 (only workflows gets automation)
    const hasAutomation = layerIndex === 2 && step3Progress > 0.3;
    
    return { isHighlighted, hasAutomation };
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
          {/* Top - System Canvas (45%) */}
          <div className="h-[45%] relative flex items-center justify-center bg-background overflow-hidden p-4">
            {/* Defined canvas container */}
            <div 
              className="w-full max-w-[340px] h-full max-h-[260px] rounded-2xl p-5 relative"
              style={{
                backgroundColor: '#F6F4FA',
                border: '1px solid rgba(60, 50, 120, 0.08)',
              }}
            >
              {/* Layer cards */}
              <div className="h-full flex flex-col justify-between py-2">
                {systemLayers.map((layer, index) => {
                  const { isHighlighted, hasAutomation } = getLayerState(index);
                  
                  // Opacity hierarchy
                  const baseOpacity = isHighlighted ? 1 : 0.7;
                  const dimmedOpacity = step4Progress > 0 ? 0.85 + step4Progress * 0.15 : baseOpacity;

                  return (
                    <div
                      key={layer.id}
                      className="relative rounded-lg px-4 py-2.5 transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: isHighlighted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.85)',
                        boxShadow: isHighlighted 
                          ? '0 2px 8px rgba(60, 50, 120, 0.08)' 
                          : '0 1px 3px rgba(60, 50, 120, 0.04)',
                        opacity: dimmedOpacity,
                        transform: step4Progress > 0.5 ? 'translateY(0)' : undefined,
                      }}
                    >
                      {/* Layer label */}
                      <span 
                        className="text-[10px] font-medium tracking-wide transition-all duration-500"
                        style={{
                          color: isHighlighted 
                            ? 'hsl(260 30% 35%)' 
                            : 'hsl(260 15% 45% / 0.65)',
                        }}
                      >
                        {layer.label}
                      </span>

                      {/* Step 2: Flow indicator */}
                      {step2Progress > 0.3 && index === 2 && (
                        <div 
                          className="absolute right-4 top-1/2 -translate-y-1/2 h-px transition-all duration-700"
                          style={{
                            width: `${step2Progress * 40}px`,
                            background: 'linear-gradient(90deg, transparent, hsl(260 25% 70% / 0.4))',
                            opacity: step2Progress * 0.6,
                          }}
                        />
                      )}

                      {/* Step 3: Automation indicator */}
                      {hasAutomation && (
                        <div 
                          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 transition-all duration-700"
                          style={{ opacity: (step3Progress - 0.3) * 1.2 }}
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: 'hsl(260 35% 55%)' }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step 1: Scan line */}
              {step1Progress > 0 && step1Progress < 1 && (
                <div 
                  className="absolute top-5 bottom-5 w-px transition-all duration-100"
                  style={{
                    left: `${5 + scanLineX * 0.9}%`,
                    background: 'linear-gradient(180deg, transparent 0%, hsl(260 40% 65% / 0.5) 20%, hsl(260 40% 65% / 0.5) 80%, transparent 100%)',
                  }}
                />
              )}

              {/* Step 1: Constraint callouts */}
              {step1Progress > 0.3 && (
                <>
                  <div 
                    className="absolute -right-2 top-[20%] text-[8px] text-muted-foreground/50 transition-all duration-700"
                    style={{ opacity: (step1Progress - 0.3) * 0.8 }}
                  >
                    Regulatory
                  </div>
                  <div 
                    className="absolute -right-2 top-[50%] text-[8px] text-muted-foreground/50 transition-all duration-700"
                    style={{ opacity: (step1Progress - 0.4) * 0.8 }}
                  >
                    Existing tools
                  </div>
                  <div 
                    className="absolute -right-2 bottom-[20%] text-[8px] text-muted-foreground/50 transition-all duration-700"
                    style={{ opacity: (step1Progress - 0.5) * 0.8 }}
                  >
                    Team ownership
                  </div>
                </>
              )}

              {/* Step 4: Outer stability frame */}
              {step4Progress > 0.5 && (
                <div 
                  className="absolute -inset-2 rounded-3xl border transition-all duration-1000"
                  style={{ 
                    borderColor: `rgba(60, 50, 120, ${(step4Progress - 0.5) * 0.12})`,
                  }}
                />
              )}
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

        {/* Right Side - System Canvas (60%) */}
        <div className="w-[60%] relative flex items-center justify-center bg-background overflow-hidden p-8 lg:p-12">
          {/* Defined canvas container */}
          <div 
            className="w-full max-w-[520px] h-auto rounded-3xl p-8 lg:p-10 relative"
            style={{
              backgroundColor: '#F6F4FA',
              border: '1px solid rgba(60, 50, 120, 0.08)',
            }}
          >
            {/* Layer cards container */}
            <div className="flex flex-col gap-4">
              {systemLayers.map((layer, index) => {
                const { isHighlighted, hasAutomation } = getLayerState(index);
                
                // Clear opacity hierarchy
                const baseOpacity = isHighlighted ? 1 : 0.75;
                const finalOpacity = step4Progress > 0.5 ? 1 : baseOpacity;

                return (
                  <div
                    key={layer.id}
                    className="relative rounded-xl px-6 py-4 transition-all duration-700 ease-out"
                    style={{
                      backgroundColor: isHighlighted ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)',
                      boxShadow: isHighlighted 
                        ? '0 4px 16px rgba(60, 50, 120, 0.1)' 
                        : '0 1px 4px rgba(60, 50, 120, 0.05)',
                      opacity: finalOpacity,
                    }}
                  >
                    {/* Layer label */}
                    <span 
                      className="text-[11px] lg:text-[12px] font-medium tracking-wide transition-all duration-500"
                      style={{
                        color: isHighlighted 
                          ? 'hsl(260 30% 30%)' 
                          : 'hsl(260 15% 40% / 0.7)',
                      }}
                    >
                      {layer.label}
                    </span>

                    {/* Step 2: Flow gradient indicator */}
                    {step2Progress > 0.2 && (
                      <div 
                        className="absolute right-6 top-1/2 -translate-y-1/2 h-px transition-all duration-1000"
                        style={{
                          width: index === 2 ? `${step2Progress * 80}px` : `${step2Progress * 50}px`,
                          background: index === 2 
                            ? 'linear-gradient(90deg, transparent, hsl(260 30% 60% / 0.5))' 
                            : 'linear-gradient(90deg, transparent, hsl(260 20% 70% / 0.3))',
                          opacity: step2Progress * 0.7,
                        }}
                      />
                    )}

                    {/* Step 3: Automation indicator (only on Workflows) */}
                    {hasAutomation && (
                      <div 
                        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 transition-all duration-700"
                        style={{ opacity: (step3Progress - 0.3) * 1.4 }}
                      >
                        <div className="w-8 h-px bg-foreground/10" />
                        <div 
                          className="w-2 h-2 rounded-full transition-all duration-500"
                          style={{ 
                            backgroundColor: 'hsl(260 40% 50%)',
                            boxShadow: step3Progress > 0.6 ? '0 0 8px hsl(260 40% 50% / 0.4)' : 'none',
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step 1: Vertical scan line */}
            {step1Progress > 0 && step1Progress < 1 && (
              <div 
                className="absolute top-8 bottom-8 w-px transition-all duration-100 ease-linear"
                style={{
                  left: `${8 + scanLineX * 0.84}%`,
                  background: 'linear-gradient(180deg, transparent 0%, hsl(260 45% 60% / 0.6) 20%, hsl(260 45% 60% / 0.6) 80%, transparent 100%)',
                }}
              />
            )}

            {/* Step 1: Constraint callouts - positioned outside canvas */}
            {step1Progress > 0.25 && (
              <>
                <div 
                  className="absolute -right-4 lg:-right-8 top-[15%] flex items-center gap-2 transition-all duration-1000"
                  style={{ 
                    opacity: Math.min(1, (step1Progress - 0.25) / 0.25) * 0.7,
                    transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.25) / 0.25)) * 10}px)`,
                  }}
                >
                  <div className="w-4 h-px bg-border/50" />
                  <span className="text-[10px] lg:text-[11px] text-muted-foreground/60 tracking-wide whitespace-nowrap">
                    Regulatory
                  </span>
                </div>
                <div 
                  className="absolute -right-4 lg:-right-8 top-[45%] flex items-center gap-2 transition-all duration-1000"
                  style={{ 
                    opacity: Math.min(1, (step1Progress - 0.35) / 0.25) * 0.7,
                    transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.35) / 0.25)) * 10}px)`,
                  }}
                >
                  <div className="w-4 h-px bg-border/50" />
                  <span className="text-[10px] lg:text-[11px] text-muted-foreground/60 tracking-wide whitespace-nowrap">
                    Existing tools
                  </span>
                </div>
                <div 
                  className="absolute -right-4 lg:-right-8 bottom-[20%] flex items-center gap-2 transition-all duration-1000"
                  style={{ 
                    opacity: Math.min(1, (step1Progress - 0.45) / 0.25) * 0.7,
                    transform: `translateX(${(1 - Math.min(1, (step1Progress - 0.45) / 0.25)) * 10}px)`,
                  }}
                >
                  <div className="w-4 h-px bg-border/50" />
                  <span className="text-[10px] lg:text-[11px] text-muted-foreground/60 tracking-wide whitespace-nowrap">
                    Team ownership
                  </span>
                </div>
              </>
            )}

            {/* Step 4: Outer stability frame */}
            {step4Progress > 0.4 && (
              <div 
                className="absolute -inset-3 lg:-inset-4 rounded-[32px] border transition-all duration-1000"
                style={{ 
                  borderColor: `rgba(60, 50, 120, ${(step4Progress - 0.4) * 0.15})`,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
