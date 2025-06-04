import { argv } from "process";

console.log(argv);

const [, , method, resource, ...args] = argv;

console.log(method, resource);

console.log(args);

// const args = {
//   title: "Uno",
//   price: 2,
//   category: "Tres",
// };

// const { title, price, category, stock } = args;

// console.log(title, price, category, stock);
