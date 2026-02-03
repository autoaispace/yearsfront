import React from 'react';
import { SlideProps } from '../types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';

const techData = [
  { name: 'Vue3', value: 95, color: '#10B981' }, // Emerald
  { name: 'Flutter', value: 90, color: '#334155' }, // Slate 700
  { name: 'React', value: 80, color: '#475569' }, // Slate 600
  { name: 'UniApp', value: 78, color: '#64748B' }, // Slate 500
  { name: 'Node', value: 70, color: '#94A3B8' }, // Slate 400
  { name: 'DB', value: 60, color: '#CBD5E1' }, // Slate 300
];

const allTags = [
  "Vue3", "Flutter", "UniApp", "React", "Next.js", "TypeScript",
  "Express", "MongoDB", "MySQL", "Nginx", "Vercel", "Supabase",
  "原生HTML", "微信云托管", "微信小程序"
];

const WorkSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col pt-24 pb-8 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      {/* Header */}
      <div className="flex items-end justify-between mb-6 border-b border-slate-200 pb-2 shrink-0">
        <div>
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-serif">工作成果回顾</h2>
           <p className="text-slate-500 text-xs md:text-sm mt-2 font-light tracking-wide">REVIEW</p>
        </div>
        <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">2025.05 - NOW</span>
      </div>

      {/* Main Grid - Bento Layout */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: PROJECTS GRID (Span 9) */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 h-full">
          
          {/* 1. Core Project: AI Engineer Web (Span 2 col, 1 row) - White Style */}
          <div className="col-span-1 md:col-span-2 row-span-1 glass-card rounded-xl p-5 border-l-4 border-emerald-500 relative overflow-hidden group hover:shadow-lg transition-all">
             <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded-bl-lg">核心</div>
             <div className="flex flex-col h-full justify-between relative z-10">
               <div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">AI 工程师 Web & 官网</h3>
                 <p className="text-xs text-slate-500 leading-relaxed w-5/6">
                   Vue3 + JS 独立负责。解决复杂交互与性能难题，入职以来最完整的交付成果。
                 </p>
               </div>
               <div className="flex gap-2 mt-2">
                 <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Vue3</span>
                 <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">JavaScript</span>
               </div>
             </div>
             {/* Decorative Icon */}
             <svg className="absolute bottom-4 right-4 w-12 h-12 text-slate-100 group-hover:text-emerald-50 group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>

          {/* 2. Seekrec (Span 1 col) - Slate Style */}
          <div className="col-span-1 md:col-span-1 row-span-1 glass-card rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                 <h3 className="text-sm font-bold text-slate-800">Seekrec App</h3>
               </div>
               <p className="text-[10px] text-slate-500 leading-relaxed">
                 入职初期接手 Flutter 移动端，快速上手 Dart 语言与移动端调试流。
               </p>
             </div>
             <span className="text-[9px] font-mono text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded w-fit">Flutter</span>
          </div>

          {/* 3. Core Project: Yiwo (Span 2 col, 1 row) - Dark Style */}
          <div className="col-span-1 md:col-span-2 row-span-1 bg-slate-900 rounded-xl p-5 relative overflow-hidden group shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
             {/* Green Pulse */}
             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981] animate-pulse"></div>
             
             <div className="flex flex-col h-full justify-between relative z-10">
               <div>
                 <h3 className="text-lg font-bold text-white mb-1">衣我小程序 <span className="text-emerald-400 text-xs font-light ml-2">全栈闭环</span></h3>
                 <p className="text-xs text-slate-400 leading-relaxed w-5/6">
                   独立完成 AI 试穿、支付、店铺核心功能。技术栈：UniApp + 微信云托管 + Express + Mongo。
                 </p>
               </div>
               <div className="flex gap-2 mt-2">
                 <span className="text-[10px] font-mono text-emerald-300 border border-emerald-900 bg-emerald-900/30 px-2 py-0.5 rounded">全栈闭环</span>
                 <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-800 px-2 py-0.5 rounded">微信云托管</span>
                 <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-800 px-2 py-0.5 rounded">Express</span>
                 <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-800 px-2 py-0.5 rounded">MongoDB</span>
                 <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-800 px-2 py-0.5 rounded">Node</span>
                 <span className="text-[10px] font-mono text-slate-400 border border-slate-700 bg-slate-800 px-2 py-0.5 rounded">uniapp</span>
               </div>
             </div>
          </div>

          {/* 4. Aotu (Span 1 col) - Slate Style */}
          <div className="col-span-1 md:col-span-1 row-span-1 glass-card rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                 <h3 className="text-sm font-bold text-slate-800">凹凸官网</h3>
               </div>
               <p className="text-[10px] text-slate-500 leading-relaxed">
                 Next.js 构建高性能品牌门户，注重 SEO 与首屏加载速度。
               </p>
             </div>
             <div className="flex gap-1">
               <span className="text-[9px] font-mono text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">HTML</span>
               <span className="text-[9px] font-mono text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">原生</span>
             </div>
          </div>

          {/* 5. Matrix (Span 1.5 -> handled by grid) */}
          <div className="col-span-1 md:col-span-1 row-span-1 glass-card rounded-xl p-5 hover:border-slate-300 transition-all flex flex-col justify-between">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                 <h3 className="text-sm font-bold text-slate-800">AI 矩阵产品</h3>
               </div>
               <div className="grid grid-cols-1 gap-1.5">
               <div className="text-[10px] text-slate-500">• AI机会挖掘 SaaS</div>
                  <div className="text-[10px] text-slate-500">• 语音笔记转写 SaaS</div>
                  <div className="text-[10px] text-slate-500">• 纹身 AI 生成工具</div>
               </div>
             </div>
             <span className="text-[9px] font-mono text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded w-fit">Next.js</span>
          </div>

          {/* 6. Filing (Span 2) - Compact */}
          <div className="col-span-1 md:col-span-2 row-span-1 glass-card rounded-xl p-4 flex items-center justify-between hover:border-slate-300 transition-all">
             <div className="flex flex-col">
               <div className="flex items-center gap-2">
                 <h3 className="text-sm font-bold text-slate-800">3款 备案前端产品</h3>
                 <span className="px-1.5 py-0.5 bg-slate-100 text-[9px] text-slate-500 rounded">合规化</span>
               </div>
               <p className="text-[10px] text-slate-500 mt-1">配合后端完成数据适配，确保业务平稳上线。</p>
             </div>
             <span className="text-[9px] font-mono text-slate-400 border border-slate-200 px-2 py-1 rounded">UniApp Multi-end</span>
          </div>

        </div>

        {/* RIGHT COLUMN: TECH STACK (Span 3) */}
        <div className="lg:col-span-3 h-full">
          <div className="glass-card rounded-xl p-5 h-full flex flex-col relative overflow-hidden">
            
            <div className="mb-4 z-10 shrink-0">
               <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2 mb-1">
                 Tech Stack
               </h3>
               <div className="w-8 h-0.5 bg-emerald-500 rounded-full"></div>
            </div>

            {/* Bar Chart - Flexible height */}
            <div className="flex-1 min-h-[150px] w-full mb-6 z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={techData} margin={{ left: 0, right: 10, top: 0, bottom: 0 }}>
                  <CartesianGrid horizontal={false} stroke="#E2E8F0" strokeDasharray="3 3" />
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={50} 
                    tick={{fill: '#64748B', fontSize: 10, fontWeight: 500, fontFamily: 'monospace'}} 
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(241, 245, 249, 0.5)'}}
                    contentStyle={{ borderRadius: '6px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '10px', padding: '4px 8px' }}
                  />
                  <Bar dataKey="value" barSize={8} radius={[0, 4, 4, 0]}>
                    {techData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tag Cloud - Bottom section */}
            <div className="shrink-0 relative z-10">
               <h4 className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Keywords</h4>
               <div className="flex flex-wrap gap-1.5 content-start">
                  {allTags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[9px] px-2 py-1 rounded border transition-all cursor-default ${
                        ['Vue3', 'Flutter', 'UniApp'].includes(tag) 
                          ? 'bg-slate-800 text-white border-slate-800 font-bold' 
                          : 'bg-white text-slate-500 border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkSlide;