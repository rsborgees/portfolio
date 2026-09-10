import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../pages/Formacao.css';

const vp = { once: true, amount: 0 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const skills = [
  { name: '🌐 HTML5', pct: 90 }, { name: '🎨 CSS3', pct: 85 },
  { name: '⚡ JavaScript', pct: 75 }, { name: '⚛️ React', pct: 65 },
  { name: '🐍 Python', pct: 65 }, { name: '🟩 Node.js', pct: 70 },
  { name: '🗄️ SQL', pct: 60 }, { name: '🔧 Git & GitHub', pct: 75 },
];

function SkillBar({ name, pct, index }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = `${pct}%`;
      }
    }, { threshold: 0.3 });
    if (fillRef.current) observer.observe(fillRef.current.parentElement);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <motion.div className="skill-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index * 0.5}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{pct}%</span>
      </div>
      <div className="skill-bar" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
        <div ref={fillRef} className="skill-fill" />
      </div>
    </motion.div>
  );
}

export default function Formacao() {
  return (
    <section id="formacao" className="formacao-section-full">
      <div className="container">

        <div className="section-divider"><span>Formação</span></div>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="services-title">Formação Acadêmica</h2>
          <p className="services-subtitle">Minha jornada de aprendizado em tecnologia.</p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {[
            {
              period: '2026 – Cursando', title: 'Engenharia de Software',
              institution: '🏗 Centro Universitário Internacional — UNINTER',
              desc: 'Bacharel em Engenharia de Software com foco em desenvolvimento de sistemas, qualidade de software, arquitetura de aplicações e gestão de projetos ágeis. Atualmente no 3º semestre.',
              tags: ['Programação Web', 'Lógica de Programação', 'Banco de Dados', 'Engenharia de Requisitos'],
            },
            {
              period: 'Concluído — 2024', title: 'Ensino Médio',
              institution: '🏫 Colégio Pirâmide',
              desc: 'Conclusão do Ensino Médio regular.',
              tags: [],
            },
          ].map((item, i) => (
            <motion.div key={i} className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div className="timeline-dot" />
              <div className="card">
                <p className="timeline-period">{item.period}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p className="timeline-desc">{item.desc}</p>
                {item.tags.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="section-divider"><span>Habilidades Técnicas</span></div>
        <div className="skills-grid">
          {skills.map((s, i) => <SkillBar key={s.name} name={s.name} pct={s.pct} index={i} />)}
        </div>

        {/* Languages */}
        <div className="section-divider"><span>Idiomas</span></div>
        <div className="languages-grid">
          {[
            { flag: '🇧🇷', name: 'Português', level: 'Nativo', stars: 5 },
            { flag: '🇺🇸', name: 'Inglês', level: 'Avançado (C1)', stars: 4 },
            { flag: '🇪🇸', name: 'Espanhol', level: 'Intermediário (B1)', stars: 3 },
          ].map((lang, i) => (
            <motion.div key={i} className="language-card card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} whileHover={{ y: -4 }}>
              <span className="language-flag">{lang.flag}</span>
              <h3 className="language-name">{lang.name}</h3>
              <p className="language-level">{lang.level}</p>
              <div className="language-stars">
                {[1,2,3,4,5].map(n => (
                  <span key={n} className={`star${n > lang.stars ? ' empty' : ''}`}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
