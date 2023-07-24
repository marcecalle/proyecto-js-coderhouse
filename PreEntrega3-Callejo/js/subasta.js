// import { obrasSubasta } from "./obras.js"
import { guardarEnLS, extraerDeLS, agregarCardsSubasta } from "./funciones.js"

// TRAER OBRAS DEL LOCAL STORAGE
const obrasLS = extraerDeLS('obrasLS')

// FILTRAR OBRAS POR SUBASTA Y GUARDARLAS
const obrasSubasta = obrasLS.filter((obra) => obra.operacion === 'subasta')

// GUARDAR OBRAS SUBASTA EN EL LOCAL STORAGE
guardarEnLS('obrasSubastaLS', obrasSubasta)

// TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')


//AGREGAR CARDS A SUBASTA
for(let obra of obrasSubasta) {
   cardsContainer.appendChild(agregarCardsSubasta(obra))
}