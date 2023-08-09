import { renderCardsDetalle } from "./funciones.js"

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
let cardsContainer = document.getElementById('cards-container')

// GUARDAR LA OBRA YA PARSEADA
const obraJson = await traerObraJSON(oid)

//AGREGAR CARDS A DETALLE
cardsContainer.appendChild(renderCardsDetalle(obraJson))