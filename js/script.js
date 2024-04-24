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

// Código de efeito digitação
document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");
  const h2Text = "[< Oi, eu sou o Gabriel! >]";
  const pText = "~ Front-End | FullStack Developer ~";
  const typingSpeed = 150; // Velocidade de digitação (em milissegundos)
  const pauseDuration = 1500; // Tempo de pausa entre as partes (em milissegundos)

  // Função para digitar o texto em um elemento
  function typeText(element, text, callback) {
    let index = 0;
    const intervalId = setInterval(function () {
      if (index <= text.length) {
        element.textContent = text.substring(0, index);
        index++;
      } else {
        clearInterval(intervalId);
        if (callback) {
          callback();
        }
      }
    }, typingSpeed);
  }

  // Função para exibir o texto do h2 e iniciar a digitação do p após o h2
  function typeH2() {
    const h2Element = mainContent.querySelector("h2");
    typeText(h2Element, h2Text, typeP); // Chama typeP após concluir h2
  }

  // Função para exibir o texto do p
  function typeP() {
    const pElement = mainContent.querySelector("p");
    typeText(pElement, pText); // Exibe todo o texto do p
  }

  // Oculta todos os elementos com classe 'typing-text' inicialmente
  const typingElements = mainContent.querySelectorAll(".typing-text");
  typingElements.forEach(function (element) {
    element.textContent = ""; // Limpa o conteúdo inicial
    element.style.display = "none";
  });

  // Exibe e inicia a digitação do h2
  const h2Element = mainContent.querySelector("h2");
  h2Element.style.display = "block";
  typeH2();
});
