import React, { useEffect, useState } from 'react';

export default function NumberTicker({ value, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endValue = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(endValue)) return;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
