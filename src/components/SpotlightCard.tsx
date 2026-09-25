import React, { useRef, useState, useCallback } from 'react';

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  theme?: 'purple' | 'blue' | 'lime' | 'amber' | 'rose' | string;
  spotlightColor?: string;
  borderColor?: string;
  spotlightSize?: number;
  enableTilt?: boolean;
  maxTilt?: number;
  perspective?: number;
  scaleOnHover?: number;
  glareOpacity?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  theme = 'purple',
  spotlightColor,
  borderColor,
  spotlightSize = 340,
  enableTilt = false,
  maxTilt = 6,
  perspective = 1000,
  scaleOnHover = 1.01,
  glareOpacity = 0.15,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const rafId = useRef<number | null>(null);

  const resolvedSpotlightColor =
    spotlightColor ||
    (theme === 'blue'
      ? 'rgba(0, 71, 255, 0.12)'
      : theme === 'lime'
      ? 'rgba(190, 242, 100, 0.22)'
      : theme === 'amber'
      ? 'rgba(245, 158, 11, 0.16)'
      : theme === 'rose'
      ? 'rgba(225, 29, 72, 0.14)'
      : 'rgba(124, 58, 237, 0.14)');

  const resolvedBorderColor =
    borderColor ||
    (theme === 'blue'
      ? 'rgba(0, 71, 255, 0.75)'
      : theme === 'lime'
      ? 'rgba(190, 242, 100, 0.95)'
      : theme === 'amber'
      ? 'rgba(245, 158, 11, 0.85)'
      : theme === 'rose'
      ? 'rgba(225, 29, 72, 0.75)'
      : 'rgba(190, 242, 100, 0.85)');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (cardRef.current) {
          cardRef.current.style.setProperty('--spotlight-x', `${x}px`);
          cardRef.current.style.setProperty('--spotlight-y', `${y}px`);

          if (enableTilt) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            setTiltStyle({
              transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(
                2
              )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1)`,
              transitionProperty: 'transform',
              transitionDuration: '0.1s',
              transitionTimingFunction: 'ease-out',
            });
          }
        }
      });
    },
    [enableTilt, maxTilt, perspective, scaleOnHover]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (enableTilt) {
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transitionProperty: 'transform',
        transitionDuration: '0.4s',
        transitionTimingFunction: 'ease-out',
      });
    }
  }, [enableTilt, perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group/spotlight ${className}`}
      style={
        {
          '--spotlight-x': '-999px',
          '--spotlight-y': '-999px',
          ...tiltStyle,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightSize}px circle at var(--spotlight-x) var(--spotlight-y), ${resolvedSpotlightColor}, transparent 70%)`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          padding: '1.5px',
          background: `radial-gradient(${spotlightSize * 0.75}px circle at var(--spotlight-x) var(--spotlight-y), ${resolvedBorderColor}, rgba(124, 58, 237, 0.35), transparent 75%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative z-1 h-full w-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
