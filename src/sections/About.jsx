import { motion } from 'framer-motion';
import '../pages/Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const services = [
  { icon: '💻', title: 'Desenvolvimento de Sites', desc: 'Sites institucionais, landing pages e portais modernos, responsivos e otimizados para SEO e conversão.', color: 'rgba(212,88,122,0.12)', border: 'rgba(212,88,122,0.3)' },
  { icon: '🤖', title: 'Automações & Web Scrapers', desc: 'Scripts de automação e coleta de dados para eliminar tarefas repetitivas e gerar insights do seu mercado.', color: 'rgba(232,196,154,0.12)', border: 'rgba(232,196,154,0.35)' },
  { icon: '📊', title: 'CRMs & Sistemas de Gestão', desc: 'Sistemas personalizados para clínicas, revendedoras e empresas — controle total em um painel próprio.', color: 'rgba(240,168,188,0.12)', border: 'rgba(240,168,188,0.3)' },
  { icon: '⚙️', title: 'Integrações & APIs', desc: 'Conexão entre plataformas, ERPs e sistemas externos com pipelines robustos e webhooks em tempo real.', color: 'rgba(180,130,160,0.12)', border: 'rgba(180,130,160,0.3)' },
];

const stack = [
  { icon: '⚛️', name: 'React' }, { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' }, { icon: '⚡', name: 'JavaScript' },
  { icon: '🟩', name: 'Node.js' }, { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL' }, { icon: '🔧', name: 'Git' },
  { icon: '🤖', name: 'Puppeteer' }, { icon: '🔍', name: 'Cheerio' },
  { icon: '📦', name: 'APIs REST' }, { icon: '🚀', name: 'Vite' },
];

export default function About() {
  return (
    <section id="sobre" className="about-full-section">
      <div className="container">

        {/* ── Sobre Mim ── */}
        <div className="section-divider"><span>Sobre mim</span></div>
        <div className="about-grid">
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="about-card-title">📋 Informações</h2>
            {[
              { icon: '👩', label: 'Nome', val: 'Rafaella Sá de Souza Borges' },
              { icon: '🎓', label: 'Curso', val: 'Engenharia de Software — UNINTER' },
              { icon: '📍', label: 'Localização', val: 'Salvador, Bahia' },
              { icon: '💼', label: 'Status', val: <span style={{ color: '#22c55e' }}>🟢 Disponível para projetos</span> },
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
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

        {/* ── Serviços ── */}
        <div className="section-divider"><span>Serviços</span></div>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="services-title">O que eu ofereço</h2>
          <p className="services-subtitle">Soluções completas do conceito à entrega</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              style={{ '--card-color': s.color, '--card-border': s.border }}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i * 0.5}
              whileHover={{ y: -6 }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Stack ── */}
        <div className="section-divider"><span>Stack Tecnológica</span></div>
        <div className="stack-grid">
          {stack.map((t, i) => (
            <motion.div
              key={i} className="stack-item"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i * 0.3}
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <span className="stack-icon">{t.icon}</span>
              <span className="stack-name">{t.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
