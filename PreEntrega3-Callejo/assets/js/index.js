import { obras, obrasVenta } from "./obras.js"
import { guardarEnLS, extraerDeLS, renderCardsVenta } from "./funciones.js"

// GUARDAR OBRAS EN EL LOCAL STORAGE
// guardarEnLS('obrasLS', obras)

//*CREAR CARDS A PARTIR DE MIS OBRAS


//TRAER NODO DEL INDEX
let cardsVentaContainer = document.getElementById('cards-venta-container')

//AGREGAR CARDS AL INDEX
for(let obra of obrasVenta) {
   cardsVentaContainer.appendChild(renderCardsVenta(obra))
}