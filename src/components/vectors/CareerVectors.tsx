import React from 'react';

/**
 * Career Evidence Bridge Vector
 * Illustrates the transition across the gap between Academic Qualifications
 * and Industry Employability via practical projects and evidence.
 */
export const EvidenceBridgeVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* MOBILE VIEW (sm:hidden): Vertical Step & Milestone Bridge */}
      <div className="block sm:hidden space-y-3.5">
        {/* Foundation Card */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/90 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] font-headline bg-white px-2 py-0.5 rounded-full border border-purple-200">
              Where You Start
            </span>
            <span className="text-xs font-bold text-slate-400 font-headline">01</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-lg">school</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm text-[#0F172A]">
                Academic Qualification
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-['Outfit',sans-serif]">
                Theory, coursework, research, and degree certifications. Strong foundational knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* The Connector: The Experience Bridge */}
        <div className="relative pl-6 py-2 border-l-2 border-dashed border-[#7C3AED]/40 ml-5 space-y-3">
          <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-2 border-[#7C3AED] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-purple-200 text-[#7C3AED] text-[11px] font-bold font-headline shadow-2xs">
            <span className="material-symbols-outlined text-sm">construction</span>
            <span>The Evidence Bridge (What Employers Look For)</span>
          </div>

          {/* 3 Milestone Badges */}
          <div className="grid grid-cols-1 gap-2">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold text-[10px]">
                ✓
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">
                  Practical Applied Projects
                </span>
                <span className="text-[11px] text-slate-500 font-['Outfit',sans-serif]">
                  Real problem solving instead of toy datasets
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-100 text-[#0047FF] flex items-center justify-center font-bold text-[10px]">
                ✓
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">
                  Commercial Case Studies
                </span>
                <span className="text-[11px] text-slate-500 font-['Outfit',sans-serif]">
                  Tangible proof of business value & delivery
                </span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-emerald-100 text-[#10B981] flex items-center gap-2.5 shadow-2xs">
              <span className="w-6 h-6 rounded-md bg-emerald-100 text-[#10B981] flex items-center justify-center font-bold text-[10px]">
                ✓
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F172A] block">
                  Targeted Portfolio Match
                </span>
                <span className="text-[11px] text-slate-500 font-['Outfit',sans-serif]">
                  Aligned specifically with target job descriptions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Destination Card */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/90 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] font-headline bg-white px-2 py-0.5 rounded-full border border-emerald-200">
              The Goal
            </span>
            <span className="text-xs font-bold text-emerald-600 font-headline">02</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-lg">verified</span>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm text-[#0F172A]">
                Job-Ready Employability
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-['Outfit',sans-serif]">
                Verified evidence, standout portfolio, interview confidence, and hiring manager alignment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP / TABLET VIEW: Architectural Visual Bridge */}
      <div className="hidden sm:block relative bg-[#FAF8FF] border border-slate-200/80 rounded-2xl p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 font-headline">
              The Career Transition Framework
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" /> Academic
            </span>
            <span className="text-slate-300">→</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0047FF]" /> Practical Evidence
            </span>
            <span className="text-slate-300">→</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Employability
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 items-stretch relative z-10">
          {/* Left Tower: Qualification */}
          <div className="col-span-3 p-4 rounded-xl bg-white border border-purple-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center mb-3 shadow-xs">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] font-headline">
                Stage 01
              </span>
              <h4 className="font-headline font-bold text-sm text-[#0F172A] mt-0.5">
                Qualification
              </h4>
              <ul className="mt-2.5 space-y-1 text-xs text-slate-600 font-['Outfit',sans-serif]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" /> Academic Theories
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" /> Coursework & Exams
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#7C3AED]" /> Degree Credentials
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-400">
              Theoretical Foundation
            </div>
          </div>

          {/* Center Span: The Experience Bridge */}
          <div className="col-span-6 flex flex-col justify-between px-2 py-1">
            <div className="text-center mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-purple-200 text-[#7C3AED] text-xs font-bold font-headline shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-ping" />
                The Experience Bridge
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 my-auto">
              <div className="p-3 rounded-xl bg-white border border-purple-200/80 shadow-xs hover:border-[#7C3AED] transition-all text-center group">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center mx-auto mb-1.5">
                  <span className="material-symbols-outlined text-base">code</span>
                </div>
                <span className="text-[11px] font-bold text-[#0F172A] block font-headline">
                  Practical
                </span>
                <span className="text-[10px] text-slate-500 font-['Outfit',sans-serif]">
                  Real Projects
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-blue-200/80 shadow-xs hover:border-[#0047FF] transition-all text-center group">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0047FF] flex items-center justify-center mx-auto mb-1.5">
                  <span className="material-symbols-outlined text-base">assessment</span>
                </div>
                <span className="text-[11px] font-bold text-[#0F172A] block font-headline">
                  Evidence
                </span>
                <span className="text-[10px] text-slate-500 font-['Outfit',sans-serif]">
                  Case Studies
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-emerald-200/80 shadow-xs hover:border-[#10B981] transition-all text-center group">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center mx-auto mb-1.5">
                  <span className="material-symbols-outlined text-base">folder_special</span>
                </div>
                <span className="text-[11px] font-bold text-[#0F172A] block font-headline">
                  Portfolio
                </span>
                <span className="text-[10px] text-slate-500 font-['Outfit',sans-serif]">
                  Job Alignment
                </span>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7C3AED] via-[#0047FF] to-[#10B981] w-full" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1.5 px-1 font-headline">
                <span>Degree Alone</span>
                <span className="text-[#0047FF]">Evidence Applied</span>
                <span className="text-[#10B981]">Job Ready</span>
              </div>
            </div>
          </div>

          {/* Right Tower: Employability */}
          <div className="col-span-3 p-4 rounded-xl bg-white border border-emerald-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#10B981] text-white flex items-center justify-center mb-3 shadow-xs">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981] font-headline">
                Stage 02
              </span>
              <h4 className="font-headline font-bold text-sm text-[#0F172A] mt-0.5">
                Job-Ready Role
              </h4>
              <ul className="mt-2.5 space-y-1 text-xs text-slate-600 font-['Outfit',sans-serif]">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#10B981]" /> Commercial Evidence
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#10B981]" /> Hiring Alignment
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#10B981]" /> Standout Interviews
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] font-medium text-emerald-600">
              Commercial Capability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkillConvergenceVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* MOBILE VIEW (sm:hidden): Premium vertical convergence transformation pipeline */}
      <div className="block sm:hidden w-full space-y-3.5 text-left">
        {/* Top: The Noise (Scattered Effort) */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/60 via-white to-slate-50 border border-rose-200/80 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-rose-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 font-headline">
                SCATTERED EFFORT & NOISE
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-rose-500 bg-rose-100/70 px-2 py-0.5 rounded-full">
              Common Trap
            </span>
          </div>

          <p className="text-xs text-slate-600 font-['Outfit',sans-serif] leading-relaxed mb-3">
            Without local hiring insights, graduates spread their energy across endless distractions:
          </p>

          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-rose-200/60 shadow-2xs">
              <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0">✕</span>
              <span className="text-xs font-medium text-slate-700 font-['Outfit',sans-serif]">Generic Courses & Certificates</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-rose-200/60 shadow-2xs">
              <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0">✕</span>
              <span className="text-xs font-medium text-slate-700 font-['Outfit',sans-serif]">100+ Blind Mass Applications</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-rose-200/60 shadow-2xs">
              <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0">✕</span>
              <span className="text-xs font-medium text-slate-700 font-['Outfit',sans-serif]">Keyword Stuffing on Generic CVs</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-rose-200/60 shadow-2xs">
              <span className="w-5 h-5 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold shrink-0">✕</span>
              <span className="text-xs font-medium text-slate-700 font-['Outfit',sans-serif]">Conflicting Social Media Advice</span>
            </div>
          </div>
        </div>

        {/* Middle: The Diagnostic Filter Prism */}
        <div className="flex flex-col items-center justify-center py-1 relative">
          <div className="w-0.5 h-4 bg-gradient-to-b from-rose-300 to-[#7C3AED]" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-white to-blue-50 border-2 border-[#7C3AED] shadow-sm text-xs font-headline font-bold text-[#7C3AED]">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
            <span className="material-symbols-outlined text-base text-[#7C3AED]">filter_alt</span>
            <span>Datameris Diagnostic Filter</span>
            <span className="material-symbols-outlined text-sm text-[#0047FF]">arrow_downward</span>
          </div>

          <div className="w-0.5 h-4 bg-gradient-to-b from-[#7C3AED] to-[#BEF264]" />
        </div>

        {/* Bottom: The Focused Trajectory */}
        <div className="p-4 rounded-2xl bg-[#0F172A] text-white border-2 border-[#BEF264]/70 shadow-md relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BEF264] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#BEF264] font-headline">
                FOCUSED CAREER TRAJECTORY
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#0F172A] bg-[#BEF264] px-2 py-0.5 rounded-full">
              Hiring Ready
            </span>
          </div>

          <h4 className="font-headline font-bold text-sm text-white mb-2">
            The 3 Verified Proof Points That Win Job Offers
          </h4>

          <div className="space-y-2">
            <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
              <span className="w-5 h-5 rounded-md bg-[#BEF264]/20 text-[#BEF264] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-xs font-bold text-white block">Commercial Project Evidence</strong>
                <span className="text-[11px] text-slate-300 font-['Outfit',sans-serif] leading-tight block">
                  Proves you can deliver real work from day one without hand-holding.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
              <span className="w-5 h-5 rounded-md bg-[#BEF264]/20 text-[#BEF264] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-xs font-bold text-white block">Visa Timeline Milestones</strong>
                <span className="text-[11px] text-slate-300 font-['Outfit',sans-serif] leading-tight block">
                  Targeted milestones so you don't burn precious post-study work months.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
              <span className="w-5 h-5 rounded-md bg-[#BEF264]/20 text-[#BEF264] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-xs font-bold text-white block">Interview Articulation</strong>
                <span className="text-[11px] text-slate-300 font-['Outfit',sans-serif] leading-tight block">
                  Speaking confidently about local workflow standards and tools.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-['Outfit',sans-serif]">
            <span>Cuts 4–6 months of wasted time</span>
            <span className="text-[#BEF264] font-semibold">100% Practical</span>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (hidden sm:block): Full Prism Vector Diagram */}
      <div className="hidden sm:flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 760 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-full select-none"
          aria-label="Infographic vector illustrating market noise converging through Datameris diagnostic prism into a focused career roadmap"
        >
          <defs>
            <linearGradient id="noiseGrad1" x1="40" y1="40" x2="330" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <linearGradient id="noiseGrad2" x1="40" y1="120" x2="330" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0047FF" />
            </linearGradient>

            <linearGradient id="noiseGrad3" x1="40" y1="200" x2="330" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#BEF264" />
            </linearGradient>

            <linearGradient id="focusedBeam" x1="430" y1="120" x2="700" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#0047FF" />
              <stop offset="100%" stopColor="#BEF264" />
            </linearGradient>

            <linearGradient id="prismGrad" x1="330" y1="40" x2="430" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAF5FF" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EDE9FE" />
            </linearGradient>
          </defs>

          <rect x="10" y="10" width="740" height="220" rx="16" fill="#FAF8FF" stroke="#E2E8F0" strokeWidth="1" />

          {/* Noise streams */}
          <g>
            <path d="M50 45 C150 45, 230 100, 340 115" stroke="url(#noiseGrad1)" strokeWidth="2.5" strokeDasharray="6 4" />
            <rect x="50" y="32" width="125" height="26" rx="13" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="63" cy="45" r="4" fill="#94A3B8" />
            <text x="74" y="49" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="600" fill="#64748B">
              Generic Courses
            </text>

            <path d="M50 85 C150 85, 230 110, 340 120" stroke="url(#noiseGrad2)" strokeWidth="2.5" strokeDasharray="6 4" />
            <rect x="50" y="72" width="135" height="26" rx="13" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="63" cy="85" r="4" fill="#94A3B8" />
            <text x="74" y="89" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="600" fill="#64748B">
              100+ Unfocused Apps
            </text>

            <path d="M50 155 C150 155, 230 130, 340 120" stroke="url(#noiseGrad2)" strokeWidth="2.5" strokeDasharray="6 4" />
            <rect x="50" y="142" width="130" height="26" rx="13" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="63" cy="155" r="4" fill="#94A3B8" />
            <text x="74" y="159" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="600" fill="#64748B">
              Resume Keywords
            </text>

            <path d="M50 195 C150 195, 230 140, 340 125" stroke="url(#noiseGrad3)" strokeWidth="2.5" strokeDasharray="6 4" />
            <rect x="50" y="182" width="140" height="26" rx="13" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <circle cx="63" cy="195" r="4" fill="#94A3B8" />
            <text x="74" y="199" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="600" fill="#64748B">
              Conflicting Advice
            </text>

            <text x="50" y="24" fontFamily="Hanken Grotesk, sans-serif" fontSize="11" fontWeight="800" fill="#94A3B8" letterSpacing="1">
              SCATTERED EFFORT & NOISE
            </text>
          </g>

          {/* Prism */}
          <g>
            <polygon
              points="380,35 435,120 380,205 325,120"
              fill="url(#prismGrad)"
              stroke="#7C3AED"
              strokeWidth="2.5"
            />
            <line x1="380" y1="35" x2="380" y2="205" stroke="#7C3AED" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
            <line x1="325" y1="120" x2="435" y2="120" stroke="#0047FF" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

            <circle cx="380" cy="120" r="16" fill="#7C3AED" />
            <circle cx="380" cy="120" r="8" fill="#BEF264" />

            <text x="380" y="222" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif" fontSize="10" fontWeight="800" fill="#7C3AED" letterSpacing="0.5">
              LAUNCHPAD DIAGNOSTIC
            </text>
          </g>

          {/* Beam */}
          <g>
            <path
              d="M435 120 L660 120"
              stroke="url(#focusedBeam)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M435 120 L660 120"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path d="M480 100 Q500 120 480 140" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M540 92 Q565 120 540 148" stroke="#0047FF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <path d="M600 85 Q630 120 600 155" stroke="#BEF264" strokeWidth="2.5" strokeLinecap="round" />

            <g>
              <rect x="625" y="80" width="115" height="80" rx="14" fill="#0F172A" stroke="#BEF264" strokeWidth="2" />
              <circle cx="682" cy="108" r="14" fill="#BEF264" />
              <path d="M678 108L681 111L686 105" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
              <text x="682" y="138" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif" fontSize="11" fontWeight="800" fill="#FFFFFF">
                JOB READINESS
              </text>
              <text x="682" y="151" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="9.5" fontWeight="600" fill="#BEF264">
                Clear Next Steps
              </text>
            </g>

            <text x="470" y="24" fontFamily="Hanken Grotesk, sans-serif" fontSize="11" fontWeight="800" fill="#0047FF" letterSpacing="1">
              TARGETED CLEAR ROADMAP
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export const DiagnosticScorecardVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="160" height="100" rx="10" fill="#FAF8FF" stroke="#DDD6FE" strokeWidth="1.5" />
      <circle cx="45" cy="50" r="28" stroke="#E2E8F0" strokeWidth="5" />
      <circle
        cx="45"
        cy="50"
        r="28"
        stroke="#7C3AED"
        strokeWidth="5"
        strokeDasharray="175"
        strokeDashoffset="42"
        strokeLinecap="round"
        transform="rotate(-90 45 50)"
      />
      <text x="45" y="47" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif" fontWeight="800" fontSize="12" fill="#0F172A">
        82%
      </text>
      <text x="45" y="58" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="7" fontWeight="600" fill="#7C3AED">
        SCORE
      </text>

      <g>
        <rect x="88" y="26" width="55" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="88" y="26" width="46" height="5" rx="2.5" fill="#7C3AED" />

        <rect x="88" y="44" width="55" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="88" y="44" width="38" height="5" rx="2.5" fill="#0047FF" />

        <rect x="88" y="62" width="55" height="5" rx="2.5" fill="#E2E8F0" />
        <rect x="88" y="62" width="48" height="5" rx="2.5" fill="#10B981" />

        <circle cx="82" cy="28.5" r="2.5" fill="#7C3AED" />
        <circle cx="82" cy="46.5" r="2.5" fill="#0047FF" />
        <circle cx="82" cy="64.5" r="2.5" fill="#10B981" />
      </g>
      <text x="88" y="82" fontFamily="Hanken Grotesk, sans-serif" fontSize="7.5" fontWeight="700" fill="#64748B">
        DIAGNOSTIC AUDIT
      </text>
    </svg>
  );
};

