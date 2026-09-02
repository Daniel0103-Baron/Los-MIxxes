import React from 'react';
import { motion } from 'framer-motion';

export default function PassBeamPitch() {
  // SVG pass routes coordinates in %
  const routes = [
    // LM (Ximter) -> ST Left (Cosimonox)
    { x1: '16%', y1: '40%', x2: '33%', y2: '15%', color: '#06b6d4' },
    // LCM (KOOKIE1027) -> ST Right (KiingMario01)
    { x1: '38%', y1: '42%', x2: '67%', y2: '15%', color: '#f59e0b' },
    // RCM (TheLikidPaper) -> LM (Ximter)
    { x1: '62%', y1: '42%', x2: '16%', y2: '40%', color: '#10b981' },
    // ST Left (Cosimonox) -> ST Right (KiingMario01)
    { x1: '33%', y1: '15%', x2: '67%', y2: '15%', color: '#8b5cf6' }
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
      <defs>
        <linearGradient id="passGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {routes.map((route, idx) => (
        <g key={idx}>
          {/* Base dashed pass line */}
          <line
            x1={route.x1}
            y1={route.y1}
            x2={route.x2}
            y2={route.y2}
            stroke={route.color}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.35"
          />

          {/* Animated Light Pulse traveling down the pass line */}
          <motion.circle
            r="4"
            fill={route.color}
            initial={{ offsetDistance: '0%' }}
            animate={{
              cx: [route.x1, route.x2],
              cy: [route.y1, route.y2],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: idx * 0.6,
              ease: "linear"
            }}
            filter="drop-shadow(0 0 6px rgba(6,182,212,0.8))"
          />
        </g>
      ))}
    </svg>
  );
}
