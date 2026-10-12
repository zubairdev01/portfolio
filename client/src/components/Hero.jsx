import { hero, IMG } from '../data/content';
export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Muhammad<br />Zubair</h1>
        <div className="meta">
          <div>Role<b>Frontend developer<br />CS student</b></div>
          <div>Location<b>Lahore, Pakistan</b></div>
          <div>Portfolio<b>2026</b></div>
        </div>
        <p className="lead">{hero.headline}</p>
        <p className="sub">{hero.text}</p>
        <div className="btns">
          <a className="btn p" href="#projects">View projects</a>
          <a className="btn" href="#contact">Contact me</a>
          <a className="btn" href="/cv.pdf" download="Muhammad_Zubair_Frontend_Developer_CV.pdf">Download CV</a>
        </div>
        <p className="status">{hero.status}</p>
      </div>
      <div className="me"><img src={IMG.me} alt="Portrait of Muhammad Zubair" /></div>
    </section>
  );
}
