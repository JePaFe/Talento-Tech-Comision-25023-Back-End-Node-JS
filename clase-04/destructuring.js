// const persona = ["Juan", "Perez", 30];

// const [nombre, apellido, edad] = persona;

// console.log(nombre, apellido, edad, persona);

const persona = {
  nombre: "Maria",
  apellido: "Garcia",
  edad: 20,
  titulo: "Ingeniera",
};

const { titulo: unTitulo = "Sin titulo", edad: old } = persona;

console.log(old, unTitulo, persona);
