import React, { useRef, useState, useEffect, useId } from 'react';

interface SectionDividerProps {
  variant?: 'beam' | 'curve' | 'step' | 'wave';
  label?: string;
  icon?: string;
  className?: string;
  fromBg?: 'white' | 'purple-tint' | 'dark';
  toBg?: 'white' | 'purple-tint' | 'dark';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'beam',
  label,
  icon,
  className = '',
  fromBg = 'white',
  toBg = 'purple-tint'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beamProgress, setBeamProgress] = useState(50);
  const [isInView, setIsInView] = useState(false);
  const rawId = useId();
  const safeId = rawId.replace(/[^a-zA-Z0-9-_]/g, '');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const winHeight = window.innerHeight;

            if (rect.top <= winHeight + 100 && rect.bottom >= -100) {
              setIsInView(true);
              const totalDistance = winHeight + rect.height;
              const scrolled = winHeight - rect.top;
              const progress = Math.min(Math.max(scrolled / totalDistance, 0), 1);
              setBeamProgress(progress * 100);
            } else {
              setIsInView(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBgClass = (bg: 'white' | 'purple-tint' | 'dark') => {
    switch (bg) {
      case 'purple-tint':
        return 'bg-[#FAF8FF]';
      case 'dark':
        return 'bg-[#0F172A]';
      case 'white':
      default:
        return 'bg-white';
    }
  };

  if (variant === 'curve' || variant === 'wave') {
    const fillColor = toBg === 'purple-tint' ? '#FAF8FF' : toBg === 'dark' ? '#0F172A' : '#FFFFFF';
    const bgParentColor = getBgClass(fromBg);
    const t = Math.min(Math.max(beamProgress / 100, 0), 1);
    const particleX = 1440 * t;
    const particleY = 108 * t * (1 - t);

    const gStart = Math.max(beamProgress - 14, 0);
    const gEnd = Math.min(beamProgress + 14, 100);

    return (
      <div
        ref={containerRef}
        className={`w-full overflow-hidden leading-none select-none relative z-10 transition-colors duration-300 ${bgParentColor} ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 lg:h-10 block relative overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id={`curve-beam-${safeId}`}
              x1={`${gStart}%`}
              y1="0%"
              x2={`${gEnd}%`}
              y2="0%"
            >
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
              <stop offset="35%" stopColor="#7C3AED" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#BEF264" stopOpacity="1" />
              <stop offset="65%" stopColor="#0047FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0047FF" stopOpacity="0" />
            </linearGradient>

            <filter
              id={`glow-filter-${safeId}`}
              x="-20%"
              y="-100%"
              width="140%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M0,0 C480,36 960,36 1440,0 L1440,40 L0,40 Z"
            fill={fillColor}
          />

          <path
            d="M0,0 C480,36 960,36 1440,0"
            fill="none"
            stroke={toBg === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(124,58,237,0.15)'}
            strokeWidth="1.2"
          />

          <path
            d="M0,0 C480,36 960,36 1440,0"
            fill="none"
            stroke={`url(#curve-beam-${safeId})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            filter={`url(#glow-filter-${safeId})`}
            className="transition-opacity duration-300"
            style={{ opacity: isInView ? 1 : 0 }}
          />

          {isInView && beamProgress > 2 && beamProgress < 98 && (
            <g filter={`url(#glow-filter-${safeId})`}>
              <circle
                cx={particleX}
                cy={particleY}
                r="3.5"
                fill="#BEF264"
                className="transition-transform duration-75"
              />
              <circle
                cx={particleX}
                cy={particleY}
                r="1.8"
                fill="#FFFFFF"
              />
            </g>
          )}
        </svg>
      </div>
    );
  }

  if (variant === 'step') {
    const bgParentColor = getBgClass(fromBg);

    return (
      <div
        ref={containerRef}
        className={`w-full py-2.5 sm:py-4 flex items-center justify-center relative z-10 px-3 sm:px-4 select-none transition-colors duration-300 ${bgParentColor} ${className}`}
      >
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2.5px] pointer-events-none overflow-hidden select-none z-0">
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-32 sm:w-60 rounded-full bg-gradient-to-r from-transparent via-[#BEF264] to-[#7C3AED] transition-opacity duration-200 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${beamProgress}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow:
                '0 0 10px 1px rgba(190, 242, 100, 0.9), 0 0 18px 3px rgba(124, 58, 237, 0.55)'
            }}
          />
        </div>

        <div className="flex-1 max-w-xs sm:max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-[#7C3AED]/50 relative z-10" />

        <div className="mx-2 sm:mx-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1 rounded-full bg-white border border-purple-200/90 shadow-2xs hover:border-[#7C3AED] transition-all relative z-10">
          <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-[#7C3AED]" />
          </span>

          {icon && (
            <span className="material-symbols-outlined text-xs sm:text-sm text-[#7C3AED]">
              {icon}
            </span>
          )}

          {label && (
            <span className="text-[9px] sm:text-xs font-headline font-bold uppercase tracking-wider text-slate-700">
              {label}
            </span>
          )}

          <span className="material-symbols-outlined text-[10px] sm:text-xs text-slate-400">
            south
          </span>
        </div>

        <div className="flex-1 max-w-xs sm:max-w-md h-[1px] bg-gradient-to-r from-[#7C3AED]/50 via-[#7C3AED]/25 to-transparent relative z-10" />
      </div>
    );
  }

  const bgParentColor = getBgClass(fromBg);
  return (
    <div
      ref={containerRef}
      className={`w-full py-2 sm:py-3.5 flex items-center justify-center relative z-10 px-3 sm:px-4 select-none transition-colors duration-300 ${bgParentColor} ${className}`}
    >
      <div className="w-full max-w-4xl flex items-center justify-center relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2.5px] pointer-events-none overflow-hidden select-none z-0">
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-28 sm:w-52 rounded-full bg-gradient-to-r from-transparent via-[#BEF264] to-[#7C3AED] transition-opacity duration-200 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${beamProgress}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow:
                '0 0 10px 1px rgba(190, 242, 100, 0.9), 0 0 18px 3px rgba(124, 58, 237, 0.5)'
            }}
          />
        </div>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-[#7C3AED]/30 relative z-10" />

        <div className="mx-2 sm:mx-3 flex items-center gap-1 sm:gap-1.5 relative z-10">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0047FF]/40" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border border-[#7C3AED] bg-white shadow-2xs" />
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#7C3AED]/40" />
        </div>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#7C3AED]/30 via-slate-200 to-transparent relative z-10" />
      </div>
    </div>
  );
};
