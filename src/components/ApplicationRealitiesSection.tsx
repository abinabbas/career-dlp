import React, { useState } from 'react';
import { CYCLE_STEPS, CycleStep } from '../data/content';
import { EvidenceBridgeVector } from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';

const STRENGTHS = [
  { name: 'University Degree', desc: 'Bachelor’s or Master’s degree completed abroad with solid academic foundations.' },
  { name: 'Course Projects', desc: 'Assignments, coursework labs, and group presentations from your semesters.' },
  { name: 'Global Adaptability', desc: 'Courage to travel continents, navigate cultural transitions, and handle new environments.' },
  { name: 'Hands-On Practice', desc: 'Practical projects, data exercises, or code written during your studies.' },
  { name: 'Modern Digital Tools', desc: 'Comfort with current software, tech tools, spreadsheets, and digital workflows.' }
];

export const ApplicationRealitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cycle' | 'experience'>('cycle');
  const [activeStepDetail, setActiveStepDetail] = useState<CycleStep | null>(null);
  const [activeStrength, setActiveStrength] = useState<string | null>(null);
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const toggleStep = (step: CycleStep) => {
    setActiveStepDetail(activeStepDetail?.step === step.step ? null : step);
  };

  return (
    <section className="w-full py-12 sm:py-20 bg-[#FAF8FF] border-b border-slate-100 relative overflow-hidden" id="application-realities">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit mb-3">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              ABROAD REALITY CHECK
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words mb-3">
            Sending 500 Generic Resumes Won’t{' '}
            <span className="relative inline-block isolate">
              <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Fix The Problem.
              </span>
              <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed break-words font-['Outfit',sans-serif] max-w-2xl mb-6">
            When you arrive abroad, people tell you to "just apply everywhere." But without local proof, more applications only bring more automated rejections. Here is how to break the cycle.
          </p>

          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('cycle')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-headline font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'cycle'
                  ? 'bg-white text-[#7C3AED] shadow-xs'
                  : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              <span className="material-symbols-outlined text-base">sync</span>
              <span>The 5-Step Application Trap</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-headline font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-white text-[#0047FF] shadow-xs'
                  : 'text-slate-600 hover:text-[#0047FF]'
              }`}
            >
              <span className="material-symbols-outlined text-base">history_edu</span>
              <span>The "No Local Experience" Solution</span>
            </button>
          </div>
        </div>

        {activeTab === 'cycle' && (
          <div className="w-full animate-fadeIn">
            {/* Header context bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 mb-4 max-w-5xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-headline">
                  5 Repetitive Stages
                </span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-headline">
                  The Application Trap
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-['Outfit',sans-serif]">
                <span className="material-symbols-outlined text-sm text-[#7C3AED]">sync</span>
                <span>Repeats until broken by practical evidence</span>
              </div>
            </div>

            {/* Mobile Swipe View (< sm) */}
            <div className="sm:hidden mb-6">
              <div className="flex items-center justify-between px-1 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-headline">
                  Swipe Cycle Cards
                </span>
                <span className="text-[11px] text-[#7C3AED] font-medium">Swipe cards →</span>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 scrollbar-none">
                {CYCLE_STEPS.map((step, idx) => {
                  const isSelected = activeStepDetail?.step === step.step;
                  const isRose = step.color === 'rose';

                  return (
                    <div
                      key={step.step}
                      onClick={() => toggleStep(step)}
                      className={`min-w-[270px] max-w-[290px] snap-center shrink-0 rounded-2xl border p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xs ${
                        isSelected
                          ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/20 bg-white shadow-sm'
                          : isRose
                          ? 'bg-rose-50/40 border-rose-200/80 hover:bg-white'
                          : 'bg-[#FAF8FF] border-slate-200/90 hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <span
                            className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md font-mono ${
                              step.color === 'purple'
                                ? 'bg-purple-100 text-[#7C3AED] border border-purple-200/80'
                                : step.color === 'blue'
                                ? 'bg-blue-100 text-[#0047FF] border border-blue-200/80'
                                : step.color === 'rose'
                                ? 'bg-rose-100 text-rose-600 border border-rose-200/80'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}
                          >
                            Stage {step.step}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400 font-mono">
                            {step.step}/05
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-[#0F172A] mb-2 font-headline min-h-[38px] flex items-center">
                          {step.label}
                        </h4>

                        <p className="text-xs text-slate-600 font-['Outfit',sans-serif] leading-relaxed">
                          {step.detail}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">Stage {step.step}</span>
                        <span
                          className={`font-bold flex items-center gap-0.5 ${
                            idx === 4 ? 'text-rose-600' : 'text-[#7C3AED]'
                          }`}
                        >
                          {idx < 4 ? 'Next Stage →' : '↻ Loops Back'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop & Tablet View (>= sm) */}
            <div className="hidden sm:block mb-6">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 w-full">
                {CYCLE_STEPS.map((step, idx) => {
                  const cycleClass = `cycle-item-${idx + 1}`;
                  const isSelected = activeStepDetail?.step === step.step;

                  return (
                    <SpotlightCard
                      key={step.step}
                      theme={step.color === 'purple' ? 'purple' : step.color === 'blue' ? 'blue' : 'rose'}
                      onClick={() => toggleStep(step)}
                      style={{
                        transitionDelay: isVisible ? `${idx * 90}ms` : '0ms'
                      }}
                      className={`w-full h-full ${cycleClass} bg-[#FAF8FF] border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 group shadow-xs cursor-pointer ${
                        step.color === 'rose' ? 'bg-rose-50/25' : ''
                      } ${
                        isSelected
                          ? 'ring-2 ring-[#7C3AED] shadow-md bg-white border-[#7C3AED]'
                          : 'hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex flex-col h-full w-full justify-between">
                        <div>
                          {/* Stage Badge & Index */}
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md font-mono tracking-wide ${
                                step.color === 'purple'
                                  ? 'bg-purple-100 text-[#7C3AED] border border-purple-200/80'
                                  : step.color === 'blue'
                                  ? 'bg-blue-100 text-[#0047FF] border border-blue-200/80'
                                  : step.color === 'rose'
                                  ? 'bg-rose-100 text-rose-600 border border-rose-200/80'
                                  : 'bg-slate-100 text-slate-700 border border-slate-200'
                              }`}
                            >
                              Stage {step.step}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 font-mono">
                              {step.step}/05
                            </span>
                          </div>

                          {/* Fixed Title Band to maintain strict horizontal alignment */}
                          <h4 className="text-sm sm:text-base font-bold text-[#0F172A] font-headline min-h-[44px] flex items-center justify-center text-center leading-snug mb-2.5">
                            {step.label}
                          </h4>

                          {/* Description */}
                          <p className="text-xs text-slate-600 font-['Outfit',sans-serif] leading-relaxed text-center sm:text-left">
                            {step.detail}
                          </p>
                        </div>

                        {/* Bottom Status / Flow Indicator */}
                        <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-medium">Stage {step.step}</span>
                          <span
                            className={`font-bold flex items-center gap-0.5 ${
                              idx === 4 ? 'text-rose-600' : 'text-[#7C3AED]'
                            }`}
                          >
                            {idx < 4 ? (
                              <>
                                <span>Next</span>
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                              </>
                            ) : (
                              <>
                                <span>Loops Back</span>
                                <span className="material-symbols-outlined text-xs">sync</span>
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>

            {/* Cycle loop reminder */}
            <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 text-xs font-semibold text-slate-500 font-headline text-center px-2">
              <span className="material-symbols-outlined text-sm text-[#7C3AED]">sync</span>
              <span>This loop repeats endlessly until you replace mass-applying with 2–3 real project proofs.</span>
            </div>

            {/* Symmetrical Shift Comparison Box */}
            <div className="w-full max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] items-center gap-3 sm:gap-4">
                {/* Left Card: The Common Reaction */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-center sm:text-left flex flex-col justify-center h-full">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-headline">
                      Common Student Trap
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 font-headline mb-1">
                    “Why am I getting ghosted on LinkedIn?”
                  </p>
                  <span className="text-xs text-slate-500 font-['Outfit',sans-serif]">
                    Leads to submitting 300 more resumes and losing hope.
                  </span>
                </div>

                {/* Center Transition Indicator */}
                <div className="flex items-center justify-center py-1 sm:py-0">
                  <div className="w-9 h-9 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-[#7C3AED] shadow-2xs">
                    <span className="material-symbols-outlined text-lg rotate-90 sm:rotate-0">
                      arrow_forward
                    </span>
                  </div>
                </div>

                {/* Right Card: The Strategic Shift */}
                <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 text-center sm:text-left flex flex-col justify-center h-full shadow-2xs">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C3AED] font-headline">
                      The Smart Move Abroad
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-[#0F172A] font-headline mb-1">
                    “What proof does a local manager want?”
                  </p>
                  <span className="text-xs text-slate-600 font-['Outfit',sans-serif]">
                    Leads to targeted projects that make interviewers say yes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="w-full animate-fadeIn">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto mb-6 px-1">
              {STRENGTHS.map((strength) => {
                const isSelected = activeStrength === strength.name;
                return (
                  <button
                    key={strength.name}
                    type="button"
                    onClick={() => setActiveStrength(isSelected ? null : strength.name)}
                    className={`px-3 py-1 sm:py-1.5 rounded-full font-semibold text-xs transition-all cursor-pointer shadow-xs ${
                      isSelected
                        ? 'bg-[#0047FF] text-white border border-[#0047FF] shadow-xs scale-105'
                        : 'bg-[#FAF8FF] border border-slate-200 text-[#0F172A] hover:border-[#0047FF] hover:bg-white'
                    }`}
                  >
                    {strength.name}
                  </button>
                );
              })}
            </div>

            {activeStrength && (
              <div className="max-w-xl mx-auto mb-5 p-3 bg-blue-50/80 border border-blue-200/80 rounded-xl text-center text-xs text-slate-700 animate-fadeIn">
                <span className="font-semibold text-[#0047FF]">{activeStrength}: </span>
                {STRENGTHS.find((s) => s.name === activeStrength)?.desc}
              </div>
            )}

            <div className="max-w-3xl mx-auto mb-6 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between px-1 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-headline text-slate-700">
                    The Career Transition Framework
                  </h4>
                </div>
                <span className="text-[10px] font-bold text-[#0047FF] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-headline">
                  Evidence Bridge
                </span>
              </div>
              <EvidenceBridgeVector />
            </div>

            <div className="max-w-3xl mx-auto bg-[#FAF8FF] border border-slate-200/90 rounded-2xl p-4 sm:p-6 text-center shadow-xs">
              <h4 className="font-headline text-sm sm:text-base font-bold text-[#0F172A] mb-1">
                "Experience" Doesn't Have to Mean{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                  Years in an Office.
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mb-3 font-['Outfit',sans-serif]">
                When an employer sees 2 solid, well-explained case studies that solve their everyday business problems, they stop asking for "3 years of local experience."
              </p>

              <div className="flex items-center justify-center gap-1.5 sm:gap-3 font-headline font-bold text-xs sm:text-sm text-[#0F172A] pt-2 border-t border-slate-200/80">
                <span className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
                  YOUR DEGREE
                </span>
                <span className="text-[#0047FF] font-bold">→</span>
                <span className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">
                  REAL PROJECTS
                </span>
                <span className="text-[#7C3AED] font-bold">→</span>
                <span className="px-2.5 sm:px-3 py-1 bg-[#7C3AED] text-white rounded-lg shadow-xs">
                  INTERVIEW OFFERS
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
