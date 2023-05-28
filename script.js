document.addEventListener('DOMContentLoaded', function() {
    // Seu código JavaScript aqui
    
    // Obtém o botão de alternância e o elemento body
    const toggleButton = document.getElementById('toggle-mode');
    const bodyElement = document.body;
  
    // Adiciona um ouvinte de evento ao botão de alternância
    toggleButton.addEventListener('click', function () {
      // Alternar a classe 'dark-mode' no elemento body
      bodyElement.classList.toggle('dark-mode');
    });
  });
 

  

