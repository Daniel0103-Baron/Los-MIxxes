import React from 'react';

export default function BorderBeam({
  size = 150,
  duration = 6,
  delay = 0,
  colorFrom = '#06b6d4',
  colorTo = '#f59e0b',
  className = ''
}) {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--anchor': '90deg',
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-full animate-border-beam rounded-full bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          offsetPath: `rect(0 auto auto 0 round 1.5rem)`,
          animationDuration: `var(--duration)`,
          animationDelay: `var(--delay)`
        }}
      />
    </div>
  );
}
