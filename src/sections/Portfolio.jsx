import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import '../pages/Portfolio.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06 } }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
};

export default function Portfolio() {
  const [active, setActive] = useState('todos');

  const filtered = active === 'todos'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="portfolio-section-full">
      <div className="container">

        <div className="section-divider"><span>Portfólio</span></div>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="services-title">Meus Projetos</h2>
          <p className="services-subtitle">
            Projetos profissionais desenvolvidos com foco em resultado e qualidade.
          </p>
        </div>

        {/* Filters */}
        <div className="filter-bar" role="group" aria-label="Filtrar projetos">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`filter-btn${active === cat.key ? ' active' : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
        <p className="projects-count">
          {filtered.length} projeto{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                className="project-card"
                layout
                initial="hidden" animate="visible" exit="exit"
                variants={fadeUp} custom={i}
                whileHover={{ y: -6 }}
              >
                <div className="project-card-header" style={{ background: p.color }}>
                  <span className="project-icon">{p.icon}</span>
                  <span className={`project-badge ${p.type === 'public' ? 'badge-public' : 'badge-pro'}`}>
                    {p.type === 'public' ? '🔓 Público' : '🔒 Profissional'}
                  </span>
                </div>
                <div className="project-card-body">
                  <span className="project-category-label">
                    {categories.find(c => c.key === p.category)?.icon}{' '}
                    {categories.find(c => c.key === p.category)?.label}
                  </span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-description">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {p.githubUrl && (
                    <div className="project-actions">
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        🔗 Ver no GitHub
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
