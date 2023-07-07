//* FUNCIONES

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

function ofertaUsuario(valorReferencia) {
   let ofertaCliente = parseFloat(prompt("La oferta actual es de $" + valorReferencia + "\nIngrese su oferta por favor"));
   if (ofertaCliente > valorReferencia) {
      piezas.valorOferta = ofertaCliente;
      alert("Su oferta de $" + ofertaCliente + " fue aceptada, muchas gracias");
      consentimientoSubasta = 'no'
   } else {
      // alert("Su oferta de $" + ofertaCliente + " no es superadora.");
      consentimientoSubasta = prompt("Su oferta de $" + ofertaCliente + "no es superadora.\n¿Quiere subir su oferta? (si - no)")
   }
}

// Clases

class Pieza {
   constructor(nombre, tipo, valor, operacion) {
      this.nombre      = nombre
      this.tipo        = tipo
      this.valor       = valor
      this.operacion   = operacion
      this.valorOferta = valor
      this.stock       = true
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

piezas.push(new Pieza('venus', 'muñeca', '1000', 'subasta'))
piezas.push(new Pieza('naturalia_2', 'collage', '750', 'venta'))
piezas.push(new Pieza('el_delta', 'tinta', '900', 'subasta'))

//* Switch de selección de operación

let consentimientoSubasta = ''
let entrada = prompt('Para COMPRAS ingrese 1\nPara SUBASTAS ingrese 2\nPara SALIR ingrese "ESC"')

while(entrada != "ESC" ){
   switch (entrada) {
      case "1":
         alert("No hay piezas a la venta en este momento.");
         break;
      case "2":
         let piezaSubasta = piezas.find((elemento) => elemento.operacion === 'subasta')
         consentimientoSubasta = prompt(`Bienvenido a la SUBASTA.\n¿Quiere realizar una oferta por la pieza ${piezaSubasta.nombre}?\n(si - no)`)
         while (ingresoSubasta(consentimientoSubasta) === "si") {
            ofertaUsuario(piezaSubasta.valorOferta);
            // consentimientoSubasta = prompt("¿Quiere subir su oferta? si / no");
         }
         break;
      default:
         alert("Opción invalida")
         break;
   }
   entrada = prompt('Para COMPRAS ingrese 1\nPara SUBASTAS ingrese 2\nPara SALIR ingrese "ESC"')
}