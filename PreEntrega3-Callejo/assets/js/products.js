const traerProductos = async () => {
   const respuesta = await fetch('assets/json/obras.json')
   return await respuesta.json()
}
//SIN type="module"
// traerProductos()
// .then(res => {console.log(res)})

// CON type="module"
const productos = await traerProductos()
console.log(productos)