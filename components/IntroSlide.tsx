import React from 'react';
import { SlideProps } from '../types';

const IntroSlide: React.FC<SlideProps> = ({ isActive, onNext }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center relative z-10 transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      {/* Main Title - Massive & Tight */}
      <div className="space-y-6 mb-16 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter drop-shadow-sm">
          前端研发<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-400">工作总结</span>
        </h1>
      </div>
      
      {/* Profile Card - Horizontal Clean Layout */}
      <div className="w-full max-w-2xl glass-card rounded-2xl p-3 pr-8 flex items-center gap-6 mb-12 text-left animate-fade-up hover:scale-[1.01] transition-transform duration-500" style={{ animationDelay: '200ms' }}>
        <div className="relative w-28 h-28 shrink-0">
           <div className="absolute inset-0 bg-slate-200 rounded-xl animate-pulse"></div>
           <img 
             src="https://7969-yiwo-dev-1go585lw40b41893-1395010318.tcb.qcloud.la/gpj/410cc4dedbd540e4df1e0622b1d1b933.jpg" 
             alt="郭鹏杰" 
             className="w-full h-full rounded-xl object-cover border border-white/80 shadow-lg relative z-10"
           />
        </div>
        
        <div className="flex-1 py-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-slate-900">郭鹏杰</h2>
            <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono text-slate-500 uppercase tracking-wider">前端开发工程师</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed text-balance font-light">
            25年5月入职至今。从前端单点开发到全栈交付，专注于构建高性能、高可用的企业级前端架构。
          </p>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1 pl-4 border-l border-slate-200/50">
           <div className="text-2xl font-bold text-emerald-600 font-mono">90%+</div>
           <div className="text-[10px] text-slate-400 uppercase tracking-wider">项目交付率</div>
        </div>
      </div>

      {/* Bottom KPI Grid */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-2xl animate-fade-up" style={{ animationDelay: '300ms' }}>
        {[
          { label: "核心 Web 项目", val: "12+" },
          { label: "移动端 App", val: "3+" },
          { label: "全栈覆盖率", val: "95%+" }
        ].map((item, i) => (
           <div key={i} className="glass-panel rounded-xl p-5 flex flex-col items-center justify-center hover:bg-white/80 transition-colors group">
              <span className="text-3xl font-black text-slate-800 font-mono group-hover:text-emerald-600 transition-colors">{item.val}</span>
              <span className="text-[11px] text-slate-500 uppercase tracking-widest mt-1.5 font-medium">{item.label}</span>
           </div>
        ))}
      </div>

      <div className="mt-16 animate-fade-up" style={{ animationDelay: '400ms' }}>
        <button onClick={onNext} className="group relative px-8 py-3 bg-slate-900 text-white rounded-lg overflow-hidden shadow-xl shadow-slate-900/10 transition-transform active:scale-95">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div className="relative flex items-center gap-2 text-sm font-medium tracking-wide">
            开始汇报
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </button>
      </div>

    </div>
  );
};

export default IntroSlide;