import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  problem: string;
  outcome: string;
  metric?: string;
  link?: string;
}

const CaseStudyCard = ({ title, problem, outcome, metric, link = "/work" }: CaseStudyCardProps) => {
  return (
    <Card className="group p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/80">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-base font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-medium text-foreground/70">Challenge:</span> {problem}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/70">Outcome:</span> {outcome}
          </p>
          {metric && (
            <p className="text-lg font-semibold text-primary mt-4">{metric}</p>
          )}
        </div>
        <Link to={link} className="p-2 rounded-full border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
