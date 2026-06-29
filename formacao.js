/**
 * =============================================
 * PORTFÓLIO - Rafaella Sá de Souza Borges
 * Arquivo: formacao.js
 * Descrição: Animação das barras de habilidade
 *            usando IntersectionObserver para
 *            disparar apenas quando visíveis.
 * =============================================
 */

document.addEventListener('DOMContentLoaded', function () {

  // =============================================
  // ANIMAÇÃO DAS BARRAS DE HABILIDADE
  //
  // As barras começam com width: 0% no CSS.
  // Quando entram na viewport, recebem o valor
  // real definido no atributo data-width do HTML.
  // =============================================

  /**
   * Observer específico para as barras de habilidade.
   * Quando uma barra entra na tela, anima seu preenchimento.
   */
  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const fill = entry.target;

          // Lê o valor alvo do atributo data-width (ex.: "85")
          const targetWidth = fill.getAttribute('data-width');

          // Pequeno delay para a animação ser perceptível
          setTimeout(function () {
            fill.style.width = targetWidth + '%';
          }, 200);

          // Para de observar para não reanimar ao rolar
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 } // Dispara quando 30% da barra estiver visível
  );

  // Registra todas as barras de habilidade para observação
  document.querySelectorAll('.skill-fill').forEach(function (fill) {
    skillObserver.observe(fill);
  });

}); // fim do DOMContentLoaded
