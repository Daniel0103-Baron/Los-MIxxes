import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMUNICADOS_DATA } from '../data/clubData';
import { FileText, ShieldAlert, CheckCircle, ChevronDown, Award, Calendar, AlertOctagon } from 'lucide-react';

export default function PressReleases() {
  const [selectedComunicado, setSelectedComunicado] = useState(COMUNICADOS_DATA[0]);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Disciplinario', 'Plantel Táctico', 'Institucional', 'Vestuario', 'Emergencia'];

  const filteredComunicados = COMUNICADOS_DATA.filter(c => 
    activeCategory === 'ALL' || c.category === activeCategory
  );

  return (
    <section id="press" className="py-20 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Documentos Institucionales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Rajdhani'] uppercase tracking-tight">
            Comunicados <span className="bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400 bg-clip-text text-transparent">Oficiales</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Pronunciamientos de la Junta Directiva, el Cuerpo Técnico y el Colectivo de Jugadores de Los Mixxes.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-red-500/20 text-red-300 border border-red-500/50 shadow-lg shadow-red-500/10'
                  : 'bg-[#121826] border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'Todos los Comunicados' : cat}
            </button>
          ))}
        </div>

        {/* Two-Column Layout: Left List, Right Official Document Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Releases */}
          <div className="lg:col-span-5 space-y-3">
            {filteredComunicados.map((item) => {
              const isSelected = selectedComunicado && selectedComunicado.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedComunicado(item)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#121826] border-red-500/50 shadow-xl shadow-red-950/30'
                      : 'bg-[#121826]/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-['Rajdhani'] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Document Reader Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedComunicado && (
                <motion.div
                  key={selectedComunicado.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#121826] border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Official Stamp Watermark */}
                  <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
                    <img src="/logo/Logo Mixxes.png" alt="Stamp" className="w-44 h-44 object-contain" />
                  </div>

                  <div className="relative z-10">
                    
                    {/* Official Document Top Banner */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-black">
                          🚨
                        </div>
                        <div>
                          <span className="text-xs text-red-400 font-bold tracking-widest uppercase block">
                            {selectedComunicado.officialSeal}
                          </span>
                          <span className="text-xs text-slate-400">{selectedComunicado.date}</span>
                        </div>
                      </div>

                      <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase">
                        OFICIAL
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Rajdhani'] mb-2 leading-tight">
                      {selectedComunicado.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold mb-6">
                      {selectedComunicado.subtitle}
                    </p>

                    {/* Main Text Content formatted like legal/club press notice */}
                    <div className="bg-black/40 p-5 sm:p-6 rounded-2xl border border-white/5 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal mb-8">
                      {selectedComunicado.content}
                    </div>

                    {/* Official Seal Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Verificado por la Junta Directiva</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-500">ID: LMX-2026-0{selectedComunicado.id}</span>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
