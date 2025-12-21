import { Card } from "@/components/ui/card";

interface FounderNoteProps {
  quote: string;
  name: string;
  title: string;
  portrait?: string;
}

const FounderNote = ({ quote, name, title, portrait }: FounderNoteProps) => {
  return (
    <Card className="p-8 lg:p-12 border border-border/50 bg-card max-w-5xl mx-auto">
      <p className="eyebrow mb-8">A Note From the Founder</p>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
        {/* Left: Quote and attribution */}
        <div>
          <blockquote className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-6">
            "{quote}"
          </blockquote>
          <div>
            <p className="font-medium text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
        
        {/* Right: Portrait */}
        <div className="flex-shrink-0">
          {portrait ? (
            <img 
              src={portrait} 
              alt={name} 
              className="w-32 h-40 lg:w-40 lg:h-52 rounded-lg object-cover border border-border/50"
            />
          ) : (
            <div className="w-32 h-40 lg:w-40 lg:h-52 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center">
              <span className="text-3xl font-serif text-primary">CP</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FounderNote;
