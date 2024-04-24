document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.querySelector(".mobile-menu");

  // Função para abrir ou fechar o menu
  function toggleMenu() {
    mobileMenu.classList.toggle("active");
  }

  // Evento de clique no botão do menu
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });

  // Evento de clique fora do menu para fechar
  document.addEventListener("click", function (event) {
    // Verifica se o clique foi fora do botão do menu
    if (!menuBtn.contains(event.target)) {
      // Fecha o menu se estiver aberto
      if (mobileMenu.classList.contains("active")) {
        toggleMenu();
      }
    }
  });
});
