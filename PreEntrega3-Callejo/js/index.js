let alCarrito = document.querySelector('.add-cart')

alCarrito.addEventListener('click', agregarAlCarrito)

let cardsContainer = document.getElementById('cards-container')

function agregarAlCarrito() {
   let card = document.createElement('div')
   card.classList.add('card')
   card.innerHTML = 
         `
         <img src="assets/img/dali-02.png" alt="" class="card__image">
            <div class="card__content">
               <h3>Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur voluptatum sit maxime itaque ullam ex quos totam aspernatur, sed accusamus aut sapiente consectetur.</p>
            </div>
            <div class="card__info">
               <div>
                  <button class="card__btn add-cart" type="submit">
                     <span class="material-symbols-outlined">add_shopping_cart</span>
                  </button>
               </div>
            </div>
         `
         cardsContainer.appendChild(card)
}
