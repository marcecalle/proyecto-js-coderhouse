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
            <p>Valor actual: <strong><span class="valor-oferta">$ ${obras.valorOferta}</span></strong>.-</p>
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
            <p>Valor actual: <span class="valor-oferta">$ ${obras.valorOferta}</span>.-</p>
         </div>
         <div class="card__info">
            <button class="card__btn subasta__btn">
               <span class="material-symbols-outlined">delete</span>
            </button>
         </div>
         `
         return card
}

export function agregarCardsCarrito(obras) {
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
            <p>Valor actual: <span class="valor-oferta">$ ${obras.valorOferta}</span>.-</p>
         </div>
         <div class="card__info">
            <button class="card__btn subasta__btn">
               <span class="material-symbols-outlined">delete</span>
            </button>
         </div>
         `
         return card
}

export const renderValorOferta = (obra, id) => {
   let indice = obra.findIndex(el => el.id === id)
   const valorOferta = document.querySelectorAll('.valor-oferta')[indice]
   let obraId = obra.find(obra => obra.id === id)
   valorOferta.innerText = `$ ${obraId.valorOferta}`
}

export const actualizarValorOferta = (obra, id, valor) => {
   const indiceElemento = obra.findIndex(el => el.id === id)
   const obrasCopia = [...obra]
   obrasCopia[indiceElemento].valorOferta = valor
   obra = obrasCopia
   // return obra
}