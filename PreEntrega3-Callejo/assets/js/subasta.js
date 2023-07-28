import { obrasSubasta } from "./obras.js"
import { guardarEnLS, extraerDeLS, agregarCardsSubasta } from "./funciones.js"

// TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')

//AGREGAR CARDS A SUBASTA
for(let obra of obrasSubasta) {
   cardsContainer.appendChild(agregarCardsSubasta(obra))
}