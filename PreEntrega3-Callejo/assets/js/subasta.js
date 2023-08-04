import { obrasSubasta } from "./obras.js"
import { guardarEnLS, extraerDeLS, agregarCardsSubasta, actualizarValorOferta, renderValorOferta } from "./funciones.js"

// TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')

//AGREGAR CARDS A SUBASTA
for(let obra of obrasSubasta) {
   cardsContainer.appendChild(agregarCardsSubasta(obra))
}

//TRAER NODO BOTONES DEL HTML
const botonOferta = document.querySelectorAll('.subasta__btn')
// RECORRER BOTONES Y AGREGAR EVENTO
botonOferta.forEach(boton => {
   boton.addEventListener('click', (e) => {
      let oferta = parseFloat(e.target.parentNode.children[1].value)
      let obra = obrasSubasta.find(obra => obra.id === e.target.id)
      if(oferta > obra.valorOferta) {
         Toastify({
            text: 'Oferta recibida',
            duration: 3000,
            style: {
                  background: 'linear-gradient(to right, #6ddd41, #6ddd41)'
            }
         }).showToast()
         // ACTUALIZAR EL VALOR DE LA PROPIEDAD valorOferta Y RENDERIZAR EL VALOR EN LA CARD
         actualizarValorOferta(obrasSubasta, e.target.id, oferta)
         //! renderValorOferta(obra)
      } else {
         Toastify({
            text: 'La Oferta recibida no supera la oferta actual',
            duration: 3000,
            style: {
                  background: 'linear-gradient(to right, #d04b4b, #d72424)'
            }
         }).showToast()
      }
   })
})