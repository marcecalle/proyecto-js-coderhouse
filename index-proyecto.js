// SIMULADOR INTERACTIVO

// SUBASTA DE ILUSTRACIÓN

// Declaración y asignación de variables
let valorItem = 0
let ofertaUsuario

// Validación de ingreso al simulador de subasta
// let consentimientoSubasta = prompt('¿Quiere iniciar la subasta? si / no')
// while (consentimientoSubasta === 'si') {
//     console.log('El valor actual es de: $ ' + valorItem);
//     ofertaUsuario = Number(prompt('Ingrese su oferta por favor'))
//     if (ofertaUsuario > valorItem) {
//         valorItem = ofertaUsuario
//         console.log('Su oferta de $ ' + ofertaUsuario + ' fue aceptada, muchas gracias')
//         // consentimientoSubasta = prompt('¿Desea realizar otra oferta? si / no')
//     } else {
//         console.log('Su oferta de $ ' + ofertaUsuario + ' no es superadora.')
//     }
//     consentimientoSubasta = prompt('¿Desea realizar otra oferta? si / no')
// }

let consentimientoSubasta = prompt('¿Quiere iniciar la subasta? si / no')

function ingresoSubasta(consentimiento) {
    if (consentimiento === 'si') {
        ofertaUsuario = Number(prompt('Ingrese su oferta por favor.'))
        return ofertaUsuario
    } else { 
        console.log('Gracias por su visita.');
    }
}

ingresoSubasta(consentimientoSubasta)