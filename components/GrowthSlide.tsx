import React from 'react';
import { SlideProps } from '../types';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const radarData = [
  { subject: '独立开发', A: 95, fullMark: 100 },
  { subject: '技术广度', A: 85, fullMark: 100 },
  { subject: '多线协作', A: 90, fullMark: 100 },
  { subject: '技术深度', A: 65, fullMark: 100 },
  { subject: '文档沉淀', A: 40, fullMark: 100 },
  { subject: '业务理解', A: 85, fullMark: 100 },
];

const newSkills = [
  "Google Auth & Ads Integration",
  "Vercel / DevOps Workflow",
  "Supabase / Backend Logic",
  "WeChat Cloud / Serverless",
  "Flutter Mobile Dev",
  "System Architecture Basics"
];

const GrowthSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col pt-24 pb-8 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      {/* Header - Fixed Height */}
      <div className="flex items-end justify-between mb-6 border-b border-slate-200 pb-2 shrink-0">
        <div>
           <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 tracking-tight">收获与反思</h2>
           <p className="text-slate-500 text-xs md:text-sm mt-2 font-light tracking-wide">GROWTH & REFLECTION</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
           <span className="font-mono text-[10px] md:text-xs text-slate-400">2025 回顾</span>
        </div>
      </div>

      {/* Main Content - Flex-1 to fill remaining height, NO SCROLL */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* === LEFT COLUMN: Visual Stats (Span 4) === */}
        <div className="lg:col-span-4 flex flex-col h-full gap-4">
          
          {/* 1. Radar Chart (Flex-1 to take available space) */}
          <div className="glass-card rounded-xl p-2 flex flex-col items-center justify-center relative flex-[3]">
             <div className="absolute top-3 left-4 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">能力模型</div>
             <div className="w-full h-full flex items-center justify-center">
               <ResponsiveContainer width="100%" height="90%">
                <RadarChart cx="50%" cy="55%" outerRadius="65%" data={radarData}>
                  <PolarGrid stroke="#E2E8F0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10, fontWeight: 600, fontFamily: 'sans-serif' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Ability"
                    dataKey="A"
                    stroke="#10B981"
                    strokeWidth={2}
                    fill="#10B981"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
             </div>
          </div>

          {/* 2. Skills List (Flex-2) */}
          <div className="flex-[2] glass-card rounded-xl p-5 flex flex-col justify-center">
             <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
               新技能解锁
             </h3>
             <ul className="grid grid-cols-1 gap-2">
               {newSkills.map((skill, idx) => (
                 <li key={idx} className="text-[11px] text-slate-600 font-light flex items-center gap-2">
                   <span className="font-mono text-emerald-500/50 text-[9px] font-bold">0{idx + 1}</span>
                   <span>{skill}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* === RIGHT COLUMN: Narrative (Span 8) === */}
        <div className="lg:col-span-8 flex flex-col h-full gap-4">
          
          {/* Top: Growth (Approx 40% height) */}
          <div className="glass-card p-6 md:p-8 rounded-xl relative overflow-hidden flex flex-col justify-center flex-[2]">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
             </div>

             <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-serif font-bold italic">A</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">成长与蜕变</h3>
             </div>
             
             <div className="prose prose-slate max-w-none">
               <p className="text-sm text-slate-600 leading-relaxed font-light text-justify">
                 这段时间成长肉眼可见。我已从入职时的辅助角色，蜕变为能<strong className="text-slate-900 font-medium">独立承担全流程</strong>的前端中坚力量。
                 不仅熟练掌握了 <span className="underline decoration-emerald-200/50 underline-offset-4">Vue3、Flutter、Next.js</span> 等多技术栈，更重要的是，
                 我适应了小团队<strong className="text-slate-900 font-medium">多线并行</strong>的高效节奏，学会了在复杂需求中合理规划与高效协作。
               </p>
             </div>
          </div>

          {/* Bottom: Reflection (Dark Mode) - Approx 60% height */}
          <div className="flex-[3] bg-slate-900 rounded-xl p-6 md:p-8 text-slate-300 flex flex-col relative overflow-hidden group">
             {/* Subtle Gradient */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
             
             <div className="relative z-10 h-full flex flex-col">
               <div className="flex items-center justify-between mb-6 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 font-serif font-bold italic border border-slate-700">B</div>
                    <h3 className="text-2xl font-serif font-bold text-white">不足与反思</h3>
                  </div>
               </div>

               {/* Grid Layout for Weaknesses to fit neatly */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 items-start">
                 {/* Weakness 1 */}
                 <div className="group/item h-full border-l border-slate-800 pl-4 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover/item:bg-emerald-500"></span>
                       技术沉淀不足
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed group-hover/item:text-slate-400">
                      忙于业务交付，缺乏对复用组件库与文档的系统性整理，后续需加强。
                    </p>
                 </div>

                 {/* Weakness 2 */}
                 <div className="group/item h-full border-l border-slate-800 pl-4 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover/item:bg-emerald-500"></span>
                       深度待钻研
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed group-hover/item:text-slate-400">
                      面对极端性能场景时，解决方案的“老练度”仍需提升，需钻研底层原理。
                    </p>
                 </div>

                 {/* Weakness 3 */}
                 <div className="group/item h-full border-l border-slate-800 pl-4 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-white font-bold mb-2 text-sm flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover/item:bg-emerald-500"></span>
                       统筹颗粒度
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed group-hover/item:text-slate-400">
                      多线并行时，偶尔因精力分散忽略体验细节，需提升对全局细节的把控。
                    </p>
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GrowthSlide;