import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="w-full bg-[#0F172A] text-white border-t border-slate-800 pt-10 pb-24 md:pb-10 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-8">
          <div className="pt-2 pb-6 border-b border-slate-800/80">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left mb-3">
              <span className="text-[11px] font-headline uppercase tracking-widest text-slate-400 font-bold">
                Advisory Focus & Competency Scope
              </span>
              <span className="text-[11px] text-slate-500 font-['Outfit',sans-serif]">
                Transitioning academic qualifications into commercial hiring readiness
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Career Readiness Assessment
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Skill Gap Assessment
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Job Ready Skills
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Practical Skills for Graduates
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Employability Skills for Graduates
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                How to Become Job Ready
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/60 text-slate-300">
                Skills for Recent Graduates
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start">
              <img
                alt="Datameris Launchpad"
                className="h-9 sm:h-10 w-auto brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8ebFJ7YLNPH5a_Hp49qaY8EGIKjHG4iqqGEXAFBxr4XujilvpQvMz9SnxtNtBQ_zZ_7nxvh8xOMn3RMcWrVzrgE9la3t72j8dE-Hz4jnkcyaU0njnPLNBADL6IYZvp-lw9H4kJsxTtcfFuQVp-tzpTaiXo-zBmj7jCHDXev6KMEQ03Fo_bz-M7B11ujFLH6RrJOZ68szrzAEUumrujnMul7_ut17x5h2PHDT2tBDpnt-gWTV0xKhmRHsGJ0aBNNJ9g"
              />
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setModalType('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Notice
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setModalType('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <span>·</span>
                <a
                  href="#overview"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Back to Top ↑
                </a>
              </div>
              <p className="text-slate-500 text-[11px]">
                © {new Date().getFullYear()} Datameris Launchpad. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {modalType && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full text-slate-800 border border-transparent shadow-2xl relative">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
            <h3 className="font-headline text-lg font-bold text-[#0F172A] mb-3">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <div className="text-xs text-slate-600 space-y-2 max-h-60 overflow-y-auto pr-2 font-['Outfit',sans-serif]">
              <p>
                Datameris Launchpad respects candidate privacy. All submitted information is strictly confidential and used solely for the purpose of personalized career readiness evaluation and educational advisory.
              </p>
              <p>
                We do not sell or distribute candidate contact information to external advertisers or third-party recruiters without your explicit permission.
              </p>
              <p>
                Advisory diagnostics provide structured recommendations and skill gap assessments based on current employer expectations in local job markets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-[#7C3AED] text-white text-xs font-semibold rounded-lg hover:bg-[#6D28D9] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
