/**
 * =============================================
 * PORTFÓLIO - Rafaella Sá de Souza Borges
 * Arquivo: portfolio.js
 * Descrição: Filtro de projetos por categoria.
 *            Ao clicar em um botão de filtro,
 *            apenas os cards da categoria são
 *            exibidos, com animação de fade.
 * =============================================
 */

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // FILTRO DE PROJETOS POR CATEGORIA
  // =============================================

  /** Todos os botões de filtro */
  const filterBtns = document.querySelectorAll('.filter-btn');

  /** Todos os cards de projeto */
  const projectCards = document.querySelectorAll('.project-card');

  /**
   * Aplica o filtro de categoria aos cards de projeto.
   * @param {string} category - Categoria a exibir ('todos' exibe todos)
   */
  function filtrarProjetos(category) {
    projectCards.forEach(function (card) {
      // Lê as categorias do atributo data-category (pode ter múltiplas separadas por espaço)
      const cardCategories = card.getAttribute('data-category').split(' ');

      if (category === 'todos' || cardCategories.includes(category)) {
        // Exibe o card com animação de fade-in
        card.style.display = 'flex';
        // Pequeno delay para o display ser aplicado antes da opacidade
        setTimeout(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        // Oculta o card com animação
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(function () {
          card.style.display = 'none';
        }, 300);
      }
    });
  }

  // Adiciona evento de clique em cada botão de filtro
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Remove a classe active de todos os botões
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });

      // Adiciona active ao botão clicado
      btn.classList.add('active');

      // Obtém a categoria do atributo data-filter
      const category = btn.getAttribute('data-filter');

      // Aplica o filtro
      filtrarProjetos(category);
    });
  });

  // Inicializa com todos os cards visíveis
  projectCards.forEach(function (card) {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });

}); // fim do DOMContentLoaded
