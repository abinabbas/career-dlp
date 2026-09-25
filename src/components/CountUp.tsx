import React, { useEffect, useState, useRef } from 'react';

export interface CountUpProps {
  end: number;
  start?: number;
  duration?: number; // ms, default 1600
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  triggerOnScroll?: boolean;
}

// Cubic easing for smooth deceleration at the end
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  triggerOnScroll = true
}) => {
  const [currentValue, setCurrentValue] = useState<number>(start);
  const [hasTriggered, setHasTriggered] = useState<boolean>(!triggerOnScroll);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!triggerOnScroll) {
      setHasTriggered(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasTriggered(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnScroll]);

  useEffect(() => {
    if (!hasTriggered) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || duration <= 0) {
      setCurrentValue(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const val = start + (end - start) * easedProgress;

      setCurrentValue(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasTriggered, start, end, duration]);

  const formattedNumber = currentValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return (
    <span
      ref={elementRef}
      className={`inline-block tabular-nums ${className}`}
      aria-label={`${prefix}${end}${suffix}`}
    >
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
