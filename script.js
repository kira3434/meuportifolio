document.addEventListener('DOMContentLoaded', function() {
    // Obtém o botão de alternância e o elemento body
    const toggleButton = document.getElementById('toggle-mode');
    const bodyElement = document.body;
  
    // Adiciona um ouvinte de evento ao botão de alternância
    toggleButton.addEventListener('click', function () {
      // Alternar a classe 'dark-mode' no elemento body
      bodyElement.classList.toggle('dark-mode');
    });

    menu = document.querySelector(".menu");
    menu.onclick = function(){
      navbarlinks = document.querySelector(".navbar-links");
      navbarlinks.classList.toggle("active");
    }
    AOS.init({
      duration:2000
    });
  });

