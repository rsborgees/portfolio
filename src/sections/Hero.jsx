import { motion } from 'framer-motion';
import '../pages/Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          {/* Text */}
          <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp}>
            <span className="hero-greeting">Olá, seja bem-vindo(a)! 👋</span>
            <h1 className="hero-name">Rafaella Borges</h1>
            <p className="hero-role">Desenvolvedora Full Stack &amp; Automações</p>
            <p className="hero-bio">
              Transformo ideias em produtos digitais reais. Do site institucional
              ao CRM personalizado — entrego soluções completas, modernas e
              focadas em resultado para o seu negócio.&nbsp;🚀
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('portfolio')}>
                🗂 Ver Projetos
              </button>
              <a
                href="https://www.linkedin.com/in/rafaella-borges-ab176037b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💼 LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Decorative card */}
          <motion.div
            className="hero-deco-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-deco-card">
              <div className="hero-deco-glow" />
              <div className="hero-monogram">RB</div>
              <div className="hero-deco-info">
                <span className="deco-tag">💼 Full Stack Dev</span>
                <span className="deco-tag">📍 Salvador, BA</span>
                <span className="deco-tag deco-tag-green">🟢 Disponível</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          className="stats-grid"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
        >
          {[
            { n: '16+', label: 'Projetos Entregues' },
            { n: '3',   label: 'Idiomas' },
            { n: '100%', label: 'Dedicação' },
          ].map((s, i) => (
            <motion.div key={i} className="stat-card" variants={fadeUp}>
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
