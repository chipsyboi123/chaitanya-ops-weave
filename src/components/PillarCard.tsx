import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  outcome: string;
}

const PillarCard = ({ icon: Icon, title, bullets, outcome }: PillarCardProps) => {
  return (
    <Card className="p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-card/80 h-full flex flex-col">
      <div className="mb-6 inline-flex p-3 border border-primary/20 rounded-lg w-fit">
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold mb-5">{title}</h3>
      <ul className="space-y-3 mb-6 flex-1">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="pt-5 border-t border-border/50">
        <p className="text-sm font-medium text-foreground">{outcome}</p>
      </div>
    </Card>
  );
};

export default PillarCard;
