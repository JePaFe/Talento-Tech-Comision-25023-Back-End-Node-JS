console.log("1");

function mostrar(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

console.log("2");

mostrar(function () {
  console.log("3");
});

console.log("4");

// 1, 2, 4, 3
