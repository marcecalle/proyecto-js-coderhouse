import { obras } from "./obras.js"
import { guardarObrasLS, extraerObrasLS, agregarCardsAlIndex } from "./funciones.js"

// GUARDAR OBRAS EN EL LOCAL STORAGE
guardarObrasLS('obrasLS', obras)

// TRAER OBRAS DEL LOCAL STORAGE
const obrasLS = extraerObrasLS('obrasLS')
console.log(obrasLS)

//CREAR CARDS A PARTIR DE MIS OBRAS

//TRAER NODO DEL INDEX
let cardsContainer = document.getElementById('cards-container')

for(let obra of obrasLS) {
   cardsContainer.appendChild(agregarCardsAlIndex(obra))
}