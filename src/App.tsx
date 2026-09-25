import React, { useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { SystemPillarsSection } from './components/SystemPillarsSection';
import { ChallengeSection } from './components/ChallengeSection';
import { CareerProcessModule } from './components/CareerProcessModule';
import { SkillConvergenceSection } from './components/SkillConvergenceSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const enquiryFormRef = useRef<HTMLElement>(null);

  const handleScrollToEnquiry = useCallback(() => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('enquiry-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Outfit',sans-serif] selection:bg-purple-200 selection:text-[#7C3AED] relative overflow-x-hidden antialiased">
      {/* Navigation Header */}
      <Header onScrollToEnquiry={handleScrollToEnquiry} />

      {/* Main Content Sections */}
      <main className="w-full relative">
        {/* Hero: The Next Chapter */}
        <Hero onScrollToEnquiry={handleScrollToEnquiry} />

        <SectionDivider variant="curve" fromBg="purple-tint" toBg="white" />

        {/* System Pillars: Merged with Inflection Point & Catalyst */}
        <SystemPillarsSection onScrollToEnquiry={handleScrollToEnquiry} />

        <SectionDivider variant="curve" fromBg="white" toBg="purple-tint" />

        {/* Dedicated Interactive Enquiry Form (Placed directly above The Abroad Challenge) */}
        <EnquiryFormSection ref={enquiryFormRef} />

        <SectionDivider variant="beam" fromBg="purple-tint" toBg="purple-tint" label="THE ABROAD CHALLENGE" icon="flag" />

        {/* The Challenge: 4 Critical Gaps (Mobile Horizontal Snap) */}
        <ChallengeSection />

        <SectionDivider variant="step" fromBg="purple-tint" toBg="white" label="READINESS FRAMEWORK" icon="stairs" />

        {/* Consolidated Career Process: The Career Continuum + Application Reality Check */}
        <CareerProcessModule />

        <SectionDivider variant="beam" fromBg="white" toBg="white" label="SKILL CONVERGENCE" icon="hub" />

        {/* Skill Convergence: What Matters for Your Next Step */}
        <SkillConvergenceSection onScrollToEnquiry={handleScrollToEnquiry} />

        <SectionDivider variant="curve" fromBg="white" toBg="purple-tint" />

        {/* Deliverables & Outputs (Compact 3-Column Grid) */}
        <DeliverablesSection />

        <SectionDivider variant="curve" fromBg="purple-tint" toBg="white" />

        {/* Frequently Asked Questions */}
        <FaqSection onScrollToEnquiry={handleScrollToEnquiry} />

        <SectionDivider variant="curve" fromBg="white" toBg="purple-tint" />

        {/* About Datameris Launchpad: Institutional Trust */}
        <AboutSection />

        <SectionDivider variant="curve" fromBg="purple-tint" toBg="dark" />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
