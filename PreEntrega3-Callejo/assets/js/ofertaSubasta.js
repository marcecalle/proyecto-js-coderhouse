import { obrasSubasta } from "./obras.js"
import { actualizarValorOferta } from "./funciones.js"

const botonOferta = document.querySelectorAll('.subasta__btn')
// RECORRER BOTONES Y AGREGAR EVENTO
botonOferta.forEach(boton => {
   boton.addEventListener('click', (e) => {
      let oferta = parseFloat(e.target.parentNode.children[1].value)
      const obra = obrasSubasta.find(obra => obra.id === e.target.id)
      if(oferta > obra.valorOferta) {
         Toastify({
            text: 'Oferta recibida',
            duration: 3000,
            style: {
                  background: 'linear-gradient(to right, #6ddd41, #6ddd41)'
            }
         }).showToast()
         //? obrasSubasta.valorOferta = oferta
         actualizarValorOferta(obrasSubasta)
         console.log(obrasSubasta);
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