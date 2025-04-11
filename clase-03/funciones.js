// function saludar(nombre) {
//   console.log("Hola, " + nombre);
// }

// saludar('Pedro');

// function sumar(num1, num2) {
//   const suma = num1 + num2;
//   console.log("La suma es: " + suma);
// }

// const sumar = function (num1, num2) {
//   const resultado = num1 + num2;
//   return resultado;
//   console.log("No se ejecuta");
// };

// const result = sumar(6, 2);
// console.log("La suma es: " + result);

// console.log("La suma es: " + sumar(8, 3));

// ---

// function saludar(nombre) {
//   return "Hola, " + nombre;
// }

// const saludar = function (nombre) {
//   return "Hola, " + nombre;
// };

// const saludar = nombre => "Hola, " + nombre;

// const mensaje = saludar("Juan");
// console.log(mensaje);

// ---

// function sumar(num1, num2) {
//   const resultado = num1 + num2;
//   return resultado;
// }

// const sumar = function (num1, num2) {
//   const resultado = num1 + num2;
//   return resultado;
// };

// const sumar = (num1, num2) => {
//   const resultado = num1 + num2;
//   return resultado;
// };

const sumar = (num1, num2) => num1 + num2;

console.log("La suma es: " + sumar(8, 3));
