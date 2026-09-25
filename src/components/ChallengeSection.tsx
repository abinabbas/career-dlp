import React, { useState } from 'react';
import { CRITICAL_GAPS, GapCard } from '../data/content';
import { RadarFitVector } from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { SmoothHeightTransition } from './SmoothHeightTransition';

export const ChallengeSection: React.FC = () => {
  const [selectedGap, setSelectedGap] = useState<GapCard | null>(null);
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const railProgress = selectedGap ? 100 : 25;

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setActiveGapIndex(index);
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
    setActiveGapIndex(closestIndex);
  };

  return (
    <section className="w-full py-12 sm:py-20 bg-[#FAF8FF] border-b border-slate-100 relative overflow-hidden" id="challenge">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                THE ABROAD CHALLENGE
              </span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
              Passing Your University Exams Is Only Half The Journey{' '}
              <span className="relative inline-block isolate">
                <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                  Abroad.
                </span>
                <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
              </span>
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed break-words font-['Outfit',sans-serif]">
              Getting your degree in a new country took courage, investment, and hard work. But local employers look for something universities never taught: practical proof you can do the job on Day 1.
            </p>

            <div className="hidden lg:flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse" />
                <span>4 Big Roadblocks Students Face</span>
              </div>
              <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7C3AED] to-[#0047FF] transition-all duration-300"
                  style={{ width: `${railProgress}%` }}
                />
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-white/90 border border-slate-200/90 rounded-2xl shadow-xs mt-2 overflow-hidden relative">
              <div className="flex flex-wrap items-center justify-between gap-1.5 px-1 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-600 font-headline">
                    The Experience Mismatch
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#7C3AED] bg-purple-100/80 px-2.5 py-0.5 rounded-full font-headline border border-purple-200/60">
                  Local Jobs vs. Classroom
                </span>
              </div>
              <RadarFitVector />
            </div>
          </div>

          <div className="lg:col-span-8 relative w-full">
            <div className="flex items-center justify-between px-1 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-700 font-headline uppercase tracking-wider">
                  4 Common{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                    Student Roadblocks
                  </span>
                </h3>
              </div>

              <span className="text-[11px] text-slate-400 font-medium sm:hidden">
                Swipe cards →
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block font-['Outfit',sans-serif]">
                Tap any card to view advice
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
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-[8vw] scroll-px-[8vw] pb-3 sm:mx-0 sm:px-0 sm:scroll-px-0 sm:pb-0 sm:grid sm:grid-cols-2 gap-3.5 sm:gap-4 w-auto sm:w-full scrollbar-none"
            >
              {CRITICAL_GAPS.map((gap, idx) => {
                const isPurple = gap.color === 'purple';
                const isSelected = selectedGap?.id === gap.id;

                return (
                  <SpotlightCard
                    key={gap.id}
                    theme={isPurple ? 'purple' : 'blue'}
                    onClick={() => setSelectedGap(isSelected ? null : gap)}
                    style={{
                      transitionDelay: isVisible ? `${idx * 120}ms` : '0ms'
                    }}
                    className={`w-[84vw] max-w-[340px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-center bg-[#FAF8FF] hover:bg-white border rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-xs transition-all duration-300 group cursor-pointer ${
                      isVisible ? 'reveal-visible' : 'reveal-init'
                    } ${
                      isSelected
                        ? isPurple
                          ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/20 shadow-glow-purple bg-white'
                          : 'border-[#0047FF] ring-2 ring-[#0047FF]/20 shadow-glow-blue bg-white'
                        : isPurple
                        ? 'border-slate-200 hover:border-[#7C3AED] hover:shadow-card-elevated'
                        : 'border-slate-200 hover:border-[#0047FF] hover:shadow-card-elevated'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                            isPurple
                              ? 'bg-purple-100 text-[#7C3AED] group-hover:scale-105 group-hover:bg-[#7C3AED] group-hover:text-white'
                              : 'bg-blue-100 text-[#0047FF] group-hover:scale-105 group-hover:bg-[#0047FF] group-hover:text-white'
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg sm:text-xl">{gap.icon}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isPurple ? 'bg-[#7C3AED]' : 'bg-[#0047FF]'
                            }`}
                          />
                          <span
                            className={`material-symbols-outlined text-lg transition-transform duration-300 ${
                              isSelected ? 'rotate-180 text-[#7C3AED]' : 'text-slate-400'
                            }`}
                          >
                            expand_more
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`font-headline text-base sm:text-lg font-bold text-[#0F172A] transition-colors mb-2 break-words ${
                          isPurple ? 'group-hover:text-[#7C3AED]' : 'group-hover:text-[#0047FF]'
                        }`}
                      >
                        {gap.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words font-['Outfit',sans-serif]">
                        {gap.description}
                      </p>

                      <SmoothHeightTransition isOpen={isSelected} duration={320}>
                        <div className="mt-3 p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-xs text-slate-700 shadow-2xs space-y-1">
                          <strong className="block text-[#7C3AED] font-headline font-semibold text-[11px] uppercase tracking-wide">
                            How to Bridge This Gap:
                          </strong>
                          <p className="leading-relaxed font-['Outfit',sans-serif] text-xs">
                            {gap.insight}
                          </p>
                        </div>
                      </SmoothHeightTransition>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-headline font-bold text-[#7C3AED]">
                      <span>{isSelected ? 'Hide details' : 'How to bridge this gap'}</span>
                      <span className="material-symbols-outlined text-sm">
                        {isSelected ? 'expand_less' : 'arrow_forward'}
                      </span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            <div className="flex sm:hidden items-center justify-center gap-2 mt-3">
              {CRITICAL_GAPS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`View card ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeGapIndex === idx ? 'w-6 bg-[#7C3AED]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
