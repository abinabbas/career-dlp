import React from 'react';

interface SmoothHeightTransitionProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  duration?: number;
}

export const SmoothHeightTransition: React.FC<SmoothHeightTransitionProps> = ({
  isOpen,
  children,
  className = '',
  innerClassName = '',
  duration = 320
}) => {
  return (
    <div
      style={{
        transitionDuration: `${duration}ms`
      }}
      className={`grid transition-[grid-template-rows,opacity] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? 'grid-rows-[1fr] opacity-100'
          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
      } ${className}`}
      aria-hidden={!isOpen}
    >
      <div className={`overflow-hidden min-h-0 ${innerClassName}`}>
        <div
          style={{
            transitionDuration: `${duration}ms`
          }}
          className={`transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? 'translate-y-0' : '-translate-y-1'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
