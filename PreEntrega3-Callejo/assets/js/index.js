import { obras, obrasVenta } from "./obras.js"
import { guardarEnLS, extraerDeLS, renderCardsVenta } from "./funciones.js"

// GUARDAR OBRAS EN EL LOCAL STORAGE
// guardarEnLS('obrasLS', obras)

let miCarrito = extraerDeLS("miCarrito") || [];

//*CREAR CARDS A PARTIR DE MIS OBRAS


//TRAER NODO DEL INDEX
let cardsContainer = document.getElementById('cards-container')

//AGREGAR CARDS AL INDEX
for(let obra of obrasVenta) {
   cardsContainer.appendChild(renderCardsVenta(obra))
}