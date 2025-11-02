import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
}

const FeatureCard = ({ icon: Icon, title, description, children }: FeatureCardProps) => {
  return (
    <Card className="p-6 lg:p-8 bg-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {children}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
