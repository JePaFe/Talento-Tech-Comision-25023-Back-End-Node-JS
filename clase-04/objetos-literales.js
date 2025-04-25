const noticia = {
  id: 3,
  titulo: "Noticia 1",
  publicada: false,
  etiquetas: ["serie", "deporte", "cine"],
  categorias: [{ nombre: "Mundo" }, { nombre: "Peliculas" }],
};

const persona = {
  nombre: "Juan",
  //   apellido: "Garcia",
  nombreCompleto() {
    console.log(`${this.nombre} ${this.apellido}`);
  },
  direccion: {
    calle: "Rivadavia",
    numero: 123,
  },
};

// persona.nombre = "Juan Pablo";
persona.apellido = "Perez";
// delete persona.direccion;

// // console.log(persona.nombre, noticia['titulo']);

// console.log(persona, JSON.stringify(persona));

persona.nombreCompleto();
