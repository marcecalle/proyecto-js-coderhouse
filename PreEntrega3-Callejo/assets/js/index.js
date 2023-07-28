import { obras, obrasVenta } from "./obras.js"
import { guardarEnLS, extraerDeLS, agregarCardsVenta } from "./funciones.js"

// GUARDAR OBRAS EN EL LOCAL STORAGE
guardarEnLS('obrasLS', obras)

//*CREAR CARDS A PARTIR DE MIS OBRAS


//TRAER NODO DEL INDEX
let cardsContainer = document.getElementById('cards-container')

//AGREGAR CARDS AL INDEX
for(let obra of obrasVenta) {
   cardsContainer.appendChild(agregarCardsVenta(obra))
}