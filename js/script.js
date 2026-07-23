// Vérifie que le fichier JavaScript est bien connecté
console.log("Le fichier script.js est bien chargé");

// Animation simple au scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if (cardPosition < screenPosition) {
      card.classList.add("visible");
    }
  });
});