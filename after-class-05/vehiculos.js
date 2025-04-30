class Vehiculo {
  #privado = "Valor";

  _protegida = "Valor";
}

class Auto extends Vehiculo {
  #privado = "Valor";

  constructor(marca, modelo, año, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }
}

const autos = [];

const auto1 = new Auto("Ford", "Fiesta", 2010, "Rojo");
autos.push(auto1);

autos.push(new Auto("Chevrolet", "Onix", 2018, "Azul"));

console.log(autos);

// ---

const flotas = [
  { marca: "Ford", modelo: "Fiesta", año: 2010, color: "Rojo" },
  { marca: "Chevrolet", modelo: "Onix", año: 2018, color: "Azul" },
  { marca: "Toyota", modelo: "Corolla", año: 2020, color: "Blanco" },
  { marca: "Honda", modelo: "Civic", año: 2019, color: "Negro" },
  { marca: "Volkswagen", modelo: "Golf", año: 2017, color: "Gris" },
  { marca: "Nissan", modelo: "Versa", año: 2021, color: "Verde" },
  { marca: "Hyundai", modelo: "Elantra", año: 2022, color: "Rojo" },
  { marca: "Kia", modelo: "Rio", año: 2016, color: "Azul" },
  { marca: "Peugeot", modelo: "208", año: 2015, color: "Blanco" },
  { marca: "Renault", modelo: "Sandero", año: 2014, color: "Blanco" },
];

const remeras = [
  { talle: 1, modelo: 2020, color: "Blanco" },
  { talle: 3, modelo: 2023, color: "Azul" },
  {
    talle: 4,
    modelo: 2019,
    color: "Verde",
    mostrar() {
      console.log(`${this.talle}`);
    },
  },
];

// flotas.forEach((auto) => {
//   if (auto.año > 2018) {
//     console.log(`Marca: ${auto.marca}, año: ${auto.año}`);
//   }
// });

// const autos2018 = flotas.filter((auto) => auto.año > 2018);

// autos2018.forEach((auto) =>
//   console.log(`Marca: ${auto.marca}, año: ${auto.año}`)
// );

// const obtenerColor = (items) => {
//   items.forEach(({ color }) => {
//     color += "!!!!";
//     console.log(color);
//   });
// };

// obtenerColor(remeras);

// console.log(remeras);

// const obtenerColor = (items, colorBuscado) => {
//   let contador = 0;

//   items.forEach(({ color }) => {
//     if (color.toLowerCase() == colorBuscado.toLowerCase()) {
//       contador++;
//     }
//   });

//   console.log(`Hay ${contador} items de color ${colorBuscado}`);
// };

const obtenerColor = (items, colorBuscado) => {
  const filtrados = items.filter(
    ({ color }) => color.toLowerCase() == colorBuscado.toLowerCase()
  );

  console.log(filtrados);

  console.log(`Hay ${filtrados.length} items de color ${colorBuscado}`);
};

obtenerColor(flotas, "rojo");
