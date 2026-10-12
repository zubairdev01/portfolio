import { C, IMG } from '../data/content';
export default function Learning({ open }) {
  const items = C.notes.map(([k, alt]) => ({ src: IMG[k], alt }));
  return (
    <section className="sec" id="learning"><h2>Learning</h2><div>
      <p className="statement">I draw how things work before I build with them.</p>
      <p className="prose">Visual notes from my self-study of TypeScript, JavaScript, the browser and Redux, drawn in Excalidraw. Select a note to enlarge it.</p>
      <div className="gal notes" data-n={items.length}>
        {items.map((it, j) => (
          <button key={j} type="button" aria-label={'Enlarge note: ' + it.alt} onClick={() => open(items, j)}>
            <img src={it.src} alt={it.alt} loading="lazy" />
          </button>
        ))}
      </div>
    </div></section>
  );
}
