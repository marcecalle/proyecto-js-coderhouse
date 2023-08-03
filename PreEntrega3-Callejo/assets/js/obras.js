export class Obra {
   constructor(id, artista, nombre, img, year, descripcion, valor, operacion) {
      this.id          = id
      this.artista     = artista
      this.nombre      = nombre
      this.img         = img
      this.year        = year
      this.descripcion = descripcion
      this.valor       = valor
      this.operacion   = operacion
      this.valorOferta = valor
      this.stock       = true
   }
   // vendida() {
   //    let venta = prompt('¿la pieza ' + this.nombre + ' fue vendida? indique si / no')
   //    if (venta === 'si') {
   //    this.stock = false
   //    alert('Ya no hay stock de ' + this.nombre)
   //    } else {
   //    alert('No hay cambios en el stock de ' + this.nombre)
   //    }
   // }
}

export const obras = []

obras.push(new Obra('1', 'Picasso','Mujer con mandolina', 'assets/img/picasso-01.jpg', '1910', 'Óleo sobre lienzo. 100 x 73,6 cm', '10000', 'subasta'))
obras.push(new Obra('2', 'Picasso', 'Las señoritas de Avignon', 'assets/img/picasso-02.jpg','1907', 'Óleo sobre lienzo. 243,9 x 233,7 cm', '15000', 'venta'))
obras.push(new Obra('3', 'Picasso', 'Retrato de Daniel-Henry Kahnweiler', 'assets/img/picasso-03.jpg','1910', 'Óleo sobre lienzo 100,4 x 72,4 cm', '12000', 'venta'))
obras.push(new Obra('4', 'Dalí', 'La persistencia de la memoria', 'assets/img/dali-01.jpg', '1931', 'Óleo sobre lienzo 24 x 33 cm', '20000', 'venta'))
obras.push(new Obra('5', 'Dalí', 'Las tentaciones de San Antonio', 'assets/img/dali-02.jpg','1947', 'Óleo sobre lienzo 90 x 119,5 cm', '16000', 'subasta'))
obras.push(new Obra('6', 'Dalí', 'Retrato de Pablo Picasso en el siglo XXI', 'assets/img/dali-03.jpg','1947', 'Óleo sobre lienzo 65,6 x 56 cm', '17000', 'venta'))

// FILTRAR POR OBRAS A LA VENTA
export const obrasVenta   = obras.filter((obra) => obra.operacion === 'venta')
// FILTRAR POR OBRAS A SUBASTAR
export const obrasSubasta = obras.filter((obra) => obra.operacion === 'subasta')
