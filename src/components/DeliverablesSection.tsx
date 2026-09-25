import React, { useState } from 'react';
import { DELIVERABLES, Deliverable } from '../data/content';
import {
  DiagnosticScorecardVector,
  RoadmapTrajectoryVector,
  PortfolioBlueprintVector
} from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { CountUp } from './CountUp';
import { SmoothHeightTransition } from './SmoothHeightTransition';

export const DeliverablesSection: React.FC = () => {
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);
  const [activeDeliverableIndex, setActiveDeliverableIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setActiveDeliverableIndex(index);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cards = container.children;
    if (!cards || cards.length === 0) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDiff = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const cardRect = (cards[i] as HTMLElement).getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }
    setActiveDeliverableIndex(closestIndex);
  };

  const renderVectorForDeliverable = (index: number) => {
    switch (index) {
      case 0:
        return <DiagnosticScorecardVector className="w-full h-16 sm:h-20 mb-2 drop-shadow-xs" />;
      case 1:
        return <RoadmapTrajectoryVector className="w-full h-16 sm:h-20 mb-2 drop-shadow-xs" />;
      case 2:
        return <PortfolioBlueprintVector className="w-full h-16 sm:h-20 mb-2 drop-shadow-xs" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-10 sm:py-14 bg-[#FAF8FF] border-b border-slate-100 relative overflow-hidden" id="deliverables">
      <div id="outcomes" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              WHAT YOU WALK AWAY WITH
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            Turn Post-Study Confusion Into a{' '}
            <span className="relative inline-block isolate">
              <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Clear Step-By-Step Plan.
              </span>
              <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
            When you connect with our advisory team, you receive three personal outputs designed around your degree, visa timeline, and local hiring realities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-between px-1 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-headline text-slate-700">
                3 Tangible Takeaways
              </h3>
            </div>

            <span className="text-[11px] text-slate-400 font-medium sm:hidden">
              Swipe cards →
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block font-['Outfit',sans-serif]">
              Tap any card to view what is included
            </span>
          </div>

          <div
            ref={(el) => {
              scrollRef.current = el;
              if (revealRef) {
                (revealRef as any).current = el;
              }
            }}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-[8vw] scroll-px-[8vw] gap-3.5 pb-2 md:mx-0 md:px-0 md:scroll-px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-5 w-auto md:w-full scrollbar-none"
          >
            {DELIVERABLES.map((d, idx) => {
              const isPurple = d.color === 'purple';
              const isSelected = selectedDeliverable?.title === d.title;

              return (
                <SpotlightCard
                  key={d.title}
                  theme={isPurple ? 'purple' : 'blue'}
                  enableTilt={true}
                  maxTilt={6.5}
                  perspective={900}
                  onClick={() => setSelectedDeliverable(isSelected ? null : d)}
                  style={{
                    transitionDelay: isVisible ? `${idx * 140}ms` : '0ms'
                  }}
                  className={`w-[84vw] max-w-[340px] md:w-auto md:max-w-none snap-center shrink-0 md:shrink outcome-card bg-[#FAF8FF] hover:bg-white border rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all duration-300 group cursor-pointer ${
                    isVisible ? 'reveal-visible' : 'reveal-init'
                  } ${
                    isSelected
                      ? isPurple
                        ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/20 bg-white shadow-glow-purple'
                        : 'border-[#0047FF] ring-2 ring-[#0047FF]/20 bg-white shadow-glow-blue'
                      : isPurple
                      ? 'border-slate-200 hover:border-[#7C3AED] hover:shadow-card-elevated'
                      : 'border-slate-200 hover:border-[#0047FF] hover:shadow-card-elevated'
                  }`}
                >
                  <div style={{ transformStyle: 'preserve-3d' }}>
                    <div className="flex items-center justify-between mb-3" style={{ transform: 'translateZ(12px)' }}>
                      <div
                        className={`outcome-icon w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs shrink-0 ${
                          isPurple
                            ? 'bg-purple-100 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white'
                            : 'bg-blue-100 text-[#0047FF] group-hover:bg-[#0047FF] group-hover:text-white'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg sm:text-xl">{d.icon}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-black font-headline px-2 py-0.5 rounded-md border ${
                            isPurple
                              ? 'bg-purple-50 text-[#7C3AED] border-purple-200'
                              : 'bg-blue-50 text-[#0047FF] border-blue-200'
                          }`}
                        >
                          {idx === 0 && <CountUp end={82} suffix="%" duration={1600} />}
                          {idx === 1 && <CountUp end={14} suffix=" Days" duration={1500} />}
                          {idx === 2 && <CountUp end={100} suffix="%" duration={1700} />}
                        </span>
                        <span
                          className={`material-symbols-outlined text-lg transition-transform duration-300 ${
                            isSelected ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'
                          }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div className="my-2 transition-transform duration-200" style={{ transform: 'translateZ(18px)' }}>
                      {renderVectorForDeliverable(idx)}
                    </div>

                    <h3
                      className={`font-headline text-base sm:text-lg font-bold text-[#0F172A] transition-colors mb-1.5 break-words ${
                        isPurple ? 'group-hover:text-[#7C3AED]' : 'group-hover:text-[#0047FF]'
                      }`}
                    >
                      {d.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words mb-3 sm:mb-4 font-['Outfit',sans-serif]">
                      {d.description}
                    </p>

                    <div className="pt-2.5 sm:pt-3 border-t border-slate-200/70">
                      <ul className="space-y-1">
                        {d.metrics.map((m) => (
                          <li key={m} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
                            <span className={`w-1.5 h-1.5 rounded-full ${isPurple ? 'bg-[#7C3AED]' : 'bg-[#0047FF]'}`} />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <SmoothHeightTransition isOpen={isSelected} duration={320}>
                      <div className="mt-3 p-3 bg-white border border-purple-200 rounded-xl text-xs text-slate-700 shadow-xs space-y-1">
                        <strong className="block text-[#7C3AED] font-semibold text-[10px] sm:text-[11px] uppercase tracking-wide">
                          Report Specification:
                        </strong>
                        <p className="leading-relaxed font-['Outfit',sans-serif] text-[11px] sm:text-xs">
                          {d.deliverablePreview}
                        </p>
                      </div>
                    </SmoothHeightTransition>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7C3AED]">
                    <span>{isSelected ? 'Hide specification' : 'Preview deliverable'}</span>
                    <span className="material-symbols-outlined text-sm">
                      {isSelected ? 'expand_less' : 'arrow_forward'}
                    </span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="flex md:hidden items-center justify-center gap-2 mt-3">
            {DELIVERABLES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`View deliverable ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDeliverableIndex === idx ? 'w-6 bg-[#7C3AED]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
