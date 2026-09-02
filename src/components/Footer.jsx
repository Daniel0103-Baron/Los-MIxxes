import React from 'react';
import { Shield, Trophy, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ scrollTo }) {
  return (
    <footer className="bg-[#07090e] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-500 p-0.5 shadow-lg">
                <img src="/logo/Logo Mixxes.png" alt="Logo" className="w-full h-full object-contain bg-[#0b0e14] rounded-[10px] p-1" />
              </div>
              <span className="text-2xl font-black text-white font-['Rajdhani'] tracking-wider">
                LOS MIXXES C.F.
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed">
              Sitio web oficial del club Los Mixxes Pro Clubs. Táctica 4-4-2, estadísticas del plantel, noticias de vestuario y comunicados oficiales.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs font-semibold text-slate-300">
            <button onClick={() => scrollTo('hero')} className="hover:text-cyan-400 transition-colors">Inicio</button>
            <button onClick={() => scrollTo('tactical')} className="hover:text-cyan-400 transition-colors">Alineación 4-4-2</button>
            <button onClick={() => scrollTo('roster')} className="hover:text-cyan-400 transition-colors">Plantilla & Stats</button>
            <button onClick={() => scrollTo('news')} className="hover:text-cyan-400 transition-colors">Noticias</button>
            <button onClick={() => scrollTo('press')} className="hover:text-cyan-400 transition-colors">Comunicados</button>
            <button onClick={() => scrollTo('kits')} className="hover:text-cyan-400 transition-colors">Uniformes</button>
          </div>

        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Los Mixxes C.F. Todos los derechos reservados. Diseñado para Pro Clubs.</p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
