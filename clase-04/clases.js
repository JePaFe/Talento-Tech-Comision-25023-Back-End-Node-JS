class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = 0;
  }

  mostrar(simbolo) {
    return `El producto ${this.nombre} vale $ ${this.precio} ${simbolo}`;
  }
}

const producto1 = new Producto("Prod 1", 100);
const producto2 = new Producto("Prod 2", 150);

const texto = producto1.mostrar("!!!");
console.log(texto);

// console.log(producto1);
// console.log(producto2);
