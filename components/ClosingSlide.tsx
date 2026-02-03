import React from 'react';
import { SlideProps } from '../types';

// Mystery Avatar SVG Component
const MysteryAvatar = () => (
  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
    <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
);

// 14 Team Members Positions (Pre-calculated for a "Cloud" on the right side)
// Using percentages relative to the RIGHT COLUMN
const teamCloud = [
  // Core Center
  { id: 4, img: "4.png", size: "xl", left: 50, top: 45, delay: 0 },   // Boss (Center)
  { id: 1, img: "1.png", size: "lg", left: 30, top: 55, delay: 1 },   // Lead
  { id: 5, img: "5.png", size: "lg", left: 70, top: 35, delay: 2 },
  
  // Inner Ring
  { id: 7, img: "7.png", size: "md", left: 20, top: 30, delay: 3 },
  { id: 10, img: "10.png", size: "md", left: 80, top: 60, delay: 4 },
  { id: 8, img: "8.png", size: "md", left: 60, top: 70, delay: 5 },
  { id: 3, img: "3.png", size: "md", left: 40, top: 25, delay: 6 },
  
  // Outer Ring / Fillers
  { id: 2, img: "2.png", size: "sm", left: 10, top: 65, delay: 7 },
  { id: 6, img: "6.png", size: "sm", left: 85, top: 30, delay: 8 },
  { id: 9, img: "9.png", size: "sm", left: 35, top: 80, delay: 9 },
  
  // Mystery
  { id: 11, img: "mystery", size: "sm", left: 55, top: 15, delay: 10 },
  { id: 12, img: "mystery", size: "sm", left: 90, top: 50, delay: 11 },
  { id: 13, img: "mystery", size: "sm", left: 15, top: 45, delay: 12 },
  { id: 14, img: "mystery", size: "sm", left: 70, top: 85, delay: 13 },
];

const ClosingSlide: React.FC<SlideProps> = ({ isActive }) => {
  
  return (
    <div className={`w-full h-full relative overflow-hidden flex items-center justify-center transition-all duration-1000 ${isActive ? 'bg-[#F8FAFC]' : ''}`}>
      
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      <div className="w-full max-w-[1400px] h-full flex flex-col lg:flex-row px-6 md:px-12 py-12 relative z-10">
        
        {/* === LEFT COLUMN: TEXT CONTENT (No overlapping) === */}
        <div className={`flex-1 flex flex-col justify-center lg:pr-12 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
           
           {/* Huge Title */}
           <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
             感谢<br/>大家
           </h1>

           {/* Divider */}
           <div className="w-24 h-1.5 bg-emerald-500 rounded-full mb-8"></div>

           {/* The Sincere Speech */}
           <div className="glass-card p-6 md:p-8 rounded-2xl border-l-[6px] border-emerald-500 bg-white/60 backdrop-blur-md shadow-sm relative group">
              {/* Decorative Quote Icon */}
              <div className="absolute -top-4 -left-2 text-6xl text-emerald-500/20 font-serif">“</div>
              
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base text-justify font-light relative z-10">
                <p>
                  最后，真心感谢在座的每一位伙伴！
                </p>
                <p>
                  感谢公司给我成长的机会和平台，让我能从菜鸟慢慢成长；
                  感谢凌峰一直以来的悉心指导，不管是技术上还是工作上，都帮了我很多；
                  也感谢各位伙伴平时的配合和包容。
                </p>
                <p className="font-medium text-emerald-800 pt-2">
                  新一年，我会更用心、更专业，和大家一起并肩作战，为公司添一份力！
                </p>
              </div>

              {/* Decorative Quote Icon Bottom */}
              <div className="absolute -bottom-8 -right-2 text-6xl text-emerald-500/20 font-serif rotate-180">“</div>
           </div>

           {/* Footer Line */}
           <div className="mt-12 flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-[0.2em]">
              <span>2025 感恩同行</span>
              <div className="h-px flex-1 bg-slate-300"></div>
              <span>2026 共赴山海</span>
           </div>
        </div>

        {/* === RIGHT COLUMN: AVATAR CLOUD (Visuals) === */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
           {/* Background Glow for the cloud */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-full blur-[100px] opacity-60 animate-pulse"></div>

           {/* The Cloud Container */}
           <div className={`w-full h-full relative transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {teamCloud.map((member) => {
                // Size mapping
                let sizePx = "w-16 h-16"; 
                if (member.size === 'md') sizePx = "w-20 h-20";
                if (member.size === 'lg') sizePx = "w-24 h-24";
                if (member.size === 'xl') sizePx = "w-32 h-32";

                return (
                  <div
                    key={member.id}
                    className="absolute"
                    style={{
                      left: `${member.left}%`,
                      top: `${member.top}%`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: member.size === 'xl' ? 30 : member.size === 'lg' ? 20 : 10
                    }}
                  >
                     <div 
                       className="relative"
                       style={{ 
                         animation: `${member.id % 2 === 0 ? 'float-slow' : 'float-slower'} ${4 + (member.id % 3)}s ease-in-out infinite`,
                         animationDelay: `${member.delay * 0.2}s`
                       }}
                     >
                       <div className={`${sizePx} rounded-full p-1.5 glass-card shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-500 group cursor-pointer border-2 border-white/60`}>
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            {member.img === 'mystery' ? (
                              <MysteryAvatar />
                            ) : (
                              <img 
                                src={`https://7969-yiwo-dev-1go585lw40b41893-1395010318.tcb.qcloud.la/gpj/${member.img}`} 
                                alt="Team Member"
                                className="w-full h-full object-cover group-hover:contrast-110 transition-all"
                              />
                            )}
                          </div>
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                       </div>
                       
                       {/* Connection Line (Decorative - only for some) */}
                       {member.size === 'xl' && (
                          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border border-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 -z-10 animate-spin-slow pointer-events-none"></div>
                       )}
                     </div>
                  </div>
                );
              })}
           </div>
        </div>

        {/* MOBILE ONLY: Simple Avatar Grid at Bottom (since Right Column is hidden on mobile) */}
        <div className="lg:hidden w-full mt-8 pb-12">
           <div className="grid grid-cols-5 gap-2 justify-items-center">
             {teamCloud.slice(0, 10).map((member) => (
                <div key={member.id} className="w-10 h-10 rounded-full overflow-hidden border border-white shadow-sm">
                   {member.img === 'mystery' ? <MysteryAvatar /> : (
                     <img src={`https://7969-yiwo-dev-1go585lw40b41893-1395010318.tcb.qcloud.la/gpj/${member.img}`} className="w-full h-full object-cover" />
                   )}
                </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default ClosingSlide;