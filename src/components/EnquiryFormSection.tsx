import React, { useState, forwardRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { triggerFormSubmissionConfetti } from '../utils/confettiBurst';

export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  careerStage: string;
  careerGoal: string;
  challenge: string;
}

interface EnquiryFormSectionProps {
  initialData?: Partial<EnquiryFormData>;
}

export const EnquiryFormSection = forwardRef<HTMLElement, EnquiryFormSectionProps>(
  ({ initialData }, ref) => {
    const [formData, setFormData] = useState<EnquiryFormData>({
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      email: initialData?.email || '',
      phone: initialData?.phone || '',
      careerStage: initialData?.careerStage || '',
      careerGoal: initialData?.careerGoal || '',
      challenge: initialData?.challenge || ''
    });

    React.useEffect(() => {
      if (initialData) {
        setFormData((prev) => ({
          ...prev,
          ...initialData
        }));
      }
    }, [initialData]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [referenceId, setReferenceId] = useState('');
    const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setReferenceId(`DLP-${Math.floor(100000 + Math.random() * 900000)}`);
        triggerFormSubmissionConfetti();
      }, 700);
    };

    const handleReset = () => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        careerStage: '',
        careerGoal: '',
        challenge: ''
      });
      setIsSubmitted(false);
    };

    return (
      <section
        ref={ref}
        id="enquiry-form"
        className="w-full py-12 sm:py-20 bg-[#FAF8FF] border-b border-slate-100 relative overflow-hidden"
      >
        <div className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-8 lg:px-12">
          <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-lg relative overflow-hidden transition-all duration-500 w-full max-w-5xl mx-auto">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#0047FF]/05 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 w-full">
              {/* LEFT COLUMN */}
              <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-slate-100 bg-gradient-to-br from-white to-[#FAF8FF]/60">
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                    <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                      ACCELERATE YOUR JOURNEY
                    </span>
                  </div>

                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                    <span>Your Education Was a Major Investment.</span>{' '}
                    <span className="relative inline-block isolate">
                      <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                        Know What Comes Next.
                      </span>
                      <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[6px] sm:h-[8px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
                    </span>
                  </h2>

                  <p className="font-['Outfit',sans-serif] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Understand where you stand with an honest career readiness assessment, diagnose missing job ready skills via our skill gap assessment, and learn how to become job ready for local employers.
                  </p>

                  {/* Strategic 4-Step Sequence from FinalCTA */}
                  <div className="w-full py-2.5 px-3 rounded-xl bg-purple-50/60 border border-purple-100 text-[11px] font-bold font-headline text-[#0F172A] tracking-wider flex items-center justify-between shadow-2xs">
                    <span className="seq-step-1 px-1.5 py-0.5 rounded text-slate-700">ASSESS</span>
                    <span className="text-[#7C3AED] text-xs">→</span>
                    <span className="seq-step-2 px-1.5 py-0.5 rounded text-slate-700">IDENTIFY</span>
                    <span className="text-[#0047FF] text-xs">→</span>
                    <span className="seq-step-3 px-1.5 py-0.5 rounded text-slate-700">PRIORITISE</span>
                    <span className="text-[#7C3AED] text-xs">→</span>
                    <span className="seq-step-4 px-1.5 py-0.5 rounded text-[#7C3AED] bg-white border border-purple-200 shadow-2xs">BUILD</span>
                  </div>

                  <div
                    ref={revealRef}
                    className="grid grid-cols-1 gap-2 pt-1"
                  >
                    <div
                      style={{
                        transitionDelay: isVisible ? '0ms' : '0ms'
                      }}
                      className={`flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs ${
                        isVisible ? 'reveal-visible' : 'reveal-init'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-100/70 text-[#7C3AED] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">assessment</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold font-headline text-[#0F172A]">Career Readiness Assessment</div>
                        <div className="text-[11px] font-['Outfit',sans-serif] text-slate-500">Discover how to become job ready and unlock interview callbacks</div>
                      </div>
                    </div>

                    <div
                      style={{
                        transitionDelay: isVisible ? '120ms' : '0ms'
                      }}
                      className={`flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs ${
                        isVisible ? 'reveal-visible' : 'reveal-init'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-[#0047FF] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">alt_route</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold font-headline text-[#0F172A]">Skill Gap Assessment & Action Plan</div>
                        <div className="text-[11px] font-['Outfit',sans-serif] text-slate-500">Target the practical skills for graduates and employability skills for graduates</div>
                      </div>
                    </div>

                    <div
                      style={{
                        transitionDelay: isVisible ? '240ms' : '0ms'
                      }}
                      className={`flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs ${
                        isVisible ? 'reveal-visible' : 'reveal-init'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#BEF264]/40 text-[#0F172A] border border-[#BEF264]/80 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-base">verified_user</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold font-headline text-[#0F172A]">Verified Job Ready Skills</div>
                        <div className="text-[11px] font-['Outfit',sans-serif] text-slate-500">Guidance on in-demand skills for recent graduates with zero sales pressure</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 space-y-1.5 text-[11px] text-slate-500 font-['Outfit',sans-serif]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#7C3AED] shrink-0">lock</span>
                      <span>Strictly confidential. Never shared with third parties.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#0047FF] shrink-0">schedule</span>
                      <span>Advisors respond within 1 business day.</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100 font-['Outfit',sans-serif]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264] shrink-0" />
                    <span>Career Readiness Score + Action Roadmap</span>
                  </span>
                  <span className="font-semibold text-[#7C3AED]">100% Free</span>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 bg-white flex flex-col justify-center">
                {isSubmitted ? (
                  <div className="py-6 sm:py-10 flex flex-col items-center text-center gap-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs">
                      <span className="material-symbols-outlined text-3xl">task_alt</span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 font-headline block mb-1">
                        Application Logged
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#0F172A]">
                        Enquiry Successfully Submitted
                      </h3>
                      <p className="font-['Outfit',sans-serif] text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md">
                        Thank you, <span className="font-semibold text-[#0F172A]">{formData.firstName}</span>. A senior career advisor is reviewing your background and will reach out shortly.
                      </p>
                    </div>

                    <div className="bg-[#FAF8FF] border border-purple-200/80 p-4 sm:p-5 rounded-2xl text-left w-full max-w-md space-y-2.5 shadow-xs my-2">
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-purple-100">
                        <span className="text-slate-500 font-medium">Reference Code:</span>
                        <span className="font-mono font-bold text-[#7C3AED] bg-white px-2 py-0.5 rounded border border-purple-200">
                          {referenceId}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Current Stage:</span>
                        <span className="font-semibold text-[#0F172A]">{formData.careerStage || 'Graduate'}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Primary Goal:</span>
                        <span className="font-semibold text-[#0F172A]">{formData.careerGoal || 'Job Readiness'}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Confirmed Email:</span>
                        <span className="font-semibold text-[#0F172A] truncate max-w-[200px]">{formData.email}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md pt-2">
                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 h-11 px-4 bg-[#0047FF] hover:bg-[#0038CC] text-white text-xs font-headline font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm shadow-blue-500/20 active:scale-95 transition-all border border-blue-400/30"
                      >
                        <span className="material-symbols-outlined text-base">chat</span>
                        <span>Chat via WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex-1 h-11 px-4 bg-white border border-slate-200 text-slate-700 text-xs font-headline font-semibold rounded-xl hover:border-[#7C3AED] hover:text-[#7C3AED] active:scale-95 transition-all cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-5 sm:mb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-headline text-lg sm:text-xl font-bold text-[#0F172A]">
                          Personalised{' '}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                            Enquiry Form
                          </span>
                        </h3>
                        <span className="text-[11px] font-semibold text-slate-400 font-['Outfit',sans-serif]">
                          * Required fields
                        </span>
                      </div>
                      <p className="font-['Outfit',sans-serif] text-xs sm:text-sm text-slate-500 mt-1">
                        Tell us a bit about your career stage to connect you with the right advisor.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>First Name</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            type="text"
                            autoComplete="given-name"
                            placeholder="e.g. Alex"
                            className="w-full h-11 sm:h-11 px-3.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>Last Name</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            type="text"
                            autoComplete="family-name"
                            placeholder="e.g. Chen"
                            className="w-full h-11 sm:h-11 px-3.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>Email Address</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                            autoComplete="email"
                            placeholder="alex@example.com"
                            className="w-full h-11 sm:h-11 px-3.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>Phone / WhatsApp</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                            autoComplete="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full h-11 sm:h-11 px-3.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>Current Career Stage</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              name="careerStage"
                              value={formData.careerStage}
                              onChange={handleChange}
                              required
                              className="w-full h-11 sm:h-11 pl-3.5 pr-9 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select your current stage</option>
                              <option value="Currently Studying Abroad (Bachelor's / Master's)">Currently Studying Abroad (Bachelor's / Master's)</option>
                              <option value="Final Semester Abroad / Graduating Soon">Final Semester Abroad / Graduating Soon</option>
                              <option value="Graduated Abroad & On Work Visa (OPT / PSW / PGWP)">Graduated Abroad & On Work Visa (OPT / PSW / PGWP)</option>
                              <option value="Applying Abroad But Getting No Responses">Applying Abroad But Getting No Responses</option>
                              <option value="Working Part-Time / Casual Jobs, Seeking First Career Role">Working Part-Time / Casual Jobs, Seeking First Career Role</option>
                              <option value="Exploring Career Opportunities In Host Country">Exploring Career Opportunities In Host Country</option>
                            </select>
                            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                              unfold_more
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 w-full">
                          <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center gap-1">
                            <span>Primary Career Goal</span>
                            <span className="text-[#7C3AED]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              name="careerGoal"
                              value={formData.careerGoal}
                              onChange={handleChange}
                              required
                              className="w-full h-11 sm:h-11 pl-3.5 pr-9 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs appearance-none cursor-pointer"
                            >
                              <option value="" disabled>Select your primary goal</option>
                              <option value="Complete a Career Readiness Assessment">Complete a Career Readiness Assessment</option>
                              <option value="Identify Missing Job Ready Skills via Skill Gap Assessment">Identify Missing Job Ready Skills via Skill Gap Assessment</option>
                              <option value="Learn How to Become Job Ready for Local Employers">Learn How to Become Job Ready for Local Employers</option>
                              <option value="Build Practical Skills for Graduates & Portfolio Proof">Build Practical Skills for Graduates & Portfolio Proof</option>
                              <option value="Master In-Demand Employability Skills for Graduates">Master In-Demand Employability Skills for Graduates</option>
                              <option value="Essential Skills for Recent Graduates on OPT / PSW">Essential Skills for Recent Graduates on OPT / PSW</option>
                            </select>
                            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                              unfold_more
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 w-full">
                        <label className="text-xs font-bold text-[#0F172A] font-headline flex items-center justify-between">
                          <span>What is your biggest struggle right now?</span>
                          <span className="text-[11px] font-normal text-slate-400">Optional</span>
                        </label>
                        <textarea
                          name="challenge"
                          value={formData.challenge}
                          onChange={handleChange}
                          rows={3}
                          placeholder="e.g. My post-study visa clock is running, every company asks for local experience, or I've sent 150 resumes on LinkedIn with zero replies..."
                          className="w-full p-3.5 rounded-xl border border-slate-200 text-base sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:ring-2 focus:ring-[#7C3AED]/25 focus:border-[#7C3AED] focus:outline-none bg-white transition-all shadow-xs font-['Outfit',sans-serif] leading-relaxed resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full mt-1 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-headline font-bold text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-glow-purple active:scale-[0.99] group cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Routing to Career Advisory...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Free Career Consultation</span>
                            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                              arrow_forward
                            </span>
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-center text-slate-400 font-['Outfit',sans-serif] mt-0.5">
                        By submitting, you agree to receive tailored career assessment guidance. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

EnquiryFormSection.displayName = 'EnquiryFormSection';
