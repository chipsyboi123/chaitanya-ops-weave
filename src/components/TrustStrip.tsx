interface TrustStripProps {
  statements: string[];
}

const TrustStrip = ({ statements }: TrustStripProps) => {
  return (
    <div className="border-y border-border/50 bg-card/30 py-6">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {statements.map((statement, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <span className="text-sm text-muted-foreground font-medium">
                {statement}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
