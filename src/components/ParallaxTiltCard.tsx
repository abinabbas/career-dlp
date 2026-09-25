import React, { useRef, useState, useEffect, useCallback, HTMLAttributes } from 'react';

export interface ParallaxTiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glareOpacity?: number;
  glareColor?: string;
  scaleOnHover?: number;
  theme?: 'purple' | 'blue' | 'lime' | 'neutral';
  disabled?: boolean;
}

export const ParallaxTiltCard = React.forwardRef<HTMLDivElement, ParallaxTiltCardProps>(
  (
    {
      children,
      className = '',
      maxTilt = 6,
      perspective = 1000,
      glareOpacity = 0.16,
      glareColor,
      scaleOnHover = 1.01,
      theme = 'purple',
      disabled = false,
      style,
      onMouseEnter,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const isTouchDevice = useRef(false);
    const rafId = useRef<number | null>(null);

    const resolvedGlareColor =
      glareColor ||
      (theme === 'purple'
        ? 'rgba(124, 58, 237, 0.22)'
        : theme === 'blue'
        ? 'rgba(0, 71, 255, 0.2)'
        : theme === 'lime'
        ? 'rgba(190, 242, 100, 0.28)'
        : 'rgba(255, 255, 255, 0.6)');

    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      };
    }, []);

    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        cardRef.current = node;
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [forwardedRef]
    );

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || prefersReducedMotion || isTouchDevice.current) return;
      setIsHovered(true);
      if (onMouseEnter) onMouseEnter(e);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || prefersReducedMotion || isTouchDevice.current || !cardRef.current) return;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      const clientX = e.clientX;
      const clientY = e.clientY;

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        if (width === 0 || height === 0) return;

        const xNorm = Math.min(Math.max((clientX - rect.left) / width, 0), 1);
        const yNorm = Math.min(Math.max((clientY - rect.top) / height, 0), 1);

        const tiltX = (0.5 - yNorm) * (maxTilt * 2);
        const tiltY = (xNorm - 0.5) * (maxTilt * 2);

        setTilt({ x: parseFloat(tiltX.toFixed(2)), y: parseFloat(tiltY.toFixed(2)) });
        setGlarePos({ x: Math.round(xNorm * 100), y: Math.round(yNorm * 100) });
      });

      if (onMouseMove) onMouseMove(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
      if (onMouseLeave) onMouseLeave(e);
    };

    const handleTouchStart = () => {
      isTouchDevice.current = true;
      setIsHovered(false);
    };

    const isEffectActive = isHovered && !disabled && !prefersReducedMotion;
    const currentScale = isEffectActive ? scaleOnHover : 1;

    return (
      <div
        ref={setRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        style={{
          perspective: `${perspective}px`,
          ...style
        }}
        className={`group/parallax isolate select-none ${className}`}
        {...props}
      >
        <div
          style={{
            transform: isEffectActive
              ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${currentScale}, ${currentScale}, ${currentScale})`
              : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transformStyle: 'preserve-3d',
            transitionProperty: 'transform',
            transitionDuration: isHovered ? '120ms' : '550ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="relative w-full h-full rounded-[inherit] will-change-transform"
        >
          {!disabled && !prefersReducedMotion && (
            <div
              className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-30 overflow-hidden mix-blend-overlay"
              style={{
                opacity: isHovered ? glareOpacity : 0,
                background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, ${resolvedGlareColor}, rgba(255,255,255,0.05) 50%, transparent 80%)`
              }}
              aria-hidden="true"
            />
          )}

          <div className="relative z-10 w-full h-full rounded-[inherit]">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

ParallaxTiltCard.displayName = 'ParallaxTiltCard';
