import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Bell, ChevronRight, X } from 'lucide-react';

export default function LiveTickerToast({ scrollTo }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const alerts = [
    {
      id: 1,
      badge: "🚨 Alerta Vestuario",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
      text: "KingMario a las 2:41 AM: 'Toditos valen monda. Mañana vuelvo de DC'",
      target: "press"
    },
    {
      id: 2,
      badge: "⚽ Récord del Club",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      text: "Cosimonox alcanza los 282 goles con 64 distinciones MVP",
      target: "roster"
    },
    {
      id: 3,
      badge: "📋 Manifiesto Táctico",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      text: "Plantel exige la 'Regla de los 3 Toques' para el ataque",
      target: "press"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % alerts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentAlert = alerts[currentIdx];

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAlert.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          onClick={() => scrollTo(currentAlert.target)}
          className="p-4 rounded-2xl bg-[#121826]/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-cyan-400 group relative overflow-hidden"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 mt-0.5">
                <Bell className="w-4 h-4 animate-bounce" />
              </div>
              <div>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${currentAlert.badgeColor}`}>
                  {currentAlert.badge}
                </span>
                <p className="text-xs font-semibold text-slate-200 mt-1.5 leading-snug group-hover:text-cyan-300 transition-colors">
                  {currentAlert.text}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="text-slate-500 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
