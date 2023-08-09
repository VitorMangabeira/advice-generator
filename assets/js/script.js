import { frasesMotivacionais } from "./data.js";

const next_button = document.getElementById("next_btn")
const display_frase = document.getElementById("frase")

frase.innerHTML = frasesMotivacionais[Math.floor(Math.random()*frasesMotivacionais.length)].frase

function exibir_frases_randomicas(){
    const frase_aleatoria = frasesMotivacionais[Math.floor(Math.random()*frasesMotivacionais.length)].frase
    display_frase.innerHTML = frase_aleatoria
}

next_button.addEventListener('click', exibir_frases_randomicas)


