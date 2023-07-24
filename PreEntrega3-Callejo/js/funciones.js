export const guardarObrasLS = (clave, valor) => localStorage.setItem(clave, JSON.stringify(valor))
export const extraerObrasLS = (clave) => JSON.parse(localStorage.getItem(clave))

export function agregarCardsVenta(obras) {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
         <div class="card__content">
            <h3>${obras.nombre}</h3>
            <p>${obras.descripcion}</p>
            <h3>$ ${obras.valor}.-</h3>
         </div>
         <div class="card__info">
            <div>
               <a class="card__btn add-cart" href="#">
               <span class="material-symbols-outlined">visibility</span>
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
         <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
         <div class="card__content">
            <h3>${obras.nombre}</h3>
            <p>${obras.descripcion}</p>
            <hr>
            <p>Valor actual: <strong>$ ${obras.valor}</strong>.-</p>
         </div>
         <div class="card__info">
            <div>
               <p><em>La oferta debe ser mayor al valor actual.</em></p>
               <input type="number" placeholder="Oferta">
               <button class="subasta__btn">Submit</button>
            </div>
         </div>
         `
         return card
}