document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menu-btn");
  var navbar = document.getElementById("navbar");
  var mobileMenu = document.querySelector(".mobile-menu");

  // Função para abrir ou fechar o menu
  function toggleMenu() {
    navbar.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  }

  // Evento de clique no botão do menu
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });

  // Evento de clique fora do menu para fechar
  document.addEventListener("click", function (event) {
    // Verifica se o clique foi fora do menu aberto e do botão do menu
    if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
      // Fecha o menu se estiver aberto
      if (navbar.classList.contains("active")) {
        toggleMenu();
      }
    }
  });
});
