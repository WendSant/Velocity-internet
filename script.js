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

// Slider
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}