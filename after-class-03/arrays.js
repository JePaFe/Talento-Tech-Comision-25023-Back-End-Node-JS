const nombres = ["Juan", "Maria", "Pedro", "Juana"];

// nombres.forEach((item) => console.log(`El nombre es: ${item}`));
// const listaNombres = nombres.join(', ');
// const algunosNombres = nombres.filter((nombre) => nombre > '3');

// for (const index in nombres) {
//   console.log(index, nombres[index]);
// }

// for (const element of nombres) {
//   if (element > "M") {
//     console.log(element);
//   }
// }

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

const numeros = [100, 45, 50, 10];

// const numerosCambiados = numeros.map((numero) => Number((numero * 1.1).toFixed(2)));

//                                205      10
const suma = numeros.reduce((accumulator, item) => {
  console.log(accumulator, item);
  if (item > 20) {
    return accumulator + item;
  }

  return accumulator;
}, 0);

console.log(suma);
