import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface TimelinePhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

interface ProgramTimelineProps {
  phases: TimelinePhase[];
}

const ProgramTimeline = ({ phases }: ProgramTimelineProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {phases.map((phase, index) => (
        <div key={index} className="relative">
          <Card className="p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/80">
            <p className="text-3xl font-serif text-primary/40 mb-3">{phase.phase}</p>
            <h4 className="text-base font-semibold mb-2">{phase.title}</h4>
            <p className="text-xs text-primary mb-3 font-medium">{phase.duration}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{phase.description}</p>
          </Card>
          {index < phases.length - 1 && (
            <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-border z-10" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgramTimeline;
