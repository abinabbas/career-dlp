import React, { useState } from 'react';
import { TOPIC_TAGS } from '../data/content';
import { SkillConvergenceVector } from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ParallaxTiltCard } from './ParallaxTiltCard';
import { SpotlightCard } from './SpotlightCard';

interface SkillConvergenceSectionProps {
  onScrollToEnquiry: () => void;
}

export const SkillConvergenceSection: React.FC<SkillConvergenceSectionProps> = ({
  onScrollToEnquiry
}) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="w-full py-10 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden" id="noise-section">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              SKILL CONVERGENCE
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            <span>Everyone Has Advice.</span>
            <br />
            <span>
              But What Does Your Career{' '}
              <span className="relative inline-block isolate">
                <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                  Actually Need?
                </span>
                <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[7px] sm:h-[9px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
              </span>
            </span>
          </h2>

          <div className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-base lg:text-lg w-full">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto px-1">
              {TOPIC_TAGS.map((tag, idx) => {
                const isFloat1 = idx % 2 === 0;
                const isSelected = activeTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(isSelected ? null : tag)}
                    className={`${
                      isFloat1 ? 'chip-float-1' : 'chip-float-2'
                    } px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#7C3AED] text-white border border-[#7C3AED] scale-105 shadow-glow-purple'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <p className="font-medium text-slate-800 break-words pt-1.5 font-['Outfit',sans-serif]">
              Instead of guessing which tools matter, a structured career readiness assessment and skill gap assessment show you exactly how to become job ready with demonstrable practical skills for graduates.
            </p>

            <p className="break-words font-['Outfit',sans-serif]">
              There is always something else you could learn online.
            </p>

            <p className="text-[#0F172A] font-semibold break-words font-['Outfit',sans-serif]">
              But trying to learn everything at once without targeted job ready skills leaves you with:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 w-full text-left">
            <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/70 border border-purple-200/90 shadow-2xs">
              <span className="text-xs font-headline font-bold text-[#7C3AED] block mb-1">
                Tutorial Fatigue
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Watching endless online video tutorials or collecting certificates, but freezing up when asked practical interview questions.
              </p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/70 border border-purple-200/90 shadow-2xs">
              <span className="text-xs font-headline font-bold text-[#7C3AED] block mb-1">
                Job Board Exhaustion
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Trying to learn 15 different tools at once because job postings list endless buzzwords, leaving you overwhelmed.
              </p>
            </div>
            <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/70 border border-purple-200/90 shadow-2xs">
              <span className="text-xs font-headline font-bold text-[#7C3AED] block mb-1">
                The Visa Clock Pressure
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                Wasting precious months of your post-study work visa revising textbooks rather than building what local companies actually hire for.
              </p>
            </div>
          </div>

          <div
            ref={revealRef}
            style={{
              transitionDelay: isVisible ? '150ms' : '0ms'
            }}
            className={`w-full my-2.5 sm:my-4 ${isVisible ? 'reveal-visible' : 'reveal-init'}`}
          >
            {/* Direct responsive presentation on mobile */}
            <div className="sm:hidden w-full">
              <SkillConvergenceVector />
            </div>

            {/* 3D Parallax Tilt container on tablet & desktop */}
            <div className="hidden sm:block">
              <ParallaxTiltCard
                maxTilt={4.5}
                perspective={1200}
                scaleOnHover={1.006}
                glareOpacity={0.12}
                theme="purple"
                className="rounded-2xl"
              >
                <div style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}>
                  <SkillConvergenceVector />
                </div>
              </ParallaxTiltCard>
            </div>
          </div>

          <SpotlightCard
            spotlightColor="rgba(190, 242, 100, 0.20)"
            borderColor="rgba(190, 242, 100, 0.95)"
            className={`w-full my-1 sm:my-2 p-5 sm:p-8 rounded-2xl bg-white border-2 border-[#BEF264] text-center shadow-md relative group hover:shadow-glow-lime hover:-translate-y-1 transition-all duration-300 ${
              isVisible ? 'reveal-visible' : 'reveal-init'
            }`}
          >
            <h3 className="font-headline text-base sm:text-xl font-bold text-[#0F172A] break-words">
              You Don't Need to Learn Everything.
              <br />
              You Just Need to Know What Local Employers{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Actually Look For.
              </span>
            </h3>
          </SpotlightCard>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl break-words px-2 sm:px-0 font-['Outfit',sans-serif]">
            Your Personalised Action Plan cuts through the internet noise and outlines the exact 2–3 practical proof points that get international graduates hired in your target country.
          </p>

          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={onScrollToEnquiry}
              className="h-11 w-full sm:w-auto px-6 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow-glow-purple transition-all duration-300 inline-flex items-center justify-center active:scale-95 group text-center cursor-pointer"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform font-headline">
                Submit an Enquiry
              </span>
              <span className="material-symbols-outlined text-base ml-1 transition-transform group-hover:translate-x-1 shrink-0">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
