// function calculadora(operacion) {
//   return function (num1, num2) {
//     if (operacion == "sumar") {
//       console.log("suma", num1 + num2);
//     } else if (operacion == "restar") {
//       console.log("resta", num1 - num2);
//     }
//   };
// }

// const sumar = calculadora("sumar");
// sumar(2, 4);

// const restar = calculadora("restar");
// restar(2, 4);

// ---

function sumar(num1, num2) {
  console.log("suma", num1 + num2);
}

function restar(num1, num2) {
  console.log("resta", num1 - num2);
}

let multiplicar = function (num1, num2) {
  console.log("multiplicar", num1 * num2);
};

function calculadora(num1, num2, operacion) {
  operacion(num1, num2);
}

calculadora(3, 6, sumar);
calculadora(3, 6, restar);

calculadora(4, 5, (a, b) => console.log("multiplicar", a * b));
