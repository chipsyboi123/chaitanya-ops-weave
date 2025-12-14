import { Card } from "@/components/ui/card";

interface FounderNoteProps {
  quote: string;
  name: string;
  title: string;
  portrait?: string;
}

const FounderNote = ({ quote, name, title, portrait }: FounderNoteProps) => {
  return (
    <Card className="p-8 lg:p-10 border border-border/50 bg-card/80 max-w-3xl mx-auto">
      <p className="eyebrow mb-6">A Note From the Founder</p>
      <div className="flex gap-6 items-start">
        {portrait ? (
          <img 
            src={portrait} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border border-border/50 flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-serif text-primary">CP</span>
          </div>
        )}
        <div>
          <blockquote className="text-foreground/90 leading-relaxed mb-4 font-serif italic">
            "{quote}"
          </blockquote>
          <div>
            <p className="text-sm font-medium text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{title}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FounderNote;
