import { obras, obrasVenta } from "./obras.js"
import { guardarObrasLS, extraerObrasLS, agregarCardsVenta } from "./funciones.js"

// GUARDAR OBRAS EN EL LOCAL STORAGE
guardarObrasLS('obrasLS', obras)

//*CREAR CARDS A PARTIR DE MIS OBRAS


//TRAER NODO DEL INDEX
let cardsContainer = document.getElementById('cards-container')

//AGRAGAR CARDS AL INDEX
for(let obra of obrasVenta) {
   cardsContainer.appendChild(agregarCardsVenta(obra))
}