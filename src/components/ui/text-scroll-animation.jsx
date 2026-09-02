"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { PLAYERS_DATA } from "@/data/clubData";
import { Shield, Trophy, Flame, Zap, Award, Sparkles, Target, Activity } from "lucide-react";

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 35, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.3, 0.8, 1]);

  return (
    <motion.span
      className={cn(
        "inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-300 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] font-['Rajdhani']",
        isSpace && "w-4"
      )}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

const PlayerCardItem = ({
  player,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.2, 0.8, 1]);

  return (
    <motion.div
      className="will-change-transform flex flex-col items-center"
      style={{ x, scale, y, opacity, transformOrigin: "center" }}
    >
      <div className="relative group cursor-pointer">
        {/* Glow Ring */}
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-tr ${player.color} blur-md opacity-70 group-hover:opacity-100 transition-opacity`} />
        
        <div className="relative w-28 sm:w-36 p-3 rounded-2xl bg-[#121826]/90 border border-white/20 backdrop-blur-xl flex flex-col items-center text-center shadow-xl">
          <div className="w-12 h-12 rounded-xl overflow-hidden mb-2 p-0.5 bg-black/40 border border-cyan-500/40">
            <img src={player.avatar} alt={player.name} className="w-full h-full object-contain" />
          </div>

          <h4 className="text-xs font-extrabold text-white font-['Rajdhani'] leading-tight truncate w-full">
            {player.name}
          </h4>
          
          <span className="text-[10px] text-cyan-400 font-semibold">{player.position}</span>

          <div className="mt-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-amber-400 uppercase">
            {player.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCardItem = ({
  feature,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 70, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 25, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const Icon = feature.icon;

  return (
    <motion.div
      className="will-change-transform"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    >
      <div className="relative group cursor-pointer">
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${feature.gradient} blur-md opacity-60 group-hover:opacity-100 transition-opacity`} />

        <div className="relative w-32 sm:w-44 p-4 rounded-2xl bg-[#121826]/95 border border-white/20 backdrop-blur-xl flex flex-col items-center text-center shadow-xl">
          <div className={`p-2.5 rounded-xl bg-white/10 ${feature.iconColor} mb-2`}>
            <Icon className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold text-white font-['Rajdhani'] uppercase tracking-wider block mb-0.5">
            {feature.title}
          </span>

          <span className="text-[11px] font-black text-amber-400 font-['Rajdhani']">
            {feature.value}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skiper31 = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "LOS MIXXES C.F.";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const iconCenterIndex = Math.floor(PLAYERS_DATA.length / 2);

  const clubFeatures = [
    { title: "Goles Totales", value: "282 Goles", icon: Trophy, gradient: "from-amber-500 to-yellow-600", iconColor: "text-amber-400" },
    { title: "Formación", value: "Esquema 4-4-2", icon: Zap, gradient: "from-cyan-500 to-blue-600", iconColor: "text-cyan-400" },
    { title: "Melena Verde", value: "51 Goles", icon: Flame, gradient: "from-emerald-500 to-green-600", iconColor: "text-emerald-400" },
    { title: "Pase Preciso", value: "81% Efectividad", icon: Target, gradient: "from-purple-500 to-indigo-600", iconColor: "text-purple-400" },
    { title: "Comunicados", value: "5 Oficiales", icon: Shield, gradient: "from-red-500 to-amber-600", iconColor: "text-red-400" }
  ];
  const featureCenterIndex = Math.floor(clubFeatures.length / 2);

  return (
    <ReactLenis root>
      <div className="w-full bg-[#0b0e14] relative overflow-hidden">
        
        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-amber-500/10 to-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

        {/* Section 1 — Floating Club Name Animation */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[80vh] flex-col items-center justify-center gap-4 overflow-hidden bg-[#090c12]/90 p-4 border-b border-cyan-500/20"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desliza para explorar la experiencia</span>
          </div>

          <div
            className="w-full max-w-5xl text-center text-4xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tighter"
            style={{ perspective: "600px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-md text-center mt-2">
            Pasión, Táctica y Tensión en Pro Clubs
          </p>
        </div>

        {/* Section 2 — Tactical Roster 3D Reveal */}
        <div
          ref={targetRef2}
          className="relative -mt-[25vh] box-border flex h-[90vh] flex-col items-center justify-center gap-6 overflow-hidden bg-[#0b0e14]/95 p-4 border-b border-amber-500/20"
        >
          <div className="text-center">
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase block mb-1">
              [ Alineación Titular ]
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white font-['Rajdhani'] uppercase">
              Integrantes del Plantel <span className="text-cyan-400">Los Mixxes</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl">
            {PLAYERS_DATA.map((player, index) => (
              <PlayerCardItem
                key={player.id}
                player={player}
                index={index}
                centerIndex={iconCenterIndex}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Section 3 — Club Milestones 3D Cards */}
        <div
          ref={targetRef3}
          className="relative -mt-[20vh] box-border flex h-[90vh] flex-col items-center justify-center gap-6 overflow-hidden bg-[#090c12]/95 p-4"
        >
          <div className="text-center">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase block mb-1">
              [ Hitos & Identidad ]
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white font-['Rajdhani'] uppercase">
              Ecosistema de Competición <span className="text-amber-400">Pro Clubs</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 max-w-5xl" style={{ perspective: "600px" }}>
            {clubFeatures.map((feature, index) => (
              <FeatureCardItem
                key={index}
                feature={feature}
                index={index}
                centerIndex={featureCenterIndex}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>

      </div>
    </ReactLenis>
  );
};

export { CharacterV1, PlayerCardItem, FeatureCardItem, Skiper31 };
