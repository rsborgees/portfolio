/**
 * =============================================
 * PORTFÓLIO - Rafaella Sá de Souza Borges
 * Arquivo: contato.js
 * Descrição: Validação do formulário de contato
 *            em JavaScript puro.
 *
 * Funcionalidades:
 *  - Validação de campos obrigatórios
 *  - Validação de formato de e-mail
 *  - Exibição de mensagens de erro inline
 *  - Simulação de envio com loading
 *  - Modal de confirmação ao enviar com sucesso
 *  - Contador de caracteres na textarea
 * =============================================
 */

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // REFERÊNCIAS AOS ELEMENTOS DO DOM
  // =============================================

  /** Formulário de contato */
  const form = document.getElementById('contact-form');

  /** Campos individuais */
  const nomeInput    = document.getElementById('nome');
  const emailInput   = document.getElementById('email');
  const assuntoInput = document.getElementById('assunto');
  const mensagemInput = document.getElementById('mensagem');

  /** Elementos de erro (feedback inline) */
  const nomeError     = document.getElementById('nome-error');
  const emailError    = document.getElementById('email-error');
  const assuntoError  = document.getElementById('assunto-error');
  const mensagemError = document.getElementById('mensagem-error');

  /** Botão de envio */
  const submitBtn = document.getElementById('submit-btn');

  /** Elementos do modal de confirmação */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose   = document.getElementById('modal-close');

  /** Contador de caracteres da textarea */
  const charCount = document.getElementById('char-count');


  // =============================================
  // CONTADOR DE CARACTERES DA MENSAGEM
  //
  // Atualiza em tempo real conforme o usuário digita.
  // Muda de cor quando próximo do limite.
  // =============================================

  if (mensagemInput && charCount) {
    mensagemInput.addEventListener('input', function () {
      const length = mensagemInput.value.length;
      charCount.textContent = length;

      // Aviso quando próximo de 500 caracteres
      const counterEl = charCount.parentElement;
      if (length > 400) {
        counterEl.classList.add('warning');
      } else {
        counterEl.classList.remove('warning');
      }
    });
  }


  // =============================================
  // FUNÇÕES DE VALIDAÇÃO
  // =============================================

  /**
   * Valida o campo Nome.
   * Regras: não pode estar vazio, mínimo 2 caracteres.
   * @returns {boolean} true se válido
   */
  function validarNome() {
    const valor = nomeInput.value.trim();

    if (valor === '') {
      mostrarErro(nomeInput, nomeError, 'O nome é obrigatório.');
      return false;
    }

    if (valor.length < 2) {
      mostrarErro(nomeInput, nomeError, 'O nome deve ter pelo menos 2 caracteres.');
      return false;
    }

    limparErro(nomeInput, nomeError);
    return true;
  }

  /**
   * Valida o campo E-mail.
   * Regras: não pode estar vazio, deve ter formato válido.
   * Usa expressão regular para checar o padrão usuario@dominio.com
   * @returns {boolean} true se válido
   */
  function validarEmail() {
    const valor = emailInput.value.trim();

    if (valor === '') {
      mostrarErro(emailInput, emailError, 'O e-mail é obrigatório.');
      return false;
    }

    // Expressão regular para validação básica de e-mail
    // Formato esperado: texto@texto.extensão
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(valor)) {
      mostrarErro(emailInput, emailError, 'Informe um e-mail válido (ex: nome@dominio.com).');
      return false;
    }

    limparErro(emailInput, emailError);
    return true;
  }

  /**
   * Valida o campo Assunto.
   * Regras: não pode estar vazio.
   * @returns {boolean} true se válido
   */
  function validarAssunto() {
    const valor = assuntoInput.value.trim();

    if (valor === '') {
      mostrarErro(assuntoInput, assuntoError, 'O assunto é obrigatório.');
      return false;
    }

    limparErro(assuntoInput, assuntoError);
    return true;
  }

  /**
   * Valida o campo Mensagem.
   * Regras: não pode estar vazio, mínimo 10 caracteres.
   * @returns {boolean} true se válido
   */
  function validarMensagem() {
    const valor = mensagemInput.value.trim();

    if (valor === '') {
      mostrarErro(mensagemInput, mensagemError, 'A mensagem é obrigatória.');
      return false;
    }

    if (valor.length < 10) {
      mostrarErro(mensagemInput, mensagemError, 'A mensagem deve ter pelo menos 10 caracteres.');
      return false;
    }

    limparErro(mensagemInput, mensagemError);
    return true;
  }


  // =============================================
  // FUNÇÕES AUXILIARES DE FEEDBACK VISUAL
  // =============================================

  /**
   * Exibe uma mensagem de erro para um campo.
   * Adiciona classe 'error' ao input e torna o erro visível.
   * @param {HTMLElement} input - O campo com erro
   * @param {HTMLElement} errorEl - O elemento de texto do erro
   * @param {string} mensagem - A mensagem a exibir
   */
  function mostrarErro(input, errorEl, mensagem) {
    input.classList.add('error');
    input.classList.remove('success');
    if (errorEl) {
      errorEl.textContent = '⚠ ' + mensagem;
      errorEl.classList.add('visible');
    }
  }

  /**
   * Remove o estado de erro de um campo e marca como válido.
   * @param {HTMLElement} input - O campo a limpar
   * @param {HTMLElement} errorEl - O elemento de erro a ocultar
   */
  function limparErro(input, errorEl) {
    input.classList.remove('error');
    input.classList.add('success');
    if (errorEl) {
      errorEl.classList.remove('visible');
    }
  }


  // =============================================
  // VALIDAÇÃO EM TEMPO REAL (ao sair do campo)
  //
  // Cada campo é validado ao perder o foco (blur),
  // dando feedback imediato ao usuário.
  // =============================================

  if (nomeInput)     nomeInput.addEventListener('blur', validarNome);
  if (emailInput)    emailInput.addEventListener('blur', validarEmail);
  if (assuntoInput)  assuntoInput.addEventListener('blur', validarAssunto);
  if (mensagemInput) mensagemInput.addEventListener('blur', validarMensagem);

  // Remove erro ao começar a digitar novamente
  [nomeInput, emailInput, assuntoInput, mensagemInput].forEach(function (input) {
    if (input) {
      input.addEventListener('input', function () {
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          // Encontra e oculta a mensagem de erro correspondente
          const errorId = input.id + '-error';
          const errEl = document.getElementById(errorId);
          if (errEl) errEl.classList.remove('visible');
        }
      });
    }
  });


  // =============================================
  // ENVIO DO FORMULÁRIO
  //
  // Ao submeter: valida tudo, simula carregamento,
  // limpa os campos e exibe o modal de sucesso.
  // =============================================

  if (form) {
    form.addEventListener('submit', function (event) {
      // Impede o envio padrão do formulário (recarregar a página)
      event.preventDefault();

      // Valida todos os campos e guarda os resultados
      const nomeValido     = validarNome();
      const emailValido    = validarEmail();
      const assuntoValido  = validarAssunto();
      const mensagemValida = validarMensagem();

      // Só prossegue se TODOS forem válidos
      if (nomeValido && emailValido && assuntoValido && mensagemValida) {
        simularEnvio();
      } else {
        // Foca o primeiro campo com erro
        const primeiroErro = form.querySelector('.error');
        if (primeiroErro) {
          primeiroErro.focus();
          primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  /**
   * Simula o envio do formulário:
   * 1. Ativa estado de carregamento no botão
   * 2. Aguarda 1.5 segundos (simulando requisição)
   * 3. Limpa o formulário
   * 4. Exibe o modal de confirmação
   */
  function simularEnvio() {
    // Ativa estado de loading
    submitBtn.textContent = 'Enviando...';
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simula tempo de resposta do servidor (1.5 segundos)
    setTimeout(function () {
      // Limpa todos os campos do formulário
      form.reset();

      // Remove classes de sucesso dos inputs
      form.querySelectorAll('input, textarea').forEach(function (el) {
        el.classList.remove('success', 'error');
      });

      // Reseta o contador de caracteres
      if (charCount) charCount.textContent = '0';

      // Restaura o botão ao estado original
      submitBtn.textContent = 'Enviar Mensagem';
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Exibe o modal de confirmação de sucesso
      abrirModal();

    }, 1500);
  }


  // =============================================
  // MODAL DE CONFIRMAÇÃO
  // =============================================

  /**
   * Abre o modal de sucesso.
   * Adiciona a classe 'open' para ativar a animação CSS.
   */
  function abrirModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Impede scroll do fundo
    }
  }

  /**
   * Fecha o modal de sucesso.
   * Remove a classe 'open' e restaura o scroll.
   */
  function fecharModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = ''; // Restaura scroll
    }
  }

  // Fecha ao clicar no botão "Fechar" do modal
  if (modalClose) {
    modalClose.addEventListener('click', fecharModal);
  }

  // Fecha ao clicar fora da caixa do modal (no overlay)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) {
        fecharModal();
      }
    });
  }

  // Fecha o modal ao pressionar a tecla Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      fecharModal();
    }
  });

}); // fim do DOMContentLoaded
