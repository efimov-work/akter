'use client';

import { useState, type MouseEvent } from 'react';
import { LOCATION_PHOTO, SPOTS } from '@/lib/content';

export default function MapSpots() {
  const [on, setOn] = useState(-1);

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const leave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mx', '0');
    e.currentTarget.style.setProperty('--my', '0');
    setOn(-1);
  };

  return (
    <figure className="mapph rv" onMouseMove={move} onMouseLeave={leave}>
      <img className="mapph-img" src={LOCATION_PHOTO.img} alt={LOCATION_PHOTO.alt} width={1280} height={720} loading="lazy" decoding="async" />
      <div className="mapph-shade" aria-hidden="true" />
      {SPOTS.map((s, i) => (
        <button
          type="button"
          key={s.name}
          className={`spot${s.main ? ' main' : ''}${s.side ? ` ${s.side}` : ''}${on === i ? ' on' : ''}`}
          style={{ left: s.x, top: s.y }}
          onClick={() => setOn(on === i ? -1 : i)}
          onMouseEnter={() => setOn(i)}
          onFocus={() => setOn(i)}
          onBlur={() => setOn(-1)}
          aria-label={`${s.name}: ${s.meta}`}
          aria-pressed={on === i}
        >
          <span className="sp-dot" aria-hidden="true" />
          <span className="sp-card" aria-hidden="true">
            <b>{s.name}</b>
            <span>{s.meta}</span>
          </span>
        </button>
      ))}
      <figcaption className="mapph-hint">Наведите на точку</figcaption>
    </figure>
  );
}
