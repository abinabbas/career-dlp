import React, { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

interface HeaderProps {
  onScrollToEnquiry: () => void;
}

interface NavItem {
  id: string;
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: 'Your Journey', targetId: 'overview' },
  { id: 'pillars', label: 'How It Works', targetId: 'pillars' },
  { id: 'gaps', label: 'Roadblocks', targetId: 'challenge' },
  { id: 'method', label: '4-Step Path', targetId: 'method' },
  { id: 'deliverables', label: 'What You Get', targetId: 'deliverables' },
  { id: 'faq', label: 'FAQ', targetId: 'faq' }
];

export const Header: React.FC<HeaderProps> = ({ onScrollToEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(winScroll > 40);

      if (window.innerHeight + winScroll >= document.documentElement.scrollHeight - 160) {
        setActiveSection('about');
        return;
      }

      const scrollPosition = winScroll + 160;
      let matched = 'overview';

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + sectionHeight) {
            matched = item.id;
            break;
          } else if (scrollPosition >= top) {
            matched = item.id;
          }
        }
      }

      setActiveSection(matched);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string, itemId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const headerH = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerH;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(itemId);
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 group transition-transform duration-300 active:scale-95 shrink-0"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('overview');
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="p-1 sm:px-1.5 sm:py-1 rounded-xl transition-all duration-300 bg-transparent">
                <img
                  alt="Datameris Launchpad"
                  className="h-7 sm:h-8 md:h-9 w-auto max-w-[160px] sm:max-w-none object-contain transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8ebFJ7YLNPH5a_Hp49qaY8EGIKjHG4iqqGEXAFBxr4XujilvpQvMz9SnxtNtBQ_zZ_7nxvh8xOMn3RMcWrVzrgE9la3t72j8dE-Hz4jnkcyaU0njnPLNBADL6IYZvp-lw9H4kJsxTtcfFuQVp-tzpTaiXo-zBmj7jCHDXev6KMEQ03Fo_bz-M7B11ujFLH6RrJOZ68szrzAEUumrujnMul7_ut17x5h2PHDT2tBDpnt-gWTV0xKhmRHsGJ0aBNNJ9g"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation Bar (Unchanged) */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-slate-100/70 border border-slate-200/70 backdrop-blur-xs shadow-inner"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.targetId, item.id)}
                  className={`relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-headline font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#7C3AED] shadow-xs border border-purple-200/70'
                      : 'text-slate-600 hover:text-[#7C3AED] hover:bg-white/60 border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Actions: CTA + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <MagneticButton
              type="button"
              onClick={() => {
                onScrollToEnquiry();
                setIsMobileMenuOpen(false);
              }}
              magneticStrength={0.3}
              maxDistance={8}
              className="h-8.5 sm:h-10 px-3.5 sm:px-5.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow-glow-purple transition-shadow duration-300 flex items-center justify-center whitespace-nowrap active:scale-95 group relative overflow-hidden shrink-0 cursor-pointer"
            >
              <span className="relative z-10 font-headline">
                Enquire Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
            </MagneticButton>

            {/* Mobile Hamburger Toggle Button (Option 1) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-8.5 h-8.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#7C3AED] hover:border-purple-300 flex items-center justify-center transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-xl transition-transform duration-200">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer (Option 1) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-slate-200 bg-white/98 backdrop-blur-xl ${
            isMobileMenuOpen
              ? 'max-h-[420px] opacity-100 border-t shadow-lg px-4 py-3'
              : 'max-h-0 opacity-0 border-t-0 p-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={(e) => {
                    handleNavClick(e, item.targetId, item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-headline font-semibold transition-all duration-200 text-left cursor-pointer ${
                    isActive
                      ? 'bg-purple-50 text-[#7C3AED] border border-purple-200/80 shadow-2xs font-bold'
                      : 'text-slate-700 hover:text-[#7C3AED] hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? 'bg-[#7C3AED] scale-125' : 'bg-slate-300'
                      }`}
                    />
                    <span>{item.label}</span>
                  </span>
                  <span className="material-symbols-outlined text-sm text-slate-400">
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-['Outfit',sans-serif]">
            <span>Datameris Launchpad</span>
            <span className="text-[#7C3AED] font-semibold">Career Guidance</span>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-40 md:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
