import React, { useState } from 'react';
import { PROGRESSION_STEPS } from '../data/content';
import { StepVisualVector } from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { SmoothHeightTransition } from './SmoothHeightTransition';

export const ProgressionChainSection: React.FC = () => {
  const [selectedStepNumber, setSelectedStepNumber] = useState<string>('01');
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleStepClick = (stepNumber: string) => {
    setSelectedStepNumber(stepNumber);
  };

  const activeStepIndex = PROGRESSION_STEPS.findIndex((s) => s.number === selectedStepNumber);
  const activeIndexSafe = activeStepIndex >= 0 ? activeStepIndex : 0;
  const progressPercent = Math.round(((activeIndexSafe + 1) / PROGRESSION_STEPS.length) * 100);

  const selectedStep =
    PROGRESSION_STEPS.find((s) => s.number === selectedStepNumber) || PROGRESSION_STEPS[0];

  return (
    <section className="w-full py-12 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden" id="method">
      <div id="gap" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              THE CAREER CONTINUUM
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            <span>A Clear Path From Learning</span>
            <br />
            <span>
              To Real-World{' '}
              <span className="relative inline-block isolate">
                <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                  Career Success.
                </span>
                <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
              </span>
            </span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed break-words px-2 sm:px-0 font-['Outfit',sans-serif]">
            Every career grows in natural stages. Explore each step of the journey below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 w-full">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-card-elevated relative overflow-hidden">
            <div className="mb-5 sm:mb-7 pb-4 sm:pb-5 border-b border-slate-100 relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BEF264] opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#BEF264]" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-headline text-slate-700">
                    Continuum Progress:{' '}
                    <span className="text-[#7C3AED] font-bold">
                      {selectedStep.number} — {selectedStep.title}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-600 bg-slate-50 px-1.5 sm:px-2 py-0.5 rounded border border-slate-200">
                    Stage {selectedStepNumber} / 04
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#7C3AED] bg-purple-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-purple-200 flex items-center gap-1 shadow-xs">
                    <span className="material-symbols-outlined text-xs text-[#BEF264]">bolt</span>
                    <span>{progressPercent}% Active</span>
                  </span>
                </div>
              </div>

              <div className="relative w-full h-3 sm:h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/70 shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/60 to-slate-100" />
                <div className="absolute left-[25%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />
                <div className="absolute left-[50%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />
                <div className="absolute left-[75%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />

                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#0047FF] to-[#BEF264] transition-all duration-500 relative overflow-hidden"
                  style={{ width: `${progressPercent}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full animate-shine" />
                  <div className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#BEF264] to-white rounded-full electric-rail-packet pointer-events-none blur-[0.5px] shadow-[0_0_12px_#BEF264]" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#BEF264] shadow-[0_0_10px_#BEF264] ring-2 ring-white/80" />
                </div>
              </div>

              <div className="grid grid-cols-4 mt-2 px-0.5 text-center gap-1">
                {PROGRESSION_STEPS.map((s, idx) => {
                  const isCur = selectedStepNumber === s.number;
                  const isPassed = idx <= activeIndexSafe;

                  return (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => handleStepClick(s.number)}
                      className="group flex flex-col items-center cursor-pointer transition-transform active:scale-95 text-center focus:outline-none"
                    >
                      <div className="flex items-center gap-1 mb-0.5">
                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isCur
                              ? 'bg-[#BEF264] ring-2 ring-[#7C3AED] scale-125 shadow-[0_0_8px_#BEF264]'
                              : isPassed
                              ? 'bg-[#7C3AED]'
                              : 'bg-slate-300'
                          }`}
                        />
                        <span
                          className={`text-[9px] sm:text-xs font-bold font-headline transition-colors ${
                            isCur
                              ? 'text-[#7C3AED]'
                              : isPassed
                              ? 'text-slate-700'
                              : 'text-slate-400'
                          }`}
                        >
                          {s.number}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] sm:text-xs font-semibold truncate max-w-full font-['Outfit',sans-serif] ${
                          isCur
                            ? 'text-[#7C3AED] font-bold'
                            : isPassed
                            ? 'text-slate-700'
                            : 'text-slate-400'
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="sm:hidden space-y-2">
              {PROGRESSION_STEPS.map((step) => {
                const isSelected = selectedStepNumber === step.number;
                const isAccent = step.isAccent;

                return (
                  <div
                    key={step.number}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isSelected
                        ? isAccent
                          ? 'border-[#7C3AED] bg-[#FAF8FF] shadow-xs ring-1 ring-[#7C3AED]/30'
                          : 'border-[#7C3AED] bg-white shadow-xs ring-1 ring-[#7C3AED]/30'
                        : 'border-slate-200 bg-slate-50/70 hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleStepClick(step.number)}
                      className="w-full p-3 flex items-center justify-between gap-2.5 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-headline font-bold text-[10px] shrink-0 ${
                            isSelected
                              ? 'bg-[#7C3AED] text-white shadow-xs'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {step.number}
                        </span>

                        <div className="truncate">
                          <span className={`text-xs font-bold font-headline ${isSelected ? 'text-[#7C3AED]' : 'text-slate-800'}`}>
                            {step.title}
                          </span>
                          {!isSelected && (
                            <span className="text-[11px] text-slate-400 font-['Outfit',sans-serif] ml-2">
                              · {step.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {isAccent && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-100 text-[#7C3AED] font-bold">
                            Key
                          </span>
                        )}
                        <span
                          className={`material-symbols-outlined text-base transition-transform duration-200 text-slate-400 ${
                            isSelected ? 'rotate-180 text-[#7C3AED]' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </button>

                    <SmoothHeightTransition isOpen={isSelected} duration={260}>
                      <div className="px-3 pb-3 pt-1 border-t border-slate-100 space-y-2">
                        <p className="text-xs text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
                          {step.explanation}
                        </p>

                        <div className="p-2.5 rounded-lg bg-white border border-purple-100 text-[11px] space-y-1">
                          <span className="font-bold text-[#7C3AED] uppercase tracking-wide block text-[10px] font-headline">
                            Practical Example:
                          </span>
                          <span className="text-slate-700 italic font-['Outfit',sans-serif] leading-tight block">
                            "{step.example}"
                          </span>
                        </div>
                      </div>
                    </SmoothHeightTransition>
                  </div>
                );
              })}
            </div>

            <div className="hidden sm:block">
              <div
                ref={revealRef}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 relative z-10"
              >
                {PROGRESSION_STEPS.map((step, idx) => {
                  const isSelected = selectedStepNumber === step.number;
                  const isAccent = step.isAccent;

                  return (
                    <SpotlightCard
                      key={step.number}
                      theme={isAccent ? 'lime' : 'purple'}
                      style={{
                        transitionDelay: isVisible ? `${idx * 110}ms` : '0ms'
                      }}
                      onClick={() => handleStepClick(step.number)}
                      className={`rounded-xl transition-all duration-300 flex flex-col justify-between cursor-pointer p-4 text-center ${
                        isVisible ? 'reveal-visible' : 'reveal-init'
                      } ${
                        isSelected
                          ? isAccent
                            ? 'bg-[#7C3AED] text-white shadow-glow-purple ring-2 ring-[#BEF264]/80'
                            : 'bg-white border-2 border-[#7C3AED] shadow-sm ring-2 ring-[#7C3AED]/30'
                          : isAccent
                          ? 'bg-[#FAF8FF] border border-purple-300/80 hover:border-[#7C3AED]'
                          : 'bg-[#FAF8FF] border border-slate-200 hover:border-[#7C3AED] hover:bg-white'
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-headline font-bold text-xs mb-2 ${
                            isSelected
                              ? isAccent
                                ? 'bg-[#BEF264] text-[#0F172A]'
                                : 'bg-[#7C3AED] text-white'
                              : isAccent
                              ? 'bg-purple-100 text-[#7C3AED]'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {step.number}
                        </div>

                        <div className="my-1">
                          <StepVisualVector
                            step={step.number}
                            isAccent={isSelected && isAccent}
                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        <span
                          className={`font-headline font-bold text-sm tracking-wide ${
                            isSelected && isAccent ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`text-xs mt-0.5 ${
                            isSelected && isAccent ? 'text-purple-100' : 'text-slate-500'
                          }`}
                        >
                          {step.subtitle}
                        </span>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="bg-gradient-to-br from-[#FAF8FF] via-white to-purple-50/20 border border-purple-200/80 rounded-2xl p-5 shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    <div className="md:col-span-7 flex flex-col justify-between space-y-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="px-2 py-0.5 rounded bg-[#7C3AED] text-white font-headline text-xs font-bold">
                            STAGE {selectedStep.number}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-headline">
                            Stage Overview
                          </span>
                        </div>

                        <h4 className="text-base font-extrabold text-[#0F172A] font-headline">
                          {selectedStep.title}:{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                            {selectedStep.subtitle}
                          </span>
                        </h4>

                        <p className="text-xs text-slate-600 mt-2 leading-relaxed font-['Outfit',sans-serif]">
                          {selectedStep.explanation}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-5 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] font-headline flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">check_circle</span>
                          <span>Practical Example</span>
                        </span>
                        <p className="text-xs text-slate-700 italic font-['Outfit',sans-serif] pl-2 border-l-2 border-[#BEF264]">
                          "{selectedStep.example}"
                        </p>
                      </div>

                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                        <span className="text-slate-500">Key Outcome:</span>
                        <span className="font-bold text-[#0F172A]">Demonstrated Ability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto px-2">
          <p className="text-xs sm:text-sm font-medium text-slate-600 font-['Outfit',sans-serif]">
            Understanding where you are on this journey helps you take the next clear step with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};
