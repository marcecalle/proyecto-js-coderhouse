import { agregarCardsDetalle } from "./funciones.js"

// TRAER LAS OBRAS DESDE UN ARCHIVO JSON CON FETCH
const traerProducto = async (oid) => {
   const respuesta = await fetch('assets/json/obras.json')
   const datos = await respuesta.json()
   return datos.find(obra => obra.id === oid)
}

// GUARDAR LAS OBRAS YA PARSEADAS
const obrasJSON = await traerProducto()
console.log(obrasJSON)
//TRAER NODO DEL HTML
// let cardsContainer = document.getElementById('cards-container')

const traerParametroURL = (parametro) => {
   const parametroUrl = new URLSearchParams(windows.location.search)
   console.log(parametroUrl)
   console.log(parametroUrl.get('oid'))
}

//AGREGAR CARDS AL DETALLE

console.log(obrasJSON) 