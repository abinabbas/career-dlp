import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';

interface SystemPillarsSectionProps {
  onScrollToEnquiry: () => void;
}

export const SystemPillarsSection: React.FC<SystemPillarsSectionProps> = ({
  onScrollToEnquiry
}) => {
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const scrollToChallenge = () => {
    const el = document.getElementById('challenge');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onScrollToEnquiry();
    }
  };

  return (
    <section
      id="pillars"
      className="relative py-12 sm:py-20 md:py-24 bg-white text-[#0F172A] overflow-hidden border-b border-slate-100"
    >
      <div id="the-inflection-point" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-purple-100/35 rounded-full blur-[90px]" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={revealRef}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-[#7C3AED] text-xs font-headline font-bold tracking-widest uppercase mb-3 sm:mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            <span>HOW WE HELP YOU</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold text-[#0F172A] mb-3 sm:mb-4 leading-tight">
            Moving from graduation to{' '}
            <span className="flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              your first real job.
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto font-body leading-relaxed mb-6 sm:mb-8">
            As an international student, getting your degree is a proud milestone. But finding a company to hire you in a new country requires a simple shift in how you present yourself.
          </p>

          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-[8vw] scroll-px-[8vw] gap-3 pb-2 sm:mx-0 sm:px-0 sm:scroll-px-0 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-4 text-left scrollbar-none mb-8 sm:mb-10">
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.10)"
              borderColor="rgba(124, 58, 237, 0.7)"
              className="w-[80vw] max-w-[300px] shrink-0 snap-center sm:min-w-0 sm:w-auto sm:flex-1 p-4 sm:p-5 rounded-xl bg-white border border-purple-100 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-md bg-purple-100 text-[#7C3AED] flex items-center justify-center text-xs font-headline font-bold">
                  01
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] font-headline">
                  A job you are proud to tell family about
                </h3>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs font-body leading-relaxed pl-8">
                Where you use what you studied, earn a good salary, and feel respected.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(0, 71, 255, 0.10)"
              borderColor="rgba(0, 71, 255, 0.7)"
              className="w-[80vw] max-w-[300px] shrink-0 snap-center sm:min-w-0 sm:w-auto sm:flex-1 p-4 sm:p-5 rounded-xl bg-white border border-blue-100 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-md bg-blue-100 text-[#0047FF] flex items-center justify-center text-xs font-headline font-bold">
                  02
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] font-headline">
                  Peace of mind with your visa timeline
                </h3>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs font-body leading-relaxed pl-8">
                Clear deadlines and fast progress so you don't panic as your post-study visa months pass.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(190, 242, 100, 0.22)"
              borderColor="rgba(190, 242, 100, 0.95)"
              className="w-[80vw] max-w-[300px] shrink-0 snap-center sm:min-w-0 sm:w-auto sm:flex-1 p-4 sm:p-5 rounded-xl bg-white border border-purple-100 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded-md bg-purple-100 text-[#7C3AED] flex items-center justify-center text-xs font-headline font-bold">
                  03
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] font-headline">
                  Confidence when talking to managers
                </h3>
              </div>
              <p className="text-slate-500 text-[11px] sm:text-xs font-body leading-relaxed pl-8">
                Knowing how local hiring works and speaking naturally about your projects in interviews.
              </p>
            </SpotlightCard>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-50/90 via-white to-blue-50/80 border border-purple-200/90 text-center shadow-xs">
            <p className="text-[11px] uppercase tracking-widest text-[#7C3AED] font-headline font-bold mb-1.5">
              THE SIMPLE TRUTH
            </p>
            <blockquote className="text-sm sm:text-lg md:text-xl font-headline font-semibold text-[#0F172A] leading-snug">
              “Companies don’t hire you for the marks on your transcript.{' '}
              <span className="flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF] font-bold">
                They hire you when they can clearly see you can do the job.
              </span>”
            </blockquote>
          </div>
        </div>

        <div
          id="cta-section"
          className="relative py-8 sm:py-14 px-5 sm:px-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-200/90 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/40 text-center shadow-xs mt-8 sm:mt-12"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-[10px] sm:text-xs font-headline font-bold text-[#7C3AED] tracking-widest uppercase shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>THE BIG GOAL</span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Turn your degree into career traction. <br className="hidden sm:inline" />
              <span className="flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Build the career you came here for.
              </span>
            </h3>

            <p className="text-slate-600 text-xs sm:text-base font-body leading-relaxed max-w-lg mx-auto">
              Stop guessing what recruiters want. Take our free career readiness assessment, master in-demand job ready skills, and build the practical skills for graduates that land interviews.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={scrollToChallenge}
                className="h-10 sm:h-11 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-headline font-bold text-xs sm:text-sm shadow-sm hover:shadow-glow-purple transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer w-full sm:w-auto"
              >
                <span>Common Problems Graduates Face</span>
                <span className="material-symbols-outlined text-base text-[#BEF264]">arrow_forward</span>
              </button>

              <button
                type="button"
                onClick={onScrollToEnquiry}
                className="h-10 sm:h-11 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#7C3AED] font-headline font-semibold text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all duration-200 active:scale-95 flex items-center justify-center gap-1 cursor-pointer w-full sm:w-auto"
              >
                <span>Free Career Readiness Assessment</span>
                <span className="material-symbols-outlined text-sm text-[#7C3AED]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
