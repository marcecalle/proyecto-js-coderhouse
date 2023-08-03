export const guardarEnLS = (clave, valor) => localStorage.setItem(clave, JSON.stringify(valor))
export const extraerDeLS = (clave) => JSON.parse(localStorage.getItem(clave))

export function agregarCardsVenta(obras) {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <div>
            <a href="detalleObra.html?oid=${obras.id}">   
               <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
            </a>
         </div>
         <div class="card__content">
            <h3>${obras.nombre}</h3>
            <p>${obras.descripcion}</p>
            <h3>$ ${obras.valor}.-</h3>
         </div>
         <div class="card__info">
            <div>
               <a class="card__btn add-cart" href="#">
                  <span class="material-symbols-outlined">add_shopping_cart</span>
               </a>
            </div>
         </div>
         `
         return card
}

export function agregarCardsSubasta(obras) {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <div>
            <a href="detalleObra.html?oid=${obras.id}">   
               <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
            </a>
         </div>
         <div class="card__content">
            <h3>${obras.nombre}</h3>
            <p>${obras.descripcion}</p>
            <hr>
            <p>Valor actual: <span id="valor-oferta">$ ${obras.valorOferta}</span>.-</p>
         </div>
         <div class="card__info">
            <div>
               <p><em>La oferta debe ser mayor al valor actual.</em></p>
               <input type="number" placeholder="Oferta">
               <button id="${obras.id}" class="subasta__btn">Submit</button>
            </div>
         </div>
         `
         return card
}

export function agregarCardsDetalle(obras) {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <div>
            <a href="detalleObra.html?oid=${obras.id}">   
               <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
            </a>
         </div>
         <div class="card__content">
            <h3>${obras.nombre}</h3>
            <p>${obras.descripcion}</p>
            <hr>
            <p>Valor actual: <strong>$ ${obras.valor}</strong>.-</p>
         </div>
         <div class="card__info">
            <button class="card__btn subasta__btn">
               <span class="material-symbols-outlined">delete</span>
            </button>
         </div>
         `
         return card
}

export const renderValorOferta = (obra) => {
   let nuevoValor = document.querySelector('#valor-oferta')
   nuevoValor.innerHTML =
      `
      <span id="valor-oferta">$ ${obra.valorOferta}</span>
      `
}

// export const actualizarValorOfertaObra = (obras, id) => {
//    for (const obra of obras) {
//       obras.find( obra => obra.id === id )
      
//    }
// }