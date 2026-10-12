import { C } from '../data/content';
export default function Skills() {
  return (
    <section className="sec" id="skills"><h2>Skills</h2>
      <div className="sk">
        {C.skills.map((k) => (
          <div key={k.t}>
            <h3>{k.t}</h3>
            {k.g.map(([level, text]) => <div key={level}><h4>{level}</h4><p>{text}</p></div>)}
            {k.u.length > 0 && (
              <p className="used">Used in: {k.u.map(([id, name], i) => (
                <span key={id}>{i > 0 && ', '}<a href={'#' + id}>{name}</a></span>
              ))}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
