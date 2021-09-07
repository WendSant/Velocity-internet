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
