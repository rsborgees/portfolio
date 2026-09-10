import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import './Contato.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.nome.trim()) e.nome = 'Nome é obrigatório.';
    if (!form.email.trim()) e.email = 'E-mail é obrigatório.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido.';
    if (!form.assunto.trim()) e.assunto = 'Assunto é obrigatório.';
    if (!form.mensagem.trim()) e.mensagem = 'Mensagem é obrigatória.';
    else if (form.mensagem.trim().length < 10) e.mensagem = 'Mensagem muito curta.';
    return e;
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSent(true);
  }

  return (
    <div className="contato-page">
      <div className="bg-mesh" />

      <header className="page-hero">
        <div className="container">
          <div className="page-badge">✉️ Fale comigo</div>
          <h1 className="page-title">Iniciar um <span className="highlight">Projeto</span></h1>
          <p className="page-subtitle">
            Tem uma ideia ou precisa de um orçamento? Me conta o que você precisa —
            adoraria ajudar! 😊
          </p>
        </div>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <motion.div
              className="contact-form-card card"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {sent ? (
                <div className="sent-success">
                  <div className="sent-icon">🎉</div>
                  <h2>Mensagem enviada!</h2>
                  <p>Obrigada pelo contato! Entrarei em resposta em breve. 😊</p>
                  <button className="btn btn-primary" onClick={() => { setSent(false); setForm({ nome:'',email:'',assunto:'',mensagem:'' }); }}>
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <h2>Enviar mensagem</h2>
                  <p className="form-intro">Preencha o formulário e entrarei em contato rapidinho!</p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="nome">Nome completo *</label>
                      <input id="nome" name="nome" type="text" placeholder="Seu nome completo"
                        value={form.nome} onChange={handleChange} />
                      <span className="field-error">{errors.nome}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail *</label>
                      <input id="email" name="email" type="email" placeholder="seu@email.com"
                        value={form.email} onChange={handleChange} />
                      <span className="field-error">{errors.email}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="assunto">Assunto *</label>
                      <input id="assunto" name="assunto" type="text" placeholder="Sobre o que deseja falar?"
                        value={form.assunto} onChange={handleChange} />
                      <span className="field-error">{errors.assunto}</span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mensagem">Mensagem *</label>
                      <textarea id="mensagem" name="mensagem" rows="5"
                        placeholder="Descreva seu projeto ou dúvida..."
                        value={form.mensagem} onChange={handleChange} />
                      <span className="field-error">{errors.mensagem}</span>
                      <div className="char-counter">{form.mensagem.length}/500 caracteres</div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">
                      ✉️ Enviar Mensagem
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              className="contact-info"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              {[
                {
                  icon: '🐙', title: 'GitHub',
                  text: 'github.com/rsborgees',
                  href: 'https://github.com/rsborgees',
                },
                {
                  icon: '💼', title: 'LinkedIn',
                  text: 'linkedin.com/in/rafaella-borges',
                  href: 'https://www.linkedin.com/in/rafaella-borges-ab176037b/',
                },
                {
                  icon: '📍', title: 'Localização',
                  text: 'Salvador, Bahia 🇧🇷',
                  href: null,
                },
              ].map((item, i) => {
                const Tag = item.href ? 'a' : 'div';
                const props = item.href
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <Tag key={i} className="contact-info-card" {...props}>
                    <div className="contact-info-icon">{item.icon}</div>
                    <div className="contact-info-text">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </Tag>
                );
              })}

              <div className="availability-card">
                <div className="availability-dot" />
                <div>
                  <h4>Disponível para projetos</h4>
                  <p>
                    Aceito sites, sistemas, automações e integrações.
                    Me chame e conversamos!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
