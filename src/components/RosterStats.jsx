import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLAYERS_DATA } from '../data/clubData';
import { Trophy, Award, Zap, Shield, Flame, Activity, CheckCircle, AlertTriangle, Eye, Ruler, UserCheck } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import NumberTicker from './ui/NumberTicker';

export default function RosterStats() {
  const [filter, setFilter] = useState('ALL');
  const [activePlayerModal, setActivePlayerModal] = useState(null);

  const filteredPlayers = PLAYERS_DATA.filter(player => {
    if (filter === 'ST') return player.position.includes('DC') || player.position.includes('DI') || player.position.includes('DD');
    if (filter === 'MID') return player.position.includes('MC') || player.position.includes('MI') || player.position.includes('MCI') || player.position.includes('MCD');
    return true;
  });

  return (
    <section id="roster" className="py-20 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Plantilla Oficial de Jugadores</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Rajdhani'] uppercase">
              Estadísticas del <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-cyan-400 bg-clip-text text-transparent">Plantel</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 bg-[#121826] p-1.5 rounded-xl border border-white/10">
            {['ALL', 'ST', 'MID'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === cat ? 'bg-amber-500 text-black shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat === 'ALL' ? 'Todos los Jugadores' : cat === 'ST' ? 'Delanteros' : 'Mediocampistas'}
              </button>
            ))}
          </div>
        </div>

        {/* Player Cards Grid with 21st.dev SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard className="p-6 relative overflow-hidden group hover:border-cyan-500/40">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl p-0.5 bg-gradient-to-tr ${player.color} shadow-lg`}>
                      <div className="w-full h-full bg-[#0b0e14] rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={player.avatar} alt={player.name} className="w-10 h-10 object-contain" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Rajdhani'] leading-tight">{player.name}</h3>
                      <span className="text-xs text-cyan-400 font-semibold">{player.username}</span>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-black border ${player.badgeBg}`}>
                    {player.position}
                  </span>
                </div>

                {/* Player Height & Role info */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Ruler className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{player.height}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Rol: <strong className="text-amber-300">{player.role}</strong></span>
                  </div>
                </div>

                {/* Core Stats Grid with NumberTicker */}
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Goles</span>
                    <span className="text-lg font-black text-amber-400 font-['Rajdhani']">
                      <NumberTicker value={player.stats.goles} />
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Asistencias</span>
                    <span className="text-lg font-black text-cyan-400 font-['Rajdhani']">
                      <NumberTicker value={player.stats.asistencias} />
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Partidos</span>
                    <span className="text-lg font-black text-purple-400 font-['Rajdhani']">
                      <NumberTicker value={player.stats.apariciones} />
                    </span>
                  </div>
                </div>

                {/* Secondary Stats */}
                <div className="space-y-2 text-xs border-t border-white/10 pt-4">
                  <div className="flex justify-between text-slate-300">
                    <span>Estrella del Partido (MVP):</span>
                    <span className="font-bold text-amber-400">{player.stats.estrellaPartido}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tarjetas Rojas:</span>
                    <span className={`font-bold ${player.stats.tarjetasRojas > 0 ? 'text-red-400' : 'text-slate-400'}`}>
                      {player.stats.tarjetasRojas}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Pases completados:</span>
                    <span className="font-bold text-cyan-400">{player.stats.pasesCompletados}%</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tiros a puerta:</span>
                    <span className="font-bold text-emerald-400">{player.stats.tirosPuerta}%</span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePlayerModal(player)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Ficha Completa</span>
                </button>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Modal Player Full Details */}
        <AnimatePresence>
          {activePlayerModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setActivePlayerModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121826] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
              >
                <button
                  onClick={() => setActivePlayerModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl p-1 bg-gradient-to-tr ${activePlayerModal.color}`}>
                    <img src={activePlayerModal.avatar} alt={activePlayerModal.name} className="w-full h-full object-contain bg-[#0b0e14] rounded-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white font-['Rajdhani']">{activePlayerModal.name}</h3>
                    <p className="text-cyan-400 text-xs">{activePlayerModal.username} • {activePlayerModal.alias}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <span className="text-slate-400 block">Posición</span>
                    <span className="font-bold text-white text-sm">{activePlayerModal.position}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <span className="text-slate-400 block">Altura</span>
                    <span className="font-bold text-white text-sm">{activePlayerModal.height}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <span className="text-slate-400 block">Rol</span>
                    <span className="font-bold text-amber-400 text-sm">{activePlayerModal.role}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl">
                    <span className="text-slate-400 block">Efectividad Pase</span>
                    <span className="font-bold text-cyan-400 text-sm">{activePlayerModal.stats.pasesCompletados}%</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs bg-black/40 p-4 rounded-xl border border-white/10 mb-6">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Apariciones Totales:</span>
                    <span className="font-bold text-white">{activePlayerModal.stats.apariciones}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Goles Convertidos:</span>
                    <span className="font-bold text-amber-400">{activePlayerModal.stats.goles}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Asistencias Servidas:</span>
                    <span className="font-bold text-cyan-400">{activePlayerModal.stats.asistencias}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Estrella del Partido (MVP):</span>
                    <span className="font-bold text-emerald-400">{activePlayerModal.stats.estrellaPartido}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Portería Imbatida:</span>
                    <span className="font-bold text-white">{activePlayerModal.stats.portadaImbatida}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Tarjetas Rojas:</span>
                    <span className="font-bold text-red-400">{activePlayerModal.stats.tarjetasRojas}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePlayerModal(null)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white text-xs uppercase tracking-wider"
                >
                  Cerrar Ficha
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
