// setTimeout(() => {
//   console.log("5 segundos");
// }, 5000);

// setTimeout(() => {
//   console.log("1 segundos");
// }, 1000);

// ---

// function tareaPesadaNoBloqueante() {
//     setTimeout(() => {
//         console.log('Tarea 2 pesada (no bloqueante) terminada');
//     }, 3000); // Simula el retraso sin bloquear el event loop
// }

// function tareaPesadaAsync() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Tarea pesada (async) terminada');
//         }, 5000);
//     });
// }

// async function main() {
//     console.log('Inicio del programa');
//     const resultado = await tareaPesadaAsync();
//     console.log(resultado);
//     console.log('Fin del programa');
// }

// main();
// tareaPesadaNoBloqueante();

// ---

const persona = ["Juan", "Perez"];

persona[2] = 33;

function cambiar(array) {
  array[0] = "Juan Pablo";
  console.log(array);
}

// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
// };

// function cambiar(object) {
//   object.nombre = "Juan Pablo";
// }

console.log(persona);
// const persona2 = [...persona];
const persona2 = persona.map((el) => el);
cambiar([...persona]);
console.log(persona, persona2);
