import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
  textParallaxStrength?: number;
  maxDistance?: number;
  enableGlow?: boolean;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      children,
      className = '',
      magneticStrength = 0.35,
      textParallaxStrength = 0.25,
      maxDistance = 10,
      enableGlow = true,
      onMouseMove,
      onMouseLeave,
      onMouseEnter,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current!);

    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [canHover, setCanHover] = useState<boolean>(true);

    useEffect(() => {
      const isTouch =
        typeof window !== 'undefined' &&
        (window.matchMedia('(pointer: coarse)').matches ||
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0);
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isTouch || prefersReducedMotion) {
        setCanHover(false);
      }
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && canHover) {
        setIsHovered(true);
      }
      onMouseEnter?.(e);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!canHover || !buttonRef.current || disabled) {
        onMouseMove?.(e);
        return;
      }

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * magneticStrength;
      const deltaY = (e.clientY - centerY) * magneticStrength;

      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

      const pctX = Math.round(((e.clientX - rect.left) / rect.width) * 100);
      const pctY = Math.round(((e.clientY - rect.top) / rect.height) * 100);

      setPosition({ x: clampedX, y: clampedY });
      setGlowPos({ x: pctX, y: pctY });
      setIsHovered(true);
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <button
        ref={buttonRef}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transitionProperty: 'transform',
          transitionDuration: isHovered ? '0.12s' : '0.45s',
          transitionTimingFunction: isHovered
            ? 'cubic-bezier(0.2, 0, 0.38, 0.9)'
            : 'cubic-bezier(0.25, 1, 0.5, 1)',
          willChange: 'transform',
          ...style
        }}
        className={`relative overflow-hidden ${className}`}
        {...props}
      >
        {enableGlow && isHovered && !disabled && (
          <span
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-0"
            style={{
              background: `radial-gradient(circle 80px at ${glowPos.x}% ${glowPos.y}%, rgba(255, 255, 255, 0.25), transparent 70%)`
            }}
            aria-hidden="true"
          />
        )}

        <span
          className="relative z-10 inline-flex items-center justify-center gap-2 w-full h-full pointer-events-none"
          style={{
            transform: `translate3d(${position.x * textParallaxStrength}px, ${position.y * textParallaxStrength}px, 0)`,
            transitionProperty: 'transform',
            transitionDuration: isHovered ? '0.12s' : '0.45s',
            transitionTimingFunction: isHovered
              ? 'cubic-bezier(0.2, 0, 0.38, 0.9)'
              : 'cubic-bezier(0.25, 1, 0.5, 1)',
            willChange: 'transform'
          }}
        >
          {children}
        </span>
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';
