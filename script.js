// Pegando elemento mobile button
const mobileButton = document.getElementById("mobilebtn");

// Função toggle mobile button
function menuToggle(event) {
  // Se o tipo de evento for touchstart não faça mais nada além do touchstart
  if (event.type === "touchstart") event.preventDefault();
  // Pegando o elemento nav
  const nav = document.getElementById("nav");
  // Fazendo o elemento nav ter a class active atráves do on/off do toggle
  nav.classList.toggle("active");
  // Acessibilidade, não sei fazer ainda apenas segui o tutorial
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}
// Adicionando evento onclick e usando a função toggle
mobileButton.addEventListener("click", menuToggle);
// Adicionando evento touchstart e usando a função toggle
mobileButton.addEventListener("touchstart", menuToggle);

// Teste slider

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 4000);
      }
      repeater();
    }
    repeat();
