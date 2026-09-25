import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#FAF8FF] border-b border-slate-100 relative overflow-hidden" id="about">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border border-purple-200/90 shadow-sm flex items-center justify-center p-3 relative group hover:border-[#7C3AED] transition-colors">
              <img
                alt="Datameris Launchpad Logo"
                className="h-auto w-full object-contain transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8ebFJ7YLNPH5a_Hp49qaY8EGIKjHG4iqqGEXAFBxr4XujilvpQvMz9SnxtNtBQ_zZ_7nxvh8xOMn3RMcWrVzrgE9la3t72j8dE-Hz4jnkcyaU0njnPLNBADL6IYZvp-lw9H4kJsxTtcfFuQVp-tzpTaiXo-zBmj7jCHDXev6KMEQ03Fo_bz-M7B11ujFLH6RrJOZ68szrzAEUumrujnMul7_ut17x5h2PHDT2tBDpnt-gWTV0xKhmRHsGJ0aBNNJ9g"
              />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-3 font-headline">
              Datameris Launchpad
            </span>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                OUR MISSION FOR STUDENTS ABROAD
              </span>
            </div>

            <h3 className="font-headline text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] leading-tight">
              Helping Students Who Travelled Abroad Turn Their Degrees Into Real Careers.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
              Completing a university degree abroad takes immense drive, adaptability, and dedication. Yet post-graduation, navigating local employment systems often introduces unexpected hurdles: automated ATS filtering, post-study visa deadlines, and ambiguous expectations around "local commercial experience."
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-['Outfit',sans-serif]">
              Datameris Launchpad provides the structured bridge from graduation to career placement. We help you translate your academic qualifications into tangible commercial evidence, market-ready project portfolios, and high-conviction interview readiness.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-headline font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                Friendly, Honest Mentorship
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
                Projects Local Employers Value
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
                Zero Technical Jargon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
