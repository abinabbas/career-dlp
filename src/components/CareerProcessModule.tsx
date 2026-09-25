import React, { useState } from 'react';
import { PROGRESSION_STEPS, CYCLE_STEPS, CycleStep } from '../data/content';
import { StepVisualVector, EvidenceBridgeVector } from './vectors/CareerVectors';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpotlightCard } from './SpotlightCard';
import { SmoothHeightTransition } from './SmoothHeightTransition';

const STRENGTHS = [
  { name: 'University Degree', desc: 'Bachelor’s or Master’s degree completed abroad with solid academic foundations.' },
  { name: 'Job Ready Skills', desc: 'Essential skills for recent graduates that translate classroom theory into commercial impact.' },
  { name: 'Global Adaptability', desc: 'Courage to travel continents, navigate cultural transitions, and handle new environments.' },
  { name: 'Practical Skills for Graduates', desc: 'Real tools, datasets, and project implementations used by local tech teams.' },
  { name: 'Employability Skills for Graduates', desc: 'Commercial communication, project documentation, and workplace collaboration.' }
];

export const CareerProcessModule: React.FC = () => {
  const [activeProcessTab, setActiveProcessTab] = useState<'continuum' | 'applications'>('continuum');
  
  // Tab 1 state: Continuum
  const [selectedStepNumber, setSelectedStepNumber] = useState<string>('01');
  const activeStepIndex = PROGRESSION_STEPS.findIndex((s) => s.number === selectedStepNumber);
  const activeIndexSafe = activeStepIndex >= 0 ? activeStepIndex : 0;
  const progressPercent = Math.round(((activeIndexSafe + 1) / PROGRESSION_STEPS.length) * 100);
  const selectedStep = PROGRESSION_STEPS.find((s) => s.number === selectedStepNumber) || PROGRESSION_STEPS[0];

  // Tab 2 state: Applications
  const [activeSubTab, setActiveSubTab] = useState<'cycle' | 'experience'>('cycle');
  const [activeStepDetail, setActiveStepDetail] = useState<CycleStep | null>(null);
  const [activeStrength, setActiveStrength] = useState<string | null>(null);

  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const toggleStep = (step: CycleStep) => {
    setActiveStepDetail(activeStepDetail?.step === step.step ? null : step);
  };

  return (
    <section className="w-full py-10 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden" id="process-framework">
      {/* Anchor targets to preserve compatibility */}
      <div id="method" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div id="gap" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      <div id="application-realities" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              THE READINESS FRAMEWORK
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            <span>Bridging Your Degree to{' '}</span>
            <span className="relative inline-block isolate">
              <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Real-World Hiring.
              </span>
              <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed break-words px-2 sm:px-0 font-['Outfit',sans-serif]">
            Explore the path from foundational classroom learning to industry readiness, master essential job ready skills, and discover how to become job ready for local employers.
          </p>

          {/* Master Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8FF] border border-slate-200/90 shadow-inner mt-2">
            <button
              type="button"
              onClick={() => setActiveProcessTab('continuum')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-headline font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeProcessTab === 'continuum'
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              <span className="material-symbols-outlined text-base">stairs</span>
              <span>1. The Career Continuum</span>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 bg-white/20 rounded font-mono">4 Stages</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveProcessTab('applications')}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-headline font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeProcessTab === 'applications'
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#7C3AED]'
              }`}
            >
              <span className="material-symbols-outlined text-base">sync_saved_locally</span>
              <span>2. Application Reality Check</span>
              <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 bg-white/20 rounded font-mono">Cycle & Proof</span>
            </button>
          </div>
        </div>

        {/* TAB 1: THE CAREER CONTINUUM */}
        {activeProcessTab === 'continuum' && (
          <div className="max-w-4xl mx-auto w-full animate-fadeIn">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-card-elevated relative overflow-hidden">
              <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BEF264] opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BEF264]" />
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-headline text-slate-700">
                      Active Stage:{' '}
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

                <div className="relative w-full h-2.5 sm:h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/70 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/60 to-slate-100" />
                  <div className="absolute left-[25%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />
                  <div className="absolute left-[50%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />
                  <div className="absolute left-[75%] top-0 bottom-0 w-[1.5px] bg-slate-300 z-10 pointer-events-none" />

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#0047FF] to-[#BEF264] transition-all duration-500 relative overflow-hidden"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full animate-shine" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#BEF264] shadow-[0_0_10px_#BEF264] ring-2 ring-white/80" />
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
                        onClick={() => setSelectedStepNumber(s.number)}
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
                              isCur ? 'text-[#7C3AED]' : isPassed ? 'text-slate-700' : 'text-slate-400'
                            }`}
                          >
                            {s.number}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] sm:text-xs font-semibold truncate max-w-full font-['Outfit',sans-serif] ${
                            isCur ? 'text-[#7C3AED] font-bold' : isPassed ? 'text-slate-700' : 'text-slate-400'
                          }`}
                        >
                          {s.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile list view */}
              <div className="sm:hidden space-y-2">
                {PROGRESSION_STEPS.map((step) => {
                  const isSelected = selectedStepNumber === step.number;
                  const isAccent = step.isAccent;

                  return (
                    <div
                      key={step.number}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                        isSelected
                          ? 'border-[#7C3AED] bg-purple-50/40 shadow-xs ring-1 ring-[#7C3AED]/30'
                          : 'border-slate-200 bg-slate-50/70 hover:bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedStepNumber(step.number)}
                        className="w-full p-2.5 flex items-center justify-between gap-2.5 text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center font-headline font-bold text-[10px] shrink-0 ${
                              isSelected ? 'bg-[#7C3AED] text-white shadow-xs' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {step.number}
                          </span>
                          <span className={`text-xs font-bold font-headline truncate ${isSelected ? 'text-[#7C3AED]' : 'text-slate-800'}`}>
                            {step.title}
                          </span>
                        </div>
                        <span className={`material-symbols-outlined text-base transition-transform duration-200 text-slate-400 ${isSelected ? 'rotate-180 text-[#7C3AED]' : ''}`}>
                          expand_more
                        </span>
                      </button>

                      <SmoothHeightTransition isOpen={isSelected} duration={240}>
                        <div className="px-3 pb-3 pt-1 border-t border-purple-100/60 space-y-1.5">
                          <p className="text-xs text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
                            {step.explanation}
                          </p>
                          <div className="p-2 rounded-lg bg-white border border-purple-100 text-[11px]">
                            <span className="font-bold text-[#7C3AED] uppercase text-[10px] font-headline block mb-0.5">Example:</span>
                            <span className="text-slate-700 italic font-['Outfit',sans-serif]">"{step.example}"</span>
                          </div>
                        </div>
                      </SmoothHeightTransition>
                    </div>
                  );
                })}
              </div>

              {/* Desktop 4-Card Grid */}
              <div className="hidden sm:block">
                <div ref={revealRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
                  {PROGRESSION_STEPS.map((step, idx) => {
                    const isSelected = selectedStepNumber === step.number;
                    const isAccent = step.isAccent;

                    return (
                      <SpotlightCard
                        key={step.number}
                        theme={isAccent ? 'lime' : 'purple'}
                        onClick={() => setSelectedStepNumber(step.number)}
                        className={`rounded-xl transition-all duration-200 flex flex-col justify-between cursor-pointer p-3.5 text-center ${
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
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-headline font-bold text-xs mb-1.5 ${
                              isSelected
                                ? isAccent
                                  ? 'bg-[#BEF264] text-[#0F172A]'
                                  : 'bg-[#7C3AED] text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {step.number}
                          </div>
                          <h4
                            className={`font-headline text-xs sm:text-sm font-bold leading-tight mb-0.5 ${
                              isSelected && isAccent ? 'text-white' : 'text-[#0F172A]'
                            }`}
                          >
                            {step.title}
                          </h4>
                          <span
                            className={`text-[10px] font-['Outfit',sans-serif] ${
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

                {/* Active Step Details Panel */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7C3AED] shrink-0 shadow-2xs">
                      <StepVisualVector step={selectedStep.number} isAccent={selectedStep.isAccent} className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          Stage {selectedStep.number} Detail
                        </span>
                        <h5 className="font-headline font-bold text-sm text-[#0F172A]">{selectedStep.title} — {selectedStep.subtitle}</h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
                        {selectedStep.explanation}
                      </p>
                      <p className="text-xs text-slate-700 italic font-['Outfit',sans-serif] pt-1">
                        <strong className="text-[#7C3AED] not-italic font-semibold">Real-world example: </strong>
                        "{selectedStep.example}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATION REALITIES */}
        {activeProcessTab === 'applications' && (
          <div className="max-w-5xl mx-auto w-full animate-fadeIn">
            {/* Sub-tab pills */}
            <div className="flex justify-center mb-5">
              <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveSubTab('cycle')}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-headline font-bold transition-all cursor-pointer ${
                    activeSubTab === 'cycle'
                      ? 'bg-white text-[#7C3AED] shadow-xs'
                      : 'text-slate-600 hover:text-[#7C3AED]'
                  }`}
                >
                  The 5-Step Application Trap
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSubTab('experience')}
                  className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-headline font-bold transition-all cursor-pointer ${
                    activeSubTab === 'experience'
                      ? 'bg-white text-[#0047FF] shadow-xs'
                      : 'text-slate-600 hover:text-[#0047FF]'
                  }`}
                >
                  The "No Local Experience" Solution
                </button>
              </div>
            </div>

            {activeSubTab === 'cycle' ? (
              <div className="space-y-4">
                {/* 5-Step Cycle Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {CYCLE_STEPS.map((step, idx) => {
                    const isSelected = activeStepDetail?.step === step.step;

                    return (
                      <SpotlightCard
                        key={step.step}
                        theme={step.color === 'purple' ? 'purple' : step.color === 'blue' ? 'blue' : 'rose'}
                        onClick={() => toggleStep(step)}
                        className={`bg-[#FAF8FF] border border-slate-200/90 rounded-xl p-3.5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                          isSelected ? 'ring-2 ring-[#7C3AED] bg-white shadow-xs' : 'hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded font-mono ${
                                step.color === 'purple'
                                  ? 'bg-purple-100 text-[#7C3AED]'
                                  : step.color === 'blue'
                                  ? 'bg-blue-100 text-[#0047FF]'
                                  : 'bg-rose-100 text-rose-600'
                              }`}
                            >
                              Step {step.step}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">{step.step}/05</span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] font-headline mb-1.5 leading-tight">
                            {step.label}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-600 font-['Outfit',sans-serif] leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200/70 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400 font-medium">Stage {step.step}</span>
                          <span className={`font-bold flex items-center gap-0.5 ${idx === 4 ? 'text-rose-600' : 'text-[#7C3AED]'}`}>
                            {idx < 4 ? 'Next →' : '↻ Loops Back'}
                          </span>
                        </div>
                      </SpotlightCard>
                    );
                  })}
                </div>

                {/* Symmetrical Shift Comparison Box */}
                <div className="w-full max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs">
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto,1fr] items-center gap-3">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center sm:text-left">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-headline mb-0.5">
                        Common Student Trap
                      </div>
                      <p className="text-xs font-semibold text-slate-700 font-headline">“Why am I getting ghosted?”</p>
                      <span className="text-[11px] text-slate-500 font-['Outfit',sans-serif]">Submitting 300 more generic resumes.</span>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-[#7C3AED]">
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-purple-50/80 border border-purple-200 text-center sm:text-left">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] font-headline mb-0.5">
                        The Smart Move Abroad
                      </div>
                      <p className="text-xs font-bold text-[#0F172A] font-headline">“What proof does a hiring manager need?”</p>
                      <span className="text-[11px] text-slate-600 font-['Outfit',sans-serif]">Targeted projects that prove workplace capability.</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
                  {STRENGTHS.map((strength) => {
                    const isSelected = activeStrength === strength.name;
                    return (
                      <button
                        key={strength.name}
                        type="button"
                        onClick={() => setActiveStrength(isSelected ? null : strength.name)}
                        className={`px-3 py-1 rounded-full font-semibold text-xs transition-all cursor-pointer shadow-2xs ${
                          isSelected
                            ? 'bg-[#0047FF] text-white border border-[#0047FF]'
                            : 'bg-white border border-slate-200 text-[#0F172A] hover:border-[#0047FF]'
                        }`}
                      >
                        {strength.name}
                      </button>
                    );
                  })}
                </div>

                <div className="bg-[#FAF8FF] border border-slate-200 rounded-xl p-4 sm:p-5 text-center max-w-2xl mx-auto shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0047FF] flex items-center justify-center mx-auto mb-2 shadow-2xs">
                    <EvidenceBridgeVector className="w-6 h-6" />
                  </div>
                  <h4 className="font-headline font-bold text-sm text-[#0F172A] mb-1">
                    Translate Degrees Into Commercial Proof
                  </h4>
                  <p className="text-xs text-slate-600 font-['Outfit',sans-serif] leading-relaxed max-w-lg mx-auto">
                    {activeStrength
                      ? STRENGTHS.find((s) => s.name === activeStrength)?.desc
                      : 'Hiring managers don’t doubt your intelligence—they doubt whether you can deliver on day one without handholding. Real proof bridges this gap instantly.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
