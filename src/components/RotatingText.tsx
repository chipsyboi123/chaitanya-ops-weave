import { useState, useEffect } from "react";

interface RotatingTextProps {
  prefix: string;
  phrases: string[];
  interval?: number;
}

const RotatingText = ({ prefix, phrases, interval = 2200 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <div className="text-lg text-muted-foreground">
      <span>{prefix} </span>
      <span 
        className={`inline-block transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        {phrases[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingText;
