'use client';

import { useEffect, useRef, useState } from 'react';
import { activityExamples } from '@/lib/home-content';

const MAX = 5;
const AGES = ['just now', '1 min', '3 min', '6 min', '9 min'];

type Row = { id: number; index: number; isNew: boolean };

/** Hero wall: cycles example activity from all four products and sends a pulse along the hero line. */
export default function ActivityWall({ pulseId }: { pulseId: string }) {
  const [rows, setRows] = useState<Row[]>(() =>
    Array.from({ length: MAX }, (_, k) => ({ id: k, index: k, isNew: false })),
  );
  const next = useRef(MAX);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      const n = next.current++;
      setRows((prev) => [
        { id: n, index: n % activityExamples.length, isNew: true },
        ...prev.slice(0, MAX - 1).map((r) => ({ ...r, isNew: false })),
      ]);
      const pulse = document.getElementById(pulseId);
      if (pulse) {
        pulse.classList.remove('go');
        void pulse.offsetWidth;
        pulse.classList.add('go');
      }
    }, 2800);
    return () => window.clearInterval(timer);
  }, [pulseId]);

  return (
    <div className="wall" aria-label="Examples of what the products handle">
      <div className="wall-head">
        <span className="live">
          <i />
          Across the products
        </span>
        <span className="tag">EXAMPLES</span>
      </div>
      <ol className="feed" aria-live="off">
        {rows.map((r, pos) => {
          const e = activityExamples[r.index];
          return (
            <li key={r.id} className={`item${r.isNew ? ' new' : ''}`}>
              <span className={`dot ${e.product}`}>{e.abbr}</span>
              <span className="what">
                {e.what}
                <span>{e.where}</span>
              </span>
              <time>{AGES[pos]}</time>
            </li>
          );
        })}
      </ol>
      <div className="wall-foot">
        <span>The kind of activity each product handles</span>
      </div>
    </div>
  );
}