export const RoadmapTrajectoryVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="160" height="100" rx="10" fill="#FAF8FF" stroke="#BFDBFE" strokeWidth="1.5" />
      <path
        d="M20 70 C50 70, 60 35, 85 45 C110 55, 120 25, 140 25"
        stroke="#0047FF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 70 C50 70, 60 35, 85 45 C110 55, 120 25, 140 25"
        stroke="#93C5FD"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <circle cx="25" cy="69" r="6" fill="white" stroke="#0047FF" strokeWidth="2" />
      <circle cx="25" cy="69" r="2.5" fill="#0047FF" />

      <circle cx="85" cy="45" r="6" fill="white" stroke="#7C3AED" strokeWidth="2" />
      <circle cx="85" cy="45" r="2.5" fill="#7C3AED" />

      <circle cx="140" cy="25" r="7" fill="#10B981" stroke="white" strokeWidth="2" />
      <path d="M137 25L139 27L143 23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      <text x="25" y="86" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="7" fontWeight="600" fill="#64748B">
        Start
      </text>
      <text x="85" y="62" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="7" fontWeight="600" fill="#7C3AED">
        Priority
      </text>
      <text x="140" y="42" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="7" fontWeight="700" fill="#10B981">
        Hired
      </text>
    </svg>
  );
};

