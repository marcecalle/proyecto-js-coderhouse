import { guardarEnLS, extraerDeLS, agregarCardsCarrito } from "./funciones.js"
import { obras, } from "./obras.js"

let miCarrito

// TRAER CARRITO DEL LOCAL STORAGE
const carritoLS = extraerDeLS('miCarrito')

// VALIDAR SI HAY ALGO EN EL LOCAL STORAGE Y GUARDAR O CREAR CARRITO VACÍO
carritoLS ? miCarrito = carritoLS : miCarrito = []

// TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')

//AGRAGAR CARDS AL CARRITO SI TIENE OBRAS
console.log(miCarrito);

if (miCarrito.length !== 0) {
   for(let items of miCarrito) {
      cardsContainer.appendChild(agregarCardsCarrito(items))
   }
} else {
   alert('Carrto Vacío')
}
