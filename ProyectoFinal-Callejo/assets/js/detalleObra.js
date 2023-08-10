import { guardarEnLS, extraerDeLS, renderCardsDetalle } from "./funciones.js"

// FUNCION PARA SUMAR CANTIDAD EN EL CARRITO

// const agregarAlCarrito = (obra) => {
//    const carritoLS = extraerDeLS('miCarrito')
//    console.log(carritoLS);
//    if (carritoLS) {
//       const indiceItem = carritoLS.findIndex(el => el.id === obra.id)
//       if (indiceItem === -1) {
//          obra.cantidad = 1
//          carritoLS.push(obra)
//       } else {
//          carritoLS[indiceItem].cantidad += 1
//       }
//       guardarEnLS('miCarrito', carritoLS)
//       Toastify({
//          text: 'La obra se agregó al carrito -> ir',
//          duration: 2500,
//          destination: 'carrito.html',
//          style: {
//                background: 'linear-gradient(to right, #43d8ba, #64968c)'
//          }
//       }).showToast()
//    } else {
//       obra.cantidad = 1
//       guardarEnLS('miCarrito', carritoLS)
//       console.log(miCarrito);
//       Toastify({
//          text: 'La obra se agregó al carrito -> ir',
//          duration: 2500,
//          destination: 'carrito.html',
//          style: {
//                background: 'linear-gradient(to right, #43d8ba, #64968c)'
//          }
//       }).showToast()
//    }
// }

const miCarrito = extraerDeLS("miCarrito") || [];

// TRAER LAS OBRAS DESDE UN ARCHIVO JSON CON FETCH
const traerObraJSON = async (oid) => {
   const respuesta = await fetch('assets/json/obras.json')
   const datos = await respuesta.json()
   return datos.find(obra => obra.id === oid)
}

// TRAER PARAMETRO DE LA URL
const traerParametroUrl = (parametro) => {
   const parametroUrl = new URLSearchParams(window.location.search)
   return parseInt(parametroUrl.get(parametro))
}

// GUARDAR VALOR DEL PARAMETRO oid
const oid = traerParametroUrl('oid')

//TRAER NODO DEL HTML
let cardsDetalleContainer = document.getElementById('cards-detalle-container')

// GUARDAR LA OBRA YA PARSEADA
const obraJson = await traerObraJSON(oid)
//AGREGAR CARDS A DETALLE
cardsDetalleContainer.appendChild(renderCardsDetalle(obraJson))

// TRAER NODO BOTON DEL HTML 
const botonAgregar = document.querySelector(".agregar-carrito")

// botonAgregar.addEventListener('click', () => agregarAlCarrito(obraJson))

botonAgregar.onclick = () => {
   const item = obraJson
   miCarrito.push(item)
   guardarEnLS("miCarrito", miCarrito)
   Toastify({
      text: 'La obra se agregó al carrito -> ir',
      duration: 2500,
      destination: 'carrito.html',
      style: {
            background: 'linear-gradient(to right, #43d8ba, #64968c)'
      }
   }).showToast()
}