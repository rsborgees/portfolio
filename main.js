/**
 * =============================================
 * PORTFÓLIO - Rafaella Sá de Souza Borges
 * Arquivo: main.js
 * Descrição: Script compartilhado entre todas as páginas.
 *            Gerencia: menu de navegação (desktop/mobile),
 *            alternância de tema dark/light e marcação
 *            do link ativo no menu.
 * =============================================
 */

/**
 * Aguarda o DOM estar completamente carregado antes de executar o script.
 * Garante que todos os elementos HTML existam antes de manipulá-los.
 */
document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // 1. TEMA DARK / LIGHT
  //    Lê a preferência salva no localStorage e
  //    permite ao usuário alternar via botão.
  // =============================================

  /** Botão de alternar tema (ícone 🌙 / ☀️) */
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  /**
   * Aplica o tema correto com base na preferência salva.
   * O tema dark é o padrão; light é ativado via classe CSS.
   * @param {string} theme - 'light' ou 'dark'
   */
  function applyTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light-theme');
      if (themeToggle) themeToggle.textContent = '☀️';
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Ativar tema escuro');
    } else {
      body.classList.remove('light-theme');
      if (themeToggle) themeToggle.textContent = '🌙';
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Ativar tema claro');
    }
  }

  // Carrega preferência salva ou usa dark como padrão
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  // Evento de clique no botão de tema
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      // Verifica se o tema atual é light para alternar
      const isLight = body.classList.contains('light-theme');
      const newTheme = isLight ? 'dark' : 'light';

      applyTheme(newTheme);

      // Salva a preferência para persistir entre páginas
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }


  // =============================================
  // 2. MENU HAMBURGUER (Mobile)
  //    Controla a abertura/fechamento do menu em
  //    telas pequenas.
  // =============================================

  /** Botão hamburguer e container do menu */
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    // Clique no hamburguer: abre ou fecha o menu
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.contains('mobile-open');

      if (isOpen) {
        fecharMenu();
      } else {
        abrirMenu();
      }
    });

    // Fecha o menu ao clicar em qualquer link (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        fecharMenu();
      });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
      const clickedOutside = !hamburger.contains(event.target) && !navMenu.contains(event.target);
      if (clickedOutside && navMenu.classList.contains('mobile-open')) {
        fecharMenu();
      }
    });
  }

  /** Abre o menu mobile e anima o ícone */
  function abrirMenu() {
    navMenu.classList.add('mobile-open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
  }

  /** Fecha o menu mobile e reverte o ícone */
  function fecharMenu() {
    navMenu.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
  }


  // =============================================
  // 3. LINK ATIVO NO MENU
  //    Detecta qual página está aberta e marca o
  //    link correspondente como "active".
  // =============================================

  /**
   * Obtém o nome do arquivo da página atual.
   * Ex.: /formacao.html → 'formacao.html'
   *      / ou /index.html → 'index.html'
   */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Percorre todos os links do menu e marca o correto
  document.querySelectorAll('.navbar-menu a').forEach(function (link) {
    const linkPage = link.getAttribute('href');

    // Considera index.html ativo quando a URL está na raiz
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });


  // =============================================
  // 4. ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
  //    Usa IntersectionObserver para animar
  //    elementos quando entram na tela.
  // =============================================

  /**
   * IntersectionObserver: observa elementos com classe
   * .animate-in e adiciona a classe .visible quando
   * eles aparecem na viewport.
   */
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target); // Para de observar após animar
        }
      });
    },
    { threshold: 0.1 } // 10% do elemento visível já dispara
  );

  // Pausa todas as animações e inicia via observer
  document.querySelectorAll('.animate-in').forEach(function (el) {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

}); // fim do DOMContentLoaded
