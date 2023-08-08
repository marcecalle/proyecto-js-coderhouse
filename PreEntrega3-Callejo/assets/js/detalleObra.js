// import { agregarCardsDetalle } from "./funciones.js"

// TRAER LAS OBRAS DESDE UN ARCHIVO JSON CON FETCH
const traerObraJSON = async (oid) => {
   const respuesta = await fetch('assets/json/obras.json')
   const datos = await respuesta.json()
   return datos.find(obra => obra.id === oid)
}

// TRAER PARAMETRO DE LA URL
const traerParametroUrl = (parametro) => {
   const parametroUrl = new URLSearchParams(windows.location.search)
   console.log(parametroUrl)
   console.log(parametroUrl.get('oid'))
}

//TRAER NODO DEL HTML
let cardsContainer = document.getElementById('cards-container')

// GUARDAR LAS OBRAS YA PARSEADAS
const obraJson = await traerObraJSON()
console.log(obraJson)



//AGREGAR CARDS AL DETALLE
