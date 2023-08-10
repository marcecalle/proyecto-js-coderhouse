import { guardarEnLS, extraerDeLS, renderCardsCarrito } from "./funciones.js"
import { obras, obrasVenta, } from "./obras.js"

let miCarrito = ""

// TRAER CARRITO DEL LOCAL STORAGE
const miCarritoLS = extraerDeLS('miCarrito')

// VALIDAR SI HAY ALGO EN EL LOCAL STORAGE Y GUARDAR O CREAR CARRITO VACÍO
miCarritoLS ? miCarrito = miCarritoLS : miCarrito = []

// TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')

//AGRAGAR CARDS AL CARRITO SI TIENE OBRAS
if (miCarrito.length !== 0) {
   for(let items of miCarrito) {
      cardsContainer.appendChild(renderCardsCarrito(items))
   }
} else {
   alert('Carrito Vacío')
}
