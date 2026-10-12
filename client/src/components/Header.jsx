const links = ['about', 'skills', 'projects', 'learning', 'contact'];
export default function Header({ theme, toggle }) {
  return (
    <header><div className="wrap">
      <a className="logo" href="#top" aria-label="Muhammad Zubair, back to top">&lt;muhammadzubair/&gt;</a>
      <nav aria-label="Main">
        {links.map((l) => <a key={l} href={'#' + l}>{l[0].toUpperCase() + l.slice(1)}</a>)}
        <button id="theme" onClick={toggle} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}>◐</button>
      </nav>
    </div></header>
  );
}