export const PortfolioBlueprintVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="160" height="100" rx="10" fill="#FAF8FF" stroke="#DDD6FE" strokeWidth="1.5" />
      <rect x="18" y="16" width="124" height="68" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="18" y="16" width="124" height="14" rx="6" fill="#F1F5F9" />
      <circle cx="26" cy="23" r="2.5" fill="#EF4444" />
      <circle cx="33" cy="23" r="2.5" fill="#F59E0B" />
      <circle cx="40" cy="23" r="2.5" fill="#10B981" />
      <text x="50" y="25" fontFamily="monospace" fontSize="6.5" fill="#64748B">
        project-brief.ts
      </text>

      <line x1="26" y1="40" x2="80" y2="40" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="48" x2="105" y2="48" stroke="#0047FF" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="26" y1="56" x2="65" y2="56" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="64" x2="90" y2="64" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

      <circle cx="118" cy="56" r="14" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.5" />
      <path d="M112 56L116 60L124 52" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <text x="118" y="77" textAnchor="middle" fontFamily="Hanken Grotesk, sans-serif" fontSize="6.5" fontWeight="800" fill="#7C3AED">
        EVIDENCE
      </text>
    </svg>
  );
};

export const RadarFitVector: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[320px] select-none"
        aria-label="Interactive radar chart comparing academic coursework with market hiring expectations"
      >
        <defs>
          <radialGradient id="radarCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>

          {/* Radar sweep beam gradient */}
          <linearGradient id="radarBeamGrad" x1="0%" y1="100%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.32" />
          </linearGradient>

          {/* Clip path to bound radar scan within outer ring */}
          <clipPath id="radarOuterBoundary">
            <circle cx="180" cy="112" r="62" />
          </clipPath>
        </defs>

        {/* Concentric rings */}
        <circle cx="180" cy="112" r="62" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="180" cy="112" r="42" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="180" cy="112" r="22" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="180" cy="112" r="62" fill="url(#radarCenterGlow)" />

        {/* Sonar Expanding Pulse Ring 1 (Purple - Academic profile) */}
        <circle cx="180" cy="112" r="8" fill="none" stroke="#7C3AED">
          <animate attributeName="r" values="8; 62" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.75; 0" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-width" values="1.8; 0.5" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Sonar Expanding Pulse Ring 2 (Emerald - Market requirements) */}
        <circle cx="180" cy="112" r="8" fill="none" stroke="#10B981">
          <animate attributeName="r" values="8; 62" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.65; 0" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-width" values="1.8; 0.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Axis lines - stopping with clear margin before labels */}
        <line x1="180" y1="46" x2="180" y2="178" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="114" y1="112" x2="246" y2="112" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="136" y1="68" x2="224" y2="156" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="136" y1="156" x2="224" y2="68" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />

        {/* Academic focus polygon (heavy on Classroom Theory, low on practical/tools) */}
        <polygon
          points="180,56 216,112 180,132 142,112"
          fill="#7C3AED"
          fillOpacity="0.22"
          stroke="#7C3AED"
          strokeWidth="2"
        >
          <animate attributeName="fill-opacity" values="0.22; 0.32; 0.22" dur="3.5s" repeatCount="indefinite" />
        </polygon>

        {/* Market expectation polygon (heavy on Practical Projects & Modern Tools) */}
        <polygon
          points="180,82 242,112 180,170 128,112"
          fill="#BEF264"
          fillOpacity="0.3"
          stroke="#10B981"
          strokeWidth="2.2"
          strokeDasharray="4 2"
        >
          <animate attributeName="fill-opacity" values="0.3; 0.42; 0.3" dur="3.5s" begin="1.75s" repeatCount="indefinite" />
        </polygon>

        {/* Rotating Radar Scanner Sweep */}
        <g clipPath="url(#radarOuterBoundary)">
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 180 112"
              to="360 180 112"
              dur="4s"
              repeatCount="indefinite"
            />
            {/* 50-degree trailing sweep sector */}
            <path
              d="M 180 112 L 221.14 62.97 A 64 64 0 0 1 244 112 Z"
              fill="url(#radarBeamGrad)"
            />
            {/* Sharp leading scanner beam */}
            <line
              x1="180"
              y1="112"
              x2="244"
              y2="112"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.95"
            />
            {/* Glowing beam scanner tip */}
            <circle cx="242" cy="112" r="2.5" fill="#7C3AED">
              <animate attributeName="r" values="2; 3.5; 2" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7; 1; 0.7" dur="0.8s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* Pulsing Target Blips at Key Demand Vertices */}
        {/* Blip 1: Practical Projects */}
        <g>
          <circle cx="242" cy="112" r="3" fill="#10B981" />
          <circle cx="242" cy="112" r="3" fill="none" stroke="#10B981" strokeWidth="1.2">
            <animate attributeName="r" values="3; 8; 3" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85; 0; 0.85" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Blip 2: Modern Tools */}
        <g>
          <circle cx="180" cy="170" r="3" fill="#10B981" />
          <circle cx="180" cy="170" r="3" fill="none" stroke="#10B981" strokeWidth="1.2">
            <animate attributeName="r" values="3; 8; 3" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85; 0; 0.85" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Center Pivot Point with Glowing Radar Core */}
        <circle cx="180" cy="112" r="6" fill="#7C3AED" opacity="0.25">
          <animate attributeName="r" values="4; 7; 4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35; 0.1; 0.35" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="112" r="3" fill="#7C3AED" />
        <circle cx="180" cy="112" r="1.2" fill="#FFFFFF" />

        {/* Label 1: Top - Classroom Theory */}
        <g>
          <rect x="122" y="16" width="116" height="20" rx="10" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1" />
          <text x="180" y="30" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="10" fontWeight="700" fill="#6D28D9">
            Classroom Theory
          </text>
        </g>

        {/* Label 2: Right - Practical Projects */}
        <g>
          <rect x="252" y="102" width="102" height="20" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
          <text x="303" y="116" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="9.5" fontWeight="700" fill="#1D4ED8">
            Practical Projects
          </text>
        </g>

        {/* Label 3: Bottom - Modern Tools */}
        <g>
          <rect x="132" y="184" width="96" height="20" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
          <text x="180" y="198" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="10" fontWeight="700" fill="#15803D">
            Modern Tools
          </text>
        </g>

        {/* Label 4: Left - Job Requirements */}
        <g>
          <rect x="6" y="102" width="102" height="20" rx="10" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="1" />
          <text x="57" y="116" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="9.5" fontWeight="700" fill="#7C3AED">
            Job Requirements
          </text>
        </g>
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 text-[11px] font-headline font-bold">
        <div className="flex items-center gap-1.5 bg-purple-50/70 border border-purple-100 px-2 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          <span className="text-slate-700">Coursework Focus</span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50/70 border border-emerald-100 px-2 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-slate-700">Job Market Needs</span>
        </div>
      </div>
    </div>
  );
};

