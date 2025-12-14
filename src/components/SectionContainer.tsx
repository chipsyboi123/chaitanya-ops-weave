import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  id?: string;
}

const SectionContainer = ({ children, className = "", narrow = false, id }: SectionContainerProps) => {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className={`container mx-auto px-4 lg:px-6 ${narrow ? 'max-w-[1120px]' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
