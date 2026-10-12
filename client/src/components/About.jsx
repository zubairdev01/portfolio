import { about } from '../data/content';
export default function About() {
  return (
    <section className="sec" id="about"><h2>About</h2><div>
      <p className="statement">{about.statement}</p>
      <p className="prose">{about.text}</p>
      <ul className="facts">{about.facts.map((f) => <li key={f}>{f}</li>)}</ul>
    </div></section>
  );
}
