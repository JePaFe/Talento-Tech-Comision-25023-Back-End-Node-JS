// const { saludar } = require("./modulo");
// console.log(saludar("Juan"));

// const cowsay = require("cowsay");

// console.log(
//   cowsay.say({
//     text: "I'm a moooodule",
//     e: "oO",
//     T: "U ",
//   })
// );

// import { say } from "cowsay";
// console.log(say({ text: "grazing in the browser" }));

// import { saludar } from "./modulo.js";
// console.log(saludar("Maria"));

// ---

// const path = require("path");
// console.log(__dirname, path.join(__dirname, "modulo.js"));

// console.log(__dirname);

// ---

// import path from "node:path";
// import fs from "node:fs";

// import { fileURLToPath } from "node:url";
// import { dirname } from "node:path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(import.meta.url);
// console.log(__filename);
// console.log(__dirname);

// const pathProducts = path.join(__dirname, "data", "products.json");

// console.log(pathProducts);

// const products = fs.readFileSync(pathProducts, "utf-8");
// console.log(products);

// ---

import { argv } from "node:process";

console.log(argv.includes('uno'));
