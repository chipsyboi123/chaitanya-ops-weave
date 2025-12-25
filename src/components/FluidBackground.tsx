import { useEffect, useRef, useCallback } from 'react';

interface FluidBackgroundProps {
  mousePosition: { x: number; y: number };
  isHovered: boolean;
}

interface Orb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  baseRadius: number;
  color: string;
  speed: number;
  angle: number;
  angleSpeed: number;
}

const FluidBackground = ({ mousePosition, isHovered }: FluidBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const animationRef = useRef<number>();
  const containerRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });

  // Initialize orbs
  const initOrbs = useCallback((width: number, height: number) => {
    const colors = [
      'rgba(59, 130, 246, 0.6)',   // Blue
      'rgba(99, 102, 241, 0.5)',   // Indigo
      'rgba(139, 92, 246, 0.5)',   // Purple
      'rgba(236, 72, 153, 0.4)',   // Pink
    ];

    orbsRef.current = colors.map((color, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      radius: 80 + Math.random() * 60,
      baseRadius: 80 + Math.random() * 60,
      color,
      speed: 0.003 + Math.random() * 0.002,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: 0.01 + Math.random() * 0.01,
    }));
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = containerRef.current;
    
    // Clear canvas with base gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0f172a');
    gradient.addColorStop(0.4, '#1e1b4b');
    gradient.addColorStop(1, '#1f2937');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Update and draw orbs
    orbsRef.current.forEach((orb) => {
      // Natural floating movement
      orb.angle += orb.angleSpeed;
      const floatX = Math.cos(orb.angle) * 30;
      const floatY = Math.sin(orb.angle * 0.7) * 20;

      // Mouse attraction when hovered
      if (isHovered && mousePosition.x > 0 && mousePosition.y > 0) {
        const dx = mousePosition.x - orb.x;
        const dy = mousePosition.y - orb.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.08;
          orb.targetX = orb.x + dx * force;
          orb.targetY = orb.y + dy * force;
          orb.radius = orb.baseRadius + (1 - distance / maxDistance) * 20;
        } else {
          orb.radius += (orb.baseRadius - orb.radius) * 0.05;
        }
      } else {
        // Return to natural movement
        orb.targetX = width / 2 + floatX + Math.sin(orb.angle * 0.5) * (width * 0.3);
        orb.targetY = height / 2 + floatY + Math.cos(orb.angle * 0.3) * (height * 0.3);
        orb.radius += (orb.baseRadius - orb.radius) * 0.02;
      }

      // Smooth interpolation
      orb.x += (orb.targetX - orb.x) * orb.speed * 2;
      orb.y += (orb.targetY - orb.y) * orb.speed * 2;

      // Draw orb with radial gradient
      const orbGradient = ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      orbGradient.addColorStop(0, orb.color);
      orbGradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fillStyle = orbGradient;
      ctx.fill();
    });

    // Add subtle noise/grain overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.fillRect(x, y, 1, 1);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [mousePosition, isHovered]);

  // Setup canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      containerRef.current = { width: rect.width, height: rect.height };
      
      if (orbsRef.current.length === 0) {
        initOrbs(rect.width, rect.height);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initOrbs]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ willChange: 'transform' }}
    />
  );
};

export default FluidBackground;
