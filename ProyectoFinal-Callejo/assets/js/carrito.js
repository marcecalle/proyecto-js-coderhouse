import { guardarEnLS, extraerDeLS, renderCardsCarrito } from "./funciones.js"
import { obras, obrasVenta, } from "./obras.js"

let miCarrito = ""

// TRAER CARRITO DEL LOCAL STORAGE
const miCarritoLS = extraerDeLS('miCarrito')

// VALIDAR SI HAY ALGO EN EL LOCAL STORAGE Y GUARDAR O CREAR CARRITO VACÍO
miCarritoLS ? miCarrito = miCarritoLS : miCarrito = []

// TRAER NODO DEL HTML
let carritoContainer = document.getElementById('carrito-container')

//AGRAGAR CARDS AL CARRITO SI TIENE OBRAS
if (miCarritoLS.length !== 0) {
   for(let items of miCarrito) {
      carritoContainer.appendChild(renderCardsCarrito(items))
   }
} else {
   Toastify({
      text: 'El carrito está vacío',
      duration: 3000,
      style: {
            background: 'linear-gradient(to right, #d04b4b, #d72424)'
      }
   }).showToast()
}
console.log(miCarrito);