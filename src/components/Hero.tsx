import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onScrollToEnquiry: () => void;
}

const SPARKLE_POINTS = [
  { top: '15%', left: '12%', delay: '0s', size: 'w-2 h-2', color: 'bg-purple-400' },
  { top: '22%', left: '84%', delay: '1.2s', size: 'w-1.5 h-1.5', color: 'bg-blue-400' },
  { top: '38%', left: '8%', delay: '2.4s', size: 'w-2 h-2', color: 'bg-[#BEF264]' },
  { top: '48%', left: '92%', delay: '0.8s', size: 'w-1.5 h-1.5', color: 'bg-purple-400' },
  { top: '65%', left: '15%', delay: '1.8s', size: 'w-2 h-2', color: 'bg-blue-400' },
  { top: '78%', left: '86%', delay: '2.9s', size: 'w-1.5 h-1.5', color: 'bg-purple-400' },
  { top: '28%', left: '46%', delay: '0.5s', size: 'w-1 h-1', color: 'bg-slate-400' },
];

export const Hero: React.FC<HeroProps> = ({ onScrollToEnquiry }) => {
  const heroRef = useRef<HTMLElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(1);

  const [mousePos, setMousePos] = useState({ x: 50, y: 35 });
  const [isHovering, setIsHovering] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const [btnMagneticOffset, setBtnMagneticOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (e.clientX - rect.left - centerX) / 35;
    const offsetY = (e.clientY - rect.top - centerY) / 35;
    setParallaxOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setParallaxOffset({ x: 0, y: 0 });
    setBtnMagneticOffset({ x: 0, y: 0 });
  };

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setBtnMagneticOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleBtnMouseLeave = () => {
    setBtnMagneticOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!stagesRef.current || !progressBarRef.current) return;
      const rect = stagesRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        const totalDistance = rect.height;
        const scrolledPast = windowHeight * 0.75 - rect.top;
        const percentage = Math.min(Math.max((scrolledPast / totalDistance) * 100, 0), 100);
        progressBarRef.current.style.height = `${percentage}%`;

        if (percentage > 65) {
          setActiveStage(3);
        } else if (percentage > 30) {
          setActiveStage(2);
        } else {
          setActiveStage(1);
        }
      } else if (rect.top > windowHeight * 0.75) {
        progressBarRef.current.style.height = '0%';
        setActiveStage(1);
      } else if (rect.bottom < 0) {
        progressBarRef.current.style.height = '100%';
        setActiveStage(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const el = document.getElementById('the-inflection-point');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStage = (stageNum: number) => {
    setActiveStage(stageNum);
    const stageEl = document.querySelector(`[data-stage="${stageNum}"]`);
    if (stageEl) {
      stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="overview"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-white to-purple-50/20 text-[#0F172A] border-b border-slate-100 select-none-text"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity: isHovering ? 1 : 0.45,
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(124, 58, 237, 0.08), rgba(0, 71, 255, 0.04) 40%, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {SPARKLE_POINTS.map((sparkle, idx) => (
          <div
            key={idx}
            className="absolute transition-transform duration-700 ease-out"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`,
            }}
          >
            <div
              className={`rounded-full ${sparkle.size} ${sparkle.color} animate-sparkle shadow-[0_0_8px_currentColor]`}
              style={{ animationDelay: sparkle.delay }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-purple-200/35 rounded-full blur-[105px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px, 0)`,
          }}
        />
        <div
          className="absolute top-1/3 -right-28 w-[480px] h-[480px] bg-blue-200/30 rounded-full blur-[105px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${-parallaxOffset.x * 0.6}px, ${-parallaxOffset.y * 0.6}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-lime-200/30 rounded-full blur-[95px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`,
          }}
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f044_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f044_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.25}px, ${parallaxOffset.y * 0.25}px, 0)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 z-10">
        {/* Floating contextual milestone badges - safely positioned in the outer margins only on wide screens */}
        <div
          className="hidden xl:flex absolute top-2 left-2 2xl:-left-4 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-sm animate-float-slow transition-all duration-300 pointer-events-none select-none z-10"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`,
          }}
        >
          <span className="text-sm">✈️</span>
          <span className="text-xs font-headline font-bold text-slate-800">You Left Home</span>
        </div>

        <div
          className="hidden xl:flex absolute top-14 right-2 2xl:-right-4 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-sm animate-float-slow-alt transition-all duration-300 pointer-events-none select-none z-10"
          style={{
            transform: `translate3d(${-parallaxOffset.x * 0.5}px, ${-parallaxOffset.y * 0.5}px, 0)`,
          }}
        >
          <span className="text-sm">🎓</span>
          <span className="text-xs font-headline font-bold text-slate-800">Earned Your Degree</span>
        </div>

        <div
          className="hidden xl:flex absolute top-80 left-2 2xl:-left-4 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200/90 shadow-sm animate-float-slow transition-all duration-300 pointer-events-none select-none z-10"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`,
          }}
        >
          <span className="text-sm">💼</span>
          <span className="text-xs font-headline font-bold text-slate-800">Time to Get Hired</span>
        </div>

        <div
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18 transition-transform duration-500 ease-out relative z-20"
          style={{
            transform: `perspective(1000px) rotateX(${-parallaxOffset.y * 0.08}deg) rotateY(${parallaxOffset.x * 0.08}deg)`,
          }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 text-[#7C3AED] text-xs font-headline font-bold tracking-widest uppercase mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span>THE JOURNEY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
            You travelled across the world. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#0047FF] via-[#BEF264] to-[#7C3AED] animate-gradient-flow inline-block">
              Now let’s get you hired.
            </span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto font-body font-normal leading-relaxed mb-8">
            You took a massive risk leaving home, adapted to a new culture, and finished your studies. We provide a career readiness assessment to pinpoint your missing job ready skills, equipping you with the practical skills for graduates that local employers actually hire for.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={scrollToNextSection}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              style={{
                transform: `translate3d(${btnMagneticOffset.x}px, ${btnMagneticOffset.y}px, 0)`,
              }}
              className="relative overflow-hidden h-11 sm:h-12 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-headline font-bold text-xs sm:text-sm shadow-md hover:shadow-glow-purple transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer group"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[250%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out pointer-events-none skew-x-12" />
              
              <span className="relative z-10">See How It Works</span>
              <span className="relative z-10 material-symbols-outlined text-sm text-[#BEF264] group-hover:translate-y-0.5 transition-transform">arrow_downward</span>
            </button>

            <button
              type="button"
              onClick={onScrollToEnquiry}
              className="h-11 sm:h-12 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#7C3AED] font-headline font-semibold text-xs sm:text-sm border border-slate-200 shadow-2xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Talk to an Advisor</span>
              <span className="material-symbols-outlined text-sm text-[#7C3AED] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="mt-8 inline-flex items-center gap-1.5 sm:gap-2.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs">
            <button
              type="button"
              onClick={() => handleSelectStage(1)}
              className={`px-3 py-1 rounded-full text-xs font-headline font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeStage === 1
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#7C3AED] hover:bg-purple-50/80'
              }`}
            >
              <span className="opacity-70 text-[10px]">01</span>
              <span>You Studied Hard</span>
            </button>

            <span className="text-slate-300 text-xs font-mono select-none">──&gt;</span>

            <button
              type="button"
              onClick={() => handleSelectStage(2)}
              className={`px-3 py-1 rounded-full text-xs font-headline font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeStage === 2
                  ? 'bg-[#0047FF] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0047FF] hover:bg-blue-50/80'
              }`}
            >
              <span className="opacity-70 text-[10px]">02</span>
              <span>You Adapted Abroad</span>
            </button>

            <span className="text-slate-300 text-xs font-mono select-none">──&gt;</span>

            <button
              type="button"
              onClick={() => handleSelectStage(3)}
              className={`px-3 py-1 rounded-full text-xs font-headline font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeStage === 3
                  ? 'bg-[#7C3AED] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#7C3AED] hover:bg-purple-50/80'
              }`}
            >
              <span className="opacity-70 text-[10px]">03</span>
              <span>Ready for Your Career</span>
            </button>
          </div>
        </div>

        <div ref={stagesRef} className="relative mb-16 md:mb-24" id="stages">
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full bg-slate-200/80">
            <div
              ref={progressBarRef}
              className="w-full bg-gradient-to-b from-[#7C3AED] via-[#0047FF] to-[#BEF264] timeline-progress-bar h-0 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.6)]"
              id="timelineProgress"
            />
          </div>

          <div className="space-y-16 md:space-y-28">
            {/* Stage 1 */}
            <div
              className={`relative flex flex-col md:flex-row items-start md:items-center group transition-all duration-500 cursor-pointer ${
                activeStage === 1 ? 'opacity-100 scale-[1.01]' : 'opacity-70 hover:opacity-90'
              }`}
              data-stage="1"
              onClick={() => handleSelectStage(1)}
            >
              <div className="md:w-1/2 pl-14 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                <span className="inline-block text-xs font-headline font-bold text-[#7C3AED] tracking-wider mb-1 uppercase">
                  STEP 01
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#7C3AED] transition-colors">
                  You finished your studies.
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md md:ml-auto font-body">
                  You sat through long lectures, finished challenging assignments, tackled exams in a different education system, and earned your degree.
                </p>
                <div className="mt-3 md:hidden">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5 text-xs text-slate-700 font-headline font-medium">
                    <span className="text-[#7C3AED] font-bold">✓</span>
                    <span>Your university qualification is complete</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 z-20">
                {activeStage === 1 && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-purple-500/25 animate-pulse-wave pointer-events-none" />
                    <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-pulse-wave-delayed pointer-events-none" />
                  </>
                )}

                {activeStage === 1 && (
                  <div className="absolute -inset-2 rounded-full border border-purple-400/35 border-dashed animate-orbit pointer-events-none">
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_6px_#7C3AED]" />
                  </div>
                )}

                <div
                  className={`w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-md ${
                    activeStage === 1
                      ? 'border-2 border-[#7C3AED] shadow-purple-300/70 scale-110 ring-4 ring-purple-100'
                      : 'border-2 border-slate-300 hover:border-purple-300 group-hover:scale-105'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      activeStage === 1
                        ? 'bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]'
                        : 'bg-slate-300 group-hover:bg-purple-400'
                    }`}
                  />
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 pl-16 order-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs inline-block text-xs text-slate-700 font-headline font-medium transition-all group-hover:border-purple-200 group-hover:shadow-sm">
                  <span className="text-[#7C3AED] font-bold mr-1.5">✓</span>
                  <span>Your university qualification is complete</span>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div
              className={`relative flex flex-col md:flex-row items-start md:items-center group transition-all duration-500 cursor-pointer ${
                activeStage === 2 ? 'opacity-100 scale-[1.01]' : 'opacity-70 hover:opacity-90'
              }`}
              data-stage="2"
              onClick={() => handleSelectStage(2)}
            >
              <div className="hidden md:block md:w-1/2 pr-16 text-right order-1">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs inline-block text-xs text-slate-700 font-headline font-medium transition-all group-hover:border-blue-200 group-hover:shadow-sm">
                  <span className="text-[#0047FF] font-bold mr-1.5">✦</span>
                  <span>You have courage and real independence</span>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 z-20">
                {activeStage === 2 && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-blue-500/25 animate-pulse-wave pointer-events-none" />
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse-wave-delayed pointer-events-none" />
                  </>
                )}

                {activeStage === 2 && (
                  <div className="absolute -inset-2 rounded-full border border-blue-400/40 border-dashed animate-orbit pointer-events-none">
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0047FF] shadow-[0_0_6px_#0047FF]" />
                  </div>
                )}

                <div
                  className={`w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-md ${
                    activeStage === 2
                      ? 'border-2 border-[#0047FF] shadow-blue-300/70 scale-110 ring-4 ring-blue-100'
                      : 'border-2 border-slate-300 hover:border-blue-300 group-hover:scale-105'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      activeStage === 2
                        ? 'bg-[#0047FF] shadow-[0_0_8px_#0047FF]'
                        : 'bg-slate-300 group-hover:bg-blue-400'
                    }`}
                  />
                </div>
              </div>

              <div className="md:w-1/2 pl-14 md:pl-16 order-2">
                <span className="inline-block text-xs font-headline font-bold text-[#0047FF] tracking-wider mb-1 uppercase">
                  STEP 02
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#0047FF] transition-colors">
                  You learned to live in a new country.
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md font-body">
                  Living miles away from family, figuring out visas, managing daily life on your own, and making friends in a foreign land. That shows huge strength.
                </p>
                <div className="mt-3 md:hidden">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5 text-xs text-slate-700 font-headline font-medium">
                    <span className="text-[#0047FF] font-bold">✦</span>
                    <span>You have courage and real independence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div
              className={`relative flex flex-col md:flex-row items-start md:items-center group transition-all duration-500 cursor-pointer ${
                activeStage === 3 ? 'opacity-100 scale-[1.01]' : 'opacity-70 hover:opacity-90'
              }`}
              data-stage="3"
              onClick={() => handleSelectStage(3)}
            >
              <div className="md:w-1/2 pl-14 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                <span className="inline-block text-xs font-headline font-bold text-[#7C3AED] tracking-wider mb-1 uppercase">
                  STEP 03
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#7C3AED] transition-colors">
                  Start your career with job ready skills.
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md md:ml-auto font-body">
                  You do not want to stay stuck in survival jobs. Learn how to become job ready by mastering essential employability skills for graduates and demonstrable practical skills for graduates.
                </p>
                <div className="mt-3 md:hidden">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1.5 text-xs text-slate-700 font-headline font-medium">
                    <span className="text-[#7C3AED] font-bold">★</span>
                    <span>In-demand skills for recent graduates</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 z-20">
                {activeStage === 3 && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-purple-500/25 animate-pulse-wave pointer-events-none" />
                    <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-pulse-wave-delayed pointer-events-none" />
                  </>
                )}

                {activeStage === 3 && (
                  <div className="absolute -inset-2 rounded-full border border-purple-400/40 border-dashed animate-orbit pointer-events-none">
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_6px_#7C3AED]" />
                  </div>
                )}

                <div
                  className={`w-11 h-11 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-md ${
                    activeStage === 3
                      ? 'border-2 border-[#7C3AED] shadow-purple-300/70 scale-110 ring-4 ring-purple-100'
                      : 'border-2 border-slate-300 hover:border-purple-300 group-hover:scale-105'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      activeStage === 3
                        ? 'bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]'
                        : 'bg-slate-300 group-hover:bg-purple-400'
                    }`}
                  />
                </div>
              </div>

              <div className="hidden md:block md:w-1/2 pl-16 order-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs inline-block text-xs text-slate-700 font-headline font-medium transition-all group-hover:border-purple-200 group-hover:shadow-sm">
                  <span className="text-[#7C3AED] font-bold mr-1.5">★</span>
                  <span>Land a role you are proud of</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
