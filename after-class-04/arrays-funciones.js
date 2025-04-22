const funciones = [];

const saludar = () => console.log("Hola");
const saludarNombre = (nombre) => console.log(`Hola, ${nombre}`);

funciones.push(saludar);
funciones.push(saludarNombre);

funciones.push((nombre) => `Hola, ${nombre}`);

funciones[0]();
funciones[1]("Juan");

const mensaje = funciones[2]("Maria");
console.log(mensaje);

console.log(funciones);
