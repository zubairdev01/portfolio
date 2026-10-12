import { useEffect, useRef } from 'react';
export default function Lightbox({ items, index, onChange, onClose }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current && !ref.current.open) ref.current.showModal(); }, []);
  const go = (d) => onChange((index + d + items.length) % items.length);
  const it = items[index];
  return (
    <dialog ref={ref} aria-label="Image viewer" onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); }}>
      <img src={it.src} alt={it.alt} /><p>{it.alt}</p>
      <div className="bar">
        <button onClick={() => go(-1)}>Previous</button>
        <button onClick={() => go(1)}>Next</button>
        <button onClick={() => ref.current.close()}>Close</button>
      </div>
    </dialog>
  );
}
