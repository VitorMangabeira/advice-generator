import { frasesMotivacionais } from "./data.js";

frase.innerHTML = frasesMotivacionais[Math.floor(Math.random()*frasesMotivacionais.length)].frase

function exibir_frases_randomicas(){
    let display_frase = document.getElementById("frase")
    let frase_aleatoria = frasesMotivacionais[Math.floor(Math.random()*frasesMotivacionais.length)].frase
    display_frase.innerHTML = frase_aleatoria
}

const next_button = document.getElementById("next_btn")
next_button.addEventListener('click', exibir_frases_randomicas)


