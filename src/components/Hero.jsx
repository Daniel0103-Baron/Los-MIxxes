import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, ChevronDown, Flame, Zap, Award, Target } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import BorderBeam from './ui/BorderBeam';
import NumberTicker from './ui/NumberTicker';

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-amber-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-amber-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-sm">
              <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Portal Oficial de Competición Pro Clubs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white font-['Rajdhani'] leading-none mb-6">
              CLUB DE FÚTBOL <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
                LOS MIXXES
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal mb-8">
              Donde la garra táctica, el talento individual y la alta tensión de vestuario se unen para conquistar cada división. Bienvenidos a la casa oficial de Los Mixxes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={() => scrollTo('tactical')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>Ver Formación 4-4-2</span>
              </button>

              <button
                onClick={() => scrollTo('press')}
                className="px-6 py-3.5 rounded-xl bg-[#121826]/90 border border-white/10 hover:border-cyan-500/50 text-slate-200 hover:text-white font-bold text-sm tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Comunicados Oficiales</span>
              </button>
            </div>

            {/* Quick Metrics Bar with 21st.dev NumberTicker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-white/10 backdrop-blur-md">
              <div className="text-center lg:text-left border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl font-extrabold text-amber-400 font-['Rajdhani']">
                  <NumberTicker value={282} />
                </div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Goles Cosimonox</div>
              </div>
              <div className="text-center lg:text-left border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl font-extrabold text-cyan-400 font-['Rajdhani']">4-4-2</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Esquema Táctico</div>
              </div>
              <div className="text-center lg:text-left border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl font-extrabold text-emerald-400 font-['Rajdhani']">
                  <NumberTicker value={51} />
                </div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Goles KiingMario</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-extrabold text-purple-400 font-['Rajdhani']">
                  <NumberTicker value={81} suffix="%" />
                </div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Pase Preciso</div>
              </div>
            </div>
          </motion.div>

          {/* Right Logo Display with Spotlight & Border Beam */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-amber-500/30 animate-pulse blur-xl" />
              
              <SpotlightCard className="w-full h-full p-6 flex flex-col items-center justify-center group overflow-hidden">
                <BorderBeam size={180} duration={5} colorFrom="#06b6d4" colorTo="#f59e0b" />
                
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src="/logo/Logo Mixxes.png" 
                  alt="Los Mixxes Escudo Oficial"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-contain relative z-10 drop-shadow-[0_10px_25px_rgba(6,182,212,0.4)]"
                />

                <div className="relative z-10 mt-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
                    Escudo Oficial
                  </span>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
