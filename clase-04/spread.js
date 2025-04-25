// const num1 = [1, 2, 3, 44];
// const num2 = [4, 5, 6, 44];

// const num3 = [...num2, ...num1];

// console.log(num3);

// ---

const persona = {
  nombre: "Maria",
  apellido: "Garcia",
  sueldo: 1500,
  id: 1,
};

const profesion = {
  titulo: "Ingenieria",
  sueldo: 2000,
};

const maria = { ...persona, ...profesion };

console.log(maria);
