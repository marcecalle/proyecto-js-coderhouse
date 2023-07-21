export const guardarObrasLS = (clave, valor) => localStorage.setItem(clave, JSON.stringify(valor))
export const extraerObrasLS = (clave) => JSON.parse(localStorage.getItem(clave))

export function agregarCardsAlIndex(obras) {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <img src="${obras.img}" alt="${obras.descripcion}" class="card__image">
            <div class="card__content">
               <h3>${obras.nombre}</h3>
               <p>${obras.descripcion}</p>
            </div>
            <div class="card__info">
               <div>
                  <button class="card__btn add-cart" type="submit">
                     <span class="material-symbols-outlined">add_shopping_cart</span>
                  </button>
               </div>
            </div>
         `
         return card
}