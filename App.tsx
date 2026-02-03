import React, { useState, useEffect, useCallback } from 'react';
import IntroSlide from './components/IntroSlide';
import WorkSlide from './components/WorkSlide';
import GrowthSlide from './components/GrowthSlide';
import FutureSlide from './components/FutureSlide';
import ClosingSlide from './components/ClosingSlide';
import Navigation from './components/Navigation';
import { SlideType } from './types';

const SLIDES = [
  SlideType.INTRO,
  SlideType.WORK,
  SlideType.GROWTH,
  SlideType.FUTURE,
  SlideType.CLOSING
];

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlideIndex(index);
      setTimeout(() => setIsAnimating(false), 1000); // Slower, heavier feel
    }
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlideIndex + 1);
  }, [currentSlideIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlideIndex - 1);
  }, [currentSlideIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Wheel navigation (debounced)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (e.deltaY > 50) {
          nextSlide();
        } else if (e.deltaY < -50) {
          prevSlide();
        }
      }, 100);
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeoutId);
    };
  }, [isAnimating, nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen bg-[#F8FAFC] text-slate-800 overflow-hidden font-sans">
      {/* Studio White Mesh Gradient Background - Cleaner, Colder */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0]"></div>
        
        {/* Animated Orbs - Extremely subtle, purely texture */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-white rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#CBD5E1] rounded-full blur-[150px] opacity-40 mix-blend-multiply animate-blob" />
        <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] bg-emerald-50 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-blob animation-delay-2000" />
        
        {/* Noise Grain - Essential for the "Paper/Titanium" look */}
        <div className="absolute inset-0 opacity-[0.35] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full perspective-1000">
        {SLIDES.map((slide, index) => {
          let positionClass = 'translate-y-[60px] opacity-0 blur-md scale-95 pointer-events-none';
          if (index === currentSlideIndex) {
            positionClass = 'translate-y-0 opacity-100 blur-0 scale-100 z-10';
          } else if (index < currentSlideIndex) {
            positionClass = '-translate-y-[60px] opacity-0 blur-md scale-95 pointer-events-none';
          }

          return (
            <div
              key={slide}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${positionClass}`}
            >
              <div className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
                 {/* Inner container to ensure max-width and centering */}
                <div className="w-full max-w-[1400px] h-full flex flex-col justify-center px-6 md:px-12 relative">
                  {slide === SlideType.INTRO && <IntroSlide isActive={index === currentSlideIndex} onNext={nextSlide} />}
                  {slide === SlideType.WORK && <WorkSlide isActive={index === currentSlideIndex} />}
                  {slide === SlideType.GROWTH && <GrowthSlide isActive={index === currentSlideIndex} />}
                  {slide === SlideType.FUTURE && <FutureSlide isActive={index === currentSlideIndex} />}
                  {slide === SlideType.CLOSING && <ClosingSlide isActive={index === currentSlideIndex} />}
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* Navigation Controls */}
      <Navigation 
        totalSlides={SLIDES.length} 
        currentIndex={currentSlideIndex} 
        onSelect={goToSlide} 
      />
      
      {/* Floating Info */}
      <div className="absolute top-8 left-8 z-50 flex items-center gap-3">
         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse"></div>
         <span className="text-slate-500 text-[10px] font-mono tracking-widest uppercase bg-white/40 px-3 py-1.5 rounded-md border border-white/60 backdrop-blur-md">
           2025 - 2026 年度汇报 · 郭鹏杰
         </span>
      </div>
    </div>
  );
};

export default App;