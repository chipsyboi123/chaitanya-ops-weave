import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon?: LucideIcon;
  metric: string;
  label: string;
  note?: string;
}

const MetricCard = ({ icon: Icon, metric, label, note }: MetricCardProps) => {
  return (
    <Card className="p-6 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/80">
      {Icon && <Icon className="w-5 h-5 text-primary mx-auto mb-4" strokeWidth={1.5} />}
      <p className="text-2xl lg:text-3xl font-semibold text-foreground mb-2 font-serif">{metric}</p>
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      {note && (
        <p className="text-xs text-muted-foreground/70 mt-2 italic">{note}</p>
      )}
    </Card>
  );
};

export default MetricCard;