export const StepVisualVector: React.FC<{ step: string; isAccent?: boolean; className?: string }> = ({
  step,
  isAccent = false,
  className = ''
}) => {
  if (step === '01') {
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="24" cy="24" r="22" fill={isAccent ? '#9333EA' : '#F5F3FF'} stroke={isAccent ? '#C084FC' : '#DDD6FE'} strokeWidth="1.5" />
        <path d="M24 14L12 20L24 26L36 20L24 14Z" fill={isAccent ? '#FFFFFF' : '#7C3AED'} />
        <path d="M16 23V30C16 32.5 19.5 35 24 35C28.5 35 32 32.5 32 30V23" stroke={isAccent ? '#BEF264' : '#7C3AED'} strokeWidth="2" strokeLinecap="round" />
        <path d="M36 21V31" stroke={isAccent ? '#BEF264' : '#0047FF'} strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="32" r="1.5" fill={isAccent ? '#BEF264' : '#0047FF'} />
      </svg>
    );
  }

  if (step === '02') {
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="24" cy="24" r="22" fill={isAccent ? '#9333EA' : '#EFF6FF'} stroke={isAccent ? '#C084FC' : '#BFDBFE'} strokeWidth="1.5" />
        <rect x="14" y="15" width="20" height="18" rx="4" fill={isAccent ? '#7C3AED' : '#FFFFFF'} stroke={isAccent ? '#FFFFFF' : '#0047FF'} strokeWidth="1.8" />
        <path d="M19 22L16 24L19 26" stroke={isAccent ? '#BEF264' : '#0047FF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 22L32 24L29 26" stroke={isAccent ? '#BEF264' : '#0047FF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="25" y1="21" x2="23" y2="27" stroke={isAccent ? '#FFFFFF' : '#7C3AED'} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (step === '03') {
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="24" cy="24" r="22" fill={isAccent ? '#9333EA' : '#FAF5FF'} stroke={isAccent ? '#C084FC' : '#E9D5FF'} strokeWidth="1.5" />
        <rect x="13" y="15" width="16" height="12" rx="3" fill={isAccent ? '#FFFFFF' : '#7C3AED'} />
        <path d="M17 27L15 30V27H17Z" fill={isAccent ? '#FFFFFF' : '#7C3AED'} />
        <rect x="21" y="21" width="15" height="12" rx="3" fill={isAccent ? '#BEF264' : '#0047FF'} />
        <path d="M31 33L33 36V33H31Z" fill={isAccent ? '#BEF264' : '#0047FF'} />
        <line x1="17" y1="20" x2="24" y2="20" stroke={isAccent ? '#7C3AED' : '#FFFFFF'} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="26" x2="31" y2="26" stroke={isAccent ? '#0F172A' : '#FFFFFF'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Step 04: Proof
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="24" cy="24" r="22" fill={isAccent ? '#7C3AED' : '#ECFDF5'} stroke={isAccent ? '#BEF264' : '#A7F3D0'} strokeWidth="1.5" />
      <path
        d="M24 13L33 17V24C33 29.5 29.2 34.6 24 36C18.8 34.6 15 29.5 15 24V17L24 13Z"
        fill={isAccent ? '#BEF264' : '#10B981'}
      />
      <path
        d="M20 24.5L22.5 27L28 21.5"
        stroke={isAccent ? '#0F172A' : '#FFFFFF'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
