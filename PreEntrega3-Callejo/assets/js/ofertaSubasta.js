const botonOferta = document.querySelector('.subasta__btn')
botonOferta.addEventListener('click', () => {
   Toastify({
      text: 'Oferta recibida',
      duration: 3000,
      style: {
         background: 'linear-gradient(to right, #d04b4b, #d72424)'
      }
   }).showToast()
})