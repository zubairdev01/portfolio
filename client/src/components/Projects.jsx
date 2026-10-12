import { C, IMG } from '../data/content';
const Tags = ({ s }) => (s.length > 0 ? <ul className="tags">{s.map((x) => <li key={x}>{x}</li>)}</ul> : null);

export default function Projects({ open }) {
  return (
    <section className="sec" id="projects"><h2>Projects</h2><div>
      {C.feat.map((p) => {
        const items = p.i.map(([k, alt]) => ({ src: IMG[k], alt }));
        return (
          <article className="proj" id={p.id} key={p.id}>
            <h3>{p.t}</h3><p className="role">{p.r}</p><p className="d">{p.d}</p>
            <Tags s={p.s} />
            {p.l.length > 0 && (
              <div className="links">
                {p.l.map(([label, href]) => <a key={href} className="btn" href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
              </div>
            )}
            <div className={'gal' + (p.tri ? ' tri' : '')} data-n={items.length}>
              {items.map((it, j) => (
                <button key={j} type="button" aria-label={'Enlarge: ' + it.alt} onClick={() => open(items, j)}>
                  <img src={it.src} alt={it.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </article>
        );
      })}
      <article className="proj"><h3>Automation with n8n</h3><p className="role">Workflow projects</p>
        {C.auto.map((p) => (
          <div id={p.id} key={p.id} style={{ margin: '18px 0 26px' }}>
            <b>{p.t}</b><p className="d" style={{ margin: '4px 0 10px' }}>{p.d}</p><Tags s={p.s} />
          </div>
        ))}
      </article>
      <article className="proj"><h3>More work</h3>
        <ul className="sm">
          {C.more.map((p) => (
            <li id={p.id} key={p.id}>
              <b>{p.l ? <a href={p.l} target="_blank" rel="noopener noreferrer">{p.t}</a> : p.t}</b>
              <span>{p.d}</span>
            </li>
          ))}
        </ul>
      </article>
    </div></section>
  );
}
