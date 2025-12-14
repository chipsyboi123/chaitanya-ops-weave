import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ArtifactCardProps {
  tag: string;
  title: string;
  replaces: string;
  impact: string;
  thumbnail?: string;
}

const ArtifactCard = ({ tag, title, replaces, impact, thumbnail }: ArtifactCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/80">
      {/* Thumbnail placeholder */}
      <div className="aspect-[4/3] bg-muted/30 border-b border-border/50 flex items-center justify-center">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-serif text-lg">EW</span>
            </div>
            <p className="text-xs text-muted-foreground">{tag}</p>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">{tag}</span>
        <h4 className="text-base font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{title}</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><span className="font-medium text-foreground/70">Replaces:</span> {replaces}</p>
          <p><span className="font-medium text-foreground/70">Impact:</span> {impact}</p>
        </div>
      </div>
    </Card>
  );
};

export default ArtifactCard;
