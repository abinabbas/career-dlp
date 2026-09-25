import React from 'react';

interface FinalCTAProps {
  onScrollToEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToEnquiry }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5 sm:gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              ACCELERATE YOUR JOURNEY
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            <span>Your Education Was a Major Investment.</span>
            <br />
            <span>
              Make Sure You Know{' '}
              <span className="relative inline-block isolate">
                <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                  What Comes Next.
                </span>
                <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[7px] sm:h-[9px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
              </span>
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl break-words px-2 sm:px-0">
            Understand where you stand, identify what may be missing and focus your effort on the areas that matter most for your next career step.
          </p>

          <div className="w-full py-3 sm:py-4 px-3 sm:px-6 rounded-2xl bg-[#FAF8FF] border border-slate-200 text-xs sm:text-sm font-bold font-headline text-[#0F172A] tracking-wider flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 shadow-xs">
            <span className="seq-step-1 px-2 sm:px-2.5 py-1 rounded-md transition-all">
              ASSESS
            </span>
            <span className="text-[#7C3AED]">→</span>
            <span className="seq-step-2 px-2 sm:px-2.5 py-1 rounded-md transition-all">
              IDENTIFY
            </span>
            <span className="text-[#0047FF]">→</span>
            <span className="seq-step-3 px-2 sm:px-2.5 py-1 rounded-md transition-all">
              PRIORITISE
            </span>
            <span className="text-[#7C3AED]">→</span>
            <span className="seq-step-4 px-2 sm:px-2.5 py-1 rounded-md text-[#7C3AED] bg-purple-50 transition-all shadow-xs border border-purple-200/60">
              BUILD
            </span>
          </div>

          <div className="pt-2 w-full flex justify-center">
            <button
              type="button"
              onClick={onScrollToEnquiry}
              className="h-12 w-full sm:w-auto px-6 sm:px-8 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-glow-purple transition-all duration-300 inline-flex items-center justify-center active:scale-95 group animate-shine text-center whitespace-nowrap cursor-pointer"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform duration-300 font-headline">
                Enquire Now — Speak with an Advisor
              </span>
              <span className="material-symbols-outlined text-lg ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0">
                arrow_forward
              </span>
            </button>
          </div>

          <p className="text-xs font-semibold text-slate-500 break-words px-2">
            Career Readiness Score + Skill Gap Analysis + Personalised Skill Roadmap
          </p>
        </div>
      </div>
    </section>
  );
};
