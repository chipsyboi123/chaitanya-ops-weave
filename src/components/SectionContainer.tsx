import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
