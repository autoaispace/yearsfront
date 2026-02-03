import React from 'react';
import { SlideProps } from '../types';

const FutureSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col pt-24 pb-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      {/* Header */}
      <div className="flex items-end justify-between mb-8 border-b border-slate-200 pb-2 shrink-0">
        <div>
           <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 tracking-tight">未来规划</h2>
           <p className="text-slate-500 text-xs md:text-sm mt-2 font-light tracking-wide">VISION & PLAN</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
           <span className="font-mono text-[10px] md:text-xs text-slate-400">2026 展望</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto pr-1 scrollbar-hide pb-8">
        
        {/* === LEFT COLUMN: PERSONAL PLANNING (Span 7) === */}
        <div className="lg:col-span-7 flex flex-col gap-6">
           
           {/* Section 1: Business Focus (Concrete Goals) */}
           <div className="glass-card p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">01</span>
                <h3 className="text-lg font-bold text-slate-900">业务深耕</h3>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* B-Side */}
                <div className="group p-4 rounded-lg bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    <span className="text-sm font-bold text-slate-800">B端 · 稳固基座</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    聚焦代码的<span className="text-slate-900 font-medium border-b border-emerald-200">复用性</span>与<span className="text-slate-900 font-medium border-b border-emerald-200">安全性</span>，沉淀通用组件库，降低维护成本。
                  </p>
                </div>

                {/* C-Side */}
                <div className="group p-4 rounded-lg bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-white transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    <span className="text-sm font-bold text-slate-800">C端 · 极致体验</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    死磕<span className="text-slate-900 font-medium border-b border-emerald-200">交互细节</span>与<span className="text-slate-900 font-medium border-b border-emerald-200">加载性能</span>，打造丝滑流畅的用户操作流。
                  </p>
                </div>
              </div>
           </div>

           {/* Section 2: Personal Growth (Abstract Goals) */}
           <div className="glass-card p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">02</span>
                <h3 className="text-lg font-bold text-slate-900">能力进阶</h3>
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">向前端架构师思维转变</h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      跳出单纯的“功能实现”视角，更多从全局视角思考前端技术选型、系统设计与数据流转，为未来负责更复杂的系统做准备。
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">前端研发效能翻倍</h4>
                    <p className="text-xs text-slate-500 leading-relaxed text-justify">
                      引入自动化工具与 AI 辅助编程，不仅提升个人的 Coding 速度，更要探索提升团队整体交付效率的路径，我认为目前还是没有达到最优的开发方式，我会继续探索提升。
                    </p>
                  </div>
                </div>
              </div>
           </div>

        </div>

        {/* === RIGHT COLUMN: MUTUAL VALUE (Span 5) === */}
        <div className="lg:col-span-5 h-full">
           
           {/* The "Black Card" - Premium Look */}
           <div className="h-full rounded-xl p-8 bg-slate-900 text-slate-300 flex flex-col relative overflow-hidden shadow-2xl group border border-slate-800">
              
              {/* Subtle Texture */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              {/* Green Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/40 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-800/40 transition-colors duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                
                <div className="mb-8">
                   <p className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase mb-2">共赢策略</p>
                   <h3 className="text-3xl font-serif font-medium text-white leading-tight">
                     价值共生<br/>
                     <span className="text-emerald-400 italic">共同成就</span>
                   </h3>
                </div>

                <div className="flex-1 space-y-8">
                   <div className="relative pl-6 border-l border-slate-700 group-hover:border-emerald-500/50 transition-colors duration-500">
                     <h4 className="text-sm font-bold text-white mb-2">技术赋能业务</h4>
                     <p className="text-xs text-slate-400 leading-relaxed text-justify">
                       不为了技术而技术。在产品中引入更前沿的技术栈（如 AI 融合），本质是为了创造更好的用户体验和业务价值。
                     </p>
                   </div>

                   <div className="relative pl-6 border-l border-slate-700 group-hover:border-emerald-500/50 transition-colors duration-500">
                     <h4 className="text-sm font-bold text-white mb-2">平台成就个人</h4>
                     <p className="text-xs text-slate-400 leading-relaxed text-justify">
                       依托公司的平台与项目机会，打磨技术深度；同时用我成长的技术能力，反哺公司，实现真正的双向奔赴。
                     </p>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center opacity-60">
                   <span className="text-[10px] font-mono text-slate-500">郭鹏杰</span>
                   <div className="h-px w-24 bg-slate-600"></div>
                </div>

              </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default FutureSlide;