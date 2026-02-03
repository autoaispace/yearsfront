import React from 'react';

interface NavigationProps {
  totalSlides: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ totalSlides, currentIndex, onSelect }) => {
  return (
    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-500 border border-slate-300 ${
            index === currentIndex 
              ? 'bg-primary scale-125 border-primary shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
              : 'bg-slate-200/50 hover:bg-slate-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Navigation;