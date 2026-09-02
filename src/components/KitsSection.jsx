import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Sparkles, Shield, Maximize2, Check, Zap } from 'lucide-react';

export default function KitsSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="kits" className="py-20 bg-[#090c12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shirt className="w-3.5 h-3.5" />
            <span>Indumentaria Oficial Pro Clubs 2026/2027</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Rajdhani'] uppercase tracking-tight">
            Uniformes de <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">Los Mixxes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            La armadura oficial para competir en la máxima división. Diseñada con los colores institucionales y tecnología textil de vanguardia.
          </p>
        </div>

        {/* Display Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Kit Image Showcase */}
          <div className="lg:col-span-7">
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setIsZoomed(true)}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative group cursor-pointer overflow-hidden shadow-2xl"
            >
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-slate-300 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Ampliar Imagen</span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0b0e14]/80 flex items-center justify-center p-4">
                <img
                  src="/Uniformes/Uniformes.png"
                  alt="Uniformes Los Mixxes"
                  className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-semibold text-cyan-400">Colección Oficial Pro Clubs • Los Mixxes</span>
              </div>
            </motion.div>
          </div>

          {/* Kit Details & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
              <h3 className="text-2xl font-black text-white font-['Rajdhani'] flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span>Especificaciones de la Equipación</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Tecnología Aerodinámica</strong>
                    <span className="text-slate-400">Tejido ultraligero y microperforado para máxima libertad de movimiento durante el partido.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Escudo Oficial Bordado</strong>
                    <span className="text-slate-400">Emblema de Los Mixxes en alta definición con relieve metalizado en el pecho.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Detalles Cyan & Gold</strong>
                    <span className="text-slate-400">Inserciones de Neón Cyan y Vivo Dorado representativos de la identidad del club.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                  Titular & Visitante
                </span>
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  Edición Limitada
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Image Zoom Modal */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsZoomed(false)}
            >
              <div className="relative max-w-5xl w-full max-h-[90vh]">
                <button
                  onClick={() => setIsZoomed(false)}
                  className="absolute -top-12 right-0 p-2 text-white bg-white/20 rounded-full hover:bg-white/30"
                >
                  ✕
                </button>
                <img
                  src="/Uniformes/Uniformes.png"
                  alt="Uniformes Los Mixxes Zoom"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-cyan-500/40 shadow-2xl"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
