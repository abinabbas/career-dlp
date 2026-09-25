import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SmoothHeightTransition } from './SmoothHeightTransition';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Program' | 'Employability' | 'Eligibility';
}

const FAQS: FaqItem[] = [
  {
    id: 'who-for',
    category: 'Eligibility',
    question: 'I am an international student on a student or post-study visa. Is this for me?',
    answer:
      'Yes, absolutely. We built this especially for students who left their home country to study abroad (whether in the US, UK, Canada, Australia, Europe, or Ireland). We understand how stressful it feels to balance tuition loans, strict visa deadlines (like OPT or PSW), and the frustration of being told you have "no local experience."'
  },
  {
    id: 'why-rejections',
    category: 'Employability',
    question: 'Why am I getting rejected even after passing my university exams with good marks?',
    answer:
      'Passing your classes proves you are smart and hardworking. But local employers don’t know your university back home, and they worry that a new graduate will need months of hand-holding. They aren’t looking for textbook test scores—they want to see proof that you can handle real company tasks on your very first day.'
  },
  {
    id: 'no-local-experience',
    category: 'Employability',
    question: 'How can I get a job when every single entry-level job posting asks for "experience"?',
    answer:
      'This is the famous catch-22 that every international student faces. The good news: "experience" does not have to mean working 2 years at a local office. If you show 2 or 3 well-documented, practical projects that solve real business problems, hiring managers treat that as genuine, verified proof and will invite you to interviews.'
  },
  {
    id: 'tutorials-vs-commercial',
    category: 'Employability',
    question: 'Why aren’t online certificates and tutorials helping me get interviews?',
    answer:
      'Because thousands of applicants submit the exact same certificates and cookie-cutter tutorial apps. Recruiters quickly scroll past them. What makes a hiring manager stop and email you is when your resume shows genuine initiative—projects that solve realistic company problems and can be demonstrated live.'
  },
  {
    id: 'visa-timelines',
    category: 'Eligibility',
    question: 'My visa clock is running out. Will this take months of heavy studying?',
    answer:
      'No. We know your post-study visa clock is ticking and you don’t have time to waste. We do not make you re-learn textbooks or spend 6 months on endless tutorials. Instead, we zero in immediately on the exact 2 or 3 missing pieces local managers look for, so you can start landing interviews as fast as possible.'
  },
  {
    id: 'deliverables-detail',
    category: 'Program',
    question: 'What do I walk away with after speaking with an advisor?',
    answer:
      'You receive three clear, jargon-free tools: (1) A personalized career readiness assessment and profile review, (2) A skill gap assessment action plan prioritized for local job openings, and (3) A blueprint for building practical skills for graduates with proof projects interviewers respect.'
  },
  {
    id: 'how-to-become-job-ready',
    category: 'Employability',
    question: 'How to become job ready as a recent graduate from abroad?',
    answer:
      'Learning how to become job ready requires bridging the gap between theoretical classroom knowledge and commercial workplace demands. Rather than collecting generic certificates, focus on in-demand job ready skills, demonstrable practical skills for graduates, and essential employability skills for graduates that prove you can handle everyday tasks independently.'
  },
  {
    id: 'career-readiness-assessment',
    category: 'Program',
    question: 'What is included in the Career Readiness Assessment & Skill Gap Assessment?',
    answer:
      'Our career readiness assessment evaluates your degree, projects, and skills for recent graduates against live hiring criteria. Through an in-depth skill gap assessment, we map out the exact employability skills for graduates, tools, and portfolio deliverables you need to secure interview invitations.'
  },
  {
    id: 'getting-started',
    category: 'Program',
    question: 'How do I get started, and is there any pressure or cost to enquire?',
    answer:
      'It takes less than 60 seconds. Just fill in your basic details in the enquiry form. An advisor will review your situation and send you friendly, honest advice on your next steps—completely free and with zero high-pressure sales pitches.'
  }
];

interface FaqSectionProps {
  onScrollToEnquiry?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onScrollToEnquiry
}) => {
  const [openId, setOpenId] = useState<string | null>('who-for');
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden" id="faq">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase font-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
              HELPFUL ANSWERS
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight break-words">
            Frequently Asked{' '}
            <span className="relative inline-block isolate">
              <span className="relative z-10 flowing-shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#630ED4] to-[#0047FF]">
                Questions.
              </span>
              <span className="absolute left-0 bottom-0.5 sm:bottom-1 w-full h-[7px] sm:h-[9px] bg-[#BEF264] -z-10 rounded-full opacity-80 pointer-events-none" />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-['Outfit',sans-serif]">
            Real, honest answers to the questions international students ask us every day about visas, job applications, and interviews.
          </p>
        </div>

        <div
          ref={revealRef}
          className="max-w-3xl mx-auto space-y-3 sm:space-y-3.5 w-full"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                style={{
                  transitionDelay: isVisible ? `${idx * 60}ms` : '0ms'
                }}
                className={`border rounded-2xl bg-[#FAF8FF] transition-all duration-300 overflow-hidden shadow-2xs ${
                  isVisible ? 'reveal-visible' : 'reveal-init'
                } ${
                  isOpen
                    ? 'border-[#7C3AED] bg-white ring-2 ring-[#7C3AED]/15 shadow-sm'
                    : 'border-slate-200 hover:border-purple-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer group select-none"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-headline text-xs font-extrabold transition-colors duration-200 shrink-0 ${
                        isOpen
                          ? 'bg-[#7C3AED] text-white'
                          : 'bg-purple-100 text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white'
                      }`}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3
                      className={`font-headline text-sm sm:text-base font-bold transition-colors duration-200 ${
                        isOpen
                          ? 'text-[#7C3AED]'
                          : 'text-[#0F172A] group-hover:text-[#7C3AED]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`material-symbols-outlined text-lg sm:text-xl shrink-0 transition-transform duration-300 text-slate-400 group-hover:text-[#7C3AED] ${
                      isOpen ? 'rotate-180 text-[#7C3AED]' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <SmoothHeightTransition isOpen={isOpen} duration={320}>
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <div className="pt-3 border-t border-purple-100/80 text-xs sm:text-sm text-slate-600 leading-relaxed font-['Outfit',sans-serif] space-y-2">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </SmoothHeightTransition>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 text-center max-w-xl mx-auto p-4 sm:p-6 rounded-2xl bg-[#FAF8FF] border border-slate-200 shadow-2xs">
          <h4 className="font-headline font-bold text-sm sm:text-base text-[#0F172A] mb-1">
            Have a specific scenario or question?
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 mb-4 font-['Outfit',sans-serif]">
            Our advisory team is available to review your current portfolio, CV, or academic profile.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {onScrollToEnquiry && (
              <button
                type="button"
                onClick={onScrollToEnquiry}
                className="h-10 px-6 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer font-headline"
              >
                Ask an Advisor
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
