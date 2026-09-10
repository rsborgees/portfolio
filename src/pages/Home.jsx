import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './Home.css';

const services = [
  {
    icon: '💻',
    title: 'Desenvolvimento de Sites',
    desc: 'Sites institucionais, landing pages e portais modernos, responsivos e otimizados para SEO e conversão.',
    color: 'rgba(124,106,255,0.12)',
    border: 'rgba(124,106,255,0.3)',
  },
  {
    icon: '🤖',
    title: 'Automações & Web Scrapers',
    desc: 'Scripts de automação e coleta de dados para eliminar tarefas repetitivas e gerar insights do seu mercado.',
    color: 'rgba(94,234,212,0.12)',
    border: 'rgba(94,234,212,0.3)',
  },
  {
    icon: '📊',
    title: 'CRMs & Sistemas de Gestão',
    desc: 'Sistemas personalizados para clínicas, revendedoras e empresas — controle total em um painel próprio.',
    color: 'rgba(244,63,94,0.12)',
    border: 'rgba(244,63,94,0.3)',
  },
  {
    icon: '⚙️',
    title: 'Integrações & APIs',
    desc: 'Conexão entre plataformas, ERPs e sistemas externos com pipelines robustos e webhooks em tempo real.',
    color: 'rgba(251,191,36,0.12)',
    border: 'rgba(251,191,36,0.3)',
  },
];

const stack = [
  { icon: '⚛️', name: 'React' },
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL' },
  { icon: '🔧', name: 'Git' },
  { icon: '🤖', name: 'Puppeteer' },
  { icon: '🔍', name: 'Cheerio' },
  { icon: '📦', name: 'APIs REST' },
  { icon: '🚀', name: 'Vite' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Home() {
  return (
    <div className="home-page">
      <div className="bg-mesh" />

      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="hero-greeting">Olá, seja bem-vindo(a)! 👋</span>
              <h1 className="hero-name">Rafaella Borges</h1>
              <p className="hero-role">Desenvolvedora Full Stack &amp; Automações</p>
              <p className="hero-bio">
                Transformo ideias em produtos digitais reais. Do site institucional
                ao CRM personalizado — entrego soluções completas, modernas e
                focadas em resultado para o seu negócio.&nbsp;🚀
              </p>
              <div className="hero-actions">
                <Link to="/portfolio" className="btn btn-primary">🗂 Ver Projetos</Link>
                <a href="https://www.linkedin.com/in/rafaella-borges-ab176037b/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">💼 LinkedIn</a>
              </div>
            </motion.div>

            <motion.div
              className="hero-avatar-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hero-avatar-ring">
                <div className="hero-avatar-inner">
                  <span className="hero-avatar-icon" role="img" aria-label="Desenvolvedora">👩‍💻</span>
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
              { n: '3', label: 'Idiomas' },
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

      {/* ── SOBRE ── */}
      <section className="about-section">
        <div className="container">
          <div className="section-divider"><span>Sobre mim</span></div>
          <div className="about-grid">
            <motion.div
              className="card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="about-card-title">📋 Informações</h2>
              {[
                { icon: '👩', label: 'Nome', val: 'Rafaella Sá de Souza Borges' },
                { icon: '🎓', label: 'Curso', val: 'Engenharia de Software — UNINTER' },
                { icon: '📍', label: 'Localização', val: 'Salvador, Bahia' },
                {
                  icon: '💼', label: 'Status',
                  val: <span style={{ color: '#22c55e' }}>🟢 Disponível para projetos</span>,
                },
              ].map((item, i) => (
                <div key={i} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.val}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <h2 className="about-card-title">🎯 O que posso fazer por você</h2>
              <p className="about-text">
                Sou desenvolvedora especializada em criar soluções digitais que realmente
                funcionam. Com experiência em sites, sistemas CRM, automações e integrações,
                já ajudei empresas a digitalizar processos, captar mais clientes e economizar
                tempo com automação.
              </p>
              <p className="about-text" style={{ marginTop: '1rem' }}>
                Trabalho com atenção total ao detalhe — do design ao back-end — garantindo
                entregas rápidas, código limpo e suporte pós-lançamento.
              </p>
              <div className="about-tags">
                {['HTML5','CSS3','JavaScript','React','Node.js','Python','SQL','Git'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section className="services-section">
        <div className="container">
          <div className="section-divider"><span>Serviços</span></div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="services-title">O que eu ofereço</h2>
            <p className="services-subtitle">
              Soluções completas do conceito à entrega
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card"
                style={{ '--card-color': s.color, '--card-border': s.border }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
                whileHover={{ y: -6 }}
              >
                <span className="service-icon">{s.icon}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="stack-section">
        <div className="container">
          <div className="section-divider"><span>Stack Tecnológica</span></div>
          <div className="stack-grid">
            {stack.map((t, i) => (
              <motion.div
                key={i}
                className="stack-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.3}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <span className="stack-icon">{t.icon}</span>
                <span className="stack-name">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
