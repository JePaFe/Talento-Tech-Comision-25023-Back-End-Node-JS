import { argv } from "process";

// const match = argv.find((arg) => /^products\/\d+$/.test(arg));
// const id = match ? match.split("/")[1] : null;

// console.log(id);

if (argv.length < 4) {
  throw new Error("Faltan argumentos");
}

const [, , metodo, recurso, id, ...params] = argv;

console.log(params);

const baseUrl = "https://fakestoreapi.com/";

if (metodo === "GET" && recurso.startsWith("products")) {
  const url = id ? `${baseUrl}/products/${id}` : `${baseUrl}/products`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

// fetch("https://fakestoreapi.com/products/5", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// if (argv[2] == "GET" && id) {
// if (argv[2] == "GET" && argv[3].startsWith("products/")) {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/${argv[3]}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// } else if (argv[2] == "GET" && argv[3] == "products") {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const [, , metodo, recurso] = argv;

// console.log(metodo, recurso);

// try {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
