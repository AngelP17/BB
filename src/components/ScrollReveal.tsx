import { useRef, useEffect, useState, ReactNode, useCallback } from 'react';

// Throttle utility for scroll performance
function throttle<T extends (...args: Parameters<T>) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// RAF-based scroll handler for smooth 60fps animations
function useRAFScroll(callback: () => void) {
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [callback]);
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur';
  once?: boolean;
  distance?: number;
  easing?: 'smooth' | 'bounce' | 'elastic';
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 800,
  threshold = 0.15,
  direction = 'up',
  once = true,
  distance = 60,
  easing = 'smooth',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay for staggered reveal effect
          setTimeout(() => setIsVisible(true), delay);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once, delay]);

  // Easing functions
  const getEasing = () => {
    switch (easing) {
      case 'bounce':
        return 'cubic-bezier(0.34, 1.56, 0.64, 1)';
      case 'elastic':
        return 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      case 'smooth':
      default:
        return 'cubic-bezier(0.22, 1, 0.36, 1)';
    }
  };

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';

    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'scale':
        return 'scale(0.9)';
      case 'blur':
        return `translate3d(0, ${distance / 2}px, 0)`;
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    filter: direction === 'blur' && !isVisible ? 'blur(10px)' : 'blur(0px)',
    transition: `
      opacity ${duration}ms ${getEasing()},
      transform ${duration}ms ${getEasing()},
      filter ${duration}ms ${getEasing()}
    `,
    willChange: isVisible ? 'auto' : 'transform, opacity',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Hook for scroll reveal
export function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// Staggered children container with improved animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 100,
  threshold = 0.15,
  direction = 'up',
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollReveal(threshold);

  const getTransform = (visible: boolean) => {
    if (visible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up': return 'translate3d(0, 40px, 0)';
      case 'down': return 'translate3d(0, -40px, 0)';
      case 'left': return 'translate3d(40px, 0, 0)';
      case 'right': return 'translate3d(-40px, 0, 0)';
      default: return 'translate3d(0, 40px, 0)';
    }
  };

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(isVisible),
                transition: `
                  opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
                  transform 600ms cubic-bezier(0.22, 1, 0.36, 1)
                `,
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
                willChange: isVisible ? 'auto' : 'transform, opacity',
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

// Section wrapper with smooth reveal animation
interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionReveal({ children, className = '', id }: SectionRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} section-animate`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50px, 0)',
        transition: `
          opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
          transform 800ms cubic-bezier(0.22, 1, 0.36, 1)
        `,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      {children}
    </section>
  );
}

// Parallax scroll effect hook with throttling
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const calculateOffset = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only calculate when element is in viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      setOffset(distance * speed * -0.1);
    }
  }, [speed]);

  useRAFScroll(calculateOffset);

  return { ref, offset };
}

// Export throttle for use in other components
export { throttle };
