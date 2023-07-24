export class Obra {
   constructor(artista, nombre, img, year, descripcion, valor, operacion, valorOferta) {
      this.artista     = artista
      this.nombre      = nombre
      this.img         = img
      this.year        = year
      this.descripcion = descripcion
      this.valor       = valor
      this.operacion   = operacion
      this.valorOferta = valorOferta
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

obras.push(new Obra('Picasso','Mujer con mandolina', 'assets/img/picasso-01.png', '1910', 'Óleo sobre lienzo. 100 x 73,6 cm', '10000', 'subasta'))
obras.push(new Obra('Picasso', 'Las señoritas de Avignon', 'assets/img/picasso-02.png','1907', 'Óleo sobre lienzo. 243,9 x 233,7 cm', '15000', 'venta'))
obras.push(new Obra('Picasso', 'Retrato de Daniel-Henry Kahnweiler', 'assets/img/picasso-03.png','1910', 'Óleo sobre lienzo 100,4 x 72,4 cm', '12000', 'venta'))
obras.push(new Obra('Dalí', 'La persistencia de la memoria', 'assets/img/dali-01.png', '1931', 'Óleo sobre lienzo 24 x 33 cm', '20000', 'venta'))
obras.push(new Obra('Dalí', 'Las tentaciones de San Antonio', 'assets/img/dali-02.png','1947', 'Óleo sobre lienzo 90 x 119,5 cm', '16000', 'subasta'))
obras.push(new Obra('Dalí', 'Retrato de Pablo Picasso en el siglo XXI', 'assets/img/dali-03.png','1947', 'Óleo sobre lienzo 65,6 x 56 cm', '17000', 'venta'))

export const obrasVenta   = obras.filter((obra) => obra.operacion === 'venta')
// export const obrasSubasta = obras.filter((obra) => obra.operacion === 'subasta')
