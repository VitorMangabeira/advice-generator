import { advices } from "./data.js";
import { el } from "./elements.js";

el.displayAdvice.innerHTML =
  advices[Math.floor(Math.random() * advices.length)].frase;

el.nextButton.addEventListener("click", () => {
  const randomAdvice =
    advices[Math.floor(Math.random() * advices.length)].frase;
  el.displayAdvice.innerHTML = randomAdvice;
});

el.contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  Toastify({
    text: "Formulário enviado",
    duration: 3000,
    position: "center",
  }).showToast();
});
