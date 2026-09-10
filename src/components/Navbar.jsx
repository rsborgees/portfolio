import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#inicio',    label: 'Início' },
  { href: '#sobre',     label: 'Sobre mim' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#formacao',  label: 'Formação' },
];

export default function Navbar() {
  const [active, setActive] = useState('#inicio');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── smooth scroll ── */
  function handleClick(e, href) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Menu principal">
      <a
        href="#inicio"
        className="navbar-brand"
        onClick={e => handleClick(e, '#inicio')}
      >
        Rafaella<span>.</span>dev
      </a>

      <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={e => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar-cta">
        <a
          href="https://www.linkedin.com/in/rafaella-borges-ab176037b/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          💼 LinkedIn
        </a>
      </div>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
