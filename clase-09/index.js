import express from "express";
const app = express();

// http://localhost:3000/

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next(); // Pasa el control al siguiente middleware o ruta
  //   res.statusCode = 403;
  //   res.send("No tiene permiso");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/productos", (req, res) => {
  res.send("Bienvenidos a la página de productos");
});

app.get("/productos/14", (req, res) => {
  res.send("Estás viendo el producto N° 14.");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
