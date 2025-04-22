const precios = [100, 50, 12.5, 75, 150];

// function calcular(numero) {
//   return numero * 1.21;
// }

// const calcular = function (numero) {
//   return numero * 1.21;
// };

// const calcular = numero => numero * 1.21;

const preciosConIVA = precios.map((numero) => numero * 1.21);

// const preciosConIVA = precios.map(function calcular(numero) {
//   return numero * 1.21;
// });

console.log(preciosConIVA);

// preciosConIVA.forEach((precio) =>
//   console.log(`El precio es $ ${precio}.- IVA incluido`)
// );

// ---

// const preciosConIVA = [];

// precios.forEach((precio) => {
//   precio *= 1.21;

//   preciosConIVA.push(precio);

//   console.log(`El precio es $ ${precio}.- IVA incluido`);
// });

// console.log(preciosConIVA);
