const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("Tarea asincrónica completada.");
    } else {
      reject(new Error("Tarea asincrónica fallida."));
    }
  }, 1000);
});

promesa
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Siempre se ejecuta");
  });
