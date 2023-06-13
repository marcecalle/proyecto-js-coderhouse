// SIMULADOR INTERACTIVO DE UNA SUBASTA DE ILUSTRACIÓNES

// Declaración y asignación de variables
let valorItem = 0
let consentimientoSubasta = prompt('Bienvenido ¿Quiere realizar una oferta? si / no')

// Función de validación por SI o por NO para iniciar la subasta
function ingresoSubasta(consentimiento) {
    if (consentimiento === 'si') {
        return consentimientoSubasta
    } else { 
    alert('Gracias, vuelva pronto.');
    }
}

// función para que el usuario realice una oferta
function ofertaUsuario(valorReferencia) {
    alert('La oferta actual es $' + valorReferencia)
    valorOferta = Number(prompt('Ingrese su oferta por favor.'))
    if (valorOferta > valorReferencia) {
        valorItem = valorOferta
        alert('Su oferta de $' + valorOferta + ' fue aceptada, muchas gracias')
    } else {
        alert('Su oferta de $' + valorOferta + ' no es superadora.')
    }
}

// Ciclo simulador de la validación y la oferta de la subasta
while (ingresoSubasta(consentimientoSubasta) === 'si') {
    ofertaUsuario(valorItem)
    consentimientoSubasta = prompt('¿Quiere realizar otra oferta? si / no')
}