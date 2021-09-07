const mobileButton = document.getElementById("mobilebtn");

function menuToggle(event) {
  if (event.type === "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

mobileButton.addEventListener("click", menuToggle);
mobileButton.addEventListener("touchstart", menuToggle);
