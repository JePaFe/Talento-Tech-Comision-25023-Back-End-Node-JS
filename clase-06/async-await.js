function taskAsync() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        resolve("Tarea asincrónica completada.");
      } else {
        reject(new Error("Tarea asincrónica fallida."));
      }
    }, 1000);
  });
}

// taskAsync()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const main = async () => {
  try {
    let response = await taskAsync();
    console.log(response);

    response = await taskAsync();
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Siempre se ejecuta");
  }
};

main();
