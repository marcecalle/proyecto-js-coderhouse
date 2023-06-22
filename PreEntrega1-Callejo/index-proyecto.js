//* SIMULADOR INTERACTIVO DE UNA SUBASTA DE ILUSTRACIÓNES

// Declaración y asignación de variables

let valorItem = 0;
let consentimientoSubasta = prompt(
   "Bienvenido ¿Quiere realizar una oferta? si / no"
);

// Función de validación por SI o por NO para iniciar la subasta

function ingresoSubasta(consentimiento) {
   if (consentimiento === "si") {
      return consentimientoSubasta;
   }
   if (consentimiento === "no") {
      alert("Gracias, vuelva pronto.");
   }
   if (consentimiento !== "si" && consentimiento !== "no") {
      alert("La opción ingresada no es valida.");
   }
}

// función para que el usuario realice una oferta

function ofertaUsuario(valorReferencia) {
   alert("La oferta actual es $" + valorReferencia);
   valorOferta = Number(prompt("Ingrese su oferta por favor."));
   if (valorOferta > valorReferencia) {
      valorItem = valorOferta;
      alert("Su oferta de $" + valorOferta + " fue aceptada, muchas gracias");
   } else {
      alert("Su oferta de $" + valorOferta + " no es superadora.");
   }
}

// Ciclo simulador de la validación y la oferta de la subasta
while (ingresoSubasta(consentimientoSubasta) === "si") {
   ofertaUsuario(valorItem);
   consentimientoSubasta = prompt("¿Quiere realizar otra oferta? si / no");
}

// Actividad N°2

//? Funcion constructora

// function Pieza(nombre, tipo, valor) {
//   this.nombre  = nombre
//   this.tipo    = tipo
//   this.valor   = valor
//   this.stock   = true
//   this.vendida = function() {
//     let venta = prompt('¿la pieza ' + this.nombre + ' fue vendida? indique si / no')
//     if (venta === 'si') {
//       this.stock = false
//       alert('Ya no hay stock de ' + this.nombre)
//     } else {
//       alert('No hay cambios en el stock de ' + this.nombre)
//     }
//   }
// }

// Clases

class Pieza {
   constructor(nombre, tipo, valor) {
      this.nombre  = nombre
      this.tipo    = tipo
      this.valor   = valor
      this.stock   = true
   }
   vendida() {
      let venta = prompt('¿la pieza ' + this.nombre + ' fue vendida? indique si / no')
      if (venta === 'si') {
      this.stock = false
      alert('Ya no hay stock de ' + this.nombre)
      } else {
      alert('No hay cambios en el stock de ' + this.nombre)
      }
   }
}

// Declarar array y asignar objetos de la funcion constructora

const piezas = []

piezas.push(new Pieza('venus', 'muñeca', '1000'))
piezas.push(new Pieza('naturalia_2', 'collage', '750'))
piezas.push(new Pieza('el_delta', 'tinta', '900'))

console.table(piezas)

piezas[0].vendida()

console.table(piezas)