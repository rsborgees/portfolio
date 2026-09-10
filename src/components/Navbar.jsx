import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <NavLink to="/" className="navbar-brand">
        Rafaella<span>.</span>dev
      </NavLink>

      <ul className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        <li><NavLink to="/" end>Sobre mim</NavLink></li>
        <li><NavLink to="/formacao">Formação</NavLink></li>
        <li><NavLink to="/portfolio">Portfólio</NavLink></li>
      </ul>

      <div className="navbar-cta">
        <a href="https://www.linkedin.com/in/rafaella-borges-ab176037b/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          💼 LinkedIn
        </a>
      </div>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
