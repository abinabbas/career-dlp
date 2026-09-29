import React, { useState, useEffect } from 'react';

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const formEl = document.getElementById('enquiry-form');
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="mobile-quick-contact-bar"
      className="flex md:hidden fixed bottom-0 left-0 right-0 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-purple-100/90 shadow-2xl items-center justify-between gap-2.5 w-full max-w-full z-[9999] pointer-events-auto animate-fadeIn"
    >
      <a
        href="tel:+917994447500"
        className="flex-1 h-11 px-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl flex items-center justify-center gap-2 font-headline font-semibold text-xs sm:text-sm shadow-sm shadow-purple-500/25 transition-all duration-300 active:scale-95 border border-purple-400/30"
      >
        <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/917994447500"
        target="_blank"
        rel="noreferrer"
        className="flex-1 h-11 px-3.5 bg-[#0047FF] hover:bg-[#0038CC] text-white rounded-xl flex items-center justify-center gap-2 font-headline font-semibold text-xs sm:text-sm shadow-sm shadow-blue-500/25 transition-all duration-300 active:scale-95 border border-blue-400/30"
      >
        <svg className="w-4 h-4 shrink-0 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.182 8.182 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
