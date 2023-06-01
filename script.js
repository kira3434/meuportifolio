
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


    const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 15000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  thumbnails[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  thumbnails[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
});

nextButton.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
});


  });
