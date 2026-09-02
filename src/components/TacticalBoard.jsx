import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLAYERS_DATA, VACANT_POSITIONS } from '../data/clubData';
import { Shield, Sparkles, User, Award, Activity, Info, X, Zap, Flame, UserPlus, CheckCircle, BarChart3, MessageSquareQuote } from 'lucide-react';
import PassBeamPitch from './ui/PassBeamPitch';
import SpotlightCard from './ui/SpotlightCard';

export default function TacticalBoard() {
  const [selectedPlayer, setSelectedPlayer] = useState(PLAYERS_DATA[0]);
  const [activeTab, setActiveTab] = useState('fut'); // 'fut' | 'stats' | 'quote'
  const [vacantModal, setVacantModal] = useState(null);
  const [showPassBeams, setShowPassBeams] = useState(true);

  // Position map for 4-4-2 formation on field
  const pitchPositions = [
    // Strikers
    { key: 'ST_LEFT', label: 'DI', top: '15%', left: '33%', playerId: 'cosimonox' },
    { key: 'ST_RIGHT', label: 'DD', top: '15%', left: '67%', playerId: 'kiingmario01' },
    
    // Midfielders
    { key: 'LM', label: 'MI', top: '40%', left: '16%', playerId: 'ximter' },
    { key: 'LCM', label: 'MCI', top: '42%', left: '38%', playerId: 'kookie1027' },
    { key: 'RCM', label: 'MCD', top: '42%', left: '62%', playerId: 'thelikidpaper' },
    { key: 'RM', label: 'MD', top: '40%', left: '84%', isVacant: true, vacantInfo: VACANT_POSITIONS[0] },
    
    // Defenders
    { key: 'LB', label: 'LI', top: '68%', left: '16%', isVacant: true, vacantInfo: VACANT_POSITIONS[1] },
    { key: 'LCB', label: 'DFC', top: '70%', left: '38%', isVacant: true, vacantInfo: VACANT_POSITIONS[2] },
    { key: 'RCB', label: 'DFC', top: '70%', left: '62%', isVacant: true, vacantInfo: VACANT_POSITIONS[3] },
    { key: 'RB', label: 'LD', top: '68%', left: '84%', isVacant: true, vacantInfo: VACANT_POSITIONS[4] },
    
    // Goalkeeper
    { key: 'GK', label: 'POR', top: '88%', left: '50%', isVacant: true, vacantInfo: VACANT_POSITIONS[5] }
  ];

  const getPlayerData = (id) => PLAYERS_DATA.find(p => p.id === id);

  return (
    <section id="tactical" className="py-20 relative overflow-hidden bg-[#090c12]">
      {/* Stadium Corner Floodlight Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Pizarra Táctica Pro Clubs • EA Sports FC HUD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Rajdhani'] uppercase tracking-tight">
            Alineación <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">Esquema 4-4-2</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Explora el campo táctico interactivo de Los Mixxes. Haz clic sobre cada jugador para visualizar su carta especial FUT, atributos e historial de vestuario.
          </p>

          {/* Interactive Controls Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setShowPassBeams(!showPassBeams)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                showPassBeams 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/10' 
                  : 'bg-[#121826] text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showPassBeams ? 'Ocultar Líneas de Pase' : 'Ver Líneas de Pase Laser'}</span>
            </button>

            <span className="text-xs text-slate-500 hidden sm:inline">•</span>

            <div className="px-3.5 py-2 rounded-xl bg-[#121826] border border-white/10 text-xs text-slate-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>5 Titulares Registrados</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pitch Container */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/80 soccer-pitch">
              
              {/* Corner Stadium Floodlights */}
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-cyan-400/20 blur-md pointer-events-none" />
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-cyan-400/20 blur-md pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-amber-400/20 blur-md pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-amber-400/20 blur-md pointer-events-none" />

              {/* Animated Laser Passing Routes overlay */}
              {showPassBeams && <PassBeamPitch />}

              {/* Pitch Markings Layer */}
              <div className="absolute inset-0 border-4 border-white/25 m-3 rounded-2xl pointer-events-none">
                {/* Halfway Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/25 -translate-y-1/2" />
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-44 sm:h-44 rounded-full border-2 border-white/25 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/50 rounded-full shadow-md" />
                </div>
                {/* Penalty Area Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-24 sm:h-32 border-b-2 border-x-2 border-white/25 rounded-b-xl" />
                {/* Penalty Area Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-24 sm:h-32 border-t-2 border-x-2 border-white/25 rounded-t-xl" />
              </div>

              {/* Player Markers on Pitch (Mini FUT Cards) */}
              {pitchPositions.map((pos) => {
                const player = pos.playerId ? getPlayerData(pos.playerId) : null;
                const isSelected = selectedPlayer && selectedPlayer.id === pos.playerId;

                return (
                  <motion.div
                    key={pos.key}
                    style={{ top: pos.top, left: pos.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (player) {
                        setSelectedPlayer(player);
                      } else if (pos.vacantInfo) {
                        setVacantModal(pos.vacantInfo);
                      }
                    }}
                  >
                    {player ? (
                      <div className="flex flex-col items-center group">
                        {/* Mini FUT Shield Card Token */}
                        <div className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-2xl p-1 transition-all duration-300 shadow-2xl ${
                          isSelected 
                            ? 'ring-4 ring-cyan-400 ring-offset-2 ring-offset-black scale-110 shadow-cyan-500/60' 
                            : 'hover:ring-2 hover:ring-amber-400'
                        }`}>
                          <div className={`w-full h-full rounded-xl bg-gradient-to-b ${player.color} p-0.5 flex flex-col items-center justify-between overflow-hidden shadow-inner border border-white/30`}>
                            
                            {/* Top FUT Rating & Position */}
                            <div className="w-full flex items-center justify-between px-1.5 pt-1">
                              <span className="text-[11px] sm:text-xs font-black text-white font-['Rajdhani'] leading-none">
                                {player.rating}
                              </span>
                              <span className="text-[9px] font-extrabold text-black bg-white/90 px-1 rounded uppercase">
                                {pos.label}
                              </span>
                            </div>

                            {/* Avatar */}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#0b0e14] border border-white/30 p-0.5">
                              <img src={player.avatar} alt={player.name} className="w-full h-full object-contain" />
                            </div>

                            {/* Bottom Name Ribbon */}
                            <div className="w-full bg-black/70 py-0.5 text-center text-[9px] sm:text-[10px] font-black text-white uppercase tracking-tighter truncate px-0.5">
                              {player.name}
                            </div>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Vacant Spot Node */
                      <div className="flex flex-col items-center group opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border-2 border-dashed border-cyan-500/50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-slate-300 shadow-lg group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
                          <UserPlus className="w-4 h-4 text-cyan-400 mb-0.5" />
                          <span className="text-[9px] font-black text-cyan-300">{pos.label}</span>
                        </div>
                        <div className="mt-1 px-2 py-0.5 rounded-full bg-black/80 border border-white/10 text-slate-400 text-[9px] font-bold whitespace-nowrap">
                          + Fichaje
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}

            </div>
          </div>

          {/* EA SPORTS FC / FUT Style Player Card & HUD Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedPlayer ? (
                <SpotlightCard
                  key={selectedPlayer.id}
                  spotlightColor="rgba(6, 182, 212, 0.25)"
                  className="p-6 sm:p-7 relative overflow-hidden border border-cyan-500/40 shadow-2xl"
                >
                  {/* FUT Background Gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${selectedPlayer.color} opacity-25`} />

                  <div className="relative z-10">
                    
                    {/* FUT Header Badge & Name */}
                    <div className="flex items-start justify-between mb-6 border-b border-white/10 pb-5">
                      <div className="flex items-center gap-4">
                        {/* Overall Rating FUT Badge */}
                        <div className={`w-16 h-20 rounded-2xl bg-gradient-to-b ${selectedPlayer.color} p-1 shadow-xl flex flex-col items-center justify-center border border-white/40`}>
                          <span className="text-2xl font-black text-white font-['Rajdhani'] leading-none">
                            {selectedPlayer.rating}
                          </span>
                          <span className="text-[10px] font-extrabold text-black bg-white px-1.5 rounded uppercase mt-1">
                            {selectedPlayer.position}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani'] leading-none mb-1">
                            {selectedPlayer.name}
                          </h3>
                          <p className="text-cyan-400 text-xs font-semibold">{selectedPlayer.username} • {selectedPlayer.alias}</p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border uppercase ${selectedPlayer.badgeBg}`}>
                              Rol: {selectedPlayer.role}
                            </span>
                            <span className="text-[11px] text-slate-400">{selectedPlayer.height}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FUT Card Navigation Tabs */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/50 border border-white/10 mb-6 text-xs font-bold">
                      <button
                        onClick={() => setActiveTab('fut')}
                        className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          activeTab === 'fut' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>Medias FUT</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('stats')}
                        className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          activeTab === 'stats' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Stats Reales</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('quote')}
                        className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          activeTab === 'quote' ? 'bg-cyan-500 text-black shadow-md' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <MessageSquareQuote className="w-3.5 h-3.5" />
                        <span>Vestuario</span>
                      </button>
                    </div>

                    {/* Tab 1: FUT Attributes (PAC, SHO, PAS, DRI, DEF, PHY) */}
                    {activeTab === 'fut' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {[
                            { label: 'PAC (Velocidad)', val: selectedPlayer.futStats.pac, col: 'text-amber-400', bg: 'from-amber-500 to-yellow-500' },
                            { label: 'SHO (Tiro)', val: selectedPlayer.futStats.sho, col: 'text-red-400', bg: 'from-red-500 to-amber-500' },
                            { label: 'PAS (Pase)', val: selectedPlayer.futStats.pas, col: 'text-cyan-400', bg: 'from-cyan-500 to-blue-500' },
                            { label: 'DRI (Regate)', val: selectedPlayer.futStats.dri, col: 'text-emerald-400', bg: 'from-emerald-500 to-green-500' },
                            { label: 'DEF (Defensa)', val: selectedPlayer.futStats.def, col: 'text-purple-400', bg: 'from-purple-500 to-indigo-500' },
                            { label: 'PHY (Físico)', val: selectedPlayer.futStats.phy, col: 'text-blue-400', bg: 'from-blue-500 to-cyan-500' }
                          ].map((attr) => (
                            <div key={attr.label} className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                              <div className="flex justify-between items-center text-xs mb-1 font-semibold">
                                <span className="text-slate-300">{attr.label}</span>
                                <span className={`font-black font-['Rajdhani'] text-sm ${attr.col}`}>{attr.val}</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r ${attr.bg} rounded-full`} style={{ width: `${attr.val}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                          <strong className="text-white block font-bold mb-0.5">Perfil Táctico del DT:</strong>
                          <span>{selectedPlayer.roleDescription}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 2: Real Stats (Goles, Asistencias, Partidos, MVPs) */}
                    {activeTab === 'stats' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase block font-semibold">Goles</span>
                            <span className="text-2xl font-black text-amber-400 font-['Rajdhani']">{selectedPlayer.stats.goles}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase block font-semibold">Asistencias</span>
                            <span className="text-2xl font-black text-cyan-400 font-['Rajdhani']">{selectedPlayer.stats.asistencias}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                            <span className="text-[10px] text-slate-400 uppercase block font-semibold">Partidos</span>
                            <span className="text-2xl font-black text-purple-400 font-['Rajdhani']">{selectedPlayer.stats.apariciones}</span>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs bg-black/40 p-3.5 rounded-xl border border-white/5">
                          <div className="flex justify-between py-1 border-b border-white/5">
                            <span className="text-slate-400">Estrella del Partido (MVP):</span>
                            <span className="font-bold text-amber-400">{selectedPlayer.stats.estrellaPartido}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-white/5">
                            <span className="text-slate-400">Tarjetas Rojas:</span>
                            <span className="font-bold text-red-400">{selectedPlayer.stats.tarjetasRojas}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-white/5">
                            <span className="text-slate-400">Pases completados:</span>
                            <span className="font-bold text-cyan-400">{selectedPlayer.stats.pasesCompletados}%</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-slate-400">Tiros a puerta:</span>
                            <span className="font-bold text-emerald-400">{selectedPlayer.stats.tirosPuerta}%</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab 3: Vestuario & Frase Icónica */}
                    {activeTab === 'quote' && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-cyan-500/10 border border-amber-500/30">
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-2">
                            💬 Declaración Icónica de Vestuario
                          </span>
                          <blockquote className="text-sm font-semibold text-white italic leading-relaxed">
                            {selectedPlayer.quote}
                          </blockquote>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5">
                          {selectedPlayer.roleDescription}
                        </p>
                      </motion.div>
                    )}

                  </div>
                </SpotlightCard>
              ) : null}
            </AnimatePresence>
          </div>

        </div>

        {/* Vacant Spot Postulation Modal */}
        <AnimatePresence>
          {vacantModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setVacantModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121826] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
              >
                <button
                  onClick={() => setVacantModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  ✕
                </button>

                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4">
                  <UserPlus className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  Puesto Vacante en la Alineación
                </span>
                <h3 className="text-2xl font-black text-white font-['Rajdhani'] mb-2">
                  {vacantModal.name} ({vacantModal.code})
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 bg-black/40 p-3.5 rounded-xl border border-white/5">
                  Esta posición está disponible en el esquema 4-4-2 de Los Mixxes para próximos fichajes. ¿Crees que tienes la garra para ser titular?
                </p>

                <button
                  onClick={() => {
                    alert(`¡Solicitud enviada para el puesto de ${vacantModal.name}! El DT revisará tus stats.`);
                    setVacantModal(null);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
                >
                  Postularme para este Puesto
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
